import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MailCard from "./components/MailCard";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <MailCard setIsOpen={setIsOpen} isOpen={isOpen} />
      {!isOpen && <Navbar />}
      {!isOpen && <Header />}
      {!isOpen && <Main />}
      {!isOpen && <Footer />}
    </>
  );
}

export default App;
