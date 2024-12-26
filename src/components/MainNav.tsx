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

const glazingOptions = [
  {
    title: "Residential Solutions",
    items: [
      {
        title: "Sash Windows",
        description: "Perfect for traditional Victorian and Georgian properties",
      },
      {
        title: "Casement Windows",
        description: "Ideal for modern homes and apartments",
      },
      {
        title: "Bay Windows",
        description: "Specialized solutions for bay window configurations",
      },
    ],
  },
  {
    title: "Commercial Solutions",
    items: [
      {
        title: "Office Buildings",
        description: "Sound insulation for productive work environments",
      },
      {
        title: "Retail Spaces",
        description: "Energy-efficient solutions for shops and stores",
      },
      {
        title: "Listed Buildings",
        description: "Heritage-compliant secondary glazing options",
      },
    ],
  },
  {
    title: "Specialized Services",
    items: [
      {
        title: "Acoustic Glazing",
        description: "Maximum noise reduction for urban properties",
      },
      {
        title: "Thermal Insulation",
        description: "Enhanced energy efficiency solutions",
      },
      {
        title: "Security Glazing",
        description: "Additional protection for your property",
      },
    ],
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function MainNav() {
  return (
    <NavigationMenu className="max-w-screen-xl mx-auto px-4">
      <NavigationMenuList>
        {glazingOptions.map((section) => (
          <NavigationMenuItem key={section.title}>
            <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {section.items.map((item) => (
                  <ListItem key={item.title} title={item.title}>
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}