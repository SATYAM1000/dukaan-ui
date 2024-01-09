/** @format */

import "./Header.css";
import question from "../assets/question.png";
import search from "../assets/search.png";
import speaker from "../assets/speaker.png";
import down from "../assets/down.png";
const Header = () => {
	return (
		<div className="header">
			<div className="first">
				<h5 className="pay">Payouts</h5>
				<div className="how">
					<img className="ques" src={question} alt="" />
					<p className="ques-how">How it works</p>
				</div>
			</div>
			<div className="second">
				<img className="search-icon" src={search} alt="search" />
				<input type="text" placeholder="Search features, tutorials, etc." />
			</div>
			<div className="third">
				<div className="icon-container">
					<div className="speaker">
						<img src={speaker} alt="" />
					</div>
					<div className="down">
						<img src={down} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
