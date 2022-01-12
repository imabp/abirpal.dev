import Image from "next/image";

interface AvatarSectionProps {
  avatar: any;
}
const AvatarSection = ({ avatar }: AvatarSectionProps) => {
  return (
    <>
      <div>
        <Image
          src={avatar}
          alt="Abir Pal Image"

          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </>
  );
};
export default AvatarSection;
