import SectionTittle from "@/app/_components/SectionTittle";

const FutureAnsSpecification = () => {
  return (
    <div className="px-3 my-10">
      <SectionTittle tittle1={"Features and"} tittle2={"Specification"} />
      <div className="grid grid-cols-2 md:grid-cols-3 my-5 gap-5">
        <div>
          <p className="text-gray-400 text-sm mb-2">Number of Teeth</p>
          <p className="font-semibold text-mix-2">169</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Net Quantity</p>
          <p className="font-semibold text-mix-2">1</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Width [mm]</p>
          <p className="font-semibold text-mix-2">24</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm mb-2">Country of Origin</p>
          <p className="font-semibold text-mix-2">Germany</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Material</p>
          <p className="font-semibold text-mix-2">Highly Saturated Nitrile</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Fitting place</p>
          <p className="font-semibold text-mix-2">Belt Drive</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Manufacturer</p>
          <p className="font-semibold text-mix-2">
            Optibelt Power Transmission India Pvt. Ltd.
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2">Address of Manufacturer</p>
          <p className="font-semibold text-mix-2">
            5A, Kailas Vihar, 10th Mile, Opp. Hotel Abhiruchi. Gat No. 1150.
            Village Wadki, Tal. Haveli, Dist. Pune - 412308 Maharashtra (India)
            E-mail:- customercare@optibelt.in Call:- 020-40702700
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureAnsSpecification;
