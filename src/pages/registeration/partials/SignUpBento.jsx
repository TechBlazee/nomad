import bentoImg from "../../../assets/images/signup.svg";
import bentoTab from "../../../assets/images/signup-tab.svg";

const SignUpBento = () => {
  return (
    <section>
    <div className=" relative w-full max-h-full overflow-hidden hidden lg:block ">
        <img src={bentoImg} alt="water fall" className="h-full w-full object-contain"/>
    </div>
    <div className="relative w-full mt- lg:hidden ">
   <img src={bentoTab} alt="water fall"  />
 </div>
    </section>
  ); 
};

export default SignUpBento;
