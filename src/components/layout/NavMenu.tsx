import { Button } from "../ui/button";
import { MapPin, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

export default function NavMenu({ address }: { address: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden">
        <Button size="square" variant="secondary">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Link href="/">
            <Image src="/brand.svg" alt="logo" width={120} height={100} />
          </Link>
        </DropdownMenuLabel>
        <DropdownMenuLabel asChild>
          <Button variant="link" size="sm" icon={<MapPin />}>
            {address}
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link href="/shops">Shops</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/restaurants">Restaurants</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
