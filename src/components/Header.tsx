import { CloudinaryImg } from "@/utils/types";
import { getCloudinaryImages } from "@/lib/CloudinaryAPI";
import ImgCarousel from "./ImgCarousel";
import cloudinary from "cloudinary";

export default async function Header() {
  const images = await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .max_results(10)
    .execute();

  console.log(images);
  //idk why the size below doesnt work
  return (
    <div className="max-w-full max-h-[480px] m-0">
      <ImgCarousel images={images.resources} />
    </div>
  );
}
