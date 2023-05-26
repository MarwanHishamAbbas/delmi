import { Facebook, User } from "lucide-react";
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

export function UserButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* If authenticated open the profile page, else open the modal */}
        {/* <Link href="/profile">
          <Button size="square" variant="secondary">
            <User />
          </Button>
        </Link> */}
        <Button size="square" variant="secondary">
          <User />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">Login</DialogTitle>
          <DialogDescription>
            Welcome to our website! Sign in now to unlock a world of
            personalized experiences and exclusive benefits.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mx-auto">
          <Button variant="outline" icon={<Facebook />} type="submit">
            Facebook
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
