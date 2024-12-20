"use client";
import { CloudinaryImg } from "@/utils/types";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useEffect, useState } from "react";

export default function ImgCarousel({ images }: { images: CloudinaryImg[] }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showNextImg();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function showNextImg() {
    setImgIndex((index) => {
      // React autmatically passes the imgIndex value here where it says index
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
    <div className="relative" style={{ aspectRatio: 16 / 7 }}>
      <div className="w-full h-full overflow-hidden flex">
        {images.map((item: CloudinaryImg, index: number) => (
          <CldImage
            width="1980"
            height="1200"
            src={item.public_id}
            alt="Description of my image"
            className="block object-cover rounded-lg"
            style={{
              translate: `${-100 * imgIndex}%`, //This moves all the images, every time you press it, by 100% to the LEFT, thats why the - 100 and not 100
              flexShrink: 0,
              flexGrow: 0,
              transition: "translate 350ms ease-in-out",
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

// <div
//     className="relative max-w-[1024px] max-h-[683px] "
//     style={{ aspectRatio: 3 / 2 }}
//   >
//     <div
//       className="w-full h-full overflow-hidden flex"
//       style={{
//         maskImage:
//           "linear-gradient(to left, black 0%, black 60%, transparent 100%)",
//         WebkitMaskImage:
//           "linear-gradient(to left, black 0%, black 60%, transparent 100%)",
//       }}
//     >
//       {images.map((item: CloudinaryImg, index: number) => (
//         <CldImage
//           width="1980"
//           height="1200"
//           src={item.public_id}
//           alt="Description of my image"
//           className="block object-cover rounded-lg"
//           style={{
//             translate: `${-100 * imgIndex}%`, //This moves all the images, every time you press it, by 100% to the LEFT, thats why the - 100 and not 100
//             flexShrink: 0,
//             flexGrow: 0,
//             transition: "translate 350ms ease-in-out",
//           }}
//           key={index}
//         />
//       ))}
//     </div>
//   </div>
// );
