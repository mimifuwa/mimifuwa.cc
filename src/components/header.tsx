import Link from "next/link";
import { FaRegFileAlt } from "react-icons/fa";
import { PiHouseBold } from "react-icons/pi";

const navItems = [
  { icon: <PiHouseBold />, href: "/" },
  { icon: <FaRegFileAlt />, href: "/blogs" },
];

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center p-4 px-5 mb-4 max-w-7xl mx-auto">
      <h2 className="text-4xl xs:text-7xl font-title">
        <Link href="/">Mimifuwa.cc</Link>
      </h2>
      <nav>
        <ul className="flex gap-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-3xl">
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
