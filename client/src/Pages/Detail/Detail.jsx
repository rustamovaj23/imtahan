import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
import "./Detail.scss"
import axios  from "axios";
import dataContext from "../../Context/Context";
const Detail = () => {
  const {id} = useParams()
  const [detail, setDetail] = useState({})
  const {addToWishList} = useContext(dataContext)
  useEffect(()=>{
    axios.get(`http://localhost:8080/users/${id}`).then(res=>{
      setDetail(res.data)
    })
  },[id])
  return (
    <div className="detailPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img src={detail.image} alt="" style={{"width":"20rem"}}/>
     <div className="detail-text">
     <h1 style={{"fontWeight":"bolder"}}>{detail.name}</h1>
     <button className="add" onClick={()=>addToWishList(detail)}>AddToWishlist</button>
      <p>{detail.price}</p>
     </div>
{
  console.log(detail)
}
    </div>
  );
};

export default Detail;
