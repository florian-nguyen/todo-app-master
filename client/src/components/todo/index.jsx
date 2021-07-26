import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import axios from "../../api/axios";
import { FiCheckCircle, FiCircle, FiTrash2 } from "react-icons/fi";

const TodoContainer = styled.div`
	width: 60%;
	height: 60%;
	min-width: 300px;
	min-height: 400px;
	max-width: 600px;
	max-height: 700px;
	margin: auto;
`;

const HeaderContainer = styled.div`
	width: 100%;
	padding: 1rem 0 1.5rem;
`;

const Logo = styled.div`
	width: 100%;
	text-align: center;
	font-family: "Raleway", sans-serif;
	font-weight: 700;
	font-size: 1.5rem;
`;

const NavigationBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	gap: 2rem;

	width: 100%;
	box-sizing: border-box;
	margin: 0;
	padding: 1rem 2rem;

	font-size: 0.8rem;
	font-weight: 500;

	border-bottom: 1px solid #bdbdbd;
	border-radius: 1px;
`;

const OptionLabel = styled(motion.label)`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 35px;
	width: 100%;
	list-style: none;

	cursor: pointer;

	& > input {
		display: none;
	}

	input + span {
		transition: all 0.2s ease-in-out;
		border: 3px solid transparent;
	}

	input:checked + span {
		display: block;
		height: 100%;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 600;
		color: #2f80ed;

		border-bottom: 3px solid #2f80ed;

		transform: translateY(-2px);
	}
`;

const AddTodoSection = styled.form`
	width: 100%;
	height: 35px;

	display: flex;
	justify-content: space-between;
	gap: 1.5rem;
`;

const AddInput = styled(motion.input)`
	padding: 0.5rem 1rem;
	flex: 1;
	border: 1px solid #bdbdbd;
	border-radius: 8px;
	transition: all 0.3s ease-in-out;

	&:focus {
		outline: none;
		border: 1px solid #333;
	}
`;

const AddButton = styled.input`
	outline: none;
	border: none;
	cursor: pointer;

	padding: 0 1.5rem;
	border-radius: 8px;

	color: white;
	background-color: #2f80ed;
	/* display: flex;
	align-items: center;
	justify-content: center; */
`;

const TodoList = styled.div`
	margin-top: 1rem;
	width: 100%;
	height: 98%;
	overflow-y: scroll;

	/* width */
	&::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background: transparent;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: #2f80ed70;
		border-radius: 3px;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #555;
	}
`;

const TodoItem = styled(motion.label)`
	/* width: 100%; */
	display: flex;
	align-items: center;
	gap: 1rem;
	margin: 0.5rem 0;
	margin-right: auto;

	& span {
		font-weight: 500;
		font-size: 1rem;
		height: 100%;
		width: 100%;
	}
`;

const CheckBox = styled.input`
	width: 30px;
	height: 30px;
	background-color: red;
	display: none;
`;

const StyledIcon = styled(motion.div)`
	display: flex;
	justify-content: center;
	align-items: center;
	& :nth-child(1) {
		height: 30px;
		width: 30px;
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		box-sizing: border-box;
		padding: 2px;

		&:hover {
			color: ${({ color }) => color || "black"};
			background-color: ${({ color }) => color || "black"};
			border-radius: 2px;
			opacity: 0.7;
		}

		&:hover * {
			color: ${({ color }) => "white" || "black"};
			border: 1px solid black;
		}
	}
`;

export default function Todo() {
	const [todos, setTodos] = useState([]);
	const [mode, setMode] = useState("All");

	const [newTodo, setNewTodo] = useState("");

	const setAllMode = () => {
		setMode("All");
	};

	const setActiveMode = () => {
		setMode("Active");
	};

	const setCompletedMode = () => {
		setMode("Completed");
	};

	const getAll = async () => {
		try {
			const response = await axios.get("/");
			setTodos([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};

	const updateTodoStatus = async (id) => {
		try {
			const URI = encodeURI(`/update/status/${id}`);
			const response = await axios.get(URI);
			setTodos([
				...todos.map((todo) => (todo.id === id ? response.data : todo)),
			]);
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const URI = encodeURI(`/delete/${id}`);
			await axios.get(URI);
			setTodos([...todos.filter((todo) => todo.id !== id)]);
		} catch (error) {
			console.error(error);
		}
	};

	const handleAddTodo = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post("/add", {
				name: newTodo,
			});

			console.log(response);
			if (response.data.message) {
				alert(response.data.message);
				return;
			}

			setTodos([...todos, response.data]);
			setNewTodo("");
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		setMode("All");
		getAll();
	}, []);

	return (
		<TodoContainer onSubmit={handleAddTodo}>
			<HeaderContainer>
				<Logo>#todo</Logo>

				<NavigationBar>
					<OptionLabel onClick={setAllMode}>
						<input
							type="radio"
							name="mode"
							value="all"
							defaultChecked={mode === "All" ? true : false}
						/>
						<span>All</span>
					</OptionLabel>

					<OptionLabel onClick={setActiveMode}>
						<input
							type="radio"
							name="mode"
							value="active"
							defaultChecked={mode === "Active" ? true : false}
						/>
						<span>Active</span>
					</OptionLabel>

					<OptionLabel onClick={setCompletedMode}>
						<input
							type="radio"
							name="mode"
							value="completed"
							defaultChecked={mode === "Completed" ? true : false}
						/>
						<span>Completed</span>
					</OptionLabel>
				</NavigationBar>
			</HeaderContainer>

			<AddTodoSection>
				<AddInput
					type="text"
					required
					placeholder="Enter a new task here..."
					onChange={(e) => setNewTodo(e.target.value)}
					value={newTodo}
				/>
				<AddButton type="submit" value="Send" />
			</AddTodoSection>

			<TodoList>
				<AnimatePresence>
					{todos
						.filter((todo) => {
							switch (mode) {
								case "Completed":
									return todo.completed === true;
								case "Active":
									return todo.completed === false;
								default:
									return true;
							}
						})
						.map((todo) => {
							return (
								<TodoItem key={todo.id}>
									<StyledIcon
										color={todo.completed === true ? "green" : "orange"}
									>
										{todo.completed === true ? (
											<FiCheckCircle
												key="fi-check-circle"
												color="green"
												id={todo.id}
												onClick={() => updateTodoStatus(todo.id)}
											/>
										) : (
											<FiCircle
												key="fi-circle"
												color="orange"
												id={todo.id}
												onClick={() => updateTodoStatus(todo.id)}
											/>
										)}
									</StyledIcon>
									<CheckBox type="checkbox" />
									<span>{todo.content}</span>
									{mode === "Completed" && (
										<StyledIcon color="tomato">
											<FiTrash2
												color="tomato"
												id={todo.id}
												onClick={() => deleteTodo(todo.id)}
											/>
										</StyledIcon>
									)}
								</TodoItem>
							);
						})}
				</AnimatePresence>
			</TodoList>
		</TodoContainer>
	);
}
