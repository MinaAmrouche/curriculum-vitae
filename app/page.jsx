import "App.scss";
import { Introduction, Experiences } from "components/organisms";

export default function Home() {
  return (
    <div className="App">
      <Introduction />
      <Experiences />
    </div>
  );
}
