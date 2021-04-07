import React from "react";
import { ScrollPageContainer } from "~/components/ScrollPageContainer/index.tsx";
import { Profile } from "~/components/pages/Profile.tsx";
import { Bye } from "~/components/pages/Bye.tsx";

import "./index.css";

export default function Home() {
  return (
    <ScrollPageContainer>
      <Profile />
      <Bye />
    </ScrollPageContainer>
  );
}
