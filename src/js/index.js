//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";
import clock from "../../src/img/clock.jpg"

//import your own components


function SimpleCounter(props){
    return(
        <div className="text-center">
			<h1 className="text-center mt-5">Simple Counter</h1>
			<div className="counter">
				<div className="clock">
					<img src={clock} style={{width:200}}/>
				</div>
				<div className="digito">{props.digitSeis% 10}</div>
				<div className="digito">{props.digitCinco% 10}</div>
				<div className="digito">{props.digitCuatro% 10}</div>
				<div className="digito">{props.digitTres% 10}</div>
				<div className="digito">{props.digitDos % 10}</div>
				<div className="digito">{props.digitUno % 10}</div>
			</div>
		</div>
    );
}

SimpleCounter.propTypes={
    digitSeis: PropTypes.number,
    digitCinco:PropTypes.number,
    digitCuatro:PropTypes.number,
    digitTres:PropTypes.number,
    digitDos:PropTypes.number,
    digitUno: PropTypes.number
}

 let counter=0; 
setInterval(function(){     
    const Seis=Math.floor(counter/100000);     
    const Cinco=Math.floor(counter/10000);     
    const Cuatro=Math.floor(counter/1000);     
    const Tres=Math.floor(counter/100);     
    const Dos=Math.floor(counter/10);     
    const Uno=Math.floor(counter/1); 
    console.log(Seis,Cinco,Cuatro,Tres,Dos,Uno)
    
    counter++;



//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<SimpleCounter digitUno={Uno} digitDos={Dos} digitTres={Tres} digitCuatro={Cuatro} digitCinco={Cinco} digitSeis={Seis} />);

},1000);