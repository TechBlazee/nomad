import bentoImg from "../../../assets/images/login.svg";
import bentoTab from "../../../assets/images/login-tab.svg";

const LoginBento = () => {
  return (
    <section>
      <div className=" relative w-full max-h-full overflow-hidden hidden lg:block">
        <img
          src={bentoImg}
          alt="mountain view"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="relative w-full mt- lg:hidden ">
        <img src={bentoTab} alt="mountain view"  />
      </div>
    </section>
  );
};

export default LoginBento;
