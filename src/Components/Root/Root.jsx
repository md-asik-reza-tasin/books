import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getReadBookId } from "../../Hook/Hook";

export const dataContext = createContext();

export default function Root() {
  const [dataOfBooks, setDataOfBooks] = useState([]);

  const [read, setRead] = useState([]);
  const [wishLists, setWishList] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setDataOfBooks(data));
  }, []);

  const handleDetail = (id) => {
    localStorage.setItem("singleBookData", id);
  };

  const handleRead = (id) => {
    const a = getReadBookId("id");
    if (!a?.includes(id)) {
      const readData = [...read, id];
      setRead(readData);
      a.push(id);
      localStorage.setItem("id", JSON.stringify(a));
      toast.success("Added");
    } else {
      toast.error("ALREADY ADDED!!!");
    }
  };

  const handleWishList = (id) => {
    const checkRead = localStorage.getItem("id");
    if (checkRead?.includes(id)) {
      toast.error("Vai porsos ekbar");
    } else if (wishLists.includes(id)) {
      toast.error("Wish korsos to baaal");
    } else {
      toast("add");
      const wish = [...wishLists, id];
      setWishList(wish);
    }
  };

  //   console.log(dataOfBooks)

  return (
    <div>
      <div className="w-[1171px] mx-auto mb-32">
        <dataContext.Provider
          value={{
            dataOfBooks,
            handleDetail,
            handleRead,
            read,
            handleWishList,
            wishLists,
          }}
        >
          <Header></Header>
          <Outlet></Outlet>
        </dataContext.Provider>
      </div>
      <ToastContainer />
    </div>
  );
}
