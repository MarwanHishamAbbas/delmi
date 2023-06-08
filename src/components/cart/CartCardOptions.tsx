import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { useAppDispatch } from "~/hooks/redux-hooks";
import {
  incrementItemInCart,
  deleteItemFromCart,
  decrementItemInCart,
} from "~/store/cart-slice";
import { Card } from "../ui/card";
import type { CartItemProps } from "~/types/product";

export default function CartCardOptions({ name, quantity }: CartItemProps) {
  const dispatch = useAppDispatch();
  const deleteItemFromCardHandler = () => {
    dispatch(deleteItemFromCart(name));
  };
  const incrementItemHandler = () => {
    dispatch(incrementItemInCart(name));
  };
  const decrementItemHandler = () => {
    dispatch(decrementItemInCart(name));
  };

  return (
    <div className="flex items-center gap-4 ">
      <Card className="flex items-center gap-4  p-0">
        <Button
          onClick={incrementItemHandler}
          variant="secondary"
          size="icon"
          className="rounded-br-none rounded-tr-none"
        >
          <Plus size={15} />
        </Button>
        <span>{quantity}</span>
        <Button
          onClick={decrementItemHandler}
          variant="secondary"
          size="icon"
          className="rounded-bl-none rounded-tl-none"
        >
          <Minus size={15} />
        </Button>
      </Card>

      <Button
        size="icon"
        variant="secondary"
        onClick={deleteItemFromCardHandler}
      >
        <Trash size={15} />
      </Button>
    </div>
  );
}
