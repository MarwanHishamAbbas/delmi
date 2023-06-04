/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { MapPin } from "lucide-react";

import Link from "next/link";
import NavMenu from "./NavMenu";
import { Input } from "../ui/input";
import CartButton from "../cart/CartButton";
import { UserButton } from "../auth/UserButton";

export default function Navbar() {
  const [address, setAddress] = useState<string>("Delivery address");
  const getDeliveryAddress = () => {
    if (navigator.geolocation) {
      function success(position: GeolocationPosition) {
        const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;
        void fetch(geoApiUrl)
          .then((res) => res.json())
          .then((data) => {
            setAddress([data.city, data.countryCode].join(", "));
          });
      }
      function failed() {
        console.log("Something went wrong");
      }
      navigator.geolocation.getCurrentPosition(success, failed);
    } else {
      // Notification Alert
      alert("Your browser doesnot support location");
    }
  };

  useEffect(() => {
    getDeliveryAddress();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center border-b-[1px] border-b-secondary bg-background/70 shadow-sm backdrop-blur-md">
      <nav className="container flex items-center justify-between gap-6">
        <div className="flex items-center ">
          <Link href="/">
            <Image
              src="/brand.svg"
              alt="logo"
              width={120}
              height={50}
              className="hidden md:block"
            />
          </Link>
          <Button
            className="hidden md:flex"
            variant="link"
            size="sm"
            icon={<MapPin />}
          >
            {address}
          </Button>
          <div className="hidden gap-3 text-base text-muted-foreground md:flex">
            <Link href="/shops">Shops</Link>
            <Link href="/restaurants">Restaurants</Link>
          </div>
          <NavMenu address={address} />
        </div>
        <Input placeholder="Search restaurants, dishes or goods" />
        <div className="flex gap-3">
          <CartButton />
          <UserButton />
        </div>
      </nav>
    </header>
  );
}
