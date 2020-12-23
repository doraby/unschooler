import MainPart from "./main-part";
import MainProposal from "./main-proposal";
import Promo from "./promo";
import Sidebar from "./sidebar";

function Main() {
  return (
    <main>
      <Promo />
      <MainPart />
      <MainProposal />
      <Sidebar />
    </main>
  );
}

export default Main;