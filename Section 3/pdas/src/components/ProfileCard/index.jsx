import React from 'react';
import './index.css';

const ProfileCard = ({id, title, username, description, image}) => {
  return (
    <div className="profile__card" key={id}>
      <div className='details'>
        <img className="logo" src={image} alt={title} />
        <h1>{title}</h1>
        <p>{username}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProfileCard;