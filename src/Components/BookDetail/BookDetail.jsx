import { useContext } from "react";
import { dataContext } from "../Root/Root";
import { useLoaderData } from "react-router-dom";

export default function BookDetail() {
  const { handleRead, handleWishList } = useContext(dataContext);

  const loadData = useLoaderData();
  const findSingleData = localStorage.getItem("singleBookData");
  const parseData = JSON.parse(findSingleData);
  const findData = loadData.find((d) => d.bookId === parseData);

  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    publisher,
    yearOfPublishing,
    totalPages,
  } = findData;

  return (
    <div className="flex mt-20">
      <div className="w-1/2">
        <img src={image} alt={bookName} />
      </div>
      <div className="w-1/2 ml-7">
        <p className="text-7xl">{bookName}</p>
        <p className="opacity-70 ml-1 mt-2">By: {author}</p>
        <p className="border-t-2 border-b-2 py-5 my-3 text-2xl">{category}</p>
        <p className="opacity-80">
          <span className="font-extrabold">review: </span>
          {review}
        </p>
        <p>Tag {}</p>
        <p>Number of pages : {totalPages}</p>
        <p>Publisher : {publisher}</p>
        <p>Year of publishing : {yearOfPublishing}</p>
        <p>Rating : {rating}</p>
        <div>
          <button
            onClick={() => handleRead(bookId)}
            className="w-[101px] h-[57px] text-black border font-semibold border-black rounded mt-5 mr-3"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(bookId)}
            className="w-[101px] h-[57px] text-white border font-semibold bg-blue-500 rounded mt-5 mr-3"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
