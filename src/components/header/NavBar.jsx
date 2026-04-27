import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ImMenu } from "react-icons/im";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const links = [
  { label: "Features", to: "/features" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Why JobLog", to: "/why-job-log" },
];

function NavBar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Hide on scroll down
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
        // Close mobile menu when scrolling
        if (mobileMenuOpen) setMobileMenuOpen(false);
      } else {
        setShow(true);
      }

      // Add glass effect after slight scroll
      if (currentScroll > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: show ? 0 : -100,
          opacity: show ? 1 : 0,
        }}
        transition={{
          y: {
            type: "spring",
            stiffness: 400,
            damping: 35,
            mass: 0.8,
            delay: 0.3,
          },
          opacity: { duration: 0.3, delay: 0.2 },
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-[700px] lg:max-w-[1200px] mx-auto px-10 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-monda text-[1.4rem] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-text/80 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <motion.div
                    initial={false}
                    whileHover="hover"
                    animate={isActive ? "active" : "rest"}
                    className="relative tracking-wide"
                  >
                    {link.label}

                    <motion.span
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                        active: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary origin-left"
                    />
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/login"
              className="text-[1.4rem] font-medium text-primary hover:text-text/80 transition-colors font-monda duration-500 tracking-wide"
            >
              Log In
            </Link>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                to="/signup"
                className="bg-primary text-bg px-8 py-4 rounded-xl text-[1.4rem] font-semibold shadow-md"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-text hover:text-primary transition-colors"
            aria-label="Open menu"
          >
            <ImMenu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed  inset-0 bg-black/50 z-60 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-400 lg:hidden"
            >
              <div className="flex flex-col h-full pt-10 px-6">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-text hover:text-primary transition-colors flex self-end "
                  aria-label="Open menu"
                >
                  <IoClose size={30} />
                </button>

                <div className="mb-8">
                  <Logo />
                </div>

                <div className="flex flex-col gap-6">
                  {links.map((link) => (
                    <NavLink
                      key={link.label}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-[1.6rem] font-monda font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-primary"
                            : "text-text/80 hover:text-primary"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-border my-8" />

                {/* Mobile Auth Buttons */}
                <div className="flex flex-col gap-4">
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[1.4rem] font-medium text-primary hover:text-text/80 transition-colors text-center py-3 border border-primary rounded-xl"
                  >
                    Log In
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="bg-primary text-bg px-8 py-3 rounded-xl text-[1.4rem] font-semibold text-center shadow-md hover:bg-primary-hover transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
