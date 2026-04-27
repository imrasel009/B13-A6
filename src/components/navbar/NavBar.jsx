import cartImg from "../../assets/products/shopping-cart.png";

const NavBar = () => {
  return (
    <div className="bg-white py-4 border-b-2 border-[#F2F2F2]">
      <div className=" flex items-center justify-between container mx-auto">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h1>
        </div>
        <div>
          <ul className="flex gap-8">
            <li className="text-[#101727] font-semibold">
              <a href="">Products</a>
            </li>
            <li className="text-[#101727] font-semibold">
              <a href="">Features</a>
            </li>
            <li className="text-[#101727] font-semibold">
              <a href="">Pricing</a>
            </li>
            <li className="text-[#101727] font-semibold">
              <a href="">Testimonials</a>
            </li>
            <li className="text-[#101727] font-semibold">
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button>
            <a href="">
              <img src={cartImg} alt="" />
            </a>
          </button>
          <button className="text-[#101727] font-semibold">
            <a href="">Login</a>
          </button>
          <button className="font-semibold py-3 px-4 text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl cursor-pointer">
            <a href="">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
