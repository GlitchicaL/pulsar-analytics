"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"

// Temporarily import HeaderMenu so we can play with styles. This may or may not be moved
import Accordion from "./Accordion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: "-100%" },
}

const links = [
  {
    title: "Home",
    isLink: true,
  },
  {
    title: "Product",
    isLink: false,
    children: [
      { text: "Uniswap V2", isLink: true },
    ]
  },
  {
    title: "Pricing",
    isLink: true,
  },
  {
    title: "Resources",
    isLink: false,
    children: [
      { text: "Documentation", isLink: true },
      { text: "Tutorials & Examples", isLink: true },
      { text: "Blogs", isLink: true },
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

      <ul className="hidden md:flex col-[9/12] md:col-[6/12] flex-wrap justify-end content-center gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>

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
        className={`${isMobileMenuOpen ? "absolute md:hidden" : "hidden"} top-24 w-full row-2 col-[1/13] bg-black-pearl`}
        animate={isMobileMenuOpen ? "open" : "close"}
        variants={variants}
      >
        <Accordion items={links} />
      </motion.div>
    </header>
  );
}

export default Header;