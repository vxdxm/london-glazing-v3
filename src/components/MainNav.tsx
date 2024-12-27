import * as React from "react";
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

export function MainNav() {
  const {
    handleNavigation,
    handleContactClick,
    handleMouseEnter,
    handleMouseLeave,
    openMenus,
  } = useNavigation();

  return (
    <div className="flex justify-center w-full">
      <NavigationMenu>
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
                className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight"
                onMouseEnter={() => handleMouseEnter(section.title)}
                onMouseLeave={() => handleMouseLeave(section.title)}
              >
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-background">
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