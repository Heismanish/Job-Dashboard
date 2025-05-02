// src/components/Footer.tsx
import { FaFacebookF, FaInstagram, FaPinterest, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1D] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Left: Logo and description */}
        <div>
          <h2 className="text-xl font-semibold text-white">💼 JobFinder</h2>
          <p className="text-sm text-gray-400 mt-3">
            Great platform for job seekers that are passionate about startups. Find your dream job easier.
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Companies</li>
            <li>Pricing</li>
            <li>Terms</li>
            <li>Advice</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Updates</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Get job notifications</h3>
          <p className="text-sm text-gray-400 mb-3">
            The latest job news, articles, sent to your inbox weekly.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded-l-md w-full text-black text-sm"
            />
            <button className="bg-[#4640DE] text-white px-4 py-2 rounded-r-md text-sm hover:bg-[#3b36c3]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-zinc-700 my-8" />

      {/* Bottom row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
        <p>2021 © JobFinder. All rights reserved.</p>
        <div className="flex space-x-4 text-white text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaPinterest />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
}
