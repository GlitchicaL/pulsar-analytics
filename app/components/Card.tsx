"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface CardProps {
  app: {
    name: string,
    image: string,
    url?: string,
    released: boolean,
  }
}

function Card({ app }: CardProps) {
  return (
    <motion.a
      href={app.url ?? "/"}
      className="card"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      {!app.released && (
        <div className="card-disclaimer">
          Coming Soon!
        </div>
      )}
      <Image src={app.image} alt={`${app.name} logo`} width={150} height={150} className="card-image" />
      <p className="card-text">{app.name}</p>
    </motion.a>
  );
}

export default Card;