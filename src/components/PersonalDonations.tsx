import PersonalDonationsContainer from "./PersonalDonationsContainer";

export default function PersonalDonations() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-[500px]">
      <h1 className="font-semibold text-4xl mb-4 text-[#B8B7BC]">
        Donaciones Personales
      </h1>
      <PersonalDonationsContainer />
    </div>
  );
}
