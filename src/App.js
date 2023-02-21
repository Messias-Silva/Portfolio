import React, {useState} from "react";
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import Tasklist from "./components/Tasklist/Tasklist";


	// const task = {

	// 	id: 0,
	// 	title: 'Nova Tarefa',
	// 	state: 'pendente'
	// }

	let idAcc = 0;

	const generateId = () => {
		idAcc = idAcc + 1;
		return idAcc;
	};

export default function App(){
	const [tasks, setTask] = useState([]);

	const addTask = (title, state) => {
		// console.log("Chamada dendro do Tasklist");
		const newTask = {
			id: generateId(),
			title,
			state
		};

		setTask((existingTask)=>{
			return [...existingTask, newTask];
		});
	};

	const updateTask = (id, title, state) =>{
			setTask((existingTask) => {
				return existingTask.map((task) =>{
					if (task.id === id) {
					return {...task, title, state};
				}else{
					return task;
				}
			})
		});
	};

	const deleteTask = (id) =>{
		setTask((existingTask) =>{
			return existingTask.filter((task) => task.id !== id);
		});
	}

	return(

		<div className="App">
			<Navbar />

			<div className="container">
				<Tasklist 
					title="Pendente" 
					onAddTask={addTask}
					taskState="Pendente"
					tasks={tasks.filter((tasks)=>tasks.state==="Pendente")} 
					onTaskUpdate={updateTask}
					onDeleteTask={deleteTask}
				/>

				<Tasklist 
					title="Fazendo" 
					onAddTask={addTask}
					taskState="Fazendo"
					tasks={tasks.filter((tasks)=>tasks.state=="Fazendo")} 
					onTaskUpdate={updateTask}
					onDeleteTask={deleteTask}
				/>

				<Tasklist 
					title="Completo" 
					onAddTask={addTask}
					taskState="Completo"
					tasks={tasks.filter((tasks)=>tasks.state=="Completo")} 
					onTaskUpdate={updateTask}
					onDeleteTask={deleteTask}
				/>
			</div>

		</div>
	);
}
