import Search from "./Search";

export default function SearchModal({ handleCheckboxChange, isChecked }: any) {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="search-modal"
        checked={isChecked}
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            onClick={() => handleCheckboxChange(false)}
            htmlFor="search-modal"
            className="text-mix-2 hover:text-mix"
          >
            X
          </label>
          <Search handleModalCloseOnMobile={handleCheckboxChange} />
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
}
