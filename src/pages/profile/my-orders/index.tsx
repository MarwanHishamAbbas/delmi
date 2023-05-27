import React from "react";
import ProfileLayout from "~/components/profile/ProfileLayout";
import { Separator } from "~/components/ui/separator";

export default function MyOrders() {
  return (
    <ProfileLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">My orders</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
      </div>
    </ProfileLayout>
  );
}
