import React from 'react';


import MeetupItem from './MeetupItem';



const MeetupList = ({ dummyData }) => {
    return (
        <ul className='list'>
            {
                dummyData.map(item => (
                    <MeetupItem key={item.id} item={item} />
                ))
            }

        </ul>
    )
}






export default MeetupList
