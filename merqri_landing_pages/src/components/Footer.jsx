import {
  footerDetails1,
  footerDetails2,
  footerLinks,
} from "../constants/index";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary px-6  md:px-20 py-16 flex flex-col gap-16">
      <div className="hidden  md:block">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-10">
            <img src="/images/logowhite.png" alt="" className="w-[12rem]" />
            <div className="flex items-center gap-5">
              {footerLinks.map((link) => (
                <p
                  key={link.name}
                  className="text-white text-base cursor-pointer"
                >
                  <link.icon size={25} />
                </p>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-20">
            <div>
              {footerDetails1.map((details) => (
                <div key={details.title}>
                  <p className="text-white text-lg mb-2">{details.title}</p>
                  <ul>
                    {details.links.map((link) => (
                      <li
                        key={link.name}
                        className="text-[#AE7D4B] font-[500] text-base cursor-pointer"
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {footerDetails2.map((details) => (
                <div key={details.title}>
                  <p className="text-white text-lg mb-2">{details.title}</p>
                  <ul>
                    {details.links.map((link) => (
                      <li
                        key={link.name}
                        className="text-[#AE7D4B] text-base font-[500] cursor-pointer"
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <img src="/images/logowhite.png" alt="" className="w-[10rem]" />
            <div className="flex items-center gap-5">
              {footerLinks.map((link) => (
                <p
                  key={link.name}
                  className="text-white text-base cursor-pointer"
                >
                  <link.icon size={20} />
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              {footerDetails1.map((details) => (
                <div key={details.title}>
                  <p className="text-white text-lg mb-2">{details.title}</p>
                  <ul>
                    {details.links.map((link) => (
                      <li
                        key={link.name}
                        className="text-[#AE7D4B] font-[500] text-sm cursor-pointer"
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              {footerDetails2.map((details) => (
                <div key={details.title}>
                  <p className="text-white text-lg mb-2">{details.title}</p>
                  <ul>
                    {details.links.map((link) => (
                      <li
                        key={link.name}
                        className="text-[#AE7D4B] text-sm font-[500] cursor-pointer"
                      >
                        {link.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img src="/images/line.png" alt="" className="" />
      <p className="text-xl text-white text-center">
        @ All rights reserved. merqri, Inc
      </p>
    </footer>
  );
};

export default Footer;
