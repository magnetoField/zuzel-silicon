import Hero from "./components/Hero";
import Story from "./components/Story";
import Architecture from "./components/Architecture";
import Silicon from "./components/Silicon";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <Hero />
      <Story />
      <Architecture />
      <Silicon />
    </LanguageProvider>
  );
}

export default App;
