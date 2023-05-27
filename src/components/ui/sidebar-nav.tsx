import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { buttonVariants } from "./button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("grid grid-cols-1 gap-2", className)} {...props}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            " justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
      <Link href="" className={cn(buttonVariants({ variant: "destructive" }))}>
        Logout
      </Link>
    </nav>
  );
}
