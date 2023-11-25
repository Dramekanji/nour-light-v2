// components/IngredientCard.js
import Image from "next/image";
import Link from "next/link";

const IngredientCard = ({
  title,
  description,
  imageSrc,
  bgColor,
  textColor,
  href,
}) => {
  return (
    <div
      className={` px-8 py-24 shadow-lg rounded-lg text-center flex flex-col hover:scale-105 ease-in duration-300 items-center ${bgColor}`}
    >
      <div className="w-32 h-32 mb-4">
        <Image
          src={imageSrc}
          alt="card image"
          width={128} // Adjust the size as needed
          height={128} // Adjust the size as needed
          className="rounded-full" // Makes the image round
          objectFit="cover" // Ensures the image covers the area
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      {/* Rating and reviews could go here */}
      <div className="flex items-center mt-2">
        {/* Placeholder for stars rating */}
        <Link href={href} passHref legacyBehavior>
          <a
            className={`bg-white border border-black p-2 rounded-lg cursor-pointer mt-2 ${textColor}`}
          >
            Learn More
          </a>
        </Link>
        {/* <div className="text-sm text-gray-500 ml-2">(392)</div> */}
      </div>
    </div>
  );
};

export default IngredientCard;
