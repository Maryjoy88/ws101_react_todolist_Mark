import React, { useState } from 'react';
import './Todolist.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodoCompletion = (index) => {
        const newTodos = todos.map((todo, i) => 
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="todo-list">
            <h1>ToDo List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Create new list..." 
            />
            <button onClick={addTodo}>Make</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <input 
                            type="checkbox" 
                            checked={todo.completed} 
                            onChange={() => toggleTodoCompletion(index)} 
                        />
                        <span>{todo.text}</span>
                        <button onClick={() => deleteTodo(index)}>Finish</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;