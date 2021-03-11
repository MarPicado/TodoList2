import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [task, setTask] = useState([]);

	function addItem(e) {
		if (e.key === "Enter" && e.target.value !== "") {
			setTask(task.concat(e.target.value));
			e.target.value = "";
		}
	}

	function deleteItem(index) {
		if (index > -1) {
			const filterData = task.filter(item => item !== task[index]);
			setTask(filterData);
		}
	}

	return (
		<div className="container">
			<h1 className="title">My To Do List</h1>
			<div className="inputValue">
				<input
					type="text"
					name="item"
					placeholder="Add the items here"
					onKeyPress={e => addItem(e)}></input>
				<div className="list">
					<ul className="lineForm">
						{task.map((value, index) => {
							return (
								<li
									className="listForm"
									onClick={() => {
										deleteItem(index);
									}}>
									{value}{" "}
									<span className="positionIcons">
										<i className="fas fa-trash"></i>
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
