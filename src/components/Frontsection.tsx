"use client";

import Image from "next/image";

export default function Frontsection() {
  return (
    <section className="bg-white ">
        {/* dark:bg-gray-900 */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* Text content */}
        <div>
            {/* dark:text-white leading-tight */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 ">
            Discover more than <br />
            <span className="text-blue-400">5000+ Jobs</span>
          </h1>
          <p className="mt-6 text-gray-400 dark:text-gray-400 text-lg">
            Great platform for job seekers searching for new career heights and passionate about startups.
          </p>

          {/* Search bar */}
          <div className="mt-8 bg-white shadow-md p-4 rounded-xl flex flex-col sm:flex-row items-stretch gap-3">
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 p-3 rounded-md border border-gray-300 text-sm"
            />
            <select
              className="p-3 rounded-md border border-gray-300 text-sm"
              defaultValue="Florence, Italy"
            >
              <option value="Florence, Italy">Florence, Italy</option>
              <option value="Remote">Remote</option>
              <option value="Bangalore, India">Bangalore, India</option>
            </select>
            <button className="bg-[#4640DE] text-white px-6 py-3 rounded-md text-sm hover:bg-[#3b36c3]">
              Search my job
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Popular: UI Designer, UX Researcher, Android, Admin
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-end hidden lg:block">
          <Image
            src="/hero-person.png"
            alt="Confident person"
            width={400}
            height={400}
            className="w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
