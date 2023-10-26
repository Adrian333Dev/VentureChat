export interface User {
	id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	isSuperuser: boolean;
	isStaff: boolean;
	isActive: boolean;
	dateJoined: Date;
}
