import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import google from "../../../assets/icons/google.svg";
import { logIn, signInWithGoogle } from "../functions/authService";
import Spinner from "../../../assets/icons/Spinner.svg";
import Swal from "sweetalert2"; // Add SweetAlert2 for better notifications
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Corrected useState usage
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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

    try {
      const user = await logIn(email, password);
      if (user) {
        Toast.fire({
          icon: "success",
          title: "Logged in successfully!",
        });
        setError(null);
        navigate("/dashboard"); // Navigate to dashboard
      }
    } catch (err) {
      setError(err.message);
      Toast.fire({
        icon: "error",
        title: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);

    try {
      await signInWithGoogle();
      toast.fire({
        icon: "success",
        title: "User signed in with Google successfully!",
      });
      setError(null);
      navigate("/dashboard"); // Navigate to dashboard
    } catch (err) {
      setError(err.message);
      toast.fire({
        icon: "error",
        title: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-full md:max-w-lg gap-8 md:gap-10 items-center justify-center mx-4 my-12"
    >
      <div className="text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Welcome to Nomadhaven
        </h2>
        <p className="text-sm md:text-base">
          Log in to keep exploring the hidden gems
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
          <div className="mb-4 md:mb-2">
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
              "Log in"
            )}
          </button>

          <button
            type="button"
            className="secondaryBtn gap-2 w-full text-center flex items-center justify-center"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            {isLoading ? (
              <img src={Spinner} alt="Loading..." className="w-5 h-5 mx-auto" />
            ) : (
              <>
                <img src={google} alt="google icon" className="w-5 h-5" />
                Log in with Google
              </>
            )}
          </button>
        </section>
      </div>
      <section className="text-center">
        <p>
          Don’t have an account yet?{" "}
          <span
            className="text-yellow-500 cursor-pointer font-bold"
            onClick={() => navigate("/signup")} // Navigate to signup page
          >
            Sign up
          </span>
        </p>
      </section>
    </form>
  );
};

export default Login;
