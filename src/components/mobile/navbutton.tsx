import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";
interface NavButtonProps {
  overlay: boolean;
  setOverlay: Dispatch<SetStateAction<boolean>>;
}
const NavButton = ({ overlay, setOverlay }: NavButtonProps) => {
  return (
    <>
      <div
        className="relative
        z-99
h-16 w-16
bg-primary
flex flex-col
justify-center
rounded-md
cursor-pointer
"
        onClick={() => {
          setOverlay(!overlay);
        }}
      >
        <Image src="/system/mobile/navmenu.svg" width="50" height="50" />
      </div>
    </>
  );
};
export default NavButton;
