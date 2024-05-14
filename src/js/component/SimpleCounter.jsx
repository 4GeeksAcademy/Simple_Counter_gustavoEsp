
import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
export function SimpleCounter(props){
	let timeoutId = 0;
	let [counter1, setCounter] = useState(Number(props.counter));
	let [operacion, setOperacion] = useState('');
	
	useEffect(()=>{
		if (operacion === "Add") {
			timeoutId = setTimeout(()=>{
				setCounter(prev  => prev + 1);
			},1000)
		
		}
		else if (operacion === "Rest") {
			timeoutId = setTimeout(()=>{
				if (counter1 > 0 ){
					setCounter(prev  => prev - 1);
				}
			},1000)
		}
		else if (operacion === "Reset"){
			timeoutId = setTimeout(()=>{
				setCounter(prev  => 0);
				clearTimeout(timeoutId);
				setOperacion(operacion = "");
			},1000)

		}
	}
), [counter1, operacion]

	const handleChange = (event) => {
		setCounter(Number(event.target.value));
	  };
	
	return(
		<div className="container">
			<div className="bigCounter">
				<div className="clock">
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
						<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
						<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
					</svg>
				</div>
				<div className="six">{Math.floor(counter1 / 100000) % 10}</div>
				<div className="five">{Math.floor(counter1 / 10000) % 10}</div>
				<div className="four">{Math.floor(counter1 / 1000) % 10}</div>
				<div className="three">{Math.floor(counter1 / 100) % 10}</div>
				<div className="two">{Math.floor(counter1 / 10) % 10}</div>
				<div className="one">{Math.floor(counter1 % 10)}</div>

			</div>
			<div className="row">
						<h1 className="text-center mt-5" id="numero">{counter1}</h1>
						<input className="value" type="number" name="value" values={counter1} onChange={handleChange}/>
						<p id="values"></p>
						
			</div>
			<div className="counter-container" id="botones">
				<button className="btn btn-success btn-lg"  onClick={() => setOperacion(operacion = "Reset")}>
					Reiniciar
				</button>
				<button className="btn btn-warning btn-lg"  onClick={() => setOperacion(operacion = "Rest")}>
					Disminuir
				</button>
				<button className="btn btn-primary btn-lg"  onClick={() => setOperacion(operacion = "Add")}>
					Incrementar
				</button>
			</div>
		</div>


	)

}

