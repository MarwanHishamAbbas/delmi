import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import type { ProductCardProps } from "~/types/product";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { useAppDispatch } from "~/hooks/redux-hooks";
import { deleteItemFromCart } from "~/store/cart-slice";

export default function CartCard({
  name,
  price,
  picture,
  quantity,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const deleteItemFromCardHandler = () => {
    dispatch(deleteItemFromCart(name));
  };
  return (
    <Card>
      <CardContent className="flex-row items-center justify-between p-0">
        <div className="space-y-2 text-sm">
          <h5>{name}</h5>
          <span className="font-bold">${price}</span>
          <p>x{quantity}</p>
          <Button
            size="square"
            variant="secondary"
            onClick={deleteItemFromCardHandler}
          >
            <Trash size={17} />
          </Button>
        </div>
        <Image alt={name} src={picture} width={100} height={100} />
      </CardContent>
    </Card>
  );
}
