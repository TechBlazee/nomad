import bentoImg from "../../../assets/images/signup.svg";
import bentoTab from "../../../assets/images/signup-tab.svg";

const SignUpBento = () => {
  return (
    <section className="h-screen auto mx-auto">
    <div className=" relative w-full h-full overflow-hidden hidden lg:block ">
        <img src={bentoImg} alt="water fall" className="h-full w-full object-cover"/>
    </div>
    <div className="relative w-full lg:hidden ">
   <img src={bentoTab} alt="water fall"   className="w-full h-full object-cover"/>
 </div>
    </section>
  ); 
};

export default SignUpBento;
