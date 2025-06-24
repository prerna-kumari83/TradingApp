import React, { useState, useContext } from "react";
import { watchlist } from "../data/data";

import GeneralContext from "./GeneralContext";
import {
  BarChartRounded,
  GroupWork,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import Grow from "@mui/material/Grow";
import Tooltip from "@mui/material/Tooltip";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const data = {
    labels: watchlist.map((subArray) => subArray["name"]),
    datasets: [
      {
        label: "price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItems stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItems = ({ stock }) => {
  const [showListItems, setShowListItems] = useState(false);

  const handleItemEnter = (e) => {
    setShowListItems(true);
  };

  const handleItemLeave = (e) => {
    setShowListItems(false);
  };

  return (
    <li onMouseEnter={handleItemEnter} onMouseLeave={handleItemLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percentage">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showListItems && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(uid);
  };
  const handleSellClick = () => {
    openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" TransitionComponent={Grow}>
          <button className="buy" onClick={handleBuyClick}>
            {" "}
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" TransitionComponent={Grow}>
          <button className="sell" onClick={handleSellClick}>
            {" "}
            Sell
          </button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartRounded className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More (M)" placement="top" TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
