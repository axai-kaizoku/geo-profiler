import { ReactNode } from 'react';

export interface ProfileCardProps {
	src: string;
	name: string;
	desc: string;
	address: string;
}

export interface ModalProps {
	children: ReactNode;
	modalClose?: (() => void) | undefined;
}

export interface UserProps {
	_id?: string;
	name: string;
	email: string;
	password: string;
	isAdmin: boolean;
	createdAt: Date;
	lastLoggedIn: Date;
}
