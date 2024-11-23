import { useContext } from "react";
import { dataContext } from "../Root/Root";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  const { handleDetail } = useContext(dataContext);

  const { bookId ,bookName, author, image, rating, category, tags } = card;
  return (
    <Link
      to='/detailbook'
      onClick={() => {
        handleDetail(bookId);
      }}
      className="w-[374px] h-[482px] border p-5 m-5 rounded-md"
    >
      <img
        className="w-[326px] h-[230px] mx-auto rounded-3xl"
        src={image}
        alt=""
      />
      <div className="flex">
        {tags.map((tag, index) => (
          <p key={index} className="mt-4 text-[#23BE0A] border rounded-lg p-0.5 mr-1">
            {tag}
          </p>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-semibold">{bookName}</p>
        <h1 className="mt-2 opacity-75">By : {author}</h1>
        <div className="flex justify-between mx-0.3  mt-10 border-t-2 p-2">
          <p>{category}</p>
          <p>{rating}</p>
        </div>
      </div>
    </Link>
  );
}
