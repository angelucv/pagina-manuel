/**
 * Genera public/og-social.png (1200×630) para WhatsApp / Open Graph.
 * Si existe public/logo-marca-apilada.png, la compone centrada y reducida;
 * si no, usa tipografía vectorial sobre fondo oscuro.
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
		const logoBuf = await sharp(logoPath)
			.resize({
				width: 400,
				height: 320,
				fit: 'inside',
				withoutEnlargement: true,
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
  <text x="600" y="248" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="34" fill="#737373">MANUEL</text>
  <text x="600" y="338" text-anchor="middle" font-family="Georgia,Times New Roman,serif" font-size="62" font-weight="600" fill="#f5f5f5">Parada</text>
  <text x="600" y="408" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="21" letter-spacing="0.42em" fill="#a3a3a3">ESCULTOR</text>
</svg>`;
		await sharp(Buffer.from(svg)).png().toFile(outPath);
	}

	console.log('Written', outPath);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
