import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import ItemSkeleton from "./ItemSkeleton";
import { useState } from "react";

function ItemCard({ item }) {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };
  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      {!item ? (
        <ItemSkeleton />
      ) : (
        <Card className="bg-slate-50 min-h-[550px]">
          <CardHeader>
            <Image
              src={item?.productImage?.url}
              width={120}
              height={120}
              alt={item?.name}
              className="object-cover w-full rounded-lg"
            />
            <CardTitle className="text-md pt-4">{item?.name}</CardTitle>
          </CardHeader>
          <CardContent className="mt-2">
            <CardDescription>{item?.description}</CardDescription>
            <div className="mt-4">
              <span className="font-bold">Price: {item?.price}</span>
            </div>
          </CardContent>
          <div className="p-6">
            <div className="flex justify-between flex-col sm:flex-row gap-2 items-center sm:items-end">
              <form>
                <label
                  htmlFor="quantity-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Choose quantity:
                </label>
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={handleQuantityDecrement}
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="https://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    value={quantity}
                    onChange={handleQuantityChange}
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="999"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    onClick={handleQuantityIncrement}
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="https://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>
              </form>
              <div className="flex flex-col justify-end">
                <Button variant="outline">Add to Cart</Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default ItemCard;
