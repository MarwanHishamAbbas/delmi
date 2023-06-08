import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import type { CartItemProps } from "~/types/product";

import CartCardOptions from "./CartCardOptions";

export default function CartCard({
  name,
  price,
  picture,
  quantity,
  description,
}: CartItemProps) {
  return (
    <Card>
      <CardContent className="flex-row items-center justify-between p-0">
        <div className="space-y-2 text-sm">
          <h5>{name}</h5>
          <span className="font-bold">${price}</span>
          <CartCardOptions
            name={name}
            quantity={quantity}
            description={description}
            price={price}
            picture={picture}
          />
        </div>
        <Image alt={name} src={picture} width={100} height={100} />
      </CardContent>
    </Card>
  );
}
