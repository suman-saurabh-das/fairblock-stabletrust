const PLATFORMS_AND_INVESTORS: string[] = [
  "s06-anagram.png",
  "s06-galileo.png",
  "s06-dialectic.png",
  "s06-lemniscap.png",
  "Robot Ventures",
  "s06-axelar.png",
  "s06-arbitrum.png",
  "s06-gsr.png",
  "s06-chorus-one.png",
  "s06-reverie.png",
  "s06-atom.png",
  "s06-dora-hacks.png",
  "Zaki Manian",
  "Waikit Lau",
  "Leland Lee",
  "Calvin Liu",
  "George Lambeth",
  "Xavier Meegan",
  "Stefan Coolican",
  "Richard Malone",
  "Collin Myers",
  "Batu",
];

const Section06 = () => {
  return (
    <div className="wrapper mb-20 sm:my-20">
      <h3 className="font-bold font-charter text-2xl sm:text-4xl mx-auto">
        Trusted by the Best
      </h3>
      {/* PLATFORM AND INVESTORS GRID */}
      <div className="flex flex-wrap justify-center sm:gap-2 mx-auto">
        {PLATFORMS_AND_INVESTORS.map((item: string) => (
          <div
            key={item}
            className="w-1/3 md:w-1/5 xl:w-1/7 flex items-center justify-center p-4 rounded-lg"
          >
            {item.startsWith("s06") ? (
              <img
                className="max-h-6 lg:max-h-12 max-w-24 lg:max-w-36"
                src={item}
                alt={item}
              />
            ) : (
              <p className="font-sf-pro-display lg:text-2xl text-center">
                {item}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section06;
