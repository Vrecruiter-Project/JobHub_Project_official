import { gloabalTheme } from "../../../theme/theme";
import img1 from "../../../assets/Images/myjobee/circle.svg";
// import icon1 from '../../../assets/Images/myjobee/check.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";

const GlobalCategories = ({ categories }) => {
  
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <>
      <div className="hidden lg:block pt-10 pb-24">
      <h2 data-aos='fade-up' className="text-center text-[28px] sm:text-[40px] font-semibold font-['Marcelluse'] py-10 data-aos='fade-up'">
        Explore By More Specific{" "}
        <span style={{ color: gloabalTheme.colors.primary }}> Categories</span>
      </h2>
      <div className="w-full flex justify-center globalCateImge p-12">
        <div className="w-[90%]">
          <div className="flex justify-between">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex items-center justify-center relative"
              >
                {/* Static container with rotating border via ::before */}
                <div className="relative rounded-full w-[85%] p-2">
                  {/* Rotating border (pseudo-element) */}
                  <div className="absolute inset-0 rounded-full border-dashed border-2 border-white spinny"></div>

                  {/* Static image (no rotation) */}
                  <img
                    className="rounded-full w-full revertbw"
                    src={img1}
                    alt="static background"
                  />
                </div>

                {/* Static content (absolute positioned) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <img className="" src={category.img} alt="category icon" />
                    <p className="font-semibold whitespace-pre-line ">{category.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default GlobalCategories;
