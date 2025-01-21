import SectionTittle from "@/app/_components/SectionTittle";
const Compatibility = () => {
  return (
    <div>
      {/* mobile component */}
      <div className="px-3 my-10 hidden md:block">
        <SectionTittle tittle1={"Compatibility"} />

        <div className="overflow-x-auto mt-10 shadow-md rounded-sm ">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Model</th>
                <th>Year</th>
                <th>Engine</th>
                <th>Power (hp)</th>
                <th>Fuel type</th>
                <th>Engine type</th>
                <th>.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OPTRA 1.8L</td>
                <td>07.2003 - 01.2006</td>
                <td>1.8 L</td>
                <td>115 h.p.</td>
                <td>Petrol</td>
                <td>E-TEC ll</td>
                <td>
                  <button className="btn  btn-sm btn-outline hover:bg-[#59d8fd]  mt-4">
                    CHOOSE
                  </button>
                </td>
              </tr>
              <tr>
                <td>OPTRA 1.8L</td>
                <td>07.2003 - 01.2006</td>
                <td>1.8 L</td>
                <td>115 h.p.</td>
                <td>Petrol</td>
                <td>E-TEC ll</td>
                <td>
                  <button className="btn  btn-sm btn-outline hover:bg-[#59d8fd]  mt-4">
                    CHOOSE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center my-4">
            <button className="btn btn-mix btn-sm">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatibility;
