import React from 'react';
import styled from 'styled-components/macro';

const MeetupItem = ({ item }) => {
    return (
        <li className='item'>
            <CardStyled>
                <div className='image'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='content'>
                    <h3 style={{ fontSize: '20px' }}>{item.title}</h3>
                    <address style={{ fontWeight: 'bold' }}>{item.address}</address>
                    <p>{item.description}</p>
                </div>
                <div className='actions'>
                    <button>To Favorites</button>
                </div>
            </CardStyled>
        </li>
    )
}


const CardStyled = styled.div`
 background-color: white;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: space-between;
    height: 100%;

        .image{
            position: relative;

                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                }
        }
`





export default MeetupItem
