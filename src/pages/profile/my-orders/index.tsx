import Image from "next/image";
import React from "react";
import ProfileLayout from "~/components/profile/ProfileLayout";

export default function MyOrders() {
  return (
    <ProfileLayout>
      <div className="grid place-content-center">
        <Image src="/no-orders.svg" alt="No Orders" width={300} height={300} />
        <h4 className="text-xl font-bold">No Orders Yet</h4>
      </div>
    </ProfileLayout>
  );
}
