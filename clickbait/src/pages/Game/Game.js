import React, { Component } from 'react';
// import Header from "../../components/Header";
import Memory from "../../compoents/Memory/Memory.js";
// import Rules from "../../components/Rules";

// import fish from "../../fishPics/Calico-Rockfish.jpg"

class Game extends Component {

	constructor(props) {
		super(props);

		this.state = {
			lureList: ['./Calico-Rockfish.jpg', './canary-rockfish.png', './chinarockfish.png', './copper_rockfish.jpg', './Deacon-Rockfish.jpg'],
		};

	}

	// componentDidMount() {
	// 	this.loadFishPics();
	// };

	// loadFishPics() {
	// 	const basePath = "../../fishPics/"

	// 	this.state.lureList.map(fish => {
	// 		console.log(fish)

	// 	})

		

	// }

	render() {
		//you can put code here to run prior to the render
		const cards = this.state.lureList.map( picture => {
			return (
					<Memory image={picture}/>
				)
		})
		return (
			//code here to render
			// <Memory />
			<div>
				{cards}	
			</div>
		)
	}
}

export default Game;