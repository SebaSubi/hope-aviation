"use client";
import { CloudinaryImg } from "@/utils/types";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function ImgCarousel({ images }: { images: CloudinaryImg[] }) {
  const [imgIndex, setImgIndex] = useState(0);

  function showNextImg() {
    setImgIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImg() {
    setImgIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <div
      className="relative max-w-[800px] max-h-[533px] "
      style={{ aspectRatio: 3 / 2 }}
    >
      <div className="w-full h-full overflow-hidden flex">
        {images.map((item: CloudinaryImg, index: number) => (
          <CldImage
            width="1980"
            height="1200"
            src={item.public_id}
            alt="Description of my image"
            className="block object-cover"
            style={{
              translate: `${-100 * imgIndex}%`, //This moves all the images, every time you press it, by 100% to the LEFT, thats why the - 100 and not 100
              flexShrink: 0,
              flexGrow: 0,
              transition: "translate 300ms ease-in-out",
            }}
            key={index}
          />
        ))}
      </div>
      <button
        className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0"
        onClick={showPrevImg}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0"
        onClick={showNextImg}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
