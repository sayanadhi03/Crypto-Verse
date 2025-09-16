import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav
      className="bg-gray-900 text-white sticky top-0 z-50 shadow-md border-b"
      style={{
        scrollBehavior: "smooth",
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-indigo-400 tracking-tight hover:text-indigo-300 transition-colors"
          >
            Crypto Verse
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/cryptocurrencies"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  Cryptocurrencies
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/exchanges"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  Exchanges
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/news"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-white hover:bg-gray-800 hover:text-cyan-400"
                  )}
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-gray-800">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex flex-col space-y-2 p-4 w-48">
                    <Link
                      href="/"
                      className=" text-white hover:text-cyan-400 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/cryptocurrencies"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      Cryptocurrencies
                    </Link>
                    <Link
                      href="/exchanges"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      Exchanges
                    </Link>
                    <Link
                      href="/news"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      News
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
