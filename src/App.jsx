import { useRef, useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MailCard from "./components/MailCard";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import DownButton from "./components/global/DownButton";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [downButton, setDownButton] = useState(false);
  const footerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const isFooterVisible =
          footerRect.top >= 0 && footerRect.top <= window.innerHeight;

        setIsFooterVisible(isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isFooterVisible && !isOpen) {
      setTimeout(() => {
        setDownButton(true);
      }, 2900);
    } else {
      setDownButton(false);
    }
  }, [isFooterVisible, isOpen]);

  return (
    <>
      <MailCard setIsOpen={setIsOpen} isOpen={isOpen} />
      {/* {!isFooterVisible && !isOpen && <DownButton />} */}
      {downButton && <DownButton />}
      {!isOpen && <Navbar />}
      {!isOpen && <Header />}
      {!isOpen && <Main />}
      {!isOpen && (
        <div ref={footerRef}>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
