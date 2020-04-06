import React, { useState } from 'react';

function Slides({slides}) {

    const [activeSlideNo, setActiveSlideNo] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(slides[0]);
    const [disabledPrev, setDisabledPrev] = useState(true);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledRestart, setDisabledRestart] = useState(true);

    const onClickNext = () => {
      var curSlideNo = activeSlideNo;
      
      if(curSlideNo < slides.length-1) {
        curSlideNo ++;
        setActiveSlideNo(curSlideNo);
        setCurrentSlide(slides[curSlideNo]);
        setDisabledPrev(false);
        setDisabledRestart(false);
      }

      if(curSlideNo === slides.length-1) {
        setDisabledNext(true);
      }
    }

    const onClickPrev = () => {
      var curSlideNo = activeSlideNo;
      
      if(curSlideNo > 0) {
        curSlideNo --;
        setActiveSlideNo(curSlideNo);
        setCurrentSlide(slides[curSlideNo]);
        setDisabledNext(false);
      } 
      if(curSlideNo === 0) {
        setDisabledPrev(true);
        setDisabledRestart(true);
      }
    }

    const onClickRestart = () => {
      setActiveSlideNo(0);
      setCurrentSlide(slides[0]);
      setDisabledPrev(true);
      setDisabledNext(false);
      setDisabledRestart(true);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={() => onClickRestart()} disabled={disabledRestart}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={() => onClickPrev()} disabled={disabledPrev}>Prev</button>
                <button data-testid="button-next" className="small" onClick={() => onClickNext()} disabled={disabledNext}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );

}

export default Slides;
