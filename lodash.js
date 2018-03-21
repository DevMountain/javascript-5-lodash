/*
  Lodash is a library that can help us clean up our code.  It has many helpful
  functions in it.  Many of which were so helpful, they have found their way
  into the core of JavaScript.
  We can use all that handy functionality by bringing in the
  lodash library.  The documentation can be found here -> http://lodash.com/, and can be brought into
  a project either with npm or a cdn.
  This project is bringing in the file through a cdn.  It will be available for
  you to use on the _ variable.  They chose _ because it's a short, easy to reference
  variable.
*/

// map, with a property
//  Map lets us take an array of objects, and a string referencing a common property,
//  and create an array that consists of that property from each object.

// const myObjectArray [{name:'bob',age:13,height:'6ft'},{name:'bobs',age:17,height:'6ft'},
//    {name:'bobett',age:14,height:'6ft'},{name:'bobbin',age:18,height:'6ft'},
//    {name:'bobbers',age:15,height:'6ft'},{name:'bob the 2nd',age:19,height:'6ft'},
//    {name:'bobby',age:16,height:'6ft'},{name:'bob the 3rd',age:3,height:'6ft'}]

// const pluckedArray = _.map(myObjectArray, 'name');
// pluckedArray will contain.
//  ['bob','bobs','bobett','bobbin','bobbers','bob the 2nd','bobby','bob the 3rd']

// Below we have an array of employees.  We want to create an array of addresses.
// Look at the structure of the data, and use map to create an array of addresses.

//
const myEmployees = [
  {
    _id: "59ad7afa5f5c26cc3a76c210",
    index: 0,
    guid: "ca95f334-3e34-4e8e-ac1b-585257fc9b57",
    isActive: true,
    balance: "$2,366.43",
    picture: "http://placehold.it/32x32",
    age: 23,
    eyeColor: "brown",
    name: "Pearson Allen",
    gender: "male",
    company: "DATAGEN",
    email: "pearsonallen@datagen.com",
    phone: "+1 (861) 401-3732",
    address: "987 Bushwick Court, Bourg, Rhode Island, 2325",
    about:
      "Lorem consectetur Lorem amet aliquip enim exercitation velit labore. Tempor nostrud elit reprehenderit laborum do exercitation nisi excepteur et. Sint ex pariatur do magna eiusmod aute incididunt. Deserunt aute consequat do consequat incididunt cillum exercitation irure incididunt ullamco sint eu eu. Duis excepteur ex deserunt in eu consectetur. Nostrud qui excepteur eiusmod cupidatat culpa ea duis cillum.\r\n",
    registered: "2016-08-02T07:52:00 +06:00",
    latitude: -43.063485,
    longitude: -169.786384,
    tags: ["tempor", "culpa", "aliquip", "ut", "consequat", "dolor", "laborum"],
    friends: [
      {
        id: 0,
        name: "White Buchanan"
      },
      {
        id: 1,
        name: "Holly Dodson"
      },
      {
        id: 2,
        name: "Rhoda Weeks"
      }
    ],
    greeting: "Hello, Pearson Allen! You have 3 unread messages.",
    favoriteFruit: "banana"
  },
  {
    _id: "59ad7afa6af94eb843cb7c9d",
    index: 1,
    guid: "0caf7bde-6a4c-4915-83a6-67f423923f2a",
    isActive: false,
    balance: "$2,011.66",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "green",
    name: "Hattie Koch",
    gender: "female",
    company: "OVIUM",
    email: "hattiekoch@ovium.com",
    phone: "+1 (878) 476-2873",
    address: "666 Corbin Place, Independence, Arizona, 2174",
    about:
      "In quis cupidatat est id cillum ex amet irure nisi pariatur anim fugiat elit incididunt. Reprehenderit duis ipsum cupidatat ad dolore dolor aute pariatur in commodo est adipisicing aliquip enim. Dolore ea ullamco aliquip aliquip dolore. Ea sunt aliquip Lorem nulla do ex occaecat id enim. Cupidatat adipisicing anim sit incididunt aute reprehenderit.\r\n",
    registered: "2014-02-08T01:35:19 +07:00",
    latitude: 59.052836,
    longitude: 78.764631,
    tags: [
      "aute",
      "adipisicing",
      "ad",
      "excepteur",
      "dolor",
      "occaecat",
      "minim"
    ],
    friends: [
      {
        id: 0,
        name: "Caroline Vazquez"
      },
      {
        id: 1,
        name: "Sharp Puckett"
      },
      {
        id: 2,
        name: "Hancock Hicks"
      }
    ],
    greeting: "Hello, Hattie Koch! You have 1 unread messages.",
    favoriteFruit: "apple"
  },
  {
    _id: "59ad7afa2c586d146eaa3892",
    index: 2,
    guid: "93987816-d4cb-40e9-9c36-afe9ca8368c5",
    isActive: true,
    balance: "$3,872.01",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "green",
    name: "Coffey Dillard",
    gender: "male",
    company: "JASPER",
    email: "coffeydillard@jasper.com",
    phone: "+1 (862) 568-3324",
    address: "354 Brighton Avenue, Goodville, New Hampshire, 5187",
    about:
      "Sint sunt nostrud minim est esse ex magna irure laborum. Irure deserunt occaecat ut nulla nostrud dolor aliquip ipsum voluptate ea consectetur ea exercitation. In est consectetur do aliquip est reprehenderit adipisicing non.\r\n",
    registered: "2015-10-08T07:03:04 +06:00",
    latitude: 87.070986,
    longitude: -65.66618,
    tags: [
      "anim",
      "magna",
      "tempor",
      "quis",
      "aliquip",
      "reprehenderit",
      "reprehenderit"
    ],
    friends: [
      {
        id: 0,
        name: "Virgie Lancaster"
      },
      {
        id: 1,
        name: "Monica Juarez"
      },
      {
        id: 2,
        name: "Desiree Edwards"
      }
    ],
    greeting: "Hello, Coffey Dillard! You have 4 unread messages.",
    favoriteFruit: "apple"
  },
  {
    _id: "59ad7afa9bb9f12b6340babe",
    index: 3,
    guid: "194ad466-c33e-45f5-bc79-df7e71b7f43e",
    isActive: true,
    balance: "$2,074.32",
    picture: "http://placehold.it/32x32",
    age: 37,
    eyeColor: "brown",
    name: "Pearl Steele",
    gender: "female",
    company: "INJOY",
    email: "pearlsteele@injoy.com",
    phone: "+1 (816) 508-2561",
    address: "588 Nova Court, Westboro, New York, 6968",
    about:
      "Est labore non nisi cillum anim fugiat minim. Magna exercitation dolor consequat dolor commodo esse exercitation magna proident ipsum. Culpa culpa excepteur eiusmod dolor.\r\n",
    registered: "2016-09-09T11:02:59 +06:00",
    latitude: -30.216026,
    longitude: 118.53196,
    tags: ["minim", "et", "excepteur", "sint", "sit", "non", "in"],
    friends: [
      {
        id: 0,
        name: "Craft Summers"
      },
      {
        id: 1,
        name: "Amalia Fischer"
      },
      {
        id: 2,
        name: "Jodie Pierce"
      }
    ],
    greeting: "Hello, Pearl Steele! You have 1 unread messages.",
    favoriteFruit: "apple"
  },
  {
    _id: "59ad7afacd670a859914044a",
    index: 4,
    guid: "5b8658d6-0c8d-4ed8-8b96-f2c810778ef7",
    isActive: false,
    balance: "$2,436.41",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "blue",
    name: "Brady Duffy",
    gender: "male",
    company: "HIVEDOM",
    email: "bradyduffy@hivedom.com",
    phone: "+1 (980) 565-2104",
    address: "867 Lawn Court, Eastmont, Puerto Rico, 1441",
    about:
      "Et incididunt ex ex qui adipisicing est magna. Enim tempor ut nulla ullamco dolore mollit quis eu laborum amet nulla irure ipsum. Aliquip ut reprehenderit consectetur anim aliqua id nostrud laborum excepteur irure dolor do.\r\n",
    registered: "2015-10-13T06:08:20 +06:00",
    latitude: -20.836991,
    longitude: 9.471786,
    tags: ["velit", "qui", "nisi", "nulla", "velit", "est", "Lorem"],
    friends: [
      {
        id: 0,
        name: "Morris Blevins"
      },
      {
        id: 1,
        name: "Dennis Christensen"
      },
      {
        id: 2,
        name: "Juana Booker"
      }
    ],
    greeting: "Hello, Brady Duffy! You have 8 unread messages.",
    favoriteFruit: "strawberry"
  },
  {
    _id: "59ad7afa7c3b3e80280c9e91",
    index: 5,
    guid: "6ec6f6a2-66c0-42d0-bd00-faaed884771a",
    isActive: false,
    balance: "$3,055.14",
    picture: "http://placehold.it/32x32",
    age: 27,
    eyeColor: "blue",
    name: "Fry Kelley",
    gender: "male",
    company: "IRACK",
    email: "frykelley@irack.com",
    phone: "+1 (890) 460-2980",
    address: "966 Crawford Avenue, Durham, Virginia, 2782",
    about:
      "Lorem dolor enim proident magna nisi nostrud enim fugiat ipsum voluptate. Eiusmod pariatur culpa eiusmod eiusmod proident commodo eu proident fugiat anim ad aute dolor. Ea reprehenderit ex labore aliquip ad dolor adipisicing exercitation consequat esse ut deserunt. Culpa nostrud elit ullamco occaecat anim duis mollit tempor exercitation occaecat quis magna irure. Incididunt aliqua aliquip cupidatat qui sint ea proident occaecat.\r\n",
    registered: "2015-04-23T06:53:28 +06:00",
    latitude: 25.339192,
    longitude: -8.587004,
    tags: [
      "aliquip",
      "proident",
      "voluptate",
      "do",
      "deserunt",
      "dolore",
      "in"
    ],
    friends: [
      {
        id: 0,
        name: "Barber Ellis"
      },
      {
        id: 1,
        name: "Cote Callahan"
      },
      {
        id: 2,
        name: "Watts Ewing"
      }
    ],
    greeting: "Hello, Fry Kelley! You have 1 unread messages.",
    favoriteFruit: "apple"
  }
];

const myEmployeesAddresses = 0; // use map to get addresses here.

// Now we want to use map to get an array of ages of the employees.

const myEmployeesAges = 0; // use map to get ages here.

// union
//  Union lets us take 2 arrays, and create a new array that only has 1 entry for
//  each duplicated entry.

// Example

// let A = [6,3,8,4];
// let B = [1,2,3,4];
// let C = _.union(A, B);
// C = [6,3,8,4,1,2]; Notice how there's not 2 3's or 2 4's.
// This is useful when we want to combine two lists that may have duplicates,
// But we want to make sure that they aren't counted multiple times.

// Below we have two arrays of friend's email addresses.  We want to create a new
// list of emails that does not contain duplicates.

const bobFriendsEmails = [
  "alton.brown@gmail.com",
  "betty.white@gmail.com",
  "ron.paul@gmail.com",
  "mr.giggles@gmail.com",
  "mrs.giggles@gmail.com",
  "black.adder@gmail.com"
];

const breeFriendsEmails = [
  "red.power@ranger.com",
  "pikachu@gmail.com",
  "james@gmail.com",
  "batman@gothan.gov",
  "betty.white@gmail.com",
  "mr.giggles@gmail.com",
  "mrs.giggles@gmail.com",
  "stacey@gmail.com",
  "brent@gmail.com",
  "dave@gmail.com"
];

const listToSendEmailsTo = 0; // Put lodash here to make list of the union of the two address.

// intersection
//  Intersection lets us take two arrays, and create a new array that only
//  contains shared elements.
// let A = [6,3,8,4];
// let B = [1,2,3,4];
// let C = _.intersection(A, B);
//  C = [3,4];

// Bob and Bree have decided that instead of inviting everyone they know to their
// party. They are instead only going to invite those people that they both know.

const listOfSharedEmails = 0; // Use lodash to create the list that are in both lists

// groupBy
//  Group By lets us take an array of objects, and group then into groups based
//  on a property.

// Example  If we have an array of purchases, each of which was purchased by either Barry or Bob
//
// const purchaseAry = [{"owner":"Barry","price":103},{"owner":"Bob","price":75},
// {"owner":"Bob","price":73},{"owner":"Barry","price":57},{"owner":"Barry","price":128},
// {"owner":"Bob","price":119},{"owner":"Barry","price":133},{"owner":"Barry","price":27},
// {"owner":"Barry","price":138},{"owner":"Bob","price":68},{"owner":"Bob","price":50},
// {"owner":"Barry","price":9},{"owner":"Bob","price":123},{"owner":"Bob","price":135},
// {"owner":"Barry","price":30},{"owner":"Barry","price":129},{"owner":"Barry","price":38},
// {"owner":"Bob","price":133},{"owner":"Barry","price":109},{"owner":"Bob","price":115}]

// const purchaseByOwner = _.groupBy(purchaseAry, 'owner');
// {Barry: [{owner: "Barry",price: 103}, {owner: "Barry",price: 57},
//          {owner: "Barry",price: 128}, {owner: "Barry",price: 133}, {owner: "Barry",price: 27},
//          {owner: "Barry",price: 138}, {owner: "Barry",price: 9}, {owner: "Barry",price: 30},
//          {owner: "Barry",price: 129}, {owner: "Barry",price: 38}, {owner: "Barry",price: 109}],
//
//  Bob: [{owner: "Bob",price: 75}, {owner: "Bob",price: 73}, {owner: "Bob",price: 119},
//       {owner: "Bob",price: 68}, {owner: "Bob",price: 50}, {owner: "Bob",price: 123},
//       {owner: "Bob",price: 135}, {owner: "Bob",price: 133}, {owner: "Bob",price: 115}]
// }

// Notice how purchaseByOwner is an Object with properties of Barry and Bob
// (the two owners from our list) and each property is an array of that person's
// purchases.

const purchases = [
  { month: "February", price: 37.85 },
  { month: "January", price: 73.24 },
  { month: "February", price: 61.41 },
  { month: "April", price: 41.07 },
  { month: "March", price: 34.5 },
  { month: "April", price: 68.52 },
  { month: "March", price: 44.53 },
  { month: "April", price: 44.95 },
  { month: "January", price: 72.86 },
  { month: "February", price: 58.96 },
  { month: "April", price: 88.62 },
  { month: "April", price: 32.53 },
  { month: "January", price: 61.02 },
  { month: "April", price: 22.92 },
  { month: "April", price: 79.4 },
  { month: "April", price: 13.23 },
  { month: "February", price: 26.31 },
  { month: "February", price: 74.3 },
  { month: "March", price: 28.76 },
  { month: "March", price: 85.51 },
  { month: "March", price: 75.88 },
  { month: "January", price: 22.83 },
  { month: "January", price: 44.39 },
  { month: "February", price: 22.04 },
  { month: "April", price: 56.89 },
  { month: "February", price: 86.19 },
  { month: "April", price: 87.99 },
  { month: "January", price: 14.25 },
  { month: "March", price: 60.8 },
  { month: "February", price: 23.65 }
];

const purchasesByMonth = 0; // Use groupBy to group the purchases by the month that they were made.

// Bonus Points
const totalByMonth = 0; // Use the grouped purchasesByMonth and reduce to create a totalByMonth object.

// memoize
//  Memoize lets us take a function that takes a lot of time to run, and cache (or memoize)
//  results for that function, so if we run the function with the same parameters again,
//  it will use the cached results instead of making the calculation again.

// Here we have a function that calculates the nth term of a fibbonaci sequence
// 1 1 2 3 5 8 13 21 34 ...
// where each number is the sum of the two numbers before it.
// We are using a recusive function (a function that calls itself)

function slowFibonnaci(n) {
  return n < 2 ? n : slowFibonnaci(n - 1) + slowFibonnaci(n - 2);
}

// If you have a fast computer,
// you may need to increase the number of trials to have the slowFibonnaci function take longer.
// If you have a slow computer, you may want to turn down the number in case it's
// taking a really long time.

// console.time('name of stopwatch') starts a stopwatch named whatever you
// give it as a parameter.
// You can then call console.timeEnd('name of stopwatch') to stop the stopwatch,
// and have it tell you the time it took between the two calls.

// You can show how long the slowFibonnaci is taking to calculate the Nth term
// below. You should start around 30, if it is running in under a
// millisecond keep increasing in increments of 5 until it's
// taking a few seconds to complete.

//When ready to test uncomment the 3 lines below.

let slowN = 30;
// console.time('slowFibonnaci:' + slowN)
// console.log(slowFibonnaci(slowN));
// console.timeEnd('slowFibonnaci:' + slowN);

let fastN = 1000;

let fastFibonnaci = 0; // use memoize to create a fast fibonnaci.  Use the same
// recursve structure that the slowFibonnaci is using, but have it be memoized
// so that it'll remeber the previous times it's been called and increase the

// console.time('fastFibonnaci:' + fastN)
// console.log(fastFibonnaci(fastN));
// console.timeEnd('fastFibonnaci:' + fastN)

// We can also use memoize on axios calls so that we only need to make the
// request to the server once.

// Here we have a regular axios call to a server.

let getDeathstar = function(n) {
  return axios.get("https://swapi.co/api/starships/" + n);
};

// Below we can measure the time it takes to get a return from the api call.

// console.time('getDeathstar')
// getDeathstar(9).then(e=>{
//   console.log(e.data)
//   console.timeEnd('getDeathstar')
// });

// getPersonApi `https://swapi.co/api/people/${n}`

let getJedi = // Use Memoize to remember the previous calls made to the server
  // then compare the times for the first and second calls of both the getJedi and
  // getDeathstar functions
  // There are no unit tests for this section. But play around with the
  // console.time, and console.timeEnd functions so you can use them to measure
  // the time it takes for various parts of your code to run.  This can be
  // helpful in finding slow parts of your code that you want to improve.

  // console.time('getJedi')
  // getJedi(1).then(e=>{
  //   console.log(e.data)
  //   console.timeEnd('getJedi')
  // });

  setTimeout(() => {
    // console.time('getDeathstar')
    // getDeathstar(9).then(e=>{
    //   console.log(e.data)
    //   console.timeEnd('getDeathstar')
    // });
    // console.time('getJedi')
    // getJedi(1).then(e=>{
    //   console.log(e.data)
    //   console.timeEnd('getJedi')
    // });
  }, 2000);
