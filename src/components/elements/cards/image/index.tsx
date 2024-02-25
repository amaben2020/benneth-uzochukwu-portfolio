import Image from "next/image";
import profile from "./../../../../../public/avatar.png";
export const ImageCard = () => {
  return (
    <Image
      src={profile}
      className="rounded-lg hover:scale-105 transition-all duration-300 z-20 hover:cursor-not-allowed w-full"
      alt=""
      width={300}
      height={200}
    />
  );
};
