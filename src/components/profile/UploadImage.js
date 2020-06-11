import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePhotoURL } from '../../store/actions/authActions'
import { storage } from '../../config/fbConfig';
import { Button } from '@material-ui/core';
import { PhotoCamera, Person } from '@material-ui/icons';

const UploadImage = (props) => {
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    if (photoURL === '') return;

    props.updatePhotoURL(photoURL);
  }, [props, photoURL]);

  const handleUploadImage = (e) => {
    if (!e.target.files[0]) return;

    const file = e.target.files[0];
    const uploadTask = storage.ref(`profile_images/${file.name}`).put(file);
    uploadTask.on('state_changed',
      (snapshot) => {
        console.log('---> progress')
      },
      (error) => {
        console.log('---> error')
      },
      () => {
        storage.ref('profile_images').child(file.name).getDownloadURL().then(url => {
          setPhotoURL(url);
        });
      });
  };

  return (
    <div className='white'>
      {
        props.profile.photoURL ?
          <img
            width={200}
            src={props.profile.photoURL}
            alt={`${props.profile.firstName} ${props.profile.lastName}`}
          />
        :
        <Person width={200} />
      }

      <div>
        <Button
          variant="contained"
          component="label"
          startIcon={<PhotoCamera />}
        >
          Upload Image
          <input
            onChange={handleUploadImage}
            type="file"
            style={{ display: "none" }}
          />
        </Button>
      </div>
    </div>
  );
};

const mapsStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePhotoURL : (photoURL) => dispatch(updatePhotoURL(photoURL)),
  }
}

export default connect(mapsStateToProps, mapDispatchToProps)(UploadImage)
