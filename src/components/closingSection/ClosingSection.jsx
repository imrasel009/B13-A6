const ClosingSection = () => {
   return (
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30">
         <div className="container mx-auto space-y-10">
            <div className="text-center space-y-4">
               <h3 className="text-white font-extrabold text-[40px]">
                  Ready to Transform Your Workflow?
               </h3>
               <p className="text-[#ffffff90]">
                  Join thousands of professionals who are already using
                  Digitools to work smarter.
                  <br />
                  Start your free trial today.
               </p>
            </div>
            {/* button part */}
            <div className="space-y-4 text-center">
               <div className="flex items-center justify-center gap-4">
                  <button className="bg-white py-3 px-4 font-semibold text-[#4F39F6] rounded-3xl cursor-pointer">
                     Explore Products
                  </button>
                  <button className="py-3 px-4 w-40.75 font-semibold rounded-3xl cursor-pointer text-white border border-white">
                     View Pricing
                  </button>
               </div>
               <p className="text-[#ffffff80]">
                  14-day free trial • No credit card required • Cancel anytime
               </p>
            </div>
         </div>
      </div>
   );
};

export default ClosingSection;
