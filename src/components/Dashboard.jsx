/** @format */

import "./Dashboard.css";
import down from "../assets/down.png";
import question from "../assets/question.png";
import white from "../assets/white.png";
import search from "../assets/search.png";
import updown from "../assets/updown.png";
import download from "../assets/download.png";

const Dashboard = () => {
	return (
		<div className="main-dashboard">
			<div className="top-part">
				<div className="overview">
					<div className="text">
						<p>Overview</p>
					</div>
					<div className="month-part">
						<p>This Month</p>
						<img src={down} alt="" />
					</div>
				</div>
				<div className="amounts">
					<div className="first-div">
						<div className="second-div-for-first">
							<div className="box-container-first">
								<div className="pending-first">
									<p>Next Payout</p>
									<img src={white} alt="" />
								</div>
								<div className="amount-section-first">
									<p>₹2,312.23</p>
									<div className="arrow-part-first">
										<p>13 orders</p>
										<i className="fa-solid fa-angle-right first-icon"></i>
									</div>
								</div>
							</div>
						</div>

						<div className="bottom-area">
							<p>Next payout date:</p>
							<p>Today, 04:00PM</p>
						</div>
					</div>

					<div className="second-div">
						<div className="box-container">
							<div className="pending">
								<p>Amount Pending</p>
								<img src={question} alt="" />
							</div>
							<div className="amount-section">
								<p>₹92,312.20</p>
								<div className="arrow-part">
									<p>13 orders</p>
									<i className="fa-solid fa-angle-right icon2"></i>
								</div>
							</div>
						</div>
					</div>
					<div className="second-div">
						<div className="box-container">
							<div className="processed">
								<p>Amount Processed</p>
								<img src={question} alt="" />
							</div>
							<div className="amount-section">
								<p>₹23,92,312.19</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-part">
				<div className="area-1">
					<p className="trans-para">Transactions | This Month</p>
					<div className="categories">
						<div className="payouts-div">
							<p>Payouts (22)</p>
						</div>
						<div className="refunding-div">
							<p>Refunds (6)</p>
						</div>
					</div>
				</div>
				<div className="area-2">
					<div className="template">
						<div className="order-id">
							<div className="search-area">
								<img src={search} alt="" />
								<input type="text" placeholder="Order ID or transaction ID" />
							</div>
							<div className="sort-download-area">
								<div className="sort-part">
									<p>Sort</p>
									<img src={updown} alt="" />
								</div>
								<div className="download">
									<img src={download} alt="" />
								</div>
							</div>
						</div>

						<div className="table-layout">
							<div className="text-container-div">
								<p>Order</p>
							</div>
							<div className="text-container-div">
								<p>Status</p>
							</div>
							<div className="text-container-div">
								<p>Transaction ID</p>
							</div>
							<div className="text-container-div">
								<p>Refund Date</p>
							</div>
							<div className="text-container-div-last">
								<p>Order Amount</p>
							</div>
						</div>

						{/* first */}
						<div className="table-layout-content-new">
							<div className="text-container-div-new">
								<p>#281209</p>
							</div>
							<div className="text-container-div-status">
								<div className="color"></div>
								<p>Successful</p>
							</div>
							<div className="text-container-div-new">
								<p>131634495747</p>
							</div>
							<div className="text-container-div-new">
								<p>Today, 08:45 PM</p>
							</div>
							<div className="text-container-div-last-new">
								<p>₹1,125.00</p>
							</div>
						</div>

						{/* second */}
						<div className="table-layout-content-new">
							<div className="text-container-div-new">
								<p>#281208</p>
							</div>
							<div className="text-container-div-status">
								<div className="processing-color"></div>
								<p>Processing</p>
							</div>
							<div className="text-container-div-new">
								<p>131634495747</p>
							</div>
							<div className="text-container-div-new">
								<p>Yesterday, 3:00 PM</p>
							</div>
							<div className="text-container-div-last-new">
								<p>₹1,125.00</p>
							</div>
						</div>

						{/* third */}
						<div className="table-layout-content-new">
							<div className="text-container-div-new">
								<p>#281207</p>
							</div>
							<div className="text-container-div-status">
								<div className="color"></div>
								<p>Successful</p>
							</div>
							<div className="text-container-div-new">
								<p>131634495747</p>
							</div>
							<div className="text-container-div-new">
								<p>12 Jul 2023, 03:00 PM</p>
							</div>
							<div className="text-container-div-last-new">
								<p>₹1,125.00</p>
							</div>
						</div>

						{/* forth */}
						<div className="table-layout-content-new">
							<div className="text-container-div-new">
								<p>#281206</p>
							</div>
							<div className="text-container-div-status">
								<div className="color"></div>
								<p>Successful</p>
							</div>
							<div className="text-container-div-new">
								<p>131634495747</p>
							</div>
							<div className="text-container-div-new">
								<p>12 Jul 2023, 03:00 PM</p>
							</div>
							<div className="text-container-div-last-new">
								<p>₹1,125.00</p>
							</div>
						</div>

						{/* fifth */}
						<div className="table-layout-content-new">
							<div className="text-container-div-new">
								<p>#281205</p>
							</div>
							<div className="text-container-div-status">
								<div className="color"></div>
								<p>Successful</p>
							</div>
							<div className="text-container-div-new">
								<p>131634495747</p>
							</div>
							<div className="text-container-div-new">
								<p>12 Jul 2023, 03:00 PM</p>
							</div>
							<div className="text-container-div-last-new">
								<p>₹1,125.00</p>
							</div>
						</div>

						{/* sixth */}
						<div className="table-layout-content-new">
							<div className="text-container-div-new">
								<p>#281206</p>
							</div>
							<div className="text-container-div-status">
								<div className="color"></div>
								<p>Successful</p>
							</div>
							<div className="text-container-div-new">
								<p>131634495747</p>
							</div>
							<div className="text-container-div-new">
								<p>12 Jul 2023, 03:00 PM</p>
							</div>
							<div className="text-container-div-last-new">
								<p>₹1,125.00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
