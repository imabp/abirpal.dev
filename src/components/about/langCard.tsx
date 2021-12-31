export type LangCardProps = {
  name: string;
  bg: string;
  fontMode: "dark" | "light";
};
const LangCard = ({ name, bg, fontMode = "light" }: LangCardProps) => {
  return (
    <>
      <div id={`lang-card-${name}`}>
        <p
          className={`rounded-sm ${bg} cursor-pointer flex p-5 justify-center ${
            fontMode === "dark" ? "lang-font-black" : "text-lang-font-white"
          }`}
        >
          {name}
        </p>
      </div>
    </>
  );
};
export default LangCard;
