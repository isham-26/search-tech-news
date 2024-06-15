import React, { useContext, useReducer,useEffect } from "react";
import reducer from "./reducer";
const initialState ={
    isloading:true,
    query:"",
    page:0,
    hits:[],
    nbPages:0
}
let API="https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    
    const [state,dispatch] = useReducer(reducer,initialState);

    
    
    const fetchApidata = async (url) =>{
        dispatch({
            type:"IS_LODING"
        })
        try{
            const res= await fetch(url);
            const data= await res.json();
            dispatch({
               type:"GET_STORIES",
               payload:{
                  hits:data.hits,
                  nbPages:data.nbPages,
               },
            });
           
        }catch(e){
            console.log(e)
        }
    }
    //remove items
    const removeItem =(id)=>{
        dispatch({
            type:"REMOVE_POST",
            payload:id
        })
    }
    const searchItem =(ele)=>{
        dispatch({
            type:"SEARCH_POST",
            payload:ele,
        })
    }
    const increment =()=>{
        dispatch({
            type:"INCREMENT",
        })
    }
    const dicrement =()=>{
        dispatch({
            type:"DICREMENT",
            
        })
    }
    
    useEffect(()=>{
        fetchApidata(`${API}query=${state.query}&page=${state.page}`);
    },[state.query,state.page])

    return(
        <AppContext.Provider value={{...state,removeItem,searchItem,increment,dicrement}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext};