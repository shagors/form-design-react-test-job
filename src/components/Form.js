import React, { useState } from 'react'

const Form = () => {
    const [formFields, setFormFields] = useState([
        {
            name: '',
            age: ''
        }
    ]);

    const handleFormChange = (e, index) => {
        const data = [...formFields];
        data[index][e.target.name] = e.target.value;
        setFormFields(data)
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields);
    }

    const addFields = () => {
        const object = {
            name: '',
            age: ''
        }
        setFormFields([...formFields, object])
    }

    const removeFields = (e,index) => {
        
        const data = [...formFields]
        data.splice(index, 1);
        setFormFields(data);
        console.log(data);
    }


  return (
    <div>
        <form onSubmit={submit}>
        {
            formFields.map((form, index) => {
                return (
                    <div key={index}>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs mr-5" onChange={e => handleFormChange(e, index)} value={form.name} />
                        <input type="text" name='age' placeholder="Age" className="input input-bordered w-full max-w-xs" onChange={(e) => handleFormChange(e, index)} value={form.age} />
                        <button className='btn btn-error' onClick={() => removeFields()}>Remove</button>
                    </div>
                )
            })
        }
        </form>
        <button className='btn btn-secondary mr-5 mt-5' onClick={addFields}>Add More</button>
        <button className='btn btn-accent' onClick={submit}>Submit</button>
    </div>
  )
}

export default Form