import { useEffect, useState } from "react";
import axios from "axios"
import dataContext from "./Context/Context";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";
import Detail from "./Pages/Detail/Detail";
import WishList from "./Pages/WishList/WishList";

function App() {
  const [data, setData] = useState([])
  const [ error,setError] = useState("")
  const [original, setOriginal] = useState([])
  const [wishlist, setWishList] = useState([])


  const handleDelete=(id)=>
  axios.delete(`http://localhost:8080/users/${id}`).then(res=>{
    const deletedData = data.filter((prod)=>prod._id!==id)
    setData(deletedData)
  })

  const handleSearch = (e)=> {
    const searching = e.trim().toLowerCase()
    if(searching==""){
      setData([...original])
    }else{
      const searchedData = data.filter((item) => (item.name.trim().toLowerCase().includes(searching)))
      setData([...searchedData])
    }
  }

  const handleSort = (e) => {
    const sorting = e.target.value
    if(sorting=="df"){
      setData([...original])
    }else if(sorting=="az"){
      const sortAZ = data.sort((a,b)=> a.name.localeCompare(b.name))
      setData([...sortAZ])
    }else if(sorting=="za"){
      const sortZA = data.sort((b,a)=> b.name.localeCompare(a.name))
      setData([...sortZA])
    }else if(sorting == "09"){
      const sort09 = data.sort((a,b)=>a.price-b.price)
      setData([...sort09])
    }else if(sorting == "90"){
      const sort90 = data.sort((b,a)=>b.price-a.price)
    }
  }

  const addToWishList=(item)=>{
    console.log(item)
    const target = wishlist.find((prod)=>prod._id==item._id)
    if(target){
      alert("item is already in wishlist")
    }else{
      setWishList([...wishlist, item])
      localStorage.setItem("wishlist", JSON.stringify([...wishlist,item]))
      alert("item added")
    }
  }

  const deleteFromWishlist=(item)=>{
    const target = wishlist.find((prod)=>prod._id==item._id)
    const indexOf = wishlist.indexOf(target)
    wishlist.splice(indexOf, 1)
    setWishList([...wishlist])
    localStorage.setItem("wishlist", JSON.stringify([...wishlist]))
  }


  useEffect(()=>{
    axios.get("http://localhost:8080/users").then(res=>{
      setData(res.data)
    }).catch(err=>{
      setError(err)
    })
  }, [])


  const value={
    data, setData, handleSearch, handleSort, handleDelete, addToWishList, deleteFromWishlist
  }
  return (
    <dataContext.Provider value={value}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/:id" element={<Detail/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
