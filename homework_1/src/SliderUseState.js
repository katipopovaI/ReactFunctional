import { Component, useState } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

// class SliderUseState extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://avatars.mds.yandex.net/i?id=8f10cac86dd848f5a66c86a5fdded132c709c5db-8497407-images-thumbs&n=13"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{' '}
//             {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

const calcValue = () => {
  console.log('random');
  return Math.random() * (50 - 1) + 1;
};

const SliderUseState = (props) => {
  // const slideState = useState();
  // console.log(slideState);

  const [slide, setSlide] = useState(calcValue); //random только 1 раз
  // const [slide, setSlide] = useState(() => calcValue()); //random только 1 раз, если нужны аргументы
  // const [slide, setSlide] = useState(calcValue()); //random при каждом клике
  // const [slide, setSlide] = useState(0); //10
  const [autoplay, setAutoplay] = useState(false);
  // const [state, setState] = useState({ slide: 0, autoplay: false });

  // const changeSlide = (i) => {
  //   setState((state) => ({ ...state, slide: state.slide + i }));
  //   // setState((state) => ({ slide: state.slide + i }));
  // }

  // const toggleAutoplay = () => {
  //   setState((state) => ({ ...state, autoplay: !state.autoplay }));
  //   // setState((state) => ({ autoplay: !state.autoplay }));
  // };

  const changeSlide = (i) => {
    setSlide((slide) => slide + i);
    // setSlide((slide) => slide + i);
    // setSlide(slide + i);
    // setSlide(slide + i);
  };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  };

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=8f10cac86dd848f5a66c86a5fdded132c709c5db-8497407-images-thumbs&n=13"
          alt="slide"
        />
        <div className="text-center mt-5">
          {/* Active slide {this.state.slide} <br />*/}
          Active slide {slide} <br />
          {/* Active slide {state.slide} <br /> */}
          {/* {this.state.autoplay ? 'auto' : null} */}
          {autoplay ? 'auto' : null}
          {/* {state.autoplay ? 'auto' : null} */}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            // onClick={() => this.changeSlide(-1)}
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            // onClick={() => this.changeSlide(1)}
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button
            className="btn btn-primary me-2"
            // onClick={this.toggleAutoplay}
            onClick={toggleAutoplay}
          >
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SliderUseState;
