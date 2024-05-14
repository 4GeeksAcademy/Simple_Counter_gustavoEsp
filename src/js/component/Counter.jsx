
import ReactDOM from "react-dom";
import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// const  [i, setTimer] = useState(0)
// const inciar = useState(0)

const counterReset = () =>{
	i=0;
};

const counterAdd = () =>{
	clearInterval("dentro de ADD",nIntervalId);
	setInterval(() => {
			i++;
	},1000)
	console.log(nIntervalId)
};

const counterRest = () =>{
	clearInterval(nIntervalId);
	setInterval(() => {
			--i;
		},1000)
		console.log("dentro de rest", nIntervalId)
};

let nIntervalId = 0;
let i=0;
//create your first component
export const Counter = (intervalId) => {   
	nIntervalId = intervalId;
	console.log(nIntervalId)
	// const handleChange = e => setTimer(value=> value = e.target.value) 
	return (
		// i++,
		<main className="container text-center">
			<section className="container text-center my-5" id="counter">
				<div className="row">
					<h1 className="text-center mt-5" id="numero">{i}</h1>
					<input className="text" name="value" values={i} />
					<p id="values"></p>
					
				</div>
			</section>
			{/* <section className="container text-center my-5">
				<h2> Counter</h2>
				<form
				className="form-control"
				onSubmit={e=>e.preventDefault()}>
				<input
				className="form-control"
				type="number"
				value={i}
				onchange={e=> handleChange(e)}
				/>
				
				
				
				
				className="form-control"
				
				</form>
				
			</section>		 */}
						<button className="btn btn-success btn-lg" onClick={counterReset}>
							Reiniciar
						</button>
						<button className="btn btn-warning btn-lg" onClick={counterRest}>
							Disminuir
						</button>
						<button className="btn btn-primary btn-lg" onClick={counterAdd}>
							Incrementar
						</button>
			
				
			

		</main>
	);
};

setTimeout(()=>{
const inputValor = document.querySelector("input[name='value']")
inputValor.addEventListener("change", (event) =>{i=event.target.value})},3000
)
// export {Home, Nada};
