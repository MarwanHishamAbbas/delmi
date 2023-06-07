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

export default function CartButton() {
  const totalQuantity = useAppSelector(
    (state: RootState) => state.cart.items
  ).length;
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const total = getTotalPrice(cartItems);

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

              <Button className="mt-4 w-full">Order Now</Button>
            </SheetFooter>
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
              <Button className="mt-4 w-full">Order Now</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
