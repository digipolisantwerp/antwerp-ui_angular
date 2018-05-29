import { IContext } from './types/context.types';

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
	extendTitle: boolean;

	/**
	 * A delimter when using extendTitle.
	 * Default value: | (pipe)
	 */
	titleDelimiter: string;

	/**
	 * A dictionary of default meta tags and their values
	 */
	defaults?: IContext;

	/**
	 * Enable route listener
	 */
	routerContext?: boolean;
}

export const CONTEXT_DEFAULT_VALUE: ContextConfig = {
	useTitleSuffix: false,
	extendTitle: false,
	titleDelimiter: ' | ',
	defaults: {},
	routerContext: true,
};
