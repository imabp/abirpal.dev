export type CardProps = {
  title: string;
  link: string;
};
const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <>
      <div className="p-4  border-2 w-full h-full rounded-xl    ">
        <a href={props.link} className="block">
          <p className="text-2xl font-bold">{props.title}</p>
        </a>
      </div>
    </>
  );
};
export default Card;
