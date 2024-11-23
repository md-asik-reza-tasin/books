import { useContext } from "react";
import { BooksContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const { logIn } = useContext(BooksContext);
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((result) => {
        toast("Logged in");
        navigate("/");
        e.target.reset();
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
