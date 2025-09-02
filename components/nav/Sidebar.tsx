"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaPlane,
  FaCogs,
  FaCalendarCheck,
  FaClock,
  FaMap,
  FaTags,
  FaGift,
  FaQuestionCircle,
  FaChevronRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true); // true = collapsed
  const [hovering, setHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Toggle sidebar button logic:
   * - If collapsed and hovered → close immediately
   * - Else → toggle normally
   */
  const toggleSidebar = () => {
    if (collapsed && hovering) {
      // hovering but still collapsed → force close
      setHovering(false);
      setCollapsed(true);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        !(event.target as HTMLElement)?.closest?.(".mobile-sidebar") &&
        !(event.target as HTMLElement)?.closest?.(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { icon: <FaPlane />, text: "Book" },
    { icon: <FaCogs />, text: "Manage" },
    { icon: <FaCalendarCheck />, text: "Check-in" },
    { icon: <FaClock />, text: "Flight Status" },
    { icon: <FaMap />, text: "Plan" },
    { icon: <FaTags />, text: "Offers" },
    { icon: <FaGift />, text: "Loyalty" },
    { icon: <FaQuestionCircle />, text: "Help" },
  ];

  // Determine if sidebar is expanded (hover or explicitly open)
  const isExpanded = !collapsed || hovering;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="mobile-menu-button md:hidden fixed top-4 right-4 z-50 glass-light p-3 rounded-xl border border-white/20 shadow-lg"
      >
        {mobileMenuOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaBars className="text-white text-xl" />
        )}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300" />
      )}

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex relative h-screen glass flex-col transition-all duration-500 ease-in-out ${
          isExpanded ? "w-64" : "w-24"
        }`}
        onMouseEnter={(e) => {
          if ((e.target as HTMLElement).closest(".sidebar-toggle")) return;
          if (collapsed) setHovering(true);
        }}
        onMouseLeave={() => collapsed && setHovering(false)}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#000216]" />

        {/* Logo */}
        <div className="relative z-10 flex items-center justify-center mt-6">
          <Image
            src="/small-Himalaya-Logo.png"
            alt="Logo"
            width={300}
            height={300}
            quality={85}
          />
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="sidebar-toggle absolute top-[15%] -translate-y-1/2 bg-[#000216] rounded-xl size-8 border border-white/20 flex items-center justify-center shadow-lg -right-4 transition-all duration-300 hover:scale-110 hover:border-neutral-400/50 z-20"
        >
          <FaChevronRight
            className={`transform transition-transform duration-300 text-white ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Menu */}
        <ul className="relative z-10 space-y-0.5 mt-4 px-3">
          {menuItems.map((item, i) => (
            <li key={i}>
              <div className="flex items-center px-3 py-1 rounded-xl transition-all duration-300 hover:bg-white/10 cursor-pointer">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-400">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div
                  className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300 ${
                    isExpanded ? "opacity-100 max-w-[200px]" : "opacity-0 max-w-0"
                  }`}
                >
                  <div className="text-white font-[300]">{item.text}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar md:hidden fixed top-0 left-0 h-screen w-full bg-[#000216] border-r border-white/10 flex flex-col transition-all duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-center mt-20">
          <Image
            src="/small-Himalaya-Logo.png"
            alt="Logo"
            width={200}
            height={200}
            quality={85}
          />
        </div>

        <ul className="relative space-y-1 mt-4 px-4 flex-1 overflow-y-auto">
          {menuItems.map((item, i) => (
            <li key={i} onClick={() => setMobileMenuOpen(false)}>
              <div className="flex items-center px-3 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 cursor-pointer">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div className="ml-4">
                  <div className="text-white font-medium text-lg">{item.text}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
