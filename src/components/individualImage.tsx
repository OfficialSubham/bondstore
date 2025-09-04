import { X } from "lucide-react";

const IndividualImage = ({
  imgSrc,
  setImgSrc,
}: {
  imgSrc: string;
  setImgSrc: (src: string) => void;
}) => {
  const handleRemoveImage = () => {
    setImgSrc("");
  };
  return (
    imgSrc && (
      <div className=" fixed z-30 bg-slate-300 rounded-2xl shadow-2xl flex md:max-w-3xl mx-auto inset-x-4 h-4/5 pt-10">
        <div className="absolute right-3 top-3" onClick={handleRemoveImage}>
          <X />
        </div>
        <div className="flex-1 bg-slate-300 rounded-b-2xl">
          <img
            src={imgSrc}
            alt="Image"
            className="w-full h-full object-cover rounded-b-2xl"
          />
        </div>
      </div>
    )
  );
};

export default IndividualImage;
