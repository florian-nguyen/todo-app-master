import "./App.css";
import Todo from "./components/todo";
import styled from "styled-components";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	font-family: "Montserrat", sans-serif;
`;

function App() {
	return (
		<AppContainer>
			<Todo />
		</AppContainer>
	);
}

export default App;
