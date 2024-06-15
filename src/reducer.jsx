const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LODING":
      return {
        ...state,
        isloadig:true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isloading:false,
        hits: action.payload.hits,
        nbPages:action.payload.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((currEle)=>currEle.objectID!==action.payload),
       
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
       
      };
    case "INCREMENT":
        let temp=state.page+1;
        if(temp>=state.nbPages){
            temp=0;
        }
      return {
        ...state,
        page: temp,
       
      };
    case "DICREMENT":
        let temp2=state.page-1;
        if(temp2<=0){
            temp2=0;
        }
      return {
        ...state,
        page: temp2,
       
      };
    
    
  }
  
  return state
};

export default reducer;
