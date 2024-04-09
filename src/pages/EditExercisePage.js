import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit}) => {
    const navigate = useNavigate();

    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    function isDateValid(date) {
        const format = /^\d\d-\d\d-\d\d$/;
        return format.test(date);
    }

    const editExercise = async () => {
        // Check if the date is valid
        if (!isDateValid(date)) {
            alert("Invalid date format. Please use the format DD-MM-YY.");
            return;
        }
        if (weight < 1){
            alert("Invalid weight please enter a weight more than 0")
            return;
        }
    
        const editedExercise = {name, reps, weight, unit, date};
        const response = await fetch(`/exercises/${exerciseToEdit._id}`,{
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers:{
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited exercise");
        } else{
            alert(`Failed to edit exercise. Status code is ${response.status}`);
        }
        navigate("/");
    };
    


    return (
        <div>
            <h1>Edit Exercises</h1>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select name="unit"
                type="text"
                value={unit}
                onChange={e => setUnit(e.target.value)} 
            >
                <option value="kgs">Kgs</option>
                <option value="Lbs">Lbs</option>
            </select>
            <input
                type="text"
                value={date}
                onChange={
                    e => setDate(e.target.value)} />
            <button
                onClick={editExercise}
            >Save</button>
        </div>
    );
}

export default EditExercisePage;