import React from 'react';
import '../steelsheet/profile.css';
import Contador from './contador';

function Profile(props) {
    return (
        <div className='profile-container'>
            <img className='profile-picture' 
                src={require(`../pictures/${props.picture}.jpg`)}
                alt={`../pictures/${props.picture}.background`}/>
            <div className='left'>
                <div className='profile-info'>
                <p className='profile-text'>
                    {props.name};
                </p>
                <p className='profile-charge'>
                    {props.charge} en {props.job};
                </p>
                <p className='profile-review'>
                    {props.review};
                </p>
                </div>
            </div>
            <Contador className='right'
                url1={props.url1} 
                url2={props.url2} 
                url3={props.url3} 
            />
        </div>
        
    )
}
 
export default Profile;
