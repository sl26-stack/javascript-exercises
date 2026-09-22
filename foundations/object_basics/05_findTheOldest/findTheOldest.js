const findTheOldest = function(people) {
    const peopleAges = people.map(person => ({
        name: person.name,
        age: (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth
    }));

    peopleAges.sort((a, b) => b.age - a.age);
    
    return peopleAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;
