import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Nelson</h3>

        <p>
          Hey Everyone, I'm Nelson, the founder of Burger Shop.
          <br />
          Our aim is to create the tastiest burger on the planet!
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
