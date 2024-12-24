import GeneralDonations from "@/components/GeneralDonations";
import GeneralInfo from "@/components/GeneralInfo";
import Header from "@/components/Header";
import MisionDonations from "@/components/MisionDonations";
import Partners from "@/components/Partners";
import PersonalDonations from "@/components/PersonalDonations";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <GeneralInfo />
      <Partners />
      <GeneralDonations />
      <MisionDonations />
      <PersonalDonations />
    </div>
  );
}
