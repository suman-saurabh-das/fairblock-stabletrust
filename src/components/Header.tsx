import { useState } from "react";
// icons
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false);

  return (
    <>
      <div className="bg-white flex justify-between px-4 sm:px-12 py-4 relative z-10">
        {/* APP LOGO */}
        <div className="flex gap-2 items-center">
          <img
            className="h-6 sm:h-8"
            src="/stable-trust-logo.svg"
            alt="app-logo"
          />
        </div>

        {/* NAV MENU */}
        <div className="hidden sm:flex gap-12 items-center">
          <div className="flex gap-4">
            <a
              href="https://stabletrust.fairblock.network/how-it-works.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              How it works
            </a>
            <a
              href="https://stabletrust.fairblock.network/how-it-works.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              FAQ
            </a>
          </div>
          <a
            className="hidden sm:block primary-button"
            href="https://stabletrust.fairblock.network/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Launch App
          </a>
        </div>

        {/* MOBILE NAV MENU BUTTON */}
        <button
          className="cursor-pointer sm:hidden"
          onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
        >
          {isMobileNavbarOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </button>
      </div>

      {/* MOBILE NAV MENU */}
      <div
        className={`${
          isMobileNavbarOpen
            ? "opacity-100 translate-y-20"
            : "opacity-0 -translate-y-36"
        } absolute top-0 left-1/2 -translate-x-1/2 bg-white border-2 border-primary-blue duration-300 flex sm:hidden flex-col gap-4 p-2 rounded-lg text-center w-[90vw]`}
      >
        <a
          className="py-2"
          href="https://stabletrust.fairblock.network/how-it-works.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          How it works
        </a>
        <a
          className="py-2"
          href="https://stabletrust.fairblock.network/how-it-works.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          FAQ
        </a>
      </div>
    </>
  );
};

export default Header;
