/**
 * Descarga las últimas publicaciones de Instagram vía Graph API (Meta).
 * Requiere cuenta Instagram Profesional (creador/empresa) vinculada a una página de Facebook
 * y un token con permisos instagram_basic o equivalentes según tu app.
 *
 * Variables de entorno (p. ej. en .env — no subir el token al repositorio):
 *   INSTAGRAM_ACCESS_TOKEN  — token de acceso (idealmente larga duración)
 *   INSTAGRAM_USER_ID       — ID numérico del usuario de Instagram (no el @usuario)
 *
 * Sin variables: no hace nada y se mantiene src/data/instagram-posts.json tal cual.
 *
 * @see https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media
 */

import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'src', 'data', 'instagram-posts.json');

/** Carga opcional de .env en la raíz (CI suele inyectar variables sin archivo). */
function loadLocalEnv() {
	const envPath = join(root, '.env');
	if (!existsSync(envPath)) return;
	for (const line of readFileSync(envPath, 'utf8').split('\n')) {
		const t = line.trim();
		if (!t || t.startsWith('#')) continue;
		const i = t.indexOf('=');
		if (i === -1) continue;
		const k = t.slice(0, i).trim();
		let v = t.slice(i + 1).trim();
		if (
			(v.startsWith('"') && v.endsWith('"')) ||
			(v.startsWith("'") && v.endsWith("'"))
		) {
			v = v.slice(1, -1);
		}
		if (process.env[k] === undefined) process.env[k] = v;
	}
}

loadLocalEnv();

const API_VERSION = 'v21.0';

function pickImage(item) {
	if (item.media_url) return item.media_url;
	if (item.thumbnail_url) return item.thumbnail_url;
	const first = item.children?.data?.[0];
	if (first?.media_url) return first.media_url;
	if (first?.thumbnail_url) return first.thumbnail_url;
	return '';
}

async function main() {
	const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
	const userId = process.env.INSTAGRAM_USER_ID?.trim();

	if (!token || !userId) {
		console.log(
			'fetch-instagram-posts: sin INSTAGRAM_ACCESS_TOKEN o INSTAGRAM_USER_ID — no se actualiza el JSON (el sitio usa el archivo ya guardado).',
		);
		return;
	}

	const fields = [
		'id',
		'caption',
		'media_type',
		'media_url',
		'permalink',
		'thumbnail_url',
		'timestamp',
		'children{media_url,media_type,thumbnail_url}',
	].join(',');

	const url = new URL(`https://graph.facebook.com/${API_VERSION}/${userId}/media`);
	url.searchParams.set('fields', fields);
	url.searchParams.set('limit', '12');
	url.searchParams.set('access_token', token);

	let res;
	try {
		res = await fetch(url);
	} catch (e) {
		console.warn('fetch-instagram-posts: error de red', e?.message || e);
		return;
	}

	const body = await res.text();
	let data;
	try {
		data = JSON.parse(body);
	} catch {
		console.warn('fetch-instagram-posts: respuesta no JSON', body.slice(0, 200));
		return;
	}

	if (data.error) {
		console.warn('fetch-instagram-posts: API', data.error.message || JSON.stringify(data.error));
		return;
	}

	const raw = Array.isArray(data.data) ? data.data : [];
	const posts = raw.map((item) => ({
		id: String(item.id),
		permalink: item.permalink || '',
		caption: String(item.caption || '').trim(),
		imageUrl: pickImage(item),
		publishedAt: item.timestamp || '',
		mediaType: item.media_type || 'IMAGE',
	}));

	writeFileSync(outPath, JSON.stringify(posts, null, '\t') + '\n', 'utf8');
	console.log(`fetch-instagram-posts: guardadas ${posts.length} publicaciones en src/data/instagram-posts.json`);
}

main().catch((e) => {
	console.warn('fetch-instagram-posts: fallo inesperado', e);
	process.exitCode = 0;
});
