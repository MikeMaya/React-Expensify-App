//const person = {
////    name: 'Mike',
//    age: 22,
//    location: {
//        city: 'CDMX',
//        temp: 15
//    }
//};
//
//const { name = 'Anonymus', age } = person;
//console.log(`${name} is ${age}`);
//
//const {city, temp: temperature} = person.location;
//if( city && temperature){
//    console.log(`It's ${temperature} in ${city}`);
//}
//
//const book = {
//    title: 'No country for old men',
//    autor: 'Corman',
//    publisher: {
//        //name: 'Booked'
//    }
//}
//const {name: publisherName = 'Self-Published'} = book.publisher;
//console.log(publisherName);

const address = ['Pisco 575', 'CDMX', 'Mexico', '07730'];

const [, city, state] = address;

console.log(`U r in ${city} ${state}`)


const item = ['coffe [cold]', '$2.00','$3.50','$2.75'];

const [it,,price] = item;

console.log(`A mediun ${it} cost ${price}`);