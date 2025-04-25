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

interface DesktopNavProps {
  links: (DirectLink | GroupLinks)[];
}

// Responsible for opening and closing items.
const transformVariants = {
  open: { opacity: 1, y: "5%", transition: { staggerChildren: 0.30 } },
  close: { opacity: 0, y: "50%" },
}

// Responsible for rotating the chevron depending on open or close state.
const rotateChevronVariants = {
  open: { rotate: -180 },
  close: { rotate: 0 },
}

function DesktopNav({ links }: DesktopNavProps) {
  // Keep track of what item in the should be open. 
  // -1 means no items are opened.
  const [openIndex, setOpenIndex] = useState(-1);

  function openIndexHandler(e: React.SyntheticEvent | MouseEvent, id: number) {
    if (openIndex === id && e.type === "pointerleave") {
      // This tab is already open, so this means the user
      // wants to close it. 

      // We also specify "pointerleave" to avoid any
      // weird jumping animations when focusing & clicking.
      setOpenIndex(-1);
    } else {
      setOpenIndex(id);
    }
  }

  return (
    <ul className="flex gap-6">
      {links.map((link, index) => (
        <li key={index} className="place-content-center">
          {link.url ? (
            <Link href={link.url ?? "/"} className="header-nav-desktop hover:text-grass">
              {link.title}
            </Link>
          ) : (
            <motion.div
              onHoverStart={(e) => openIndexHandler(e, index)}
              onHoverEnd={(e) => openIndexHandler(e, index)}
              onFocus={(e) => openIndexHandler(e, index)}
              tabIndex={0}
              className="header-nav-desktop hover:bg-blue"
            >
              <div className="flex gap-4">
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
                className={`${openIndex === index ? "absolute" : "hidden"} bg-black-pearl border-1 rounded-md p-2 left-0 w-[150%]`}
                animate={openIndex === index ? "open" : "close"}
                variants={transformVariants}
              >
                {link.children && link.children.map((child, index) => (
                  <motion.li key={index} variants={transformVariants}>
                    <Link href={child.url} className="link link-green p-2 text-sm">
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

export default DesktopNav;