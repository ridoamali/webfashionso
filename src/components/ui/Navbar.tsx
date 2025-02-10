import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="navbar bg-base-100 dark:text-white transition-all">
  <div className="navbar-start">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Menu
            className="w-6 h-6 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-md py-4 absolute w-52 rounded-box mt-3 left-0 top-14"
        >
          <ul className="flex flex-col items-center gap-4 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Shop</li>
            <li className="hover:text-black cursor-pointer">About</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </motion.div>
      )}

<a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Men</a></li>
      <li>
        <details>
          <summary>Women</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Couple</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <Search className="w-5 h-5 cursor-pointer" />
    <ShoppingCart className="w-5 h-5 cursor-pointer" />
    <User className="w-5 h-5 cursor-pointer" />
  </div>
</div>
  )
}