const IsAvailableSpare = ({
  isChecked,
  setIsChecked,
}: {
  isChecked: boolean;
  setIsChecked: (arg: boolean) => void;
}) => {
  return (
    <div>
      <label
        htmlFor="checkboxLabelThree"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelThree"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && "border-primary bg-gray dark:bg-transparent"
            }`}
          >
            <span
              className={`text-primary opacity-0 ${
                isChecked && "!opacity-100"
              }`}
            >
              <svg
                className="h-3.5 w-3.5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <span className="text-sm text-black dark:text-white">
          {isChecked ? "Yes" : "No"}
        </span>
      </label>
    </div>
  );
};

export default IsAvailableSpare;
