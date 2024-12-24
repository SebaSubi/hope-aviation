import { montserrat } from "@/ui/fonts";
import ImgCarousel from "./ImgCarousel";
import cloudinary from "cloudinary";

export default async function Header() {
  const images = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(10)
    .execute();

  // console.log(images);

  return (
    <div
      className={`max-w-full m-0 bg-white flex flex-row-reverse ${montserrat.className} antialiased relative z-0`}
    >
      <div>
        <ImgCarousel images={images.resources} />
      </div>
      <div
        className="flex flex-col flex-grow text-center text-[#EAE7E2] items-center justify-center absolute left-4 top-0 bottom-16 w-1/3"
        style={{
          textShadow:
            "2px 2px 2px rgba(0, 0, 0, 0.2), 4px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="font-semibold text-4xl mb-4">Hope Aviation</h1>
        <p className="text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          blanditiis quaerat ipsum maiores iusto. Dicta laboriosam aspernatur
          sequi aperiam dolore voluptatum numquam voluptas expedita iusto
          molestias! Ducimus dolorum autem velit?
        </p>
      </div>
    </div>
  );
}

// className={`max-w-full max-h-[683px] m-0 flex flex-row-reverse bg-[#BFCFDC] ${montserrat.className} antialiased`}

// <div
//   className={`max-w-full max-h-[1080px] m-0 flex flex-row-reverse bg-[#BFCFDC] ${montserrat.className} antialiased`}
// >
//   <div className="flex-none">
//     <ImgCarousel images={images.resources} />
//   </div>
//   <div className="flex flex-col flex-grow text-center items-center justify-center">
//     <h1 className="text-white font-semibold text-4xl">Hope Aviation</h1>
//     <p className="text-white">
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
//       blanditiis quaerat ipsum maiores iusto. Dicta laboriosam aspernatur
//       sequi aperiam dolore voluptatum numquam voluptas expedita iusto
//       molestias! Ducimus dolorum autem velit?
//     </p>
//   </div>
// </div>;
