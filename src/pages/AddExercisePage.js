import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const AddExercisePage = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('Kgs');
    const [date, setDate] = useState('');

    function isDateValid(date) {
        const format = /^\d\d-\d\d-\d\d$/;
        return format.test(date);
    }

    const addExercise = async () => {
        if (!isDateValid(date)) {
            alert("Invalid date format. Please use the format DD-MM-YY.");
            return;
        }
        if (weight < 1){
            alert("Invalid weight please enter a weight more than 0")
            return;
        }
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises',{
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers:{
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("successfully added exercise")
        } else{
            alert(`failed exercise status code is ${response.status}`)
        }
        navigate("/");
    };

    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                placeholder="Enter weight here"
                onChange={e => setWeight(e.target.value)} />
            <select name="unit"
                type="text"
                placeholder="Select unit here"
                value={unit}
                onChange={e => setUnit(e.target.value)} 
                >
                <option value="kgs">Kgs</option>
                <option value="Lbs">Lbs</option>
                </select>
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;