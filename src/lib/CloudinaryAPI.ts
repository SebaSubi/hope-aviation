import cloudinary from "cloudinary";


export async function getCloudinaryImages() {
try {
  const res = await cloudinary.v2.search
  .expression("resource_type:image")
  .sort_by("public_id", "desc")
  .max_results(10)
  .execute();
  if(!res.ok) {
    console.log("There was an error fetching the images")
  }
  return res.json()
} catch (error) {
  console.log("error: ", error)
}


}