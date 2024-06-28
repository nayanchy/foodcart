"use client";
import { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

function CategoryList() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const listRef = useRef(null);
  const params = useSearchParams();

  const getCategoryList = async () => {
    try {
      const res = await GlobalApi.GetCategory();
      setCategoryList(res.categories);
    } catch {
      console.error("Error getting category list");
    }
  };

  const scrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(() => {
    if (isHome) {
      setSelectedCategory("all");
    } else {
      setSelectedCategory(params.get("category") || "all");
    }
  }, [params, isHome]);

  return (
    <div className="relative">
      <ArrowLeftCircle
        className="absolute -left-6 md:-left-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8 cursor-pointer"
        onClick={scrollLeftHandler}
      />
      <div
        ref={listRef}
        className="flex gap-4 overflow-auto mt-10 scrollbar-hide"
      >
        {categoryList &&
          categoryList.map((cat, i) => (
            <Link
              href={`?category=${cat.slug}`}
              key={i}
              className={`flex flex-col gap-2 items-center p-3 border rounded-xl min-w-28 cursor-pointer hover:border-primary hover:bg-card hover:text-primary group ${
                selectedCategory === cat.slug &&
                "bg-card text-primary border-primary"
              }`}
            >
              <Image
                src={cat.icon?.url}
                alt={cat.name}
                width={40}
                height={40}
                className="group-hover:scale-125 transition-all duration-200"
              />
              <h2 className="text-sm font-medium transition-all duration-200">
                {cat.name}
              </h2>
            </Link>
          ))}
      </div>
      <ArrowRightCircle
        className="absolute -right-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8 cursor-pointer"
        onClick={scrollRightHandler}
      />
    </div>
  );
}

export default CategoryList;
