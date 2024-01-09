/** @format */

import "./Sidebar.css";
import { CiWallet } from "react-icons/ci";
import logo from "../assets/logo.png";
import PageName from "./Page";
import home from '../assets/home.png';

const Sidebar = () => {

	const menuItems=[{
		name:"Home",
		path:'./src/assets/home.png'
	},
	{
		name:"Orders",
		path:'./src/assets/orders.png'
	},
	{
		name:"Products",
		path:'src/assets/products.png'
	},
	{
		name:"Delivery",
		path:'src/assets/delivery.png'
	},
	{
		name:"Marketing",
		path:'src/assets/marketing.png'
	},
	{
		name:"Analytics",
		path:'src/assets/analytics.png'
	},
	{
		name:"Payouts",
		path:'src/assets/payouts.png'
	},
	{
		name:"Discounts",
		path:'src/assets/discount.png'
	},
	{
		name:"Audience",
		path:'src/assets/audience.png'
	},
	{
		name:"Appearance",
		path:'src/assets/appearance.png'
	},
	{
		name:"Plugins",
		path:'src/assets/plugins.png'
	}

]

console.log("home 1",home)
	return (
		<div className="sidebar">
			<div className="nav-top">
				<div className="company-icon">
					<div className="img">
						<img src={logo} alt="logo" />
					</div>
					<div className="name">
						<p className="store-name">Nishyan</p>
						<p className="visit">Visit store</p>
					</div>
					<div className="downward-arrow">
						<i className="fa-solid fa-angle-down caret"></i>
					</div>
				</div>
				<div className="pages">
					{menuItems.map((item,key)=>{
						return(
							<PageName key={key} item={item}/>
						)
					})}
				</div>
			</div>
			<div className="nav-bottom">
				<div className="inside">
					<div className="left-icon">
						<CiWallet className="wallet-icon" />
					</div>
					<div className="amount-and-credits">
						<div className="credits">
							<p>Available credits</p>
						</div>
						<div className="amount">
							<p>222.10</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
