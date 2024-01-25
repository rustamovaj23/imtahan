import React, { useContext } from "react";
import dataContext from "../../Context/Context";
import { Link } from "react-router-dom";
import "./Cards.scss"
const Cards = () => {
  const { data, setData } = useContext(dataContext);
  return (
    <div className="cards-all">
      {data.map((item, index) => (
        <div className="card-all">
          <img src={item.image} alt="" style={{"width":"300px"}}/>
          <div className="card-all-text">
          <p style={{"color":"gray"}}>{item.name}</p>
          <p>{item.desc}</p>
          <p>{item.price}</p>
          <Link to={`${item._id}`}><button style={{"border":"none", "width":"100px", "height":"30px", "borderRadius":"4px"}}>View Detail</button></Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
