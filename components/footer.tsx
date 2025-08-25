import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail } from "lucide-react";

const INSTAGRAM_URL =
  "https://www.instagram.com/kore_community?igsh=MXF3d2t0OW9lcWlleQ==";
const EMAIL_ADDRESS = "koreuganda@gmail.com";
const TIKTOK_URL = "https://www.tiktok.com/@koreuganda?_t=ZM-8yw3IODX3Pa&_r=1";
const X_URL =
  "https://x.com/koreuganda/status/1956746445987438633?s=46&t=Tfr3jwrWUTxeodxnngqWgA";

export function Footer() {
  // Helper function to get a valid image source
  const getValidImageSrc = (src: string | undefined | null): string => {
    if (!src || src === "") {
      return "/abstract-geometric-logo.png";
    }
    return src;
  };

  return (
    <footer className="bg-navy text-white py-8 sm:py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <Link href="#home" className="inline-block mb-4">
            <Image
              src={
                getValidImageSrc("./images/logo-no-background.png") ||
                "./placeholder.svg"
              }
              alt="Kore Logo"
              width={120}
              height={60}
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
            <Link
              href="#home"
              className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
            >
              About
            </Link>
            <Link
              href="#team"
              className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Team
            </Link>
            <Link
              href="#mission"
              className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Mission
            </Link>
            <Link
              href="#objectives"
              className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base"
            >
              Objectives
            </Link>
          </div>

          <div className="flex flex-col items-center mb-4 sm:mb-6">
            <div className="flex items-center gap-4 mb-2">
              <a
                href={INSTAGRAM_URL}
                className="text-gray-300 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 sm:h-6 w-5 sm:w-6" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Visit our TikTok"
              >
                <img
                  className="h-6 sm:h-7 w-6 sm:w-7"
                  src="./icons/tiktok-icon.svg"
                  alt="tiktok-icon"
                />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                aria-label="Visit our X"
              >
                <img
                  className="h-5 sm:h-6 w-5 sm:w-6"
                  src="./icons/x-icon.svg"
                  alt="X"
                />
              </a>
            </div>
            <span className="text-gray-300 text-sm sm:text-base">Follow our social media</span>
          </div>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center text-gray-300 hover:text-primary transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
            aria-label="Send us an email"
          >
            <Mail className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
            <span>{EMAIL_ADDRESS}</span>
          </a>

          <div className="border-t border-gray-800 w-full max-w-xs mx-auto pt-4 sm:pt-6">
            <p className="text-gray-400 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Kore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
