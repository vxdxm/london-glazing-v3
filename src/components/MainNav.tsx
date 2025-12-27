
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
import { Menu, Phone } from "lucide-react";

export function MainNav() {
  const {
    handleNavigation,
    handleMouseEnter,
    handleMouseLeave,
    openMenus,
  } = useNavigation();

  const MobileNavItem = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) => (
    <Link
      to={to}
      className="block px-4 py-3 text-sm hover:bg-accent rounded-md my-1"
      onClick={onClick}
    >
      {children}
    </Link>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden p-3 min-h-[48px] min-w-[48px]">
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
                className="font-medium px-4 py-3 cursor-pointer"
                onClick={() => handleNavigation(section.mainLink)}
              >
                {section.title}
              </div>
              <div className="pl-4 space-y-2">
                {section.items.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    to={item.href}
                    onClick={() => handleNavigation(item.href)}
                  >
                    <span className="flex items-center gap-2">
                      {item.icon && <item.icon size={20} className="text-primary" />}
                      {item.title}
                    </span>
                  </MobileNavItem>
                ))}
              </div>
            </div>
          ))}
          <MobileNavItem to="/gallery">Gallery</MobileNavItem>
          <MobileNavItem to="/blog">Blog</MobileNavItem>
          <MobileNavItem to="/faqs">FAQs</MobileNavItem>
          <MobileNavItem to="/contact">Contact Us</MobileNavItem>
          <div className="px-4 py-3 space-y-2">
            <Button
              onClick={() => handleNavigation("/quote-request")}
              className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 min-h-[48px] py-3"
            >
              Get Quote
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 min-h-[48px] py-3"
              asChild
            >
              <a href="tel:02070601572">
                <Phone className="h-4 w-4" />
                <span>0207 060 1572</span>
              </a>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="flex justify-between items-center w-full px-4">
      <div className="flex items-center">
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
      
      <NavigationMenu className="relative z-50">
        <NavigationMenuList className="hidden md:flex md:space-x-4">
          <NavigationMenuItem>
            <Link to="/" className="text-sm font-medium hover:text-accent-foreground transition-colors p-3">
              Home
            </Link>
          </NavigationMenuItem>
          {glazingOptions.map((section) => (
            <NavigationMenuItem 
              key={section.title}
              onMouseEnter={() => handleMouseEnter(section.title)}
              onMouseLeave={() => handleMouseLeave(section.title)}
            >
              <NavigationMenuTrigger className="p-3">{section.title}</NavigationMenuTrigger>
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
                      icon={item.icon}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <Link to="/gallery" className="text-sm font-medium hover:text-accent-foreground transition-colors p-3">
              Gallery
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/blog" className="text-sm font-medium hover:text-accent-foreground transition-colors p-3">
              Blog
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/faqs" className="text-sm font-medium hover:text-accent-foreground transition-colors p-3">
              FAQs
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact" className="text-sm font-medium hover:text-accent-foreground transition-colors p-3">
              Contact Us
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              onClick={() => handleNavigation("/quote-request")}
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 p-3"
            >
              Get Quote
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center space-x-2">
        <Button 
          size="sm" 
          variant="outline" 
          className="hidden sm:flex items-center space-x-1"
          asChild
        >
          <a href="tel:02070601572">
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">Call Us</span>
          </a>
        </Button>
      </div>
    </div>
  );
}
