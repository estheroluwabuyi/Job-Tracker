import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Workflow,
  CreditCard,
  LogIn,
  Rocket,
} from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Features", to: "/features", icon: LayoutDashboard },
  { label: "How It Works", to: "/how-it-works", icon: Workflow },
  { label: "Pricing", to: "/pricing", icon: CreditCard },
];

function NavBar() {
  return (
    <nav className="border-b border-border">
      <div className="flex items-center justify-between max-w-[1500px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Main Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                to={link.to}
                className="flex items-center gap-2 text-[1.5rem]! tracking-wide text-text font-medium"
              >
                <Icon className="text-[1.5rem]" />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-10">
          <Link
            to="/login"
            className="flex items-center gap-2 text-[1.5rem]! tracking-wide text-text font-medium"
          >
            <LogIn />
            Log In
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 text-[1.5rem]! bg-primary  tracking-wide text-bg font-medium  px-4 py-2 rounded-md"
          >
            <Rocket />
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
