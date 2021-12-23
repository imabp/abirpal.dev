import Image from "next/image";
import smallCircle from "../../public/assets/circle.svg";
const Navbar = () => {
  return (
    <>
      <div className="p-10 pl-28">
        <div className="hidden md:font-sans md:flex md:items-center md:justify-start md:inline-block md:align-middle  ">
          <Image
            className="inline-block align-middle"
            src={smallCircle}
            alt="Picture of the author"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className="px-12 font-sans">Schedule a Meet</div>
          <div className="px-12">About</div>
          <div className="px-12">Snippets</div>
          <div className="px-12">GuestBook</div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
