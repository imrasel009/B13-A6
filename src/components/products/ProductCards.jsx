import { use } from "react";

const productsPromise = fetch("/productData.json").then((res) => res.json());

const ProductCards = ({ carts, setCarts }) => {
   const products = use(productsPromise);

   const getTagClass = (tag) => {
      if (tag === "New") return "bg-[#DBFCE7] text-[#0A883E]";
      if (tag === "Popular") return "bg-[#E1E7FF] text-[#9514FA]";
      if (tag === "Best Seller") return "bg-[#FEF3C6] text-[#BB4D00]";
   };

   const addToCart = (product) => {
      const isExist = carts.find((item) => item.id == product.id);
      if (isExist) {
         alert("Item is already in cart.");
         return;
      }

      setCarts([...carts, product]);
      alert("Item added to cart.");
   };

   return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5 justify-center items-center ">
         {products.map((product) => (
            <div
               key={product.id}
               className="card w-96 bg-base-100 shadow-xl h-full"
            >
               <div className="card-body flex flex-col justify-between h-full">
                  <div className="flex justify-between mb-4">
                     <img src={product.icon} alt="" />
                     <span
                        className={`badge px-3 py-1.5 font-medium ${getTagClass(product.tag)}`}
                     >
                        {product.tag}
                     </span>
                  </div>
                  <div className="space-y-4">
                     <h2 className="text-3xl font-bold">{product.name}</h2>
                     <span className="text-xl">
                        ${product.price}/{product.period}
                     </span>
                  </div>
                  <ul className="mt-6 flex flex-col gap-2 text-xs">
                     {product.features.map((feature, index) => (
                        <li key={index}>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-4 me-2 inline-block text-success"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M5 13l4 4L19 7"
                              />
                           </svg>
                           <span>{feature}</span>
                        </li>
                     ))}
                  </ul>
                  <div className="mt-6">
                     <button
                        onClick={() => addToCart(product)}
                        className={`btn text-white font-bold btn-block rounded-[100px] ${
                           carts.find((item) => item.id === product.id)
                              ? "bg-green-500"
                              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                        }`}
                     >
                        {carts.find((item) => item.id === product.id)
                           ? "Item Selected"
                           : "Buy Now"}
                     </button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ProductCards;
