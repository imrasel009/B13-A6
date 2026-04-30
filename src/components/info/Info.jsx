import personImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";
import n1 from "../../assets/n1.png";
import n2 from "../../assets/n2.png";
import n3 from "../../assets/n3.png";

const Info = () => {
   return (
      <div className="bg-[#F9FAFC] py-30 ">
         <div className="container mx-auto px-8">
            {/* text info */}

            <div className="space-y-4 text-center mb-10">
               <h2 className="text-[#101727] font-extrabold text-5xl">
                  Get Started in 3 Steps
               </h2>
               <p className="text-[#627382]">
                  Start using premium digital tools in minutes, not hours.
               </p>
            </div>

            {/* info cards */}
            <div className="flex justify-between">
               {/* 1st card */}

               <div className="relative w-95 h-95 space-y-4 p-6 flex flex-col items-center justify-center text-center gap-4 bg-white border border-[#F1F1F1] rounded-2xl">
                  <img src={n1} alt="" className="absolute top-4 right-4" />
                  <img src={personImg} alt="" />
                  <h3 className="font-bold text-2xl text-[#101727]">
                     Create Account
                  </h3>
                  <p className="text-[#627382]">
                     Sign up for free in seconds. No credit card required to get
                     started.
                  </p>
               </div>

               {/* 2nd card */}

               <div className="relative w-95 h-95 space-y-4 p-6 flex flex-col items-center justify-center text-center gap-4 bg-white border border-[#F1F1F1] rounded-2xl">
                  <img src={n2} alt="" className="absolute top-4 right-4" />
                  <img src={packageImg} alt="" />
                  <h3 className="font-bold text-2xl text-[#101727]">
                     Choose Products
                  </h3>
                  <p className="text-[#627382]">
                     Browse our catalog and select the tools that fit your
                     needs.
                  </p>
               </div>

               {/* 3rd card */}

               <div className="relative w-95 h-95 space-y-4 p-6 flex flex-col items-center justify-center text-center gap-4 bg-white border border-[#F1F1F1] rounded-2xl">
                  <img src={n3} alt="" className="absolute top-4 right-4" />
                  <img src={rocketImg} alt="" />
                  <h3 className="font-bold text-2xl text-[#101727]">
                     Start Creating
                  </h3>
                  <p className="text-[#627382]">
                     Download and start using your premium tools immediately.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Info;
