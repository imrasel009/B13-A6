import bannerImg from "../../assets/banner.png";
import circleImg from "../../assets/indigoCircle.png";
import playImg from "../../assets/play.png";
const Banner = () => {
  return (
    <div className="py-15">
      <div className="flex items-center justify-between container mx-auto">
        {/* left part */}
        <div className="space-y-8">
          {/*left side texts */}
          <div className="space-y-4">
            <div className="flex w-fit items-center gap-1.5 py-2 px-4 rounded-3xl bg-[#E1E7FF]">
              <img src={circleImg} alt="" />
              <p className="font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                New: AI-Powered Tools Available
              </p>
            </div>
            <h1 className="text-7xl font-extrabold text-[#101727]">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>
            <p className="text-lg text-[#627382]">
              Access premium AI tools, design assets, templates, and
              productivity
              <br />
              software—all in one place. Start creating faster today. <br />{" "}
              Explore Products
            </p>
          </div>
          {/* left side buttons */}
          <div className="flex gap-4">
            <button className="font-semibold py-3.5 px-4 text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-[100px] cursor-pointer">
              Explore Products
            </button>
            <div className="p-[2px] rounded-[100px] bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
              <button className="flex items-center gap-2 font-semibold py-3.5 px-4 bg-white rounded-[100px] cursor-pointer">
                <img src={playImg} alt="" />
                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* right part */}
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
