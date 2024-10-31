import bentoImg from "../../../assets/images/login.svg";
import bentoTab from "../../../assets/images/login-tab.svg";

const LoginBento = () => {
  return (
    <section className="h-screen w-auto mx-auto"> {/* Full screen height */}
      <div className="relative w-full h-full overflow-hidden hidden lg:block ">
        <img
          src={bentoImg}
          alt="mountain view"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full h-full lg:hidden">
        <img src={bentoTab} alt="mountain view" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default LoginBento;
