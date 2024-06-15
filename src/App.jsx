import React from "react";
import Pagenation from "./Pagenations";
import Storie from "./Storie";
import { useGlobalContext } from "./context";
import "./App.css"

const App = () => {
  const {searchItem}=useGlobalContext();
  //console.log("i ma",hits)
  return (
    <>
      <h1 className="heading">Welcome to News Website</h1>
      <div className="input"><input type="text" className="search" placeholder="Search here" onChange={(e)=>searchItem(e.target.value)}/></div>
      <Pagenation />
      {/* {
        hits.map((items,index)=>{
           <Storie items={items} key={index}/>
        })
      } */}
      <Storie/>
     
      
    </>
  );
};

export default App;
