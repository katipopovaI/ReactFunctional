import { Component, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// class SliderUseEffect extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Slider: ${this.state.slide}`;
//   }

//   componentDidUpdate() {
//     document.title = `Slider: ${this.state.slide}`;
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

const SliderUseEffect = () => {
  const [slide, setSlide] = useState(0); //10
  const [autoplay, setAutoplay] = useState(false);

  const changeSlide = (i) => {
    setSlide((slide) => slide + i);
  };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  };

  function logging() {
    console.log('log');
  }

  useEffect(() => {
    console.log('slide');
    document.title = `Slider: ${slide}`;

    window.addEventListener('click', logging);

    return () => {
      window.removeEventListener('click', logging);
    };
    // }, []);
  }, [slide]);

  useEffect(() => {
    console.log('autoplay');
  }, [autoplay]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://avatars.mds.yandex.net/i?id=8f10cac86dd848f5a66c86a5fdded132c709c5db-8497407-images-thumbs&n=13"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {slide} <br />
          {autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SliderUseEffect;
