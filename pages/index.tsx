import React from "react";
import { ScrollPageContainer } from "~/components/ScrollPageContainer/index.tsx";
import { Profile } from "~/components/pages/Profile.tsx";

import "./index.css";

export default function Home() {
  return (
    <ScrollPageContainer>
      <Profile />
    </ScrollPageContainer>
  );
}
