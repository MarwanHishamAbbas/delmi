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
import { addItemToCart } from "~/store/cart-slice";
import { useAppDispatch } from "~/hooks/redux-hooks";
import { useToast } from "~/hooks/use-toast";

export default function ProductCard({
  name,
  price,
  picture,
  description,
}: ProductCardProps) {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const addItemToCartHandler = () => {
    dispatch(addItemToCart({ name, description, price, picture, quantity: 1 }));
    toast({
      title: "Added To Cart",
      description: `${name} succesfully added to cart`,
    });
  };
  return (
    <Card className="p-0">
      <Image
        src={picture}
        alt="Restaurant"
        width={150}
        height={150}
        quality={100}
        loading="lazy"
        className="mx-auto  rounded-tl-md rounded-tr-md p-3"
      />
      <CardContent>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-row gap-2">
        <Button size="sm" variant="outline">
          ${price}
        </Button>
        <Button onClick={addItemToCartHandler} size="sm" className="text-sm">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
