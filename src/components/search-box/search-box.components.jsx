import React from "react";

//ANCHOR Function components is only for html codes , if we do not need a state or any life cycle , to access .
export const SearchBox = ({ placeholder, handlerChange }) => (
    
  <input type='text' placeholder={placeholder} onChange={handlerChange} />
)


