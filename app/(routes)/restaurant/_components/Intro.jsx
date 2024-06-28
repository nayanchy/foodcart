import { MapPin } from "lucide-react";
import Image from "next/image";

function Intro({ restaurant }) {
  console.log(restaurant?.aboutUs);
  return (
    <div>
      <div>
        {restaurant ? (
          <div>
            <Image
              src={restaurant?.banner?.url}
              alt={restaurant?.name}
              height={1000}
              width={300}
              className="w-full h-[300px] rounded-xl object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-[300px] rounded-xl bg-slate-200 animate-pulse"></div>
        )}
        <h2 className="text-3xl font-bold mt-2">{restaurant?.name}</h2>
        <div className="flex items-center gap-2 mt-2">
          <Image src={"/star.png"} width={20} height={20} alt="Rating" />
          <label className="text-gray-500">4.8 (103)</label>
        </div>
        <h2 className="text-gray-500 mt-2 flex gap-2 items-center">
          <MapPin />
          {restaurant?.address}
        </h2>
      </div>
    </div>
  );
}

export default Intro;
