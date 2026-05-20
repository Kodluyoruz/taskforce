const users = [
	{
		name: "Mehmet",
		age: 10,
	},
	{
		name: "Mehmet",
		age: 29,
	},
	{
		name: "Sevilay",
		age: 40,
	},
];

/*
  push
  map
  find
  filter
  some
  every
  includes
*/

// push
// users.push("Ayşe");
// users.push("Fatma");

// console.log(users);

// map
// users.map((item) => {
// 	console.log(item.name);
// });

// find
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result);

// filter
// const filtered = users.filter(({ name, age }) => name === "Mehmet" && age < 20);
// console.log(filtered);

// some
// const some = users.some((item) => item.age === 11);
// console.log(some);

// every
// const every = users.every((item) => item.age > 20);
// console.log(every);

// includes

const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("portakal");

console.log(isIncluded);
