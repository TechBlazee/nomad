import  { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import google from "../../../assets/icons/google.svg";
import { signUp, signInWithGoogle } from "../functions/authService";
import { writeUserData } from "../functions/database";
import Spinner from "../../../assets/icons/Spinner.svg";
import Swal from "sweetalert2";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // TOAST CONFIG
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Fields can't be empty",
      });
      setError("Please enter all fields");
      return;
    }

    if (password !== confirmPassword) {
      Toast.fire({
        icon: "error",
        title: "Passwords do not match",
      });
      setError("Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const user = await signUp(email, password);
      setUserId(user.uid);
      writeUserData(user.uid, email);
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: "User created successfully!",
      });
      setError(null);
      navigate("/login"); // Navigate to login page
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      Toast.fire({
        icon: "error",
        title: err.message,
      });
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setIsLoading(true);
      const user = await signInWithGoogle();
      setUserId(user.uid);
      writeUserData(user.uid, user.email);
      setIsLoading(false);
      Toast.fire({
        icon: "success",
        title: "User signed up with Google successfully!",
      });
      setError(null);
      navigate("/login"); // Navigate to login page
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      Toast.fire({
        icon: "error",
        title: err.message,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-12 items-center justify-center mx-4 my-12"
    >
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Welcome to Nomadhaven
        </h2>
        <p className="text-sm md:text-base">
          Create your account to explore the hidden gems
        </p>
      </div>
      <div className="w-full flex flex-col gap-8 md:gap-10 justify-center items-center">
        <section className="flex flex-col gap-5 w-full">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-base font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email here"
              required
              className="w-full inputFill"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full inputFill"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-base font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
              className="w-full inputFill"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6">
          <button
            id="submit"
            type="submit"
            className="w-full primaryBtn text-center flex items-center justify-center"
          >
            {isLoading ? (
              <img src={Spinner} alt="Loading..." className="w-5 h-5 mx-auto" />
            ) : (
              "Sign up"
            )}
          </button>

          <button
            type="button"
            className="secondaryBtn gap-2 w-full text-center flex items-center justify-center"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
          >
            {isLoading ? (
              <img src={Spinner} alt="Loading..." className="w-5 h-5 mx-auto" />
            ) : (
              <>
                <img src={google} alt="google icon" className="w-5 h-5" />
                Sign up with Google
              </>
            )}
          </button>
        </section>
      </div>
      <section className="text-center">
        <p>
          Have an account already?{" "}
          <span
            className="text-yellow-500 cursor-pointer font-bold"
            onClick={() => navigate("/login")} // Navigate to login page
          >
            Log in
          </span>
        </p>
      </section>
    </form>
  );
};

export default Signup;
