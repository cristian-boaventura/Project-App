"use client";
import Link from "next/link";
import { Settings, User, Grid, Calendar } from "react-feather";
// usePathname import is the reason this needs to be a client component
import { usePathname } from "next/navigation";
import clsx from "clsx";

const icons = { Settings, User, Grid, Calendar };

const SidebarLink = ({ link }) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link.link) {
    isActive = true;
  }

//   this Icon needs to exist because otherwise it is not possible to pass down a non serializable object as a function component from a server component (Sidebar) to a client one (SidebarLink), only static data is serializable and therefore transferible across the network barrier.
  const Icon = icons[link.icon];
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className={clsx(
          "stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out",
          isActive && "stroke-violet-600"
        )}
      />
    </Link>
  );
};

export default SidebarLink;