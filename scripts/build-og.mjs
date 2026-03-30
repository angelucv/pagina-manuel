/**
 * Genera public/og-social.png (1200×630) para Open Graph / WhatsApp.
 * El logo encaja en una "caja segura" (~520×310) centrada: WhatsApp recorta a
 * miniatura casi cuadrada; si el logo llena todo el lienzo, se corta el texto.
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'public', 'og-social.png');
const logoPath = join(root, 'public', 'logo-marca-apilada.png');

const W = 1200;
const H = 630;
/** Caja máxima del logo (margen respecto al recorte típico de apps). */
const SAFE_W = 520;
const SAFE_H = 310;

async function main() {
	const base = sharp({
		create: {
			width: W,
			height: H,
			channels: 3,
			background: { r: 10, g: 10, b: 10 },
		},
	});

	if (existsSync(logoPath)) {
		let pipeline = sharp(logoPath).ensureAlpha();
		try {
			pipeline = pipeline.trim({ threshold: 12 });
		} catch {
			/* ignorar */
		}

		const logoBuf = await pipeline
			.resize({
				width: SAFE_W,
				height: SAFE_H,
				fit: 'inside',
				withoutEnlargement: true,
			})
			.png()
			.toBuffer();

		const meta = await sharp(logoBuf).metadata();
		const lw = meta.width ?? SAFE_W;
		const lh = meta.height ?? SAFE_H;
		const left = Math.max(0, Math.round((W - lw) / 2));
		const top = Math.max(0, Math.round((H - lh) / 2));

		await base.composite([{ input: logoBuf, left, top }]).png().toFile(outPath);
	} else {
		const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <text x="600" y="248" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="40" fill="#737373">MANUEL</text>
  <text x="600" y="328" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="78" font-weight="600" fill="#f5f5f5">Parada</text>
  <text x="600" y="398" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="24" letter-spacing="0.38em" fill="#a3a3a3">ESCULTOR</text>
</svg>`;
		await sharp(Buffer.from(svg)).png().toFile(outPath);
	}

	console.log('Written', outPath);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
