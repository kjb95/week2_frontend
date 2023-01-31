import React from "react";

interface ContentHeaderProps {
	title:string
}
function ContentHeader({title}: ContentHeaderProps) {
	return (
		<div className="content-header">
			<h2 className="fz-24 fw-smbold fc-10">{title}</h2>
		</div>
	);
}

export default ContentHeader;
