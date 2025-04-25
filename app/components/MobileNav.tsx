"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface DirectLink {
  title: string;
  url: string;
  children?: never;
}

interface GroupLinks {
  title: string;
  children: {
    name: string;
    url: string;
  }[],
  url?: never;
}

interface MobileNavProps {
  links: (DirectLink | GroupLinks)[];
}

// Responsible for opening and closing items.
const transformVariants = {
  open: { opacity: 1, y: "0", transition: { staggerChildren: 0.30 } },
  close: { opacity: 0, y: "-100%" },
}

// Responsible for rotating the chevron depending on open or close state.
const rotateChevronVariants = {
  open: { rotate: -180 },
  close: { rotate: 0 },
}

function MobileNav({ links }: MobileNavProps) {
  // Keep track of what item in the should be open. 
  // -1 means no items are opened.
  const [openIndex, setOpenIndex] = useState(-1);

  function openIndexHandler(id: number) {
    if (openIndex === id) {
      // This tab is already open, so this means the user
      // wants to close it. 
      setOpenIndex(-1);
    } else {
      setOpenIndex(id);
    }
  }

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          {link.url ? (
            <Link href={link.url ?? "/"} className="header-nav-mobile link">
              {link.title}
            </Link>
          ) : (
            <motion.div
              onClick={() => openIndexHandler(index)}

              // TODO: Allow this to be focusable? Note using onFocus causes weird
              // jumping with animations.

              className="header-nav-mobile"
            >
              <div className="w-full flex justify-between">
                {link.title}
                <motion.img
                  animate={openIndex === index ? "open" : "close"}
                  variants={rotateChevronVariants}
                  src="/icons/chevron-down.svg"
                  alt="Down arrow"
                  width={15}
                  height={15}
                />
              </div>
              <motion.ul
                className={`${openIndex === index ? "block" : "hidden"}`}
                animate={openIndex === index ? "open" : "close"}
                variants={transformVariants}
              >
                {link.children && link.children.map((child, index) => (
                  <motion.li key={index} variants={transformVariants}>
                    <Link href={child.url} className="link link-green pt-4 text-lg">
                      {child.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default MobileNav;