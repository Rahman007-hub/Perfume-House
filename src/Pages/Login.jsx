import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error,setError]=useState("")
  const redirect = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      // console.log("All Fields Required");
      setError("Please Fill All Fields")
      setEmail("")
      setPassword("")
    } else {
      redirect("/")
    }
  }


    return (
      <div className="formbg">
        <header className="py-4 px-2 px-lg-4">
          <nav>
            <Link to="/" className="second-link">
              <div>
                <span className="main-color-bg text-white rounded-circle p-3">
                  PZ
                </span>
                <span className="text-white"> Perfume </span>
              </div>
            </Link>
          </nav>
        </header>
        <div className="container">
          <form
            id="second-form"
            onSubmit={handleSubmit}
            className="m-auto bg-white p-3  shadow-lg rounded-2"
          >
            <h1>Welcome Back</h1>
            <p>Fill in your information to access your account</p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control my-2"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control my-2"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <div className="d-flex flex-row justify-content-between">
              <div>
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="checkbox" className="form-check-label">
                  {" "}
                  Remember Me
                </label>
              </div>
              <Link className="text-danger" to="/register">
                Forgot password?
              </Link>
            </div>
            <p className="text-danger my-2">{error}</p>
            <button
              style={{ backgroundColor: "#8D34FF", height: "64px" }}
              className="text-white mt-2 border-0 rounded-4 w-100"
            >
              Sign In
            </button>
            <p className="text-center my-auto mt-2">or</p>
            <button
              type="submit"
              style={{ height: "64px" }}
              className="border-0 rounded-4 w-100 mt-2"
            >
              Continue with Google
            </button>
            <p className="text-center mt-2">
              Dont have an account?
              <Link style={{ color: "#8D34FF" }} to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    );
};

export default Login;
