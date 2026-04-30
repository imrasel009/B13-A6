import { useState } from "react";
import Cart from "./Cart";
import ProductCards from "./ProductCards";

const Products = ({ carts, setCarts }) => {
   const [activeTab, setActiveTab] = useState(true);

   return (
      <div className="py-30 container mx-auto px-8 space-y-10">
         {/* static content */}
         <div className="text-center space-y-4">
            <h2 className="text-5xl text-[#101727] font-extrabold">
               Premium Digital Tools
            </h2>
            <p className="text-[#627382]">
               Choose from our curated collection of premium digital products
               designed <br /> to boost your productivity and creativity.
            </p>
            <div className="p-1 border border-[#F6F6F6] rounded-[100px] w-fit mx-auto">
               <button
                  onClick={() => setActiveTab(true)}
                  className={`py-3.5 px-4 font-medium rounded-[999px] ${
                     activeTab
                        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                        : "text-[#25065D]"
                  }`}
               >
                  Products
               </button>
               <button
                  onClick={() => setActiveTab(false)}
                  className={`py-3.5 px-4 font-medium rounded-[999px] ${
                     !activeTab
                        ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                        : "text-[#25065D]"
                  }`}
               >
                  Cart ({carts.length})
               </button>
            </div>
         </div>

         {/* dynamic content */}
         <div className="flex justify-center">
            {activeTab ? (
               <ProductCards carts={carts} setCarts={setCarts}></ProductCards>
            ) : (
               <Cart carts={carts} setCarts={setCarts}></Cart>
            )}
         </div>
      </div>
   );
};

export default Products;
