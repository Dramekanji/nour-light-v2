// components/About.js
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { growIn } from "../utils/motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 1 });

  return (
    <div className="max-w-[1240px] w-full mx-auto px-2 py-24 mb-20">
      {/* Spacer div to offset the fixed navbar height */}
      <div id="about" className="pt-20 md:pt-24"></div>

      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">A bit about us</h1>
        <p className="mt-4 text-lg">Feel free to get in touch</p>
      </motion.div>

      <section
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-4"
      >
        {/* Left side with yellow background */}
        <motion.div
          className="bg-yellow-100 p-4"
          variants={growIn}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="text-center">
            <div className="w-64 h-64 relative inline-block">
              <Image
                src="/assets/images/ginjan.png"
                alt="Refreshing Drink"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-4xl font-bold text-orange-600 my-6">Ginjan</h2>
            {/* eslint-disable */}
            <p className="text-orange-700">
              Le jus de gingembre est une superbe boisson sollicitée en Afrique.
              Pour cause, il bénéficie d'&apos une teneur exeptionelle en
              nutriments et antioxidants. Le gingembre en lui même est une
              source de cuivre et de manganèse.
            </p>
            <blockquote className="italic border-l-4 border-orange-500 pl-4 mt-4 text-orange-600">
              “Ginjan, a fiery swirl of wellness in every sip.”
            </blockquote>
            {/* eslint-enable */}
          </div>
        </motion.div>

        {/* Right side with red background */}
        <motion.div
          className="bg-red-500 p-4"
          variants={growIn}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="text-center">
            <div className="w-64 h-64 relative inline-block">
              <Image
                src="/assets/images/bissap2.png"
                alt="Refreshing Drink"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-4xl font-bold text-white my-6">Bissap</h2>
            {/* eslint-disable */}
            <p className="text-white">
              Le jus de Bissap est riche en antioxidants, protéines, lipides,
              minéraux, fer, et en vitamines C. Favorisant ainsi un système
              immunitaire sain.
            </p>
            <blockquote className="italic border-l-4 border-white pl-4 mt-4 text-white">
              “Bissap, a sweet sip to health and happiness.”
            </blockquote>
            {/* eslint-enable */}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
