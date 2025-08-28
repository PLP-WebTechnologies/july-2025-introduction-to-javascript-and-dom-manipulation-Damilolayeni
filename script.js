let userName = "Student";
const favoriteLanguages = ["Python", "JavaScript", "Java", "C#", "Go"];
let grades = [
    { name: "Ada Lovelace", subject: "Mathematics", grade: "A" },
    { name: "Alan Turing", subject: "Computer Science", grade: "A+" },
    { name: "Grace Hopper", subject: "Programming", grade: "B+" }
];
let isPassed = grades.every(g => g.grade !== "F");

if (isPassed) {
    console.log("All students passed!");
} else {
    console.log("Some students failed.");
}

function getStudentGrade(name) {
    const student = grades.find(g => g.name === name);
    return student ? `${student.name}: ${student.grade}` : "Student not found.";
}

function addLanguage(lang) {
    if (!favoriteLanguages.includes(lang)) {
        favoriteLanguages.push(lang);
        return `${lang} added!`;
    }
    return `${lang} already exists.`;
}

console.log(getStudentGrade("Alan Turing"));
console.log(addLanguage("Rust"));
console.log(addLanguage("JavaScript"));

for (let i = 0; i < favoriteLanguages.length; i++) {
    console.log(`Language ${i + 1}: ${favoriteLanguages[i]}`);
}

grades.forEach(g => {
    console.log(`Student: ${g.name}`);
});

const firstH2 = document.querySelector("h2");
if (firstH2) {
    firstH2.style.color = "#0077b6";
}

const langList = document.querySelector("section ul");
if (langList) {
    const newLang = document.createElement("li");
    newLang.textContent = "Rust";
    langList.appendChild(newLang);
}

const form = document.getElementById("enhancedForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Form submitted! Thank you, " + document.getElementById("username").value);
    });
}

