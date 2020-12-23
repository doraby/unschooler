import MainCourse from "./main-course-and-books";
import MainProfession from "./main-profession";
import MainProject from "./main-project";
import MainWork from "./main-work";

function MainPart() {
  return (
    <div className="main-part">
      <MainProfession />
      <MainCourse />
      <MainProject />
      <MainWork />
      <div className="main-part__button">
        <a className="button button_large" href="/">Ну давай!</a>
      </div>
      <div className="main-image">
        <img src="src/img/main-image.svg" alt="new profession"/>
      </div>
    </div>
  );
}

export default MainPart;