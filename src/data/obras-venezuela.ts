/**
 * Obras ubicadas en Venezuela para el mapa interactivo.
 * `estadoMapa` debe coincidir con el nombre del estado en el GeoJSON (Natural Earth),
 * salvo acentos: se compara normalizado. Si se omite, se usa `lugar`.
 */
export type ObraNacional = {
	id: string;
	titulo: string;
	lugar: string;
	/** Nombre del estado en el mapa (propiedad `name` del GeoJSON), ej. "Zulia", "Distrito Capital" */
	estadoMapa?: string;
	descripcion: string;
	imagen: string;
	lat: number;
	lng: number;
};

export const obrasVenezuela: ObraNacional[] = [
	{
		id: 'caracas',
		titulo: 'Ejemplo — Caracas',
		lugar: 'Distrito Capital',
		estadoMapa: 'Distrito Capital',
		descripcion: 'Sustituye este texto y la imagen por datos reales de la obra.',
		imagen: '/Fotos/1.png',
		lat: 10.4806,
		lng: -66.9036,
	},
	{
		id: 'maracaibo',
		titulo: 'Ejemplo — Maracaibo',
		lugar: 'Zulia',
		estadoMapa: 'Zulia',
		descripcion: 'Añade más entradas en obras-venezuela.ts con lat/lng del lugar.',
		imagen: '/Fotos/2.png',
		lat: 10.6427,
		lng: -71.6125,
	},
	{
		id: 'cabimas',
		titulo: 'Ejemplo — segunda pieza en Zulia',
		lugar: 'Cabimas, Zulia',
		estadoMapa: 'Zulia',
		descripcion: 'Misma `estadoMapa` que otra obra: el mapa hace zoom al estado y aquí eliges la escultura.',
		imagen: '/Fotos/3.png',
		lat: 10.4297,
		lng: -71.4397,
	},
	{
		id: 'merida',
		titulo: 'Ejemplo — Mérida',
		lugar: 'Mérida',
		estadoMapa: 'Mérida',
		descripcion: 'Las coordenadas pueden tomarse de Google Maps (clic derecho en el mapa).',
		imagen: '/Fotos/4.png',
		lat: 8.5989,
		lng: -71.1403,
	},
	{
		id: 'barcelona',
		titulo: 'Ejemplo — Barcelona',
		lugar: 'Anzoátegui',
		estadoMapa: 'Anzoátegui',
		descripcion: 'Si falta la imagen, el panel muestra un marcador de color.',
		imagen: '/Fotos/1.png',
		lat: 10.1326,
		lng: -64.6818,
	},
];
