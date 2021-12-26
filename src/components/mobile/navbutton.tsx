import Image from "next/image";

const NavButton = () => {
  return (
    <>
      <div
        className="
h-16 w-16
bg-primary
flex flex-col
justify-center
rounded-md
"
      >
        <Image src="/system/mobile/navmenu.svg" width="50" height="50" />
      </div>
    </>
  );
};
export default NavButton;
