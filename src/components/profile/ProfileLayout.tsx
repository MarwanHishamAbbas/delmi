import { Separator } from "../ui/separator";
import { SidebarNav } from "../ui/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Profile Details",
    href: "/profile",
  },
  {
    title: "My Orders",
    href: "/profile/my-orders",
  },
];

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <>
      <div className="">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">User Profile</h2>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0">
          <aside className="-mx-4 md:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 md:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
