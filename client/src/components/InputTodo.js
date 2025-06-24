import React,{Fragment, useState} from 'react';


const InputTodo = () => {

    const [description, setDescription] = useState('');

    const onSubmitForm = async e => {
        try{
            e.preventDefault();
            const body = { description };
            const response = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch(err){
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1>Input Todo</h1>
            <h1 className='text-center'>Pern Todo List</h1>
            <form className='d-flex mt-5'onSubmit={onSubmitForm}>
                <input type="text"
                       className="form-control"
                       placeholder="Add a new todo..."
                       value={description}
                       onChange={e => setDescription(e.target.value)}
                       />
                <button className="btn btn-success">Add Todo</button>
            </form>

        </Fragment>
    );
  }


export default InputTodo;









