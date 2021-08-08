import { useState } from 'react';
import styled from 'styled-components/macro';
import { v4 as uuidv4 } from 'uuid';

const MeetupForm = ({ addMeetupHandler }) => {


    // this is all state for the fields
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [address, setAdddress] = useState('');
    const [description, setDescription] = useState('');




    // create the submit handler
    const submitHandler = (e) => {
        e.preventDefault();

        // create the object that holds all the updated fields
        // the state will be updated using the onChange functions in the fields themselves
        const newItem = {
            title,
            address,
            image,
            description,
            id: uuidv4(),
        }

        // console.log(newItem)

        // the call in the function that adds the items
        // and then the new object above is placed into the params as a value
        // which is then passed back to the NewMeetUps component and ran
        addMeetupHandler(newItem)


        // finally we reset all the fields to an empty string value
        setTitle('')
        setImage('')
        setAdddress('')
        setDescription('')

    }





    return (

        <CardStyled>
            <form className='form' onSubmit={submitHandler}>
                <div className='control'>
                    <label htmlFor='title'>Meetup Title</label>
                    <input
                        type='text'
                        required
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='control'>
                    <label htmlFor='image'>Meetup Image</label>
                    <input
                        type='url'
                        required
                        id='image'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}

                    />
                </div>
                <div className='control'>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        required
                        id='address'
                        value={address}
                        onChange={(e) => setAdddress(e.target.value)}
                    />
                </div>
                <div className='control'>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className='actions'>
                    <button>Add Meetup</button>
                </div>
            </form>
        </CardStyled>
    )
}


const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem 25rem;
   

   form{
       width: 100%;
       background-color: white;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

     
       .control {
    margin-bottom: 0.5rem;
  }
  
  .control label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .control input,
  .control textarea {
    display: block;
    font: inherit;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
  
  .actions {
    margin-top: 1rem;
    text-align: right;
  }
  
  .actions button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 1px solid #77002e;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .actions button:hover,
  .actions button:active {
    background-color: #a50e48;
    border-color: #a50e48;
  }
   }


`

export default MeetupForm
