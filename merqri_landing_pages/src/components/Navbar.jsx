import { navLinks } from "../constants";
import { IoMenu } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="hidden sm:block">
        <div className="flex py-6 items-center justify-between navbar mx-20">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" className="h-8" />
          </Link>
          <div className="flex items-center">
            <ul className="flex gap-6">
              <Link to="/" className="text-gray-600 font-semibold">
                Home
              </Link>
              {navLinks.map((link, index) => (
                <li key={index} className="-ml-3">
                  <a
                    href={`#${link.id}`}
                    className="text-xs md:text-[15px] font-semibold text-gray-600 hover:text-black cursor-pointer"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <Link to="/partnership" className="text-gray-600 font-semibold">
                Partners
              </Link>
            </ul>
          </div>
          <Link
            to="/waitlist"
            className={`ml-4 bg-primary text-white font-semibold py-2 px-4 rounded-lg cursor-pointer text-xs md:text-sm`}
          >
            Join The Waitlist 
          </Link>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden bg-white shadow-md p-4 w-full flex items-center justify-between">
        <img src="/images/logo.png" alt="Merqri Logo" className="h-8" />
        <Sheet>
          <SheetTrigger className="">
            <IoMenu size={28} className="text-gray-600" />
          </SheetTrigger>
          <SheetContent className="bg-white pt-14">
            <SheetHeader>
              <SheetTitle className="flex">
                <img src="/images/logo.png" alt="logo" className="h-8" />
              </SheetTitle>
              <SheetDescription className="flex justify-start">
                <div className="mt-10">
                  <ul className="flex flex-col text-left gap-10">
                    {navLinks.map((link, index) => (
                      <li key={index} className="">
                        <a
                          href={link.href}
                          className="font-semibold hover:text-black cursor-pointer text-gray-600"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
