/** @format */

import "./Page.css";

const PageName = ({ item }) => {
	return (
		<div className="page-name">
			<img src={item.path} className="icon-home" alt="" />
			<div className="page-name-box">
				<p className="page-name-home">{item.name}</p>
			</div>
		</div>
	);
};

export default PageName;
