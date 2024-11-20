function fullName(person) {
    const { title = "", firstName, middleName = "", lastName } = person;

    let fullName = `${firstName} ${lastName}`;

    if (middleName) {
        fullName = `${firstName} ${middleName} ${lastName}`;
    }

    if (title) {
        fullName = `${title} ${fullName}`;
    }
    return fullName;
}

const person = {
    title: "MD",
    firstName: "RABIUL",
    middleName: "AWAL",
    lastName: "SHUVO",
};

console.log(fullName(person));