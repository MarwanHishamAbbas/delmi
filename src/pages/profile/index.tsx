/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { signOut } from "next-auth/react";
import React from "react";
import { Button } from "~/components/ui/button";
import { requireAuth } from "~/utils/requireAuth";

function Profile() {
  return (
    <Button variant="destructive" onClick={() => void signOut()}>
      Logout
    </Button>
  );
}

export const getServerSideProps = requireAuth(async () => {
  return { props: {} };
});

export default Profile;
