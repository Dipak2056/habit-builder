import "./App.css";
import { Footer } from "./components/Footer";
import AddHabits from "./components/Habits-section";
import QuoteSection from "./components/Quotes-section";
import Results from "./components/Results";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <QuoteSection />
      <AddHabits />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
