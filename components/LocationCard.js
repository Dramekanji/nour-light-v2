// components/LocationCard.js
import Image from "next/image";

const LocationCard = ({ name, address, imageSrc, altText }) => {
  return (
    <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-full mx-auto my-8">
      <div className="w-1/2">
        <Image
          src={imageSrc}
          alt={altText}
          width={500}
          height={300}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between p-4">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-gray-600 mt-auto">{address}</p>{" "}
        {/* Adjusted this line */}
      </div>
    </div>
  );
};

export default LocationCard;
