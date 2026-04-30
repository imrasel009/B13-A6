import socialImg from "../../assets/social.png";

const Footer = () => {
   return (
      <div className="bg-[#101727] pt-30 pb-7.5">
         <div className="container mx-auto px-8">
            {/* links part */}
            <div className="grid grid-cols-2 lg:flex items-top justify-between">
               <div className="space-y-4">
                  <h2 className="text-white font-extrabold text-3xl">
                     DigiTools
                  </h2>
                  <p className="text-[#FFFFFF80]">
                     Premium digital tools for creators, <br /> professionals,
                     and businesses. Work smarter <br />
                     with our suite of powerful tools.
                  </p>
               </div>

               {/* links menu */}
               <div>
                  <footer className="footer space-x-12 sm:footer-horizontal text-[#FFFFFF80] ml-0 pl-0">
                     <nav className="space-y-4">
                        <h6 className="text-white font-medium text-xl">
                           Product
                        </h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Pricing</a>
                        <a className="link link-hover">Templates</a>
                        <a className="link link-hover">Integrations</a>
                     </nav>
                     <nav className="space-y-4">
                        <h6 className="text-white font-medium text-xl">
                           Company
                        </h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">Careers</a>
                        <a className="link link-hover">Press</a>
                     </nav>
                     <nav className="space-y-4">
                        <h6 className="text-white font-medium text-xl">
                           Resources
                        </h6>
                        <a className="link link-hover">Documentation</a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Community</a>
                        <a className="link link-hover">Contact</a>
                     </nav>
                  </footer>
               </div>

               {/* social media */}
               <div className="space-y-4">
                  <h6 className="text-white font-medium text-xl">
                     Social Links
                  </h6>
                  <a href="">
                     <img src={socialImg} alt="" />
                  </a>
               </div>
            </div>

            {/* copyright part */}
            <div className="mt-20">
               <hr className="text-[#E5E7EB80] " />
               <div className="mt-7.5 flex justify-between">
                  <p className="text-[#FAFAFA50]">
                     © 2026 Digitools. All rights reserved.
                  </p>
                  <ul className="text-[#FAFAFA50] flex gap-5">
                     <li>
                        <a href="">Privacy Policy</a>
                     </li>
                     <li>
                        <a href="">Terms of Service</a>
                     </li>
                     <li>
                        <a href="">Cookies</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
