// object

let course = {
    name: "JavaScript",
    lessons: 10,
    instructor: "John Doe",
    level: "Beginner",
    isFree: true,
    price: 3
};

// name ->key
// "JavaScript" -> value
//lessons -> key
// 10 -> value

console.log(course);
console.log(course.name);
console.log(course.lessons);
console.log(course.instructor);
console.log(course.level);
console.log(course.isFree);
console.log(course.price);

console.log(course["name"]);
console.log(course["lessons"]);
console.log(course["instructor"]);
console.log(course["level"]);   


let property = "price";
console.log(course[property]);