import './app.css';
import React, { Component } from 'react'
import Habits from './components/habits';
import Navbar from './components/navbar';


export default class App extends Component {
	state = {
		habits: [
			{
				id: 1,
				name: 'Reading',
				count: 0
			},
			{
				id: 2,
				name: 'Running',
				count: 0
			},
			{
				id: 3,
				name: 'Coding',
				count: 0
			},
		],
		totalCount: 3,
	}

	handleIncrement = (habit) => {
		const habits = this.state.habits.map(item => {
			if(item.id === habit.id) {
				return {...habit, count: habit.count + 1};
			}
			return item;
		})
		this.setState({...this.state, habits});
	};

	handleDecrement = (habit) => {
		const habits = this.state.habits.map(item => {
			if(item.id === habit.id) {
				return {...habit, count: habit.count - 1 <= 0 ? 0 : habit.count - 1};
			}
			return item;
		})
		this.setState({...this.state, habits});
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter(item => item.id !== habit.id);
		this.setState({...this.state, habits});
	};

	handleAddHabit = (name) => {
		const initHabit = {id: this.state.totalCount + 1, name, count:0};
		const habits = [...this.state.habits].concat(initHabit);
		console.log(habits);
		this.setState({...this.state, habits, totalCount: this.state.totalCount + 1});
	};

	handleReset = () => {
		const habits = this.state.habits.map(habit => {
			if(habit.count !== 0) {
				return {...habit, count:0}
			}
			return habit;
		})
		this.setState({...this.state, habits});
	}

	render() {
		return ( 
			<>
				<Navbar totalCount={this.state.habits.filter(habit => habit.count > 0).length}/>
				<Habits habits={this.state.habits} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} onAddHabit={this.handleAddHabit} onReset={this.handleReset}/>
			</>
		);
	}
}