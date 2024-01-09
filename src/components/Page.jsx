/** @format */

import "./Page.css";
import home from '../assets/home.png'

const PageName = ({ item }) => {
	return (
		<div className="page-name">
			<img src={home} className="icon-home" alt="" />
			<div className="page-name-box">
				<p className="page-name-home">{item.name}</p>
			</div>
		</div>
	);
};

export default PageName;
