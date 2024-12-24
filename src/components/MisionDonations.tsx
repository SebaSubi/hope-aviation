import Image from "next/image";

export default function MisionDonations() {
  return (
    <div className="flex flex-row justify-between bg-white rounded-3xl w-full h-[500px] mt-[-25px] z-10">
      <div className="flex flex-col text-center w-1/2 text-[#B8B7BC] items-center justify-center ">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <h1 className="font-semibold text-4xl mb-4">Donación Para Misión</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            blanditiis quaerat ipsum maiores iusto. Dicta laboriosam aspernatur
            sequi aperiam dolore voluptatum numquam voluptas expedita iusto
            molestias! Ducimus dolorum autem velit?
          </p>
        </div>
      </div>
      <div className=" h-full w-1/2 flex justify-center items-center overflow-hidden ">
        <Image
          src="/MisionDonationsPic.jpg"
          width={490}
          height={167}
          alt="Placeholder for General"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
