import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function MenuTabs({ restaurant }) {
  const [menuItemList, setMenuItemList] = useState([]);
  const [category, setCategory] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const filterMenu = (category, i) => {
    const result = restaurant?.menu?.filter(
      (item) => item.category === category
    );

    setMenuItemList(result[0]?.menuItem);
    setCategory(result[0]?.category);
    setActiveIndex(i);
    console.log(result[0]?.menuItem);
    return result;
  };

  useEffect(() => {
    restaurant && filterMenu(restaurant?.menu[0]?.category, 0);
  }, [restaurant]);
  return (
    <div>
      <div className="grid grid-cols-4 mt-2">
        <div className="hidden md:flex flex-col">
          {restaurant?.menu?.map((item, i) => {
            return (
              <Button
                variant="ghost"
                className={`flex justify-start mr-10 gap-2 ${
                  activeIndex === i && "bg-slate-50"
                }`}
                onClick={() => filterMenu(item.category, i)}
                key={item.category}
              >
                {item.category}
              </Button>
            );
          })}
        </div>
        <div className="col-span-4 sm:col-span-3">
          <h2 className="font-extrabold text-lg">{category}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {menuItemList?.map((item, i) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuTabs;
