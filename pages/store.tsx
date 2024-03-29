import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useShoppingCart } from "@/context/ShoppingCartContex";
import { BsApple } from "react-icons/bs";

interface Product {
  id: number;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  title: string;
  key: number;
  brand: string;
}

interface MyPageProps {
  product: Product[];
}

const store = ({ product }: MyPageProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = 2;
  return (
    <>
      <div className="flex justify-center items-center font-bold text-4xl pt-6 pb-12">
        {" "}
        <BsApple size={70} className="mt-2" /> Store
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.map(
          ({
            brand,
            title,
            id,
            key,
            thumbnail,
            price,
            rating,
            category,
            description,
          }) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
            >
              <img
                src={thumbnail}
                alt={title}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <div className="text-gray-600 font-bold text-lg mb-2">
                  {brand}
                </div>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {title}
                </div>
                <div className="text-gray-600 font-bold text-sm mb-2">
                  ID: {id} | Key: {key}
                </div>
                <div className="text-gray-600 font-bold text-sm mb-2">
                  Category: {category} | Rating: {rating}
                </div>
                <div className="text-gray-600 font-bold text-base mb-2">
                  {description}
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-900 font-bold text-lg">
                    ${price}
                  </div>
                  {quantity === 2 ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                      Add to cart
                    </button>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex bg-blue-500 rounded-xl text-white items-center py-2 px-4 space-x-2 ">
                        <AiFillMinusCircle
                          size={25}
                          className="cursor-pointer"
                        />
                        {quantity}
                        <AiFillPlusCircle
                          size={25}
                          className="cursor-pointer"
                        />
                      </div>
                      <button className="text-white bg-red-500 ml-2 py-2 px-4 rounded-xl">
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default store;

export const getServerSideProps: GetServerSideProps = async (contex) => {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();
  const product = products.products;
  return {
    props: {
      product,
    },
  };
};
