'use client';
import GoogleMaps from '@/components/GoogleMaps';
import Modal from '@/components/Modal';

export default function ModalSummary() {
	return (
		<Modal modalClose={() => {}}>
			<GoogleMaps src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=sircilla+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" />
		</Modal>
	);
}
