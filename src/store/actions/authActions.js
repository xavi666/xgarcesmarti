export const signIn = (credentials) => {
 return(dispatch, getState, {getFirebase}) => {
   const firebase = getFirebase();

   firebase.auth().signInWithEmailAndPassword(
     credentials.email,
     credentials.password
   ).then(() => {
     dispatch({ type: 'LOGIN_SUCCESS' })
   }).catch((error) => {
     dispatch({ type: 'LOGIN_ERROR', error })
   })
 }
}

export const signOut = () => {
  return ( dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    })
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' })
    }).catch(error => {
      dispatch({ type: 'SIGNUP_ERROR', error })
    })
  }
}

export const updateProfile = (user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().currentUser.updateProfile({
      user
    }).then(() => {
      const uid = firebase.auth().currentUser.uid;
      return firestore.collection('users').doc(uid).update({
        firstName: user.firstName,
        lastName: user.lastName,
        initials: user.firstName[0] + user.lastName[0],
      })
    }).then(() => {
      dispatch({ type: 'UPDATE_SUCCESS' })
    }).catch(error => {
      dispatch({ type: 'UPDATE_ERROR', error })
    })
  }
}

export const updatePhotoURL = (photoURL) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase.auth().currentUser.updateProfile({
      photoURL
    }).then(() => {
      const uid = firebase.auth().currentUser.uid;
      return firestore.collection('users').doc(uid).update(
        { photoURL }
      )
    }).then(() => {
      dispatch({ type: 'UPDATE_SUCCESS' })
    }).catch(error => {
      dispatch({ type: 'UPDATE_ERROR', error })
    })
  }
}
