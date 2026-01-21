//This function will allow different parts of the website to fade in and out
//as the user scrolls through the page
//Code gotten from: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4

import React from "react";
import './fadeInSection.css';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    //copyRef makes sure the ref value is the smae when the clean up portion of
    //useEffect runs
    const copyRef = domRef.current

    //Code for setting visibility gotten from: https://stackoverflow.com/questions/59595700/how-to-make-a-react-component-fade-in-on-scroll-using-intersectionobserver-but
    const observer = new IntersectionObserver(entries => {
      //There is only ever one entry
      if(entries[0].isIntersecting){
        //Will set visibility to true and then stop observing so that the
        //component will only fade in once
        setVisible(true)
        observer.unobserve(copyRef)
      }
    });

    observer.observe(copyRef);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection