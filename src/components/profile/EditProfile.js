import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { updateProfile } from '../../store/actions/authActions'
import UploadImage from './UploadImage'

const EditProfile = (props) => {
  const [email, setEmail ]= useState(props.auth.email);
  const [firstName, setFirstName] = useState(props.profile.firstName);
  const [lastName, setLastName] = useState(props.profile.lastName);


  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUser = {
      email,
      firstName,
      lastName
    }
    props.updateProfile(updateUser);
  }


  useEffect(() => {
    setEmail(props.auth.email);
    setFirstName(props.profile.firstName);
    setLastName(props.profile.lastName);
  }, [props]);

  if (props.auth.isLoaded && !props.auth.uid) {
    return <Redirect to='/signin' />
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <UploadImage />
        <h5 className="grety-text text-darken-3">Edit Profile</h5>
        <div className="input-field">
          <input type='email' value={email || ''} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <input type='text' value={firstName || ''} placeholder='First name' onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-field">
          <input type='text' value={lastName || ''} placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Update</button>
        </div>
      </form>
    </div>
  )
}

const mapsStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile : (user) => dispatch(updateProfile(user)),
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(EditProfile)

