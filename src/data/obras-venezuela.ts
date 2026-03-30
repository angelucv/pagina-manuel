/**
 * Obras ubicadas en Venezuela para el mapa interactivo.
 * `estadoMapa` debe coincidir con `properties.name` del GeoJSON (Natural Earth).
 *
 * Referencias de coordenadas (aprox.): iglesia del Rosario Baruta (Wikipedia / GeoHack);
 * Iglesia de Manzanares Baruta (Wikimapia); Ciudad Universitaria FHE–Psicología (mapas UCV);
 * Tanaguarena / plaza Las Palmeras (litoral Vargas); casco de La Guaira / Plaza Vargas (guías urbanas).
 * Ajustar con GPS en sitio si hace falta precisión de metro.
 */
export type ObraNacional = {
	id: string;
	titulo: string;
	lugar: string;
	/** Nombre del estado en el mapa (propiedad `name` del GeoJSON) */
	estadoMapa?: string;
	descripcion: string;
	imagen: string;
	lat: number;
	lng: number;
};

export const obrasVenezuela: ObraNacional[] = [
	{
		id: 'baruta-santa-madre-rendiles',
		titulo: 'Santa Madre Carmen Rendiles',
		lugar: 'Iglesia Nuestra Señora del Rosario, casco histórico de Baruta (Miranda).',
		estadoMapa: 'Miranda',
		descripcion:
			'Escultura de cuerpo completo en la entrada del templo. Develada en 2025 tras la canonización. Coordenadas referidas al eje de la iglesia (plaza Bolívar de Baruta).',
		imagen: '/Fotos/1.png',
		lat: 10.432222,
		lng: -66.873889,
	},
	{
		id: 'baruta-san-jose-gregorio',
		titulo: 'San José Gregorio Hernández',
		lugar: 'Baruta: Bulevar Córdova, Plaza Bolívar del casco e Iglesia del Rosario (Miranda).',
		estadoMapa: 'Miranda',
		descripcion:
			'Imagen de cuerpo completo vinculada a actos en el casco de Baruta (2025). Marcador desplazado respecto al de Santa Madre para distinguir las dos piezas en el mapa.',
		imagen: '/Fotos/2.png',
		lat: 10.43155,
		lng: -66.87515,
	},
	{
		id: 'baruta-iglesia-manzanares',
		titulo: 'Iglesia de Manzanares',
		lugar: 'Urbanización Manzanares, municipio Baruta (Miranda).',
		estadoMapa: 'Miranda',
		descripcion:
			'Obra escultórica en el templo de Manzanares, dentro del mismo municipio Baruta. Punto según fachada aproximada (Wikimapia); conviene validar con el archivo del taller.',
		imagen: '/Fotos/3.png',
		lat: 10.433056,
		lng: -66.885833,
	},
	{
		id: 'distrito-capital-busto-perez-enciso',
		titulo: 'Busto de Guillermo Pérez Enciso',
		lugar: 'Escuela de Psicología, Ciudad Universitaria, UCV, Caracas.',
		estadoMapa: 'Distrito Capital',
		descripcion:
			'Homenaje al fundador de los estudios de psicología en Venezuela (2008). Marcador en zona Facultad de Humanidades y Educación / Pasillo de Ingeniería.',
		imagen: '/Fotos/4.png',
		lat: 10.491014,
		lng: -66.889133,
	},
	{
		id: 'vargas-monumento-orion',
		titulo: 'Monumento a Orión',
		lugar: 'Plaza Las Palmeras, urbanización Tanaguarena, La Guaira (Vargas).',
		estadoMapa: 'Vargas',
		descripcion:
			'Monumento al perro héroe de la tragedia de 1999. Resina y fibra de vidrio; inauguración 2024. Coordenadas en el eje costero de Tanaguarena (Caraballeda).',
		imagen: '/Fotos/5.png',
		lat: 10.61185,
		lng: -66.81835,
	},
	{
		id: 'vargas-casco-la-guaira',
		titulo: 'Obra en casco histórico de La Guaira',
		lugar: 'Casco colonial, La Guaira (Vargas).',
		estadoMapa: 'Vargas',
		descripcion:
			'Segunda ubicación en el litoral en inventario del sitio: escultura(s) en el casco. Punto de referencia zona Plaza Vargas / entorno colonial; precisar título y sede exacta con documentación del taller.',
		imagen: '/Fotos/6.png',
		lat: 10.59965,
		lng: -66.93425,
	},
];
