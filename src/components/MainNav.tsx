
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { ListItem } from "./navigation/ListItem";
import { glazingOptions } from "./navigation/NavigationItems";
import { useNavigation } from "./navigation/useNavigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function MainNav() {
  const {
    handleNavigation,
    handleContactClick,
    handleMouseEnter,
    handleMouseLeave,
    openMenus,
  } = useNavigation();

  const MobileNavItem = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      to={to}
      className="block px-4 py-2 text-sm hover:bg-accent rounded-md"
      onClick={onClick}
    >
      {children}
    </Link>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto max-h-screen pt-10">
        <nav className="flex flex-col gap-4 pb-20">
          <MobileNavItem to="/">Home</MobileNavItem>
          {glazingOptions.map((section) => (
            <div key={section.title} className="space-y-3">
              <div 
                className="font-medium px-4 py-2 cursor-pointer"
                onClick={() => handleNavigation(section.mainLink)}
              >
                {section.title}
              </div>
              <div className="pl-4 space-y-1">
                {section.items.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.title}
                  </MobileNavItem>
                ))}
              </div>
            </div>
          ))}
          <MobileNavItem to="/gallery">Gallery</MobileNavItem>
          <MobileNavItem to="/faqs">FAQs</MobileNavItem>
          <div className="px-4 py-2">
            <button
              onClick={handleContactClick}
              className="text-sm hover:text-accent-foreground transition-colors"
            >
              Contact Us
            </button>
          </div>
          <div className="px-4 py-2">
            <Button
              onClick={() => handleNavigation("/quote-request")}
              className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90"
            >
              Get Quote
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="flex justify-center items-center w-full px-4">
      <div className="flex-1 flex justify-start md:hidden">
        <MobileNav />
      </div>
      <NavigationMenu className="relative z-50">
        <NavigationMenuList className="hidden md:flex md:space-x-4">
          <NavigationMenuItem>
            <Link to="/" className="text-sm font-medium hover:text-accent-foreground transition-colors">
              Home
            </Link>
          </NavigationMenuItem>
          {glazingOptions.map((section) => (
            <NavigationMenuItem 
              key={section.title}
              onMouseEnter={() => handleMouseEnter(section.title)}
              onMouseLeave={() => handleMouseLeave(section.title)}
            >
              <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
              <NavigationMenuContent
                className="absolute bg-white shadow-lg rounded-md"
                onMouseEnter={() => handleMouseEnter(section.title)}
                onMouseLeave={() => handleMouseLeave(section.title)}
              >
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="col-span-2">
                    <div
                      onClick={() => handleNavigation(section.mainLink)}
                      className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{section.title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {section.description}
                      </p>
                    </div>
                  </li>
                  {section.items.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      onClick={() => handleNavigation(item.href)}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <Link to="/gallery" className="text-sm font-medium hover:text-accent-foreground transition-colors">
              Gallery
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/faqs" className="text-sm font-medium hover:text-accent-foreground transition-colors">
              FAQs
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button
              onClick={handleContactClick}
              className="text-sm font-medium hover:text-accent-foreground transition-colors"
            >
              Contact Us
            </button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              onClick={() => handleNavigation("/quote-request")}
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90"
            >
              Get Quote
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
