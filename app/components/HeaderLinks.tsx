import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

interface HeaderLinksProps {
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
  open: { opacity: 1, y: "5%", transition: { staggerChildren: 0.30 } },
  close: { opacity: 0, y: "50%" },
}

// Responsible for rotating the chevron depending on open or close state.
const rotateChevronVariants = {
  open: { rotate: -180 },
  close: { rotate: 0 },
}

function HeaderLinks({ items }: HeaderLinksProps) {
  // Keep track of what item in the accordion should be open. 
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
    <ul className="flex gap-6">
      {items.map((item, index) => (
        <li key={index}>
          {item.isLink ? (
            <Link href="/" className="p-2 text-md flex justify-between hover:text-grass">
              {item.title}
            </Link>
          ) : (
            <motion.div
              onHoverStart={() => openIndexHandler(index)}
              onHoverEnd={() => openIndexHandler(index)}
              tabIndex={0}
              onFocus={() => openIndexHandler(index)}
              className="p-2 text-md cursor-pointer rounded-md relative hover:bg-blue"
            >
              <div className="flex gap-4">
                {item.title}
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
                variants={transformAccordionVariants}
              >
                {item.children.map((child, index) => (
                  <motion.li key={index} variants={transformAccordionVariants}>
                    {child.isLink ? (
                      <Link href="/pricing" className="p-2 text-sm w-full flex justify-between hover:text-grass">
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
            </motion.div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default HeaderLinks;