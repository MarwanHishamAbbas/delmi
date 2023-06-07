import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProductCardProps } from "~/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTotalPrice(cartItems: ProductCardProps[]) {
  const addition = (acc: number, currentvalue: ProductCardProps) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cartItems.reduce(addition, 0);
  if (total === 0) {
    return 0;
  } else {
    return total + 14;
  }
}
