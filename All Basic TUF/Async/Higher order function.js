const activeUsers = users.filter(user => user.isActive);

// cloures

function counter() {
  let count = 0;
  return () => ++count;
}

// destrucitnig 
const { name, email } = user;
const updatedUser = { ...user, role: "Admin" };