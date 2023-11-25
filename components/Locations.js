// components/Locations.js
import LocationCard from "./LocationCard";
import { motion } from "framer-motion";
import { slideUp } from "../utils/motion"; // Import slideUp from your motion utility

const Locations = () => {
  return (
    <div
      id="locations"
      className="max-w-[2000px] mx-auto py-24 px-4 min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-[#CD5C5C] mb-3">
          Our Locations
        </h1>
        <p className="text-lg text-[#CD5C5C]">
          You can find our drinks at the following locations:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wrap each LocationCard with a motion.div and apply the slideUp animation */}
        <motion.div variants={slideUp} initial="initial" whileInView="animate">
          <LocationCard
            imageSrc="/assets/images/ehi.jpeg"
            altText="Marché EHI"
            name="Marché EHI"
            address="1201 90th Avenue, LaSalle, QC H8R 3A6"
          />
        </motion.div>
        {/* Repeat for other LocationCard components... */}
      </div>
    </div>
  );
};

export default Locations;
