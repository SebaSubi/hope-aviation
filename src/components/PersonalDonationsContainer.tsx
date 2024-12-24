import Image from "next/image";
import Link from "next/link";

export default function PersonalDonationsContainer() {
  return (
    <Link href="/donations">
      <div className="flex flex-col justify-start items-center h-80 w-[190px] bg-[#E1CCB9] rounded-3xl">
        <div className="rounded-3xl">
          <Image
            src="/PersonalDonationsPic.jpg"
            width={1980}
            height={1020}
            alt="Placeholder for General"
            className="rounded-3xl"
          />
        </div>
        <p className="text-sm text-center pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita
          necessitatibus laudantium similique!
        </p>
      </div>
    </Link>
  );
}
