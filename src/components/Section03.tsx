type CardProps = {
  id: string;
  imgUrl: string;
  title: string;
  content: string;
};

const CARD_DETAILS = [
  {
    id: "01",
    imgUrl: "/s03-individuals.svg",
    title: "Individuals",
    content:
      "Keep payments and transfers private. Protect your financial activity and relationships.",
  },
  {
    id: "02",
    imgUrl: "/s03-traders.svg",
    title: "Traders",
    content:
      "Stop signaling your moves onchain to bots and copy traders. Protect your strategy and capital.",
  },
  {
    id: "03",
    imgUrl: "/s03-business-and-institutions.svg",
    title: "Businesses and Institutions",
    content:
      "Keep payroll and commercial terms confidential. Protect your competitive edge and regulatory standing.",
  },
];

const Card = ({ id, imgUrl, title, content }: CardProps) => {
  return (
    <div
      className={`${
        id !== "03" ? "sm:border-r border-primary-blue pr-4" : ""
      } flex-1`}
    >
      <div className="lg:px-4">
        <span className="hidden sm:block font-sf-pro-display text-primary-blue">
          {id}
        </span>
        <img
          className="h-24 mt-12 lg:mt-16 mb-6 mx-auto"
          src={imgUrl}
          alt={title}
        />
        <span className="sm:hidden font-sf-pro-display text-primary-blue text-lg">
          {id}
        </span>
        <h5 className="font-charter font-bold mb-2 text-xl sm:text-2xl">
          {title}
        </h5>
        <p className="font-sf-pro-display sm:text-lg">{content}</p>
      </div>
    </div>
  );
};

const Section03 = () => {
  return (
    <div className="wrapper">
      <h3 className="font-bold font-charter text-2xl sm:text-4xl">
        Protect What Matters
      </h3>
      <div className="flex flex-col gap-4 sm:flex-row">
        {CARD_DETAILS.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              imgUrl={card.imgUrl}
              title={card.title}
              content={card.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section03;
