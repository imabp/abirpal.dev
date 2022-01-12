interface NameAndTitleProps {
  first: string;
  last: string;
  title: string;
}
const NameAndTitle = ({ first, last, title }: NameAndTitleProps) => {
  return (
    <>
      <div
        className="
           iphones:text-fs44  iphonex:text-fs50 
           ipadpro:text-fs64 ipad:text-fs64
           desktop:text-fs64
           flex flex-col
          "
      >
        {first} {last}
      </div>
      <div
        className="
           iphones:text-fs18 iphonex:text-fs30 
           ipadpro:text-fs50 ipad:text-fs50
           desktop:text-fs50
           flex flex-col
          "
      >
        {title}
      </div>
    </>
  );
};
export default NameAndTitle;
