import { CiLocationOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";

export default function WishList({ wishList }) {
  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = wishList;

  return (
    <div className="flex items-center h-[277px] border mb-5">
      <div className="">
        <img className="w-56 h-56 ml-3" src={image} alt="" />
      </div>
      <div className="ml-3">
        <p className="text-2xl ">{bookName}</p>
        <p className="text-sm mt-2 opacity-80">By : {author}</p>
        <div className="flex mt-4">
          {" "}
          <p className="font-bold">Tags:</p>
          {tags.map((t, idx) => (
            <p
              key={idx}
              className="ml-5 text-[#23BE0A] bg-green-50 px-2 rounded-2xl"
            >
              {t}
            </p>
          ))}
          <div className="flex ml-5 justify-center items-center text-gray-600">
            <CiLocationOn className="mr-1 w-5 h-5" />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>
        <div className="flex mt-4 border-b pb-7">
          <div className="flex items-center text-gray-500">
            <BsPeople className="mr-2"></BsPeople>
            <p>Publisher : {publisher}</p>
          </div>
          <div className="flex items-center text-gray-500 ml-5">
            <RiPagesFill className="mr-2" />
            <p>Pages : {totalPages}</p>
          </div>
        </div>
        <div className="flex mt-4">
          <p className="mr-6 text-[#328EFF] bg-blue-100 w-[174px] text-center pt-2 h-[41px] rounded-xl">
            {" "}
            Category : {category}
          </p>
          <p className="mr-6 text-[#FFAC33] bg-yellow-100 w-[174px] text-center pt-2 h-[41px] rounded-xl">
            Rating : {rating}
          </p>
          <button className="mr-6 text-white bg-[#23BE0A] w-[174px] text-center pt-1 h-[41px] rounded-xl">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
}
