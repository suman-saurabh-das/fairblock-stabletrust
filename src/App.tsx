// css & icons
import "./App.css";
// components
import Header from "./components/Header";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Section05 from "./components/Section05";
import Section06 from "./components/Section06";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="xl:relative mx-auto max-w-screen-2xl w-full!">
      <Header />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Footer />
    </div>
  );
}

export default App;
