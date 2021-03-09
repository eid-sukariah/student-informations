'use strict'

let form = document.getElementById('form');
let tableEl = document.getElementById('table');

function generateRandom(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let objArr = [];
// console.log(objArr);
function Student(email , number , tuition){
    this.email = email;
    this. number = number;
    this.tuition = tuition;
    objArr.push(this);
    this.age = [];
    this.id = 0;
    // console.log(this);
}
Student.prototype.randomAge = function(){
    this.age.push(generateRandom(24 , 18));
    // console.log(randomAge);
}


form.addEventListener('submit' , creat);

function creat(event){
    event.preventDefault();
console.log(event);
    let emailSave = event.target.email.value;
    let numberSave = event.target.number.value;
    let TuitionSave = event.target.Tuition.value;

    let newStd = new Student(emailSave , numberSave , TuitionSave);
    newStd.randomAge();
    Student.id += 1;
    // console.log(Student.id);

}
saveStud ()

function tableHead(){
    let head = ['id', 'Name','Email','Mobile','Age','tuition'];
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    for(let i = 0 ; i < head.length ; i++){
        let thEl = document.createElement('th');
        trEl.appendChild(thEl);
        thEl.textContent = head[i];
    }
}
tableHead();

function tableContent(){
    // for(let i = 0 ; i<objArr.length ; i++){
    let tr1 = document.createElement('tr');
    table.appendChild(tr1);

    let td1 =document.createElement('td');
    tr1.appendChild(td1);
    td1.textContent = objArr.id;

    let td2 =document.createElement('td');
    tr1.appendChild(td2);
    td2.textContent = objArr.name;

    let td3 =document.createElement('td');
    tr1.appendChild(td3);
    td3.textContent = objArr.email;

    let td4 =document.createElement('td');
    tr1.appendChild(td4);
    td4.textContent = objArr.mobile;

    let td5 =document.createElement('td');
    tr1.appendChild(td5);
    td5.textContent = objArr.age;

    let td6 =document.createElement('td');
    tr1.appendChild(td6);
    td6.textContent = objArr.tuition;


// }
}
tableContent();





function saveStud (){
    let student = objArr;
    localStorage.setItem('newStudent' , JSON.stringify(student));
}

let tableShow;
function getStud(){
    let getToScren = localStorage.getItem('student');
    tableShow.JSON.parse(getToScren);
    console.log (tableShow);
}

// getStud();