import { cn } from "@/lib/utils";

interface ListItemProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const ListItem = ({ title, onClick, children }: ListItemProps) => (
  <li>
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none",
        "no-underline outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "focus:bg-accent focus:text-accent-foreground"
      )}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </div>
  </li>
);