import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const glazingOptions = [
  {
    title: "Residential Solutions",
    path: "/residential",
    items: [
      {
        title: "Sash Windows",
        description: "Perfect for traditional Victorian and Georgian properties",
        path: "/residential/sash-windows",
      },
      {
        title: "Casement Windows",
        description: "Ideal for modern homes and apartments",
        path: "/residential/casement-windows",
      },
      {
        title: "Bay Windows",
        description: "Specialized solutions for bay window configurations",
        path: "/residential/bay-windows",
      },
    ],
  },
  {
    title: "Commercial Solutions",
    path: "/commercial",
    items: [
      {
        title: "Office Buildings",
        description: "Sound insulation for productive work environments",
        path: "/commercial/office-buildings",
      },
      {
        title: "Retail Spaces",
        description: "Energy-efficient solutions for shops and stores",
        path: "/commercial/retail-spaces",
      },
      {
        title: "Listed Buildings",
        description: "Heritage-compliant secondary glazing options",
        path: "/commercial/listed-buildings",
      },
    ],
  },
  {
    title: "Specialized Services",
    path: "/specialized",
    items: [
      {
        title: "Acoustic Glazing",
        description: "Maximum noise reduction for urban properties",
        path: "/specialized/acoustic-glazing",
      },
      {
        title: "Thermal Insulation",
        description: "Enhanced energy efficiency solutions",
        path: "/specialized/thermal-insulation",
      },
      {
        title: "Security Glazing",
        description: "Additional protection for your property",
        path: "/specialized/security-glazing",
      },
    ],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MainNav() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path); // Debug log
    navigate(path);
  };

  return (
    <NavigationMenu className="max-w-screen-xl mx-auto px-4">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/"
            className="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Home
          </Link>
        </NavigationMenuItem>
        {glazingOptions.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="col-span-2">
                  <div
                    onClick={() => handleNavigation(section.path)}
                    className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                  >
                    View All {section.title}
                  </div>
                </li>
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => handleNavigation(item.path)}
                  >
                    <ListItem title={item.title}>
                      {item.description}
                    </ListItem>
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}