import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-gray-200 py-5 px-6 md:px-10 mt-15">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mt-2">
        <div>
          <h3 className=" text-lg  font-bold mb-2 md:mb-4">Shopini</h3>
          <p className="text-xs md:text-sm text-gray-700">
            Designed & Developed with using Next.js, TypeScript and TailwindCSS.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2 md:mb-4">Contact</h3>
          <p className="text-xs  text-gray-700">123 Main Street, Your City</p>
          <p className="text-xs  text-gray-700">+1 (234) 567-890</p>
          <p className="text-xs text-gray-700">info@shopini.com</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:scale-105 hover:text-gray-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:scale-105 hover:text-gray-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:scale-105 hover:text-gray-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-center text-gray-500">
        &copy; {new Date().getFullYear()} Shopini. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
