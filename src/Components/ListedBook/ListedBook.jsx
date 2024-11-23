import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Root/Root";
import Booksforread from "../Booksforread/Booksforread";
import WishList from "../WishList/WishList";

export default function ListedBook() {
  const { dataOfBooks, wishLists, read } = useContext(dataContext);
  const [bookListedDataStore, setBookListedDataStore] = useState([]);
 
  const [wishListedDataStore, setWishListedDataStore] = useState([]);
  // console.log(wishLists);

  useEffect(() => {
    if (dataOfBooks.length) {
      const getDataOfListedBooks = localStorage.getItem("id");
      const parseGetDataOfListedBooks = JSON.parse(getDataOfListedBooks);

      const newBlankArrayOfBooksListed = [];

      //   console.log(parseGetDataOfListedBooks);
      for (let id of parseGetDataOfListedBooks) {
        console.log(id);
        const findSingleData = dataOfBooks.find((d) => d.bookId === id);
        // console.log(findSingleData)
        // const newData = [...bookListedDataStore, findSingleData]
        newBlankArrayOfBooksListed.push(findSingleData);
      }
      setBookListedDataStore(newBlankArrayOfBooksListed);
    }
  }, [dataOfBooks]);

  useEffect(() => {
    const wishArray = [];
    for (let id of wishLists) {
      const findData = dataOfBooks.find((d) => d.bookId === id);
      wishArray.push(findData);
    }
    setWishListedDataStore(wishArray);
  }, []);


  //SORTING BY RATING


  const handleRating = () => {
    const rate = [...bookListedDataStore];
    rate.sort((a,b) => {return a.rating - b.rating})
    setBookListedDataStore(rate);
    
  }

  const handlePages = () => {
    const rate = [...bookListedDataStore];
    rate.sort((a,b) => {return a.totalPages - b.totalPages})
    setBookListedDataStore(rate);
   
  }
  
  const handlePublish = () => {
    const rate = [...bookListedDataStore];
    rate.sort((a,b) => {return a.yearOfPublishing - b.yearOfPublishing})
    setBookListedDataStore(rate);
    
  }
  

  return (
    <div>
      <div className="dropdown mb-5">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button onClick={handleRating}>Rating</button>
          </li>
          <li>
           <button onClick={handlePages}>Number Of Pages</button>
          </li>
          <li>
           <button onClick={handlePublish}>Publisher Year</button>
          </li>
        </ul>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Books List"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100  rounded-box p-6"
        >
          {bookListedDataStore.map((singleBook) => (
            <Booksforread
              key={singleBook.bookId}
              singleBook={singleBook}
            ></Booksforread>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100  rounded-box p-6"
        >
          {wishListedDataStore.map((wishList) => (
            <WishList key={wishList.bookId} wishList={wishList}></WishList>
          ))}
        </div>
      </div>
    </div>
  );
}
