import firebase from 'firebase'

export const initWithFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyAuIZcIoD5CeDbQu6C6zBRoYsfF2b6MvJA",
        authDomain: "pwa-expense-tracker-app.firebaseapp.com",
        databaseURL: "https://pwa-expense-tracker-app.firebaseio.com",
        projectId: "pwa-expense-tracker-app",
        storageBucket: "pwa-expense-tracker-app.appspot.com",
        messagingSenderId: "991637935859",
        appId: "1:991637935859:web:54ffc4a58aa8080b104986"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}

export const askForPermissioToReceiveNotifications = async () => {
    if (!firebase.apps.length) {
        initWithFirebase();
    }
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token :', token);
        return token;
    } catch (error) {
        console.error(error);
    }
    

}