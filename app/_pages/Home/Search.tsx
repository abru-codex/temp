"use client";
import SectionTittle from "@/app/_components/SectionTittle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ handleModalCloseOnMobile }: any) {
  const [manufacturers, setManufacturers] = useState<any>([]);
  const [models, setModels] = useState<any>([]);
  const [years, setYears] = useState<any>([]);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const manufactureRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const yearRef = useRef<any>(null);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const getManufacturers = useCallback(async () => {
    try {
      const res = await fetch(
        `https://banglaspareparts.abrutech.online/api/manufacturers/search`
      );
      const data = await res.json();
      setManufacturers(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getModels = useCallback(async (manufacturerId: string) => {
    try {
      const res = await fetch(
        `https://banglaspareparts.abrutech.online/api/models/search?manufacturerId=${manufacturerId}`
      );
      const data = await res.json();
      setModels(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getYears = useCallback(async (modelId: string) => {
    try {
      const res = await fetch(
        `https://banglaspareparts.abrutech.online/api/years/search?modelId=${modelId}`
      );
      const data = await res.json();
      setYears(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = () => {
    const manufactureId = manufactureRef.current.value;
    const modelId = modelRef.current.value;
    const yearId = yearRef.current.value;

    let url = pathname;
    // if (manufactureId !== "Select Car Manufacture") {
    //   url += `?manufacturerId=${manufactureId}`;
    // }
    if (modelId !== "Select Model Line") {
      url += `?modelId=${modelId}`;
    }
    if (yearId !== "Select Year") {
      url += `&year=${yearId}`;
    }
    router.push(url, {
      scroll: false,
    });
  };

  const handleSearchByPlate = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("partNumber", term);
    } else {
      params.delete("partNumber");
    }
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, 500);

  useEffect(() => {
    getManufacturers();
  }, [getManufacturers]);

  return (
    <div className=" px-4 md:px-0">
      <div className="md:flex  justify-between">
        <SectionTittle tittle1={"Search By"} tittle2={"Vehicle"} />
        <div className="md:flex items-center gap-3 text-sm text-mix-2 text-center">
          <p className="my-2 md:my-0">Search By Number Plate :</p>
          <div className="flex gap-2 justify-center">
            <input
              type="text"
              placeholder="2L592R422"
              defaultValue={searchParams.get("partNumber")?.toString()}
              onChange={(e) => {
                handleSearchByPlate(e.target.value);
              }}
              className="input input-bordered md:text-4xl texty-3xl input-info w-full max-w-[250px] bg-gray-200"
            />
            <button
              onClick={() => handleModalCloseOnMobile(false)}
              className="btn btn-square h-auto bg-mix-2"
            >
              <BiSearchAlt2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="divider">OR</div>
        <p className="text-center">Select Your Car Manually</p>
      </div>
      <div className="mt-4 bg-mix-2 p-4 rounded-lg flex flex-col md:flex-row gap-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          {/* manufacturer */}
          <select
            ref={manufactureRef}
            defaultValue={"Select Car Maker"}
            onChange={(e) => {
              yearRef.current.value = "Select Year";
              modelRef.current.value = "Select Model Line";
              setButtonDisabled(false);
              getModels(e.target.value);
            }}
            className="select select-bordered w-full md:text-xl"
          >
            <option disabled selected>
              Select Car Manufacture
            </option>
            {manufacturers?.map((manufacturer: any) => (
              <option key={manufacturer.id} value={manufacturer.id}>
                {manufacturer.manufacturer}
              </option>
            ))}
          </select>
          {/* model */}
          <select
            ref={modelRef}
            disabled={models?.length === 0}
            defaultValue={"Select Model Line"}
            className="select select-bordered w-full md:text-xl "
            onChange={(e) => {
              setButtonDisabled(false);
              yearRef.current.value = "Select Year";
              getYears(e.target.value);
            }}
          >
            <option disabled selected>
              Select Model Line
            </option>
            {models?.map((model: any) => (
              <option key={model.id} value={model.modelId}>
                {model.name}
              </option>
            ))}
          </select>
          {/* year */}
          <select
            ref={yearRef}
            disabled={years?.length === 0}
            defaultValue={"Select Year"}
            onChange={() => {
              setButtonDisabled(false);
            }}
            className="select select-bordered w-full md:text-xl"
          >
            <option disabled selected>
              Select Year
            </option>
            {years?.map((year: any) => (
              <option key={year.id} value={year.id}>
                {year.yearDate}
              </option>
            ))}
          </select>
        </div>
        <button
          disabled={buttonDisabled}
          className="btn  bg-mix text-mix-2 hover:text-white hover:bg-gray-700"
          onClick={() => {
            handleSearch();
            handleModalCloseOnMobile(false);
          }}
        >
          Search Parts
        </button>
      </div>
    </div>
  );
}
