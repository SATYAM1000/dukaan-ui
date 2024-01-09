/** @format */

import "./Page.css";
import home from '../assets/home.png'
import orders from '../assets/orders.png'
import products from '../assets/products.png'
import delivery from '../assets/delivery.png'
import marketing from '../assets/marketing.png'
import analytics from '../assets/analytics.png';
import Payouts from '../assets/payouts.png';
import Discounts from '../assets/discount.png';
import audience from '../assets/audience.png';
import appearance from '../assets/appearance.png'
import plugins from '../assets/plugins.png'


const PageName = ({ item,count }) => {
	const myArr=[home, orders, products, delivery, marketing, analytics, Payouts, Discounts, audience, appearance, plugins]
	console.log("key ",count);
	console.log("myarr: ",myArr);

	return (
		<div className="page-name">
			<img src={myArr[count]} className="icon-home" alt="" />
			<div className="page-name-box">
				<p className="page-name-home">{item.name}</p>
			</div>
		</div>
	);
};

export default PageName;
