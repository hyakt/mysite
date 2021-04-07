import React from "react";
import { ScrollPageContainer } from "~/components/ScrollPageContainer/index.tsx";
import { Profile } from "~/components/pages/Profile.tsx";
import { Interests } from "~/components/pages/Interests.tsx";
import { Bye } from "~/components/pages/Bye.tsx";

import "./index.css";

export default function Home() {
  return (
    <ScrollPageContainer>
      <Profile />
      <Interests />
      <Bye />
    </ScrollPageContainer>
  );
}
