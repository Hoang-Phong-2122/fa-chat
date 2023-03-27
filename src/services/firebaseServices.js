// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {
    getDatabase,
    ref,
    set,
    child,
    push,
    update,
    remove,
    onValue
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGQ9Gx9o0TeHiNqUJazm5NMP1LGLrJ5ag",
    authDomain: "live2d-d1a5f.firebaseapp.com",
    databaseURL: "https://live2d-d1a5f-default-rtdb.firebaseio.com",
    projectId: "live2d-d1a5f",
    storageBucket: "live2d-d1a5f.appspot.com",
    messagingSenderId: "365667979663",
    appId: "1:365667979663:web:fbff6ef1dbc3c54440fbfa",
    measurementId: "G-PX5YTLFZ7H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();


async function get(path,callback) {
    let value;
    const dbRef = ref(db, path);
    return onValue(dbRef, callback);
}

// updateModels('Bruggg');
function updateModels(name) {
    // Get a key for a new Post.

    // Write the new post's data simultaneously in the posts list and the user's post list.
    const updates = {};
    updates['models'] = name;

    return update(ref(db), updates);
}

export {
    get
}




