const Section02 = () => {
  return (
    <div className="wrapper min-h-screen mb-20 bg-white">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div>
          <h3 className="font-bold font-charter mb-8 text-2xl sm:text-4xl">
            Stop the Leak
          </h3>
          <div className="font-sf-pro-display font-light flex flex-col gap-4 text-lg sm:text-xl max-w-[640px]">
            <p>
              Moving money onchain means leaking sensitive financial
              information. <br /> Anyone can see how much you paid, who you paid, when
              you paid, and how much you still hold. That exposes payments,
              salaries, vendor terms, treasury moves, and strategies in real
              time.
            </p>
            <p>That’s not how real business operates.</p>
            <p>
              Stabletrust finally makes privacy painless and usable on
              blockchains through confidentiality.
            </p>
            <p className="hidden sm:block font-sf-pro-display font-bold italic sm:text-lg">
              Confidentiality [kon-fi-den-shi-al-i-tee]:
              <br />
              Incorruptible money movement with built-in compliance.
            </p>
          </div>
        </div>
        <video
          className="max-w-1/2 md:max-w-1/4 mx-auto sm:mx-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/s02-animation.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="sm:hidden font-sf-pro-display font-bold italic sm:text-xl text-center">
        Confidentiality [kon-fi-den-shi-al-i-tee]:
        <br />
        Incorruptible money movement
        <br /> with built-in compliance.
      </p>
    </div>
  );
};

export default Section02;
