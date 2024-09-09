import LoginBento from "./partials/LoginBento";
import Login from "./partials/Login";
const LoginPage = () => {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row md:justify-center m-6 gap-6 h-fit">
      <div className="hidden sm:flex  lg:w-1/2">
        <LoginBento />
      </div>
      <div className="flex place-content-center md:w-1/2">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
