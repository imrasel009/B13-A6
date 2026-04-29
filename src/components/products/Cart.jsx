const Cart = ({ carts, setCarts }) => {
   const total = carts.reduce((sum, item) => sum + item.price, 0);

   const removeCartItem = (id) => {
      const filteredCart = carts.filter((cart) => cart.id != id);
      setCarts(filteredCart);
      alert("item removed successfully");
   };

   const handleCheckout = () => {
      setCarts([]);
      alert("Order placed successfully!");
   };

   if (carts.length == 0) {
      return (
         <div className="h-121.5 container mx-auto flex justify-center items-center bg-[#F2F2F2] shadow-xl rounded-sm">
            <h5 className=" font-extrabold text-4xl text-[#101727]">
               Your Cart Is Empty
            </h5>
         </div>
      );
   }
   return (
      <div className="p-10 border w-full border-[#F2F2F2] rounded-sm space-y-6">
         <p className="font-bold text-2xl text-[#101727]">Your Cart</p>

         {/* selected products */}
         <div className="space-y-4">
            {carts.map((cart) => (
               <div
                  key={cart.id}
                  className="p-5 rounded-2xl flex justify-between items-center bg-[#F9FAFC]"
               >
                  <div className="flex gap-4">
                     <img src={cart.icon} alt="" />
                     <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-[#101727]">
                           {cart.name}
                        </h3>
                        <span className="font-medium text-[#627382]">
                           ${cart.price}
                        </span>
                     </div>
                  </div>
                  <button
                     onClick={() => removeCartItem(cart.id)}
                     className="font-bold text-[#FF3980]"
                  >
                     Remove
                  </button>
               </div>
            ))}
         </div>
         <div className="flex justify-between">
            <p className="text-[#627382]">Total</p>
            <span className="text-2xl font-bold text-[#101727]">${total}</span>
         </div>

         {/* checkout button */}
         <button
            onClick={handleCheckout}
            className="btn text-white font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-[100px]"
         >
            Proceed to Checkout
         </button>
      </div>
   );
};

export default Cart;
