import React from "react";
import ReactDOM from "react-dom/client";
import { resDataList } from "./resData";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>About us</li>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (prop) => {
  console.log(prop);
  const { name, cloudinaryImageId, avgRatingString, deliveryTime,sla, cuisines } = prop.resData.info;
  //   console.log(resData);

  return (
    <li className="res-card">
      <img
        className="res-card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3 className="res-name">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </li>
  );
};
const BodyLayout = () => {
  return (
    <div className="bodyContainer">
      <div className="search">Search</div>
      <div className="res-container">
        <ul className="res-cards">
          {resDataList.map((res, index) => <RestaurantCard key={res.info.id} resData={res} ></RestaurantCard>)}
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <BodyLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
