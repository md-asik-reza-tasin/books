import { useContext } from "react";
import { BooksContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.config";

export default function Signup() {
  const { createUser } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleNewUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        toast("Congratulation! Please Log in Now");
        updateProfile(result.user, {
          displayName: name,
        });
        e.target.reset();
        navigate("/signin");
        console.log(result.user)
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <form onSubmit={handleNewUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
