import React from "react";
import Link from "next/link";
import Image from "next/image";

const Introduction: React.FC = () => {
  return (
    <div className="min-h-[50vh] flex items-center flex-row justify-center">
      <div>
        <Image alt="" src="/assets/logo2.svg" width={300} height={105} />
      </div>
      <div>muus pisda</div>
    </div>
  );
};

export default Introduction;
