let student = {};

const ul = document.querySelector('ul');

function print() {

    let text_1 = document.getElementById("input-1").value;
    student.name = text_1;
    let text_2 = document.getElementById("input-2").value;
    student.age = text_2;
    let text_3 = document.getElementById("input-3").value;
    student.grade = text_3;
    let text_4 = document.getElementById("input-4").value;
    student.class = text_4;


    if (student.name === "" && student.age === "" && student.grade === "" && student.class === ""){
        document.getElementById("dome").innerHTML = ("Error 404 Please fill all the parts")
    } else {
        let keys;

        for (keys in student) {
            ul.innerHTML += `<li> ${keys} : ${student[keys]}</li>`
        }
    }



}