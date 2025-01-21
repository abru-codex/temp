import SectionTittle from "@/app/_components/SectionTittle";
import Link from "next/link";

const ProfileNav = () => {
  return (
    <div className="flex justify-between items-end mx-5">
      <SectionTittle
        tittle1={"MY"}
        tittle2={"PROFILE"}
        // tittle2={title.toUpperCase()}
      />
      <div className="flex gap-5 text-lg">
        <Link href={"/userprofile/profile"}>My Profile</Link>
        <Link href={"/userprofile/orders"}>My Order</Link>
      </div>
    </div>
  );
};

export default ProfileNav;
