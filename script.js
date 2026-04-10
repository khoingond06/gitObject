let users = [
  { id: 1, name: "A", age: 20 },
  { id: 2, name: "B", age: 22 }
];


users.push({ id: 3, name: "C", age: 25 });
console.log(users);

let user = users.find(u => u.id === 2);
if (user) user.name = "B";
console.log(users);


users = users.splice(1);
console.log(users);