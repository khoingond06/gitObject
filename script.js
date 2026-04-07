let users = [
  { id: 1, name: "An", age: 20 },
  { id: 2, name: "Bình", age: 22 }
];

// Thêm
users.push({ id: 3, name: "Cường", age: 25 });
console.log(users);
// Sửa
let user = users.find(u => u.id === 2);
if (user) user.name = "Bình Pro";
console.log(users);

// Xóa
users = users.splice(1);

console.log(users);