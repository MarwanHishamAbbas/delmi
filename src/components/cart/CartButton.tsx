import { DollarSign, ShoppingCart, Truck } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Badge } from "../ui/badge";
import type { RootState } from "~/store";
import { useAppSelector } from "~/hooks/redux-hooks";
import CartList from "./CartList";
import { Card } from "../ui/card";
import { getTotalPrice } from "~/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function CartButton() {
  const [isOpen, setIsOpen] = useState<boolean>();
  const totalQuantity = useAppSelector(
    (state: RootState) => state.cart.items
  ).length;

  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const total = getTotalPrice(cartItems);

  return (
    <Sheet open={isOpen}>
      <SheetTrigger asChild>
        <Button className="relative" size="square" variant="secondary">
          <ShoppingCart />
          <Badge className="bg-badge ">{totalQuantity}</Badge>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <CartList />
        <SheetFooter className="px-5 py-8">
          <Card className="flex items-center justify-between text-base">
            <div>
              <p>Delivery</p>
              <span>$4</span>
            </div>
            <Truck size={30} />
          </Card>
          <Card className="flex items-center justify-between text-base">
            <div>
              <p>Service</p>
              <span>$10</span>
            </div>
            <DollarSign size={30} />
          </Card>
          <Card className="flex items-center justify-between text-base font-bold">
            <p className="">Total Order:</p>
            <Card className="bg-destructive/10 px-6 py-2">
              <p>${total}</p>
            </Card>
          </Card>

          <Link onClick={() => setIsOpen(!isOpen)} href="order">
            <Button disabled={!!!totalQuantity} className="mt-4 w-full">
              Order Now
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
