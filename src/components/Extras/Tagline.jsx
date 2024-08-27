import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "Web Development"
  },
  {
    id: 2,
    content: "App Development"
  },
  {
    id: 3,
    content: "Social Media Management"
  },
  {
    id: 4,
    content: "SEO"
  },
  {
    id: 5,
    content: "UI / UX"
  },
  {
    id: 6,
    content: "Digital Marketing"
  },
  {
    id: 7,
    content: "Influencer Marketing"
  },
  {
    id: 8,
    content: "Ads Marketing"
  },
  {
    id: 9,
    content: "Influencer Management"
  },
  {
    id: 10,
    content: "Wordpress Development"
  },
  
];

const Test01 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence>
        <motion.div
          key={items[index].id}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ ease: "easeInOut" }}
          style={{ position: "absolute"}}
          className=" md:mb-10 font-semibold font-roboto text-2xl md:text-4xl lg:text-6xl text-secondary_bright"

        >
          {items[index].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Test01;
