import React from 'react';
import '../steelsheet/profile.css';

function Profile(props) {
    return (
        <div className='profile-container'>
            <img className='profile-picture' 
            src={require(`../pictures/${props.picture}.jpg`)}
            alt={`../pictures/${props.picture}.background`}/>
            <div className='profile-info'>
            <p className='profile-text'>
                {props.name} en {props.country};
            </p>
            <p className='profile-charge'>
                {props.charge} en {props.job};
            </p>
            <p className='profile-review'>
                {props.review};
            </p>
            </div>
        </div>
        
    )
}
 
export default Profile;
