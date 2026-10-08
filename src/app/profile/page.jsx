import { Suspense } from "react";
import Loading from "../loading";
import ProfilePage from "./ProfilePage";

export const instant = false;

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProfilePage />
    </Suspense>
  );
};

export default Page;