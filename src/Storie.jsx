import React from "react";
import { useGlobalContext } from "./context";
const Storie = () => {
  const { hits, nbPages,isloading,removeItem } = useGlobalContext();
  if(isloading){
    return(
       <>
           <h1 className="loading">Loading...</h1>
       </>
    )
     
  }
  return (
    <>
      {hits.map((items, index) => {
        return (
          <div className="main" key={index}>
            <div className="stories">
              <h2 className="title">{items.title}</h2>
              <div className="author-section">
                <span className="author">{items.author}</span>
                <div className="comments">
                  Comments <span className="">{items.num_comments}</span>
                </div>
              </div>
              <div className="buttons">
              {/* <Link href={items.url}>
                <button className="button">Read More</button>
                </Link> */}
                <a href={items.url}><button className="button">Read Mode</button></a>
                <button className="button" onClick={()=>removeItem(items.objectID)}>Remove</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Storie;
