import React, { memo } from 'react';

const HabitAddForm = (props) => {

    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAddHabit(inputRef.current.value);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input type="text" className="add-input" placeholder="Habit" ref={inputRef}/>
            <button className="add-button">Add</button>
        </form>
    )
};

export default memo(HabitAddForm);