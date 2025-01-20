import React from 'react';
import { aboutSection } from '@/data';
import Image from 'next/image';
const page = () => {
  return (
    <div className="min-h-screen py-24 container mx-auto">
      {aboutSection.map((section, index) => {
        if (section.type === 'heroSection') {
          const { header, image } = section.content;
          return (
            <section
              key={index}
              className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16"
            >
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                      {header?.title}
                    </h2>
                    <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                      {header?.subtext}
                    </p>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
                      <span className="relative inline-block">
                        <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                        <span className="relative"> {header?.question.text} </span>
                      </span>
                      <br className="block sm:hidden" />
                      Ask me on{' '}
                      <a
                        href={header?.question.linkHref}
                        title=""
                        className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                      >
                        {header?.question.linkText}
                      </a>
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                      src={image.src}
                      width={500}
                      height={500}
                      alt="Hero Illustration"
                    />
                    <Image
                      className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}

                    />
                  </div>
                </div>
              </div>
            </section>
          );
        } else if (section.type === 'aboutSection') {
          const { title, description, stats, button, image } = section.content;
          return (
            <section
              key={index}
              className="py-24 relative xl:mr-0 lg:mr-5 mr-0"
            >
              <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                  <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-center items-start gap-8 flex">
                      <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                          About Us
                        </h6>
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                          <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                            {title}
                          </h2>
                          <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            {description}
                          </p>
                        </div>
                      </div>
                      <div className="w-full flex-col justify-center items-start gap-6 flex">
                        <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                          {stats?.map((stat, idx) => (
                            <div
                              key={idx}
                              className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex"
                            >
                              <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                                {stat.label}
                              </h4>
                              <p className="text-gray-500 text-base font-normal leading-relaxed">
                                {stat.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      className={`sm:w-fit w-full group px-3.5 py-2 ${button?.style} rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex`}
                    >
                      <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                        {button?.text}
                      </span>
                      <svg
                        className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                          stroke="#4F46E5"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-start flex">
                    <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                      <Image
                        className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                        src={image.src}
                        alt={image.alt}
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }
        return null;
      })}
    </div>
  );
};

export default page;
