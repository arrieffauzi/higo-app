import Image from "next/image";
import { useMemo } from "react";
import Button from "../common/Button/Button";

const Logout = () => {
  const fullName = "Super Admin"
  const role = "Admin"

  const handleClick = async () => {
    console.log("Logout")
  };

  const initialName = useMemo(() => {
    const name = fullName.split(" ");
    return name?.reduce(
      (prev, current) => (prev ? prev[0] + current[0] : current[0]),
      "",
    );
  }, [fullName]);

  return (
    <div className="bg-white border-t border-[#D9DBE9] p-4 flex items-center justify-between">
      <div className="bg-[#610BEF] rounded-full text-white h-10 w-10 text-xs flex justify-center items-center">
        {initialName?.toUpperCase()}
      </div>

      <div>
        <p className="text-base">{fullName}</p>
        <p className="text-xs">{role}</p>
      </div>
      <Button variant="none" onClick={handleClick} className="cursor-pointer">
        <Image
          src={"/icons/icon-logout.svg"}
          alt="logout"
          height={25}
          width={25}
        />
      </Button>
    </div>
  );
};

export default Logout;
