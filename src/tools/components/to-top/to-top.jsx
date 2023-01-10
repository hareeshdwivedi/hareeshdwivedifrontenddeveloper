import React, {useEffect, useState} from "react"
import falcon9 from "../../../assets/falcon9.png";

const ToTop = () => {
  const [hovered, setHovered] = useState(false);
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", displayScrollToTop)

    return () => {
      window.removeEventListener("scroll", displayScrollToTop)
    };
  }, [window.scroll]);

  const displayScrollToTop = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setShowToTop(true)
    } else {
      setShowToTop(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <button data-testid="to-top-button" onClick={() => scrollToTop()} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
         className={`${showToTop ? 'block': 'hidden'} animate-fadeIn z-50 fixed right-5 bottom-10 flex justify-center items-center w-16 h-16 rounded-full bg-white drop-shadow-lg cursor-pointer`}>
      <img alt="falcon 9" height={10} width={8} src={falcon9} className={`${hovered ? "animate-bounce1" : ""}`}/>
    </button>
  );
}

export default ToTop;