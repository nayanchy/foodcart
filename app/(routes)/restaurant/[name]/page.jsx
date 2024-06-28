"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Intro from "@/app/(routes)/restaurant/_components/Intro";
import LeftTabs from "@/app/(routes)/restaurant/_components/LeftTabs";

function ReastaurantDetails() {
  const param = usePathname();
  const [businessDetails, setBusinessDetails] = useState(null);
  const slug = param.split("/")[2];

  const GetBusinessDetails = async (slug) => {
    const res = await GlobalApi.GetBusinessDetails(slug);
    setBusinessDetails(res.restaurant);
  };

  useEffect(() => {
    GetBusinessDetails(slug);
  }, []);

  useEffect(() => {
    console.log(businessDetails);
  }, [businessDetails]);

  return (
    <div>
      <Intro restaurant={businessDetails} />
      <LeftTabs restaurant={businessDetails} />
    </div>
  );
}

export default ReastaurantDetails;
