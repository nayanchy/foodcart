"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import LoadingState from "@/app/_components/LodingState";
import SingleBusiness from "./SingleBusiness";
import BusinessSkeleton from "./BusinessSkeleton";

function BusinessList() {
  const params = useSearchParams();
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("all");
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (isHome) {
      setCategory("all");
    } else {
      setCategory(params.get("category") || "all");
    }
  }, [isHome, params]);

  useEffect(() => {
    params && getBusinessList(category);
  }, [category]);

  const getBusinessList = async (cat) => {
    setLoading(true);
    const res = await GlobalApi.GetBusiness(cat);
    setBusinessList(res.restaurants);
    setLoading(false);
  };

  return (
    <div className="mt-5">
      <h2 className="font-bold text-2xl">
        Popular {category === "all" ? "" : category} restaurants
      </h2>
      <h2 className="font-bold text-primary">{businessList?.length} Results</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10">
        {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <BusinessSkeleton key={item} />
          ))}
        {businessList.map((business, index) => (
          <SingleBusiness key={index} business={business} />
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
