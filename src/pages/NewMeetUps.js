import React from 'react';
import MeetupForm from '../components/meetups/MeetupForm';

import { useHistory } from 'react-router';

const NewMeetUps = () => {


    let history = useHistory();


    const addMeetupHandler = async (fields) => { // the param is the data value added to the function that is passed into the submit handler when passed down .. to pass back up!

        await fetch(`${process.env.REACT_APP_FIREBASE}`, // SAME AS USING THE NORMAL URL BUT ENV IS TO PROTECT FROM BEING LEAKED
            {
                method: 'POST',
                body: JSON.stringify(fields), // fields are added here again
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then(() => (
            history.replace('/')
        ))
    }







    return (
        <div className="container">
            <h3>new meetups</h3>


            <MeetupForm addMeetupHandler={addMeetupHandler} />


        </div>
    )
}



export default NewMeetUps
