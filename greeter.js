function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Yingping", lastName: "Zhou" };
document.body.innerHTML = greeter(user);
