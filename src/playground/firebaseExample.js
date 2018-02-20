import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAl7leltNj33chgDSCQCXNtU3cwTZZ7v9U",
    authDomain: "expensify-1a424.firebaseapp.com",
    databaseURL: "https://expensify-1a424.firebaseio.com",
    projectId: "expensify-1a424",
    storageBucket: "expensify-1a424.appspot.com",
    messagingSenderId: "63723711677"
};

firebase.initializeApp(config);

const database = firebase.database();

//database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});
//
//database.ref('expenses').on('child_added',(snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});

//database.ref('expenses').push({
//    description: 'rent',
//    amount: '1254',
//    note: '',
//    createdAt: 97264510165
//});


//database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//        const expenses = [];
//
//        snapshot.forEach((child) => {
//            expenses.push({
//                id: child.key,
//                ...child.val()
//            }); 
//        });
//
//        console.log(expenses);
//    });

//database.ref('expenses').on('value', (snapshot) => {
//    const expenses = [];
//
//    snapshot.forEach((child) => {
//        expenses.push({
//            id: child.key,
//            ...child.val()
//        })
//    });
//
//    console.log(expenses); 
//});

//database.ref('notes/-L5k3OH087faYLXtQqZg').remove();

//database.ref('notes').push({
//    title: 'Note 5',
//    body: 'Something interesting'
//});

//database.ref('notes').set(nodes);
//const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`)
//}, (e) => {
//    console.log('Some error');
//})

//const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
//}, (e) => {
//    console.log('Error with data fetching', e);
//});    
//
//setTimeout(() => {
//    database.ref('age').set(23);
//}, 3500);
//
//setTimeout(() => {
//    database.ref().off('value', onValueChange);
//}, 7000);
//
//setTimeout(() => {
//    database.ref('age').set(30);
//}, 10500);

//database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((e) => {
//        console.log('Error fetching once', e);
//    });



//database.ref().set({
//    name: 'Mike', 
//    age: 23,
//    stressLevel: 6, 
//    job: {
//        title: 'DEV',
//        company: 'Mariachi'
//    },
//    location: {
//        city: 'CDMX',
//        country: 'MEX'
//    }
//}).then(() => {
//    console.log('Data is saved');
//}).catch((e) => {
//    console.log('This failed ',e);
//});
//
//database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Facebook ',
//    'location/city': 'Seattle'
//});

//database.ref('age').set(27);
//database.ref('location/city').set('SOME');
//
//database.ref('atributes').set({
//    height: 184,
//    weight: 102
//}).then(() => {
//    console.log('atributes updated');
//}).catch((e) => {
//    console.log('Failed to update',e);
//});
//
//database.ref('single').set(null);
//database.ref().remove();