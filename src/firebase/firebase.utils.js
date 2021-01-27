import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA5FmJ528XCNAPTdYjGWpWkY94fyX979cU",
    authDomain: "crwn-db-9e53d.firebaseapp.com",
    projectId: "crwn-db-9e53d",
    storageBucket: "crwn-db-9e53d.appspot.com",
    messagingSenderId: "666051388819",
    appId: "1:666051388819:web:6a3fca8abd7f26ab66b466",
    measurementId: "G-M67K5HLGW9"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData   
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider).then((res) => {
    // console.log(res.user)
}).catch(error => {
    // console.log(error.message)
})

export default firebase