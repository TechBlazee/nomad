import star from "../../../assets/icons/Star-black.svg";
const Favorite = () => {
  return (
    <section className="text-center bg-[#FEF8EF] border border-[#FEF8EF] p-10 rounded-lg lg:w-1/2 flex flex-row justify-center items-center">
      <div className="text-center space-y-4 p-3">
        <img
          src={star}
          alt="black star"
          width={24}
          height={24}
          className="mx-auto"
        />
        <h6 className="font-medium ">No favorites</h6>
        <p className="text-[#FB983C]">Add</p>
      </div>
    </section>
  );
};

export default Favorite;
