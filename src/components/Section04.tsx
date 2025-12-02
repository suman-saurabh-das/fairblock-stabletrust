// components
import ScrollStepSection from "./custom/ScrollStepSection";

const STEPS = [
  {
    title: "Payments",
    description:
      "Pay employees, contractors, partners, KOLs, and vendors without leaking comp, rates, or terms",
    image: "/s04-payments.png",
  },
  {
    title: "Treasury",
    description:
      "Move funds between OTC desks, DAOs, and institutions without signalling liquidity strategy or cash runway.",
    image: "/s04-trading.svg",
  },
  {
    title: "Trading",
    description:
      "Build, balance, and settle positions without telling the market what you’re doing.",
    image: "/s04-treasury.svg",
  },
  {
    title: "Cross-Border",
    description:
      "Send stablecoins globally, keep amounts confidential, and still satisfy auditors, regulators, and banks on request.",
    image: "/s04-cross-border.svg",
  },
  {
    title: "Strategic Deals",
    description:
      "Make acquisitions or buy back tokens privately. No free early signal on block explorers.",
    image: "/s04-strategic-deals.svg",
  },
];

const Section04 = () => {
  return (
    <div className="wrapper">
      {/* MOBILE SCREEN */}
      <div className="lg:hidden my-20">
        <h3 className="font-charter font-bold mb-8 text-2xl sm:text-4xl">
          Built for Real Business
        </h3>
        <div className="flex flex-col gap-4 items-center">
          {STEPS.map((step) => {
            return (
              <div
                key={step.title}
                className="border border-primary-blue flex items-center rounded-xl h-[180px] sm:h-60 w-full"
              >
                <div className="flex-1 p-4 text-left">
                  <h3 className="font-charter font-bold mb-2 text-lg">
                    {step.title}
                  </h3>
                  <p className="font-sf-pro-display sm:text-lg">
                    {step.description}
                  </p>
                </div>

                <div className="flex-1 h-full">
                  <img
                    className="h-full w-full object-cover rounded-tr-xl rounded-br-xl"
                    src={step.image}
                    alt={step.title}
                  />
                </div>
              </div>
            );
          })}
          <a
            className="primary-button sm:hidden mt-8"
            href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
            rel="noopener noreferrer"
            target="_blank"
          >
            See More Use Cases
          </a>
        </div>
      </div>
      {/* LAPTOP SCREEN */}
      <div className="hidden lg:block w-full">
        <ScrollStepSection steps={STEPS} />
      </div>
    </div>
  );
};

export default Section04;
