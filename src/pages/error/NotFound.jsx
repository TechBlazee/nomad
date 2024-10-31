import error from "../../assets/images/error/vecteezy_404-landing-page_6549647.jpg";
function NotFound() {
  return (
    <div className="mx-auto p-8 py-24 md:w-1/2">
      <img src={error} alt="error page" />
    </div>
  );
}

export default NotFound;
