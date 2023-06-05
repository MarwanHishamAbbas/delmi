import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

import type { ProductCardProps } from "~/types/product";
import { useDispatch } from "react-redux";
import { addItemToCart } from "~/store/cart-slice";

export default function ProductCard({
  name,
  price,
  picture,
  description,
}: ProductCardProps) {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(addItemToCart({ name, description, price, picture }));
  };
  return (
    <Card>
      <Image
        src={picture}
        alt="Restaurant"
        width={150}
        height={150}
        quality={100}
        loading="lazy"
        className="mx-auto  rounded-tl-md rounded-tr-md"
      />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="gap-2 lg:flex-row">
        <Button size="sm" variant="outline">
          ${price}
        </Button>
        <Button
          onClick={addItemToCartHandler}
          size="sm"
          className="flex-1 text-sm"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
