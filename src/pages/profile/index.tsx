/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "~/components/ui/button";

function Profile() {
  return (
    <Button variant="destructive" onClick={() => void signOut()}>
      Logout
    </Button>
  );
}

export default Profile;
