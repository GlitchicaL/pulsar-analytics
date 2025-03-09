"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react"

interface AccordionProps {
  items: {
    title: string,
    isLink: boolean,
    children: {
      text: string,
      isLink: boolean,
    }[],
  }[],
}

// Responsible for opening and closing accordion items.
const transformAccordionVariants = {
  open: { opacity: 1, y: 0, transition: { staggerChildren: 0.30 } },
  close: { opacity: 0, y: "-100%" },
}

// Responsible for rotating the chevron depending on open or close state.
const rotateChevronVariants = {
  open: { rotate: -180 },
  close: { rotate: 0 },
}

function Accordion({ items }: AccordionProps) {
  // Keep track of what item in the accordion should be open. 
  // -1 means no items are opened.
  const [openIndex, setOpenIndex] = useState(-1);

  function openIndexHandler(id: number) {
    if (openIndex === id) {
      // This tab is already open, so this means the user
      // wants to close it. 
      setOpenIndex(-1);
    } else {
      setOpenIndex(id)
    }
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.isLink ? (
            <Link href="/" className="p-4 text-xl w-full flex justify-between border-b-1">
              {item.title}
            </Link>
          ) : (
            <button
              onClick={() => openIndexHandler(index)}
              className="p-4 text-xl w-full border-b-1 cursor-pointer"
            >
              <div className="w-full flex justify-between">
                Product
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
                variants={transformAccordionVariants}
              >
                {item.children.map((child, index) => (
                  <motion.li key={index} variants={transformAccordionVariants}>
                    {child.isLink ? (
                      <Link href="/pricing" className="pt-4 text-lg w-full flex justify-between">
                        {child.text}
                      </Link>
                    ) : (
                      <p>
                        {child.text}
                      </p>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Accordion;