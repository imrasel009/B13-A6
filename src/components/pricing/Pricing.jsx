import { MdOutlineDone } from "react-icons/md";

const Pricing = () => {
   return (
      <div className="py-30">
         <div className="container mx-auto px-8 space-y-10">
            {/* text part */}
            <div className="space-y-4 text-center">
               <h2 className="text-5xl font-extrabold text-[#101727]">
                  Simple, Transparent Pricing
               </h2>
               <p className="text-[#627382]">
                  Choose the plan that fits your needs. Upgrade or downgrade
                  anytime.
               </p>
            </div>

            {/* cards part */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
               {/* Starter Card */}
               <div className="relative p-8 border border-[#F1F1F1] rounded-2xl bg-white space-y-4 mt-4 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#101727]">Starter</h3>
                  <p className="text-[#627382]">
                     Perfect for individuals getting started.
                  </p>
                  <span className="text-3xl font-extrabold text-[#101727]">
                     $0
                     <span className="text-base font-medium text-[#627382]">
                        /monthly
                     </span>
                  </span>
                  <div className="space-y-2">
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        Basic features access
                     </p>
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        Limited templates
                     </p>
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        Community support
                     </p>
                  </div>
                  <div className="mt-auto pt-4">
                     <button className="btn text-white font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-[100px]">
                        Get Started Free
                     </button>
                  </div>
               </div>

               {/* Pro Card - Most Popular */}
               <div className="relative p-8 border border-[#F1F1F1] rounded-2xl bg-linear-to-b from-[#4F39F6] to-[#9514FA] space-y-4 mt-4 flex flex-col h-full">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                     <span className="bg-[#FEF3C6] text-[#BB4D00] text-sm font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                        Most Popular
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Pro</h3>
                  <p className="text-white/70">
                     Best for professionals who need more power.
                  </p>
                  <span className="text-3xl font-extrabold text-white">
                     $19.99
                     <span className="text-base font-medium text-white/70">
                        /monthly
                     </span>
                  </span>
                  <div className="space-y-2">
                     <p className="flex items-center gap-2 text-white/70">
                        <MdOutlineDone className="text-white" />
                        All Starter features
                     </p>
                     <p className="flex items-center gap-2 text-white/70">
                        <MdOutlineDone className="text-white" />
                        Unlimited templates
                     </p>
                     <p className="flex items-center gap-2 text-white/70">
                        <MdOutlineDone className="text-white" />
                        Priority support
                     </p>
                     <p className="flex items-center gap-2 text-white/70">
                        <MdOutlineDone className="text-white" />
                        Advanced tools
                     </p>
                  </div>
                  <div className="mt-auto pt-4">
                     <button className="btn font-bold bg-white text-[#4F39F6] btn-block rounded-[100px]">
                        Start Pro Trial
                     </button>
                  </div>
               </div>

               {/* Enterprise Card */}
               <div className="relative p-8 border border-[#F1F1F1] rounded-2xl bg-white space-y-4 mt-4 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-[#101727]">
                     Enterprise
                  </h3>
                  <p className="text-[#627382]">
                     Advanced solutions for teams and businesses.
                  </p>
                  <span className="text-3xl font-extrabold text-[#101727]">
                     $49.99
                     <span className="text-base font-medium text-[#627382]">
                        /monthly
                     </span>
                  </span>
                  <div className="space-y-2">
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        All Pro features
                     </p>
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        Team collaboration
                     </p>
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        Dedicated account manager
                     </p>
                     <p className="flex items-center gap-2 text-[#627382]">
                        <MdOutlineDone className="text-[#4F39F6]" />
                        Custom integrations
                     </p>
                  </div>
                  <div className="mt-auto pt-4">
                     <button className="btn text-white font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-[100px]">
                        Contact Sales
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Pricing;
