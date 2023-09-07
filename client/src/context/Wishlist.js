import { createContext, useContext, useState, useEffect } from "react";

const WishContext = createContext();

const WishProvider = ({ children }) => {
 const[ wish, setWish]= useState([]);

 useEffect(()=>{
    let existingCartItem = localStorage.getItem('wish')
    if(existingCartItem) setWish(JSON.parse(existingCartItem));

 },[])
  return (
    <WishContext.Provider value={[wish, setWish]}>
      {children}
    </WishContext.Provider>
  );
};
const useWish = () => useContext(WishContext);

export { useWish, WishProvider };