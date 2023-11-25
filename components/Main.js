// components/Main.js
import { motion } from "framer-motion";
import Image from "next/image";
import { containerVariants } from "../utils/motion";
import { slideInFromRight } from "../utils/motion";

const Main = () => {
  return (
    <main className="bg-[#F5F5DC] w-full min-h-screen pt-20 md:pt-0">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-wrap items-center justify-center">
          {/* Text Section */}
          <div className="md:w-1/2 px-4 md:px-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-4 ml-40"
            >
              <h2 className="text-5xl font-bold text-[#CD5C5C]">
                100% NATURAL
                <br />
                ALWAYS FRESH.
              </h2>
              <p className="text-gray-600">
                Naturellement votre, le goût authentique de la santé.
              </p>
              <a
                href="#"
                className="inline-block bg-[#CD5C5C] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide"
              >
                Find Us
              </a>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center px-4 md:px-2 mt-8 md:mt-0">
            <motion.div
              initial="initial"
              animate="animate"
              variants={slideInFromRight}
            >
              <Image
                src="/assets/images/bisaap-ginjan.png" // Ensure this is the correct path to your image
                width={500}
                height={600}
                alt="Bottle of natural fruit drink"
                className="transform transition duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
