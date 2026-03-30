/**
 * Listado de obras públicas e institucionales atribuidas o documentadas en la trayectoria del artista.
 * Las fechas y ubicaciones refieren la información aportada para el sitio; conviene validar ante fuentes oficiales.
 */
export type ObraCatalogo = {
	titulo: string;
	tipo?: string;
	año?: string;
	lugar: string;
	detalles?: string;
};

export type CategoriaObras = {
	id: string;
	titulo: string;
	intro?: string;
	items: ObraCatalogo[];
};

export const categoriasObras: CategoriaObras[] = [
	{
		id: 'arte-sacro',
		titulo: 'Arte sacro y devoción en espacio urbano',
		intro:
			'Colaboraciones con la Iglesia Católica y alcaldías en torno a la iconografía religiosa reciente en Caracas y Miranda.',
		items: [
			{
				titulo: 'Santa Madre Carmen Rendiles',
				tipo: 'Escultura de cuerpo completo',
				año: '2025',
				lugar: 'Entrada de la Iglesia Nuestra Señora del Rosario, casco histórico de Baruta (Miranda).',
				detalles: 'Altura aprox. 1,70 m. Develada en octubre de 2025, tras la canonización. Ejecución en torno a tres meses.',
			},
			{
				titulo: 'San José Gregorio Hernández',
				tipo: 'Imagen / estatua de cuerpo completo',
				año: '2025',
				lugar:
					'Baruta: Bulevar Córdova frente a la Iglesia del Rosario; Plaza Bolívar del casco; templo del Rosario (según versiones y actos de develación).',
				detalles:
					'Contexto del aniversario de su fallecimiento y devoción nacional al «Médico de los pobres». Actos con autoridades municipales y eclesiásticas.',
			},
			{
				titulo: 'Iglesia de Manzanares',
				tipo: 'Escultura / imagen devocional',
				lugar: 'Templo de la urbanización Manzanares, municipio Baruta (Miranda).',
				detalles:
					'Incluida en el mapa del sitio con el casco baruteño y el litoral. Completar año y denominación exacta de la pieza con el archivo del taller.',
			},
		],
	},
	{
		id: 'monumentos-civicos',
		titulo: 'Monumentos cívicos y memoria colectiva',
		intro: 'Obras vinculadas a la memoria histórica reciente y al heroísmo en el espacio público.',
		items: [
			{
				titulo: 'Monumento a Orión',
				tipo: 'Monumento escultórico',
				año: '2024',
				lugar: 'Plaza Las Palmeras, Tanaguarena, La Guaira.',
				detalles:
					'En homenaje al perro que rescató decenas de personas en la tragedia de Vargas (1999). Materiales: resina y fibra de vidrio; altura aprox. 2,05 m; base de roca natural alusiva al deslave. Inauguración septiembre 2024. Proyecto con larga gestación previa.',
			},
			{
				titulo: 'Plaza / monumento a José García Carneiro',
				tipo: 'Monumento escultórico / conjunto urbano',
				año: '2023',
				lugar: 'La Guaira (estado La Guaira / Vargas).',
				detalles:
					'Inaugurado en mayo de 2023, en conmemoración de los dos años de la siembra del político y militar. Nota de prensa: Ciudad CCS — https://www.ciudadccs.info/publicacion/7195-develan-monumento-en-honor-a-jose-garcia-carneiro-en-la-guaira',
			},
		],
	},
	{
		id: 'institucional-academico',
		titulo: 'Ámbito académico e institucional',
		intro: 'Patrimonio universitario y homenajes a figuras del saber.',
		items: [
			{
				titulo: 'Busto de Guillermo Pérez Enciso',
				tipo: 'Busto',
				año: '2008',
				lugar: 'Escuela de Psicología, Universidad Central de Venezuela (UCV), Caracas.',
				detalles: 'Homenaje al fundador de los estudios de psicología en Venezuela. Integración al patrimonio de Ciudad Universitaria.',
			},
		],
	},
	{
		id: 'proceres-plazas',
		titulo: 'Próceres, figuras históricas y santos en plazas públicas',
		intro:
			'Participación en restauración y nuevas piezas para plazas en municipios como Baruta y Chacao, con lenguaje escultórico asociado al «bloque monolítico» (fuerza y estabilidad).',
		items: [
			{
				titulo: 'Bustos y monumentos a próceres y figuras públicas',
				tipo: 'Varias piezas',
				lugar: 'Plazas públicas, Baruta, Chacao y otros municipios (Caracas y Miranda).',
				detalles: 'Encargos de representación histórica bajo criterio monumental consolidado.',
			},
			{
				titulo: 'Simón Rodríguez',
				tipo: 'Busto',
				lugar: 'Espacio público (según ubicación de comisión).',
				detalles: 'Maestro del Libertador.',
			},
			{
				titulo: 'Francisco de Miranda',
				tipo: 'Busto / estatua',
				lugar: 'Espacio público (según comisión).',
				detalles: 'Precursor de la independencia.',
			},
			{
				titulo: 'Estatua del soldado',
				tipo: 'Monumento',
				lugar: 'Espacio público (según comisión).',
				detalles: 'Homenaje a las fuerzas armadas.',
			},
			{
				titulo: 'San Antonio de Padua',
				tipo: 'Escultura devocional',
				lugar: 'Espacio público.',
				detalles: 'Confluencia de lo histórico y lo devocional.',
			},
			{
				titulo: 'San Francisco de Asís',
				tipo: 'Escultura devocional',
				lugar: 'Espacio público.',
				detalles: 'Figura franciscana en contexto urbano.',
			},
		],
	},
	{
		id: 'lenguaje-taller',
		titulo: 'Líneas de trabajo y taller (no exhaustivo por título)',
		intro:
			'Complemento al catálogo nominal: procesos y vertientes que atraviesan la producción del Taller de Escultura Manuel Parada.',
		items: [
			{
				titulo: 'Talla directa en piedra y mármol',
				lugar: 'Taller y obra en sitio.',
				detalles: 'Cincel y permanencia de la masa; relación con la tradición monolítica.',
			},
			{
				titulo: 'Fundición y moldeado',
				lugar: 'Taller.',
				detalles: 'Bronce y resinas de alta calidad para réplicas y monumento.',
			},
			{
				titulo: 'Ensamblaje y geometría',
				lugar: 'Taller.',
				detalles: 'Metales, corte láser y piezas abstractas o de espacio negativo.',
			},
			{
				titulo: 'Abstracción y espacio negativo',
				lugar: 'Obra de estudio y encargo contemporáneo.',
				detalles: 'Acero, bronce, resinas; énfasis en el vacío y la geometría.',
			},
		],
	},
];
