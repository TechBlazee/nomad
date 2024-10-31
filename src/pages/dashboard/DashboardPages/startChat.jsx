import herobg from "../../../assets/images/dashboard/start-chat-bg.svg";

const StartChat = () => {
  return (
    <section className="bg-cover bg-center border-lg lg:w-1/2 ">
      <div className="h-fit md:h-[330px] overflow-hidden">
        <img
          src={herobg}
          alt=""
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default StartChat;
