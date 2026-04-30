const RatingSection = () => {
   return (
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15">
         <div className="flex flex-col text-center gap-7 lg:flex-row justify-between container mx-auto">
            {/* left part */}

            <div>
               <span className="font-extrabold text-6xl text-white">50K+</span>
               <p className="font-medium text-2xl text-white/80">
                  Active Users
               </p>
            </div>
            <div className="divider divider-horizontal before:bg-[#ffffff] after:bg-[#ffffff]"></div>

            {/* middle part */}

            <div>
               <span className="font-extrabold text-6xl text-white">200+</span>
               <p className="font-medium text-2xl text-white/80">
                  Premium Tools
               </p>
            </div>
            <div className="divider divider-horizontal before:bg-[#ffffff] after:bg-[#ffffff]"></div>

            {/* right part */}
            <div>
               <span className="font-extrabold text-6xl text-white">4.9</span>
               <p className="font-medium text-2xl text-white/80">Rating</p>
            </div>
         </div>
      </div>
   );
};

export default RatingSection;
