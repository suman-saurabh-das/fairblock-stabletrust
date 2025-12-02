const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <video
        className="
          absolute
          -rotate-135
          w-[500px]
          sm:w-[1200px]

          /* mobile center*/
          left-1/2 top-1/3 -translate-x-1/2

          /* desktop position */
          sm:translate-x-36
          sm:translate-y-0
          sm:left-auto
          sm:right-0
          sm:-top-32
        "
        autoPlay
        loop
        muted
        playsInline
        // onLoadedMetadata={(e) => {
        //   e.currentTarget.currentTime = 3; // ⬅ start at 3 seconds
        // }}
      >
        <source src="/s01-hero-animation-new.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
