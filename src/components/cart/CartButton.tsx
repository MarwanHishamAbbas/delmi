import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Badge } from "../ui/badge";

import type { RootState } from "~/store";
import { useAppSelector } from "~/hooks/redux-hooks";

export default function CartButton() {
  const totalQuantity = useAppSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <>
      <div className="hidden md:block">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="relative" size="square" variant="secondary">
              <ShoppingCart />
              <Badge className="bg-badge ">{totalQuantity}</Badge>
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers. This action
                cannot be undone.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="relative" size="square" variant="secondary">
              <ShoppingCart />
              <Badge className="bg-badge ">{totalQuantity}</Badge>
            </Button>
          </SheetTrigger>
          <SheetContent size="xl" position="bottom">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers. This action
                cannot be undone. This will permanently delete your account and
                remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
