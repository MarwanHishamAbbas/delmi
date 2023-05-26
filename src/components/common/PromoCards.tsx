import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Backpack, Gift, Truck } from "lucide-react";

const PROMO_CARD_DATA = [
  {
    icon: <Gift />,
    title: "Up to - 30% off",
    description: "on selected meals",
  },
  {
    icon: <Truck />,
    title: "Free Delivery",
    description: "on all orders from $20",
  },
  {
    icon: <Backpack />,
    title: "Free takeaway",
    description: "on any order",
  },
];

export default function PromoCards() {
  return (
    <div className=" grid gap-5 lg:grid-cols-3">
      {PROMO_CARD_DATA.map((card, idx) => (
        <Card key={idx} className="flex items-center gap-8">
          <CardTitle className="rounded-full bg-primary p-4 text-white">
            {card.icon}
          </CardTitle>
          <div className="flex flex-col gap-1">
            <CardTitle className="font-bold">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </div>
        </Card>
      ))}
    </div>
  );
}
