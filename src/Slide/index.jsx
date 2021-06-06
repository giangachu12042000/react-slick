import React,{useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

const Slide =()=>{
  const [hight, setHight]= useState(158);
  const [width, setWidth] = useState(null);
  const [data, setData] = useState(0);

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

      function showCoords(event, param) {
        var x = Math.floor(event.pageX/100);

        setWidth(x*100 - 10);
        console.log(width,'==>>')
        setData(param);
      }

      return (
        <div className="container">
          <div className="box-1">
            <h2>fasdasd</h2>
          </div>
          {
            width &&
            <div className="show-popup" style={{position:'absolute', top:hight, left: width, zIndex: 1000}}>
              <h2  className="backgroun" >{data}</h2>
            </div>
          }
          <div className="box-slide">
            <Slider {...settings}>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,1)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,2)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,3)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,41)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,5)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,5)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,55)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,6)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,6)}>1</h3>
                </div>
                <div className="item" >
                  <h3 onMouseOver={(e)=>showCoords(e,6)}>1</h3>
                </div>
            </Slider>
          </div>
        </div>
      );
}

export default Slide;