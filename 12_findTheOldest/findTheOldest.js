const findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath) {
            person.age = person.yearOfDeath - person.yearOfBirth
        } else {
            person.age = 2023 - person.yearOfBirth
        }
    });
    oldest = people.sort((a, b) => a.age > b.age ? -1 : 1)[0]
    return oldest;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
