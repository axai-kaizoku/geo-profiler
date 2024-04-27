import { ReactNode } from 'react';

export interface ProfileProps {
	_id?: string;
	name?: string;
	address?: string;
	description?: string;
	phone?: string;
	email?: string;
	interests?: string[];
	latAndLong?: string[];
	photo?: string;
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

export interface AddModalProps {
	closeModal: () => void;
	isOpen: boolean;
}
