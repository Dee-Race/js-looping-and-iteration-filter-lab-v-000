// Code your solution in this file

function findMatching(drivers, name) {
  const newArray = [];
  for (const user of drivers) {
    if (user.toLowerCase() == name.toLowerCase()) {
      newArray.push(user)
    }
  }
  return newArray;
};
