import React from 'react';

const SearchBar = ({input,onChange}) => {
  const BarStyling = {width:"100%",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={input}
     placeholder={"search country"}
     onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar