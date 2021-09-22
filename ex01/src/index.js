// Only change code below this line
var myPet = {
    species: "bulldog",
    name: "Bully",
    legs: 4,
    friends: ["cat", "parrot"]
};
function myFunction(myObj) {
    return myObj;
}
// Only change code above this line
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };