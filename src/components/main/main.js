import React from 'react';
import MainPart from "./main-part";
import MainProposal from "./main-proposal";
import Promo from "./promo";


function Main() {
  return (
    <main>
      <Promo />
      <MainPart />
      <MainProposal />
    </main>
  );
}

export default Main;