import React from "react";

const Orders = () => {
  const imgLink =
    "data:image/jpeg;base64,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";
  return (
    <div className="overflow-x-auto w-full my-10 px-2 md:px-4">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Details</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={imgLink} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th className="flex flex-col gap-3">
              <div>
                <button className="btn btn-ghost btn-xs">details</button>
              </div>
              <div>
                <button className="btn btn-error text-white btn-xs">delete</button>
              </div>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={imgLink} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th className="flex flex-col gap-3">
              <div>
                <button className="btn btn-ghost btn-xs">details</button>
              </div>
              <div>
                <button className="btn btn-error text-white btn-xs">delete</button>
              </div>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={imgLink} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className="badge badge-ghost badge-sm">
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={imgLink} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className="badge badge-ghost badge-sm">
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Orders;
