export interface SidebarBodyProps<T extends { id: string }> {
	items: T[];
	[key: string]: unknown;
}
