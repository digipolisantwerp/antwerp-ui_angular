export interface Context {
	// Default META and SEO
	title?: string;
	titleSuffix?: string;
	description?: string;
	favIcon?: string;
	// FB open graph
	'og:url'?: string;
	'og:type'?: string;
	'og:title'?: string;
	'og:description'?: string;
	'og:image'?: string;
	'fb:app_id'?: string;
	'og:locale'?: string;
	'og:locale:alternate'?: string;
	'og:see_also'?: string;
	'og:updated_time'?: string;
	// Twitter card
	'twitter:card'?: string; // The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”.
	'twitter:site'?: string; // @siteusername
	'twitter:creator'?: string; // @creatorusername
	[key: string]: string;
}

export interface ContextConfig {
	/**
	 * Flag to append an optional title suffix to the title.
	 * Default value: false
	 */
	useTitleSuffix?: boolean;

	/**
	 * Flag to append the title of parent pages to the page title.
	 * Default value: false
	 */
	extendTitle?: boolean;

	/**
	 * A delimter when using extendTitle.
	 * Default value: | (pipe)
	 */
	titleDelimiter?: string;

	/**
	 * A dictionary of default meta tags and their values
	 */
	defaults?: Context;

	/**
	 * Enable route listener
	 */
	routerContext?: boolean;
}
