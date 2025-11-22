// icons
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[url(/footer.svg)] bg-no-repeat bg-cover wrapper flex flex-row! justify-between! gap-10! py-8">
      <div className="flex flex-col gap-[90px] sm:gap-4 items-start justify-between">
        <img className="h-10" src="/stable-trust-logo.svg" alt="stable-trust" />
        <p className="font-charter hidden sm:block">
          © 2025 Fairblock. All rights reserved.
        </p>
        <div className="flex gap-4 text-primary-blue text-2xl">
          <a
            href="https://discord.com/invite/fairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaDiscord />
          </a>
          <a
            href="https://x.com/0xfairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://t.me/+Nqmn7HnDz_A5N2M0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegramPlane />
          </a>
        </div>
      </div>
      <div className="flex gap-2 sm:text-lg">
        <div className="flex flex-col gap-2 items-start text-left w-1/2">
          <a
            href="https://docs.fairblock.network/docs/ConfidentialStablecoins"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href="https://github.com/Fairblock"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://www.fairblock.network/articles"
            rel="noopener noreferrer"
            target="_blank"
          >
            News
          </a>
          <a
            href="https://ballistic-sail-a4e.notion.site/Fairblock-Brand-Kit-4602243ba91c44b385dfdc9fccc426dc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Brand Kit
          </a>
        </div>
        <div className="flex flex-col gap-2 items-start text-left w-1/2">
          <a
            href="https://www.fairblock.network/careers"
            rel="noopener noreferrer"
            target="_blank"
          >
            Careers
          </a>
          <a
            href="https://fairblock.notion.site/Fairblock-Builders-Program-RFP-List-69cd0c7747904e89bd27257a359a80f1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Building Program
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
