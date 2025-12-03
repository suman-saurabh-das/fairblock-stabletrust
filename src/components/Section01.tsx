// components
import BackgroundVideo from "./custom/BackgroundVideo";
import TypingTextAnimation from "./custom/TypingTextAnimation";

const words = ["Payments", "Trading", "Commerce", "Payroll", "Strategic Deals"];

const Section01 = () => {
  return (
    <div className="wrapper min-h-screen w-full!">
      <BackgroundVideo />
      <h2 className="font-bold font-charter text-2xl sm:text-4xl">
        Incorruptible Money Movement for{" "}
        <span className="italic">
          <TypingTextAnimation texts={words} />
        </span>
      </h2>
      <p className="font-light font-sf-pro-display text-lg sm:text-xl">
        Confidential stablecoins that keep amounts and balances private. <br />
        You decide who can see what and when.
      </p>
      <a
        className="primary-button"
        href="https://app.stabletrust.io/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Get Started
      </a>
    </div>
  );
};

export default Section01;
