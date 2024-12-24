import PersonalDonationsContainer from "./PersonalDonationsContainer";

export default function PersonalDonations() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-[500px]">
      <h1 className="font-semibold text-4xl mb-6 text-[#B8B7BC]">
        Donaciones Personales
      </h1>
      <div className="flex flex-row w-full justify-between pl-5 pr-5">
        <PersonalDonationsContainer />
        <PersonalDonationsContainer />
        <PersonalDonationsContainer />
        <PersonalDonationsContainer />
        <PersonalDonationsContainer />
      </div>
    </div>
  );
}
