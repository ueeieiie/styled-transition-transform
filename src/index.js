import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const appLocation = document.querySelector('.app');

const Red = styled.div`
	width: 100%;
	height: 100%;
	background-color: red;
	flex: 0 0 100%;	
	transition: transform 500ms ease;	

	transform: ${props => `translate(${props.onStart ? '0' : '100px'})`}
	/* transform: translate(${
		props => {
			console.log('onStart:', props.onStart);
			return props.onStart ? '0' : '100px'
		}
	}); */
`;



const Changer = (props) => {
	const Button = styled.div`
		position:absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 100px;
		left: 100px;
		color: white;
		background: black;
		width: 100px;
		height: 60px;
		cursor: pointer;
		z-index: 100;
	`;

	const onClickHandler = () => { props.toggleOnStart() }

	return <Button onClick={onClickHandler}>Change!</Button>
}


const Wrapper = styled.div`
			width: 100%;
			height: 100%;
			background: gray;
			display: flex;
			overflow:hidden;
			position: relative;
		`;

class App extends React.Component {
	state = { onStart: true	};

	toggleOnStart = () => {	this.setState({onStart: !this.state.onStart}) }

	render(){
		return (
			<Wrapper>
				<Changer toggleOnStart={this.toggleOnStart} />
				<Red onStart={this.state.onStart} />
			</Wrapper>
		);
	}
}

ReactDOM.render(
	<App />,
	appLocation
);