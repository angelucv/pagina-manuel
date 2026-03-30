/**
 * Genera public/og-social.png (1200×630) para WhatsApp / Open Graph.
 * Recorta márgenes del PNG si puede, escala el logo grande (~85 % del lienzo) y centra.
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
/** Máximo que ocupa el logo respecto al lienzo (deja margen para recortes de WhatsApp). */
const LOGO_MAX_W = Math.round(W * 0.88);
const LOGO_MAX_H = Math.round(H * 0.82);

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
			/* algunos PNG sin alpha / trim falla */
		}

		const logoBuf = await pipeline
			.resize({
				width: LOGO_MAX_W,
				height: LOGO_MAX_H,
				fit: 'inside',
				withoutEnlargement: false,
			})
			.png()
			.toBuffer();

		await base
			.composite([{ input: logoBuf, gravity: 'center' }])
			.png()
			.toFile(outPath);
	} else {
		const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a0a0a"/>
  <text x="600" y="220" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="52" fill="#737373">MANUEL</text>
  <text x="600" y="340" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="108" font-weight="600" fill="#f5f5f5">Parada</text>
  <text x="600" y="430" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="32" letter-spacing="0.4em" fill="#a3a3a3">ESCULTOR</text>
</svg>`;
		await sharp(Buffer.from(svg)).png().toFile(outPath);
	}

	console.log('Written', outPath);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
