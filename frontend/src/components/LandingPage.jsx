import React from "react";
import Navbar from "./Navbar";
import CodeFrame from "./CodeFrame";
import StepSlider from "./StepsSlider";

//import img
import Analytic from '../utils/img/Analytics.png'
import Shopify from '../utils/img/shopify.png'
import Wordpress from '../utils/img/wordpress.png'
import Magento from '../utils/img/magento.png'
import { Link } from "react-router-dom";

import { MdContentCopy } from 'react-icons/md'
import Footer from "./footer";

const LandingPage = () => {
  return (
    <>
      <div className="w-full pt-32 px-32">
        <Navbar />
        <div className="mb-16">
          <div className="flex flex-row items-center">
            <div className="">
              <p className="text-6xl font-semibold">Welcome to
                <span className="font-bold text-teal-400 underline underline-offset-3 ml-4 decoration-4 decoration-[#8685EF]">
                  BusiAnalytix
                </span>{" "}
              </p>
              <p className="max-w-3xl pt-4 px-1 mt-8 text-gray-500 text-2xl">
                We are committed to helping you make data-driven decisions about your products, so you can optimize their performance and improve your bottom line.
                Our platform will analyze your products and provide you number of unique visitors for every product.
              </p>

              <div className="max-w-xl mt-10">
                {/* <p className="text-3xl text-gray-900 font-bold my-4">In collaboration with</p> */}
                <div className="grid grid-cols-3 gap-10">
                  <div class="max-w-xs max-h-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg w-24 ml-[19%]" src={Shopify} alt="" />
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-center text-gray-900 dark:text-white">Shopify</h5>
                  </div>
                  <div class="max-w-xs bg-white dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg w-24 ml-[19%]" src={Wordpress} alt="" />
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-center text-gray-900 dark:text-white">Wordpress</h5>
                  </div>
                  <div class="max-w-xs  bg-white dark:bg-gray-800 dark:border-gray-700">
                    <img class="rounded-t-lg w-24 ml-[19%]" src={Magento} alt="" />
                    <h5 class="mb-2 text-lg font-bold tracking-tight text-center text-gray-900 dark:text-white">Magento</h5>
                  </div>
                </div>
              </div>

              {/* <div className="mt-5 ml-1">
                <button type="button" class="text-xl text-white bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-slate-200 font-medium rounded-full px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Get Start
                </button>
              </div> */}
            </div>
            <div className="w-[45%] ml-auto mt-8">
              <img className="animate-bounce" src={Analytic} alt="" />
            </div>
          </div>

          <section id="process" className="mt-40 w-full">
            <p className="text-6xl">
              Follow the following steps to add
              <span className="font-semibold text-teal-400 underline underline-offset-3 ml-4 decoration-4 decoration-[#8685EF]">
                Script
              </span>{" "}
            </p>

            <div className="mt-10">
              <div className="font-bold flex items-center pl-4 mb-8 text-4xl bg-slate-200 rounded-lg shadow-lg h-16">
                Steps for Shopify
              </div>

              <div>
                <StepSlider />
              </div>

              <div className="mt-20 mb-16">
                <div className="text-3xl my-8 flex flex-row items-center font-medium text-gray-900"><MdContentCopy className="mr-2" />Copy the following script</div>
                <CodeFrame />
              </div>
            </div>
          </section>

          <a href="/shop" className="w-full mt-4 flex flex-row justify-center">
            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">
              Click here to start Analyzing
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
