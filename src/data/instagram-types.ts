export interface InstagramPost {
	id: string;
	permalink: string;
	caption: string;
	imageUrl: string;
	publishedAt: string;
	mediaType: string;
}

/** Widget de terceros (SnapWidget, Elfsight, EmbedSocial…): sin tokens Meta. */
export interface InstagramWidgetConfig {
	iframeSrc?: string;
	embedHtml?: string;
	/** Si hay iframe/embed y es true, no se muestra la cuadrícula generada por API/JSON. */
	hideApiGridWhenEmbed?: boolean;
}
