import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BooksContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

export default function Header() {
  const { userId, logOut } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
    .then(() => {
      toast('sign out')
      navigate('/signin')
    })
    .catch()
  };

  return (
    <div className="flex justify-between items-center my-8 mx-auto h-[57px]">
      <div className="w-[138px] h-[33px]">
        <h1 className="font-extrabold text-2xl">Book Vibe</h1>
      </div>
      <div className="text-[#131313] opacity-80">
        <NavLink to="/" className="mx-2">
          Home
        </NavLink>
        <NavLink to="/listbook" className="mx-2">
          Listed Books
        </NavLink>
        <NavLink to="/pagesread" className="mx-2">
          Pages to Read
        </NavLink>
      </div>
      <div>
        {userId ? (
          <button onClick={handleSignOut} className="w-[116px] h-[57px] bg-[#23BE0A] rounded-md text-white mr-2">
            Sign Out
          </button>
        ) : (
          <>
            <Link to="/signin">
              <button className="w-[116px] h-[57px] bg-[#23BE0A] rounded-md text-white mr-2">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-[116px] h-[57px] bg-[#59C6D2] rounded-md text-white ">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
