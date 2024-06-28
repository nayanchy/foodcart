import Image from "next/image";
import Link from "next/link";

function SingleBusiness({ business }) {
  return (
    <Link
      href={`/restaurant/${business?.slug}`}
      className="group cursor-pointer"
    >
      <Image
        src={business.banner.url}
        width={500}
        height={130}
        alt={business.name}
        className="rounded-xl h-[200px] object-cover group-hover:scale-110 transition-all ease-in-out duration-300"
      />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{business.name}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src="/star.png" width={14} height={14} alt="star" />
            <label htmlFor="" className="text-gray-400 text-sm">
              4.5
            </label>
            <h2 className="text-gray-400 text-sm">
              {business.rastaurantType[0]}
            </h2>
          </div>
          <h2 className="flex gap-1">
            {business.categories.map((cat, index) => (
              <span
                key={index}
                className="text-xs bg-secondary text-white rounded-sm p-0.5"
              >
                {cat.name}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default SingleBusiness;
