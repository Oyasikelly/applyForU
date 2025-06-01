"use client"

import ApplyForm from '@/components/ApplyForm';
import React from 'react';
const ApplyPage: React.FC = () => {
	const [showForm, setShowForm] = React.useState(true);

    type LinkType = string;
    const linkToHome= "/"
	return (
		<main>
			<ApplyForm showForm={showForm} setShowForm={setShowForm} homeLink={linkToHome} />
		</main>
	);
}
export default ApplyPage;