/* eslint-disable @typescript-eslint/require-await */
import { Separator } from "~/components/ui/separator";
import { ProfileForm } from "../../components/profile/profile-form";
import ProfileLayout from "~/components/profile/ProfileLayout";
import { requireAuth } from "~/utils/requireAuth";

export default function SettingsProfilePage() {
  return (
    <ProfileLayout>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is how others will see you on the site.
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </ProfileLayout>
  );
}

export const getServerSideProps = requireAuth(async () => {
  return { props: {} };
});
