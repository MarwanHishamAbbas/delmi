import { Chrome, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export function UserButton() {
  const { status } = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      // Adding Toast Later
      return;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      {/* If authenticated open the profile page, else open the modal */}
      {status === "authenticated" ? (
        <Link href="/profile">
          <Button size="square" variant="secondary">
            <User />
          </Button>
        </Link>
      ) : (
        <DialogTrigger asChild>
          <Button size="square" variant="secondary">
            <User />
          </Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Login</DialogTitle>
          <DialogDescription>
            Welcome to our website! Sign in now to unlock a world of
            personalized experiences and exclusive benefits.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mx-auto">
          <Button
            onClick={() => void signInWithGoogle()}
            variant="outline"
            icon={<Chrome />}
            type="submit"
            isLoading={isLoading}
          >
            Sign in with Google
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
