// components/Ingredients.js
import Image from "next/image";
import IngredientCard from "./IngredientCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "../utils/motion";

const Ingredients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.2 });
  return (
    <div
      id="about"
      ref={ref}
      className="max-w-[1240px] w-full lg:h-screen mx-auto p-2 flex justify-center items-center py-24"
    >
      {/* Container for ingredient cards */}
      <div className="container mx-auto px-4 py-12">
        {/* Headings */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold">Ingredients</h1>
          <p className="mt-4 text-lg">
            Here are the main ingredients that we use for our drinks.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={slideUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* IngredientCard instances with different background colors */}
          <IngredientCard
            imageSrc="/assets/images/hibiscus.png"
            title="HIBISCUS "
            description="A tangy and refreshing tea, rich in Vitamin C."
            bgColor="bg-red-400"
            textColor="text-red-400"
            href="/ingredients/hibiscus"
          />
          <IngredientCard
            imageSrc="/assets/images/ginger.png"
            title="GINGER"
            description="Soothing caffeine-free ginger."
            bgColor="bg-yellow-200"
            textColor="text-yellow-200"
            href="/ingredients/hibiscus"
          />
          <IngredientCard
            imageSrc="/assets/images/pineapple.png"
            title="PINEAPPLE"
            description="Juicy and rich in vitamin C, aiding digestion and immunity."
            bgColor="bg-yellow-400"
            textColor="text-yellow-400"
            href="/ingredients/hibiscus"
          />
          <IngredientCard
            imageSrc="/assets/images/lemon.png"
            title="LEMON"
            description="Packed with vitamin C, lemons boost immunity and rejuvenate skin."
            bgColor="bg-green-300"
            textColor="text-red-200"
            href="/ingredients/hibiscus"
          />
          {/* Add more IngredientCard instances if needed */}
        </motion.div>
      </div>
    </div>
  );
};

export default Ingredients;
