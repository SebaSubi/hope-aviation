import PartnerBoxes from "./PartnerBoxes";

export default function Partners() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-64">
      <h1 className="font-semibold text-4xl mb-4 text-[#B8B7BC] pb-3">
        Partners
      </h1>
      <div className="flex flex-row w-full justify-between pl-5 pr-5">
        <PartnerBoxes />
        <PartnerBoxes />
        <PartnerBoxes />
        <PartnerBoxes />
        <PartnerBoxes />
        <PartnerBoxes />
        <PartnerBoxes />
      </div>
    </div>
  );
}
