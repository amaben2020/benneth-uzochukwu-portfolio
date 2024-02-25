import Image from "next/image";
import profile from "./../../../../../public/avatar.png";
export const ImageCard = () => {
  return (
    <Image
      src={profile}
      className="rounded-lg hover:scale-110 transition-all duration-300 z-20"
      alt=""
      width={360}
      height={365}
    />
  );
};
