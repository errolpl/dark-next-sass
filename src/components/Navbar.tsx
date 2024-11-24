import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4 ">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            {/* Logo Image */}
            <Image
              src={logoImage}
              alt="Saas logo"
              className="h-12 w-12 relative z-10"
            />

            {/* Gradient Blur */}
            <div
              className="absolute inset-0 blur-md z-0"
              style={{
                background:
                  "linear-gradient(to right, #FCD6FF, #29d8ff, #fffd80, #f89abf)",
              }}
            ></div>
          </div>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden gap-6 items-center sm:flex">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customer
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
