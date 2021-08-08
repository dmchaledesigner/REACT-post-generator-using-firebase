import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';


const AllMeetUps = () => {

    const [dummyData, setDummyData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    const url = 'https://meetups-react-practice-default-rtdb.firebaseio.com/meetups.json'


    useEffect(() => {

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {

                    // we do this as when items are added to firebase if returns multiple objects, not a single array of items
                    let newFireBaseArray = [];

                    // loop over the data and create an invididual item
                    for (const key in data) {

                        const items = {
                            ...data[key]
                        }
                        // push the items into the newly created array
                        newFireBaseArray.push(items);
                    }

                    // now update the state values
                    setDummyData(newFireBaseArray);
                    setIsPending(false);


                })
                .catch(err => {
                    console.log(err)
                    setIsPending(true)
                })
        }, 1000);


    }, [])



    return (
        <>
            <h3>Post Generator</h3>

            {isPending && <div className="container">is Loading....</div>}
            {dummyData && <MeetupList dummyData={dummyData} />}


        </>
    )
}

export default AllMeetUps
