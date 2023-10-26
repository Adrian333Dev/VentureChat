export interface SidenavBodyProps<T> {
	items: T[];
	id: keyof T;
	name: keyof T;
	icon: keyof T;
}
