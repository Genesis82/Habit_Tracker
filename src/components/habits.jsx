import React, { Component } from 'react'
import Habit from './habit'
import HabitAddForm from './habitAddForm'

export default class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAddHabit = (name) => {
		this.props.onAddHabit(name);
	};

    render() {
        return (
            <>
                <HabitAddForm onAddHabit={this.handleAddHabit} />
                <ul>
                    {this.props.habits.map(habit => 
                    <Habit key={habit.id} habit={habit} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />)
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
            
        )
    }
}
