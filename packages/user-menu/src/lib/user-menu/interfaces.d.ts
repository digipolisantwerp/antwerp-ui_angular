declare type uri = string;
export declare namespace UserMenu {
	export type direction = 'right' | 'left';
	export interface IUser {
		firstName: string;
		lastName: string;
		avatarUrl?: uri;
	}
}
