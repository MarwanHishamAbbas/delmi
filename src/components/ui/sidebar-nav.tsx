import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button, buttonVariants } from "./button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(false);
  const logoutHandler = async () => {
    setLoading(true);
    try {
      await signOut();
    } catch (error) {
      throw new Error("Can't Sign out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav
      className={cn(
        "grid grid-cols-1 rounded-lg border border-secondary",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href ? "bg-secondary hover:bg-secondary" : "",
            " justify-start  "
          )}
        >
          {item.title}
        </Link>
      ))}
      <Button
        onClick={() => void logoutHandler()}
        isLoading={loading}
        disabled={loading}
        variant="ghost"
        icon={<LogOut />}
        className="justify-start"
      >
        Logout
      </Button>
    </nav>
  );
}
