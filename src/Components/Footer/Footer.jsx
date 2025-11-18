// import LikeButton from './Likebutton';
import ky from "../../Home Page Component/Header Section/me1.png";
export default function Footer() {
  return (
    <>
      <div className="px-12 lg:px-8 py-3 flex flex-col  sm:flex-row  bg-indigo-600 w-full justify-center sm:justify-center items-center gap-4 sm:gap-32">
        <div className="flex flex-col items-center sm:items-center">
          <img src={ky} className="h-20 w-25 pl-6 sm:pl-12" alt="khushi" />
          <p className="mt-4 text-white text-xs sm:text-sm font-semibold ">
            &copy; 2024 Khushbu Yadav all right reserved
          </p>
        </div>
        <div>{/* <LikeButton /> */}</div>
      </div>
    </>
  );
}
