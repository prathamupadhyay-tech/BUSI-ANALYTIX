import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import steps img
import Step1 from '../utils/img/step1.png';
import Step2 from '../utils/img/step2.png';
import Step3 from '../utils/img/step3.png';

// import required modules
import { Pagination, Navigation } from "swiper";

export default function StepSlider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-row max-w-[90%] ml-[5%] mt-8">
                        <div className="max-w-[25%] text-gray-800 text-xl">
                            <div className="font-bold text-3xl text-gray-900">Step 1:</div>
                            <div className="mt-4">
                                Navigate to the shopify website and login to reach the admin dashboard of your store. Now on the left hand panel, under the option 'Online Store', select Themes
                            </div>

                        </div>
                        <div className="ml-8"><img className="" src={Step1} alt="" /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-row max-w-[90%] ml-[5%] mt-8">
                        <div className="max-w-[25%] text-gray-800 text-xl">
                            <div className="font-bold text-3xl text-gray-900">Step 2:</div>
                            <div className="mt-4">
                                Now on the centre of the admin panel which shows the current theme (in this case Dawn), click on the button with the three grey dots on it, which is right besides the customize button. This would open up a menu. Select the 'Edit code' option from the menu. You'll be redirected to a new page.
                            </div>

                        </div>
                        <div className="ml-8"><img className="" src={Step2} alt="" /></div>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="flex flex-row max-w-[90%] ml-[5%] mt-8">
                        <div className="max-w-[25%] text-gray-800 text-xl">
                            <div className="font-bold text-3xl text-gray-900">Step 3:</div>
                            <div className="mt-4">
                                On this page, on the left hand panel, expand the Layout folder and click on the 'theme.liquid' file. This opens up the code editor on the centre of the admin panel. Now paste the script tag which is provided on our website above the closing body tag as shown in the image. Yes it's that easy! Happy tracking!
                            </div>
                        </div>
                        <div className="ml-8"><img className="" src={Step3} alt="" /></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
