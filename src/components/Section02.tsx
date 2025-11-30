const Section02 = () => {
  return (
    <div className="wrapper pt-20 mb-20 bg-white">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div>
          <h3 className="font-bold font-charter mb-8 text-2xl sm:text-4xl">
            Stop the Leak
          </h3>
          <div className="font-sf-pro-display font-light flex flex-col gap-4 sm:text-lg max-w-[640px]">
            <p>
              Moving money onchain means leaking sensitive financial
              information. Anyone can see how much you paid, who you paid, when
              you paid, and how much you still hold. That exposes payments,
              salaries, vendor terms, treasury moves, and strategies in real
              time.
            </p>
            <p>That’s not how real business operates.</p>
            <p>
              Stabletrust finally makes privacy painless and usable on
              blockchains.
            </p>
            <p className="hidden sm:block font-sf-pro-display font-bold italic sm:text-lg">
              Stabletrust finally makes privacy painless and usable on blockchains through confidentiality.
            </p>
          </div>
        </div>
        <video className="md:max-w-1/2 xl:max-w-2/5" autoPlay loop muted playsInline>
          <source src="/s02-animation.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="sm:hidden font-sf-pro-display font-bold italic sm:text-lg">
        Private by default. Verifiable on demand.
      </p>
    </div>
  );
};

export default Section02;
