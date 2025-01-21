import SectionTittle from "@/app/_components/SectionTittle";
import CompatibilitySMChild from "./CompatibilitySMChild";
const CompatibilitySM = () => {
  return (
    <div>
      {/* mobile component */}
      <div className="px-3 my-10 md:hidden ">
        <div className="flex justify-between mb-2">
          <SectionTittle tittle1={"Compatibility"} />
          <div>
            <p className="text-sm mt-8 text-gray-500 mb-3">CHEVROLET (1)</p>
            <button className="cursor-pointer text-mix-2">View All</button>
          </div>
        </div>
        {/* column */}
        <div className="flex flex-col gap-2">
          <CompatibilitySMChild />
          <CompatibilitySMChild />
        </div>
      </div>
    </div>
  );
};

export default CompatibilitySM;
