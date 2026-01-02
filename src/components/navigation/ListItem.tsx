import { cn } from "@/lib/utils";
import type { FC } from "react";

interface ListItemProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
  icon?: FC<{ className?: string; size?: number }>;
}

export const ListItem = ({ title, onClick, children, icon: Icon }: ListItemProps) => (
  <li role="none">
    <div
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      className={cn(
        "cursor-pointer block select-none rounded-md p-3 leading-none",
        "no-underline outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground"
      )}
      role="menuitem"
      tabIndex={0}
      aria-label={title}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex-shrink-0 mt-0.5">
            <Icon size={24} className="text-primary" />
          </div>
        )}
        <div className="space-y-1">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </div>
    </div>
  </li>
);
