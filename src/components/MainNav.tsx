import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const glazingOptions = [
  {
    title: "Residential",
    description: "Explore our residential glazing solutions.",
    mainLink: "/residential",
    items: [
      { title: "Sash Windows", href: "/residential/sash-windows", description: "Traditional sash window solutions." },
      { title: "Casement Windows", href: "/residential/casement-windows", description: "Modern casement window options." },
      { title: "Bay Windows", href: "/residential/bay-windows", description: "Beautiful bay window installations." },
      { title: "Horizontal Sliding", href: "/residential/horizontal-sliding", description: "Smooth-operating horizontal sliding solutions." },
      { title: "Lift Out", href: "/residential/lift-out", description: "Removable panels for easy maintenance." },
      { title: "Combination Units", href: "/residential/combination", description: "Versatile mixed-style window solutions." },
    ],
  },
  {
    title: "Commercial",
    description: "Discover our commercial glazing services.",
    mainLink: "/commercial",
    items: [
      { title: "Office Buildings", href: "/commercial/office-buildings", description: "Glazing solutions for office buildings." },
      { title: "Retail Spaces", href: "/commercial/retail-spaces", description: "Enhance your retail space with our services." },
      { title: "Listed Buildings", href: "/commercial/listed-buildings", description: "Specialized glazing for listed buildings." },
    ],
  },
  {
    title: "Specialized",
    description: "Learn about our specialized glazing options.",
    mainLink: "/specialized",
    items: [
      { title: "Acoustic Glazing", href: "/specialized/acoustic-glazing", description: "Reduce noise with our acoustic solutions." },
      { title: "Thermal Insulation", href: "/specialized/thermal-insulation", description: "Improve energy efficiency with thermal glazing." },
      { title: "Security Glazing", href: "/specialized/security-glazing", description: "Enhance security with our specialized glass." },
    ],
  },
];

const ListItem = ({ title, onClick, children }) => (
  <li>
    <div
      onClick={onClick}
      className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </div>
  </li>
);

export function MainNav() {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = React.useState<string[]>([]);
  const closeTimeoutRef = React.useRef<NodeJS.Timeout>();

  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path);
    navigate(path);
  };

  const handleMouseEnter = (menuTitle: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenMenus((prev) => [...new Set([...prev, menuTitle])]);
  };

  const handleMouseLeave = (menuTitle: string) => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenus((prev) => prev.filter((title) => title !== menuTitle));
    }, 300);
  };

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
