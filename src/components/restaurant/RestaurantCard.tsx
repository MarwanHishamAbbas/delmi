import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantCard() {
  return (
    <Card className="p-0">
      <Link href="/restaurants">
        <Image
          src="/restaurant.png"
          alt="Restaurant"
          width={100}
          height={100}
          className="w-full rounded-tl-md rounded-tr-md"
        />
        <CardContent>
          <h3 className="text-xl font-bold lg:text-2xl">Burger King</h3>
        </CardContent>
      </Link>
    </Card>
  );
}
