"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react"

// Temporarily import HeaderMenu so we can play with styles. This may or may not be moved
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const variants = {
  open: { opacity: 1, y: "0" },
  close: { opacity: 0, y: "-100%" },
}

const links = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Product",
    children: [
      {
        name: "Uniswap V2",
        url: "/uniswap-v2"
      },
    ]
  },
  {
    title: "Pricing",
    url: "/pricing"
  },
  {
    title: "Resources",
    children: [
      { name: "Documentation", url: "/documentation" },
      { name: "Tutorials & Examples", url: "/tutorials" },
      { name: "Blogs", url: "/blogs" },
    ]
  },
]

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="grid grid-cols-12 pt-6 relative">
      <div className="col-[2/9] md:col-[2/6] xl:col-[2/4] flex flex-wrap justify-start content-center gap-3">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={50}
          height={50}
        />
        <p className="my-auto">
          Pulsar Analytics
        </p>
      </div>

      <div className="hidden md:flex col-[9/12] md:col-[6/12] flex-wrap justify-end content-center gap-8">
        <DesktopNav links={links} />
      </div>

      <button
        className="col-[11/12] md:hidden cursor-pointer place-items-end"
        onClick={() => setIsMobileMenuOpen(isMobileMenuOpen ? false : true)}
      >
        <Image
          src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
          alt="Menu"
          width={25}
          height={25}
        />
      </button>

      <motion.div
        className={`${isMobileMenuOpen ? "absolute md:hidden" : "hidden"} top-full w-full my-2 row-2 col-[1/13] bg-black-pearl`}
        animate={isMobileMenuOpen ? "open" : "close"}
        variants={variants}
      >
        <MobileNav links={links} />
      </motion.div>
    </header>
  );
}

export default Header;