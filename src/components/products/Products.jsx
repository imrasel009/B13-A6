import Cart from "./Cart";
import ProductCards from "./ProductCards";

const Products = ({ carts, setCarts }) => {
   return (
      <div className="py-30 container mx-auto space-y-10">
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
               <button className="py-3.5 px-4 text-[#25065D] font-medium rounded-[999px">
                  Products
               </button>
               <button className="py-3.5 px-4 text-[#25065D] font-medium rounded-[999px]">
                  Cart({carts.length})
               </button>
            </div>
         </div>

         {/* dynamic content */}
         <div className="flex items-center justify-center">
            <ProductCards carts={carts} setCarts={setCarts}></ProductCards>
            <Cart carts={carts} setCarts={setCarts}></Cart>
         </div>
      </div>
   );
};

export default Products;
