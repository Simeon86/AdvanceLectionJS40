window.addEventListener('DOMContentLoaded', () => {
	
});	

function createStudent(name, course) {
    return {
        name: name,
        course: course,
    }
}

let studentNumber1 = createStudent('Simeon', 4);
let studentNumber2 = createStudent('Valeria', 1);

console.log(studentNumber1)
console.log(studentNumber2)

console.log('//////////////////////Shorthand Sintaksis//////////////////////')

function createStudent(name, course) {
    return {
        name,
        course,
    }
}

let studentNumber3 = createStudent('Caloyan', 3);
let studentNumber4 = createStudent('Ivailo', 2);

console.log(studentNumber3)
console.log(studentNumber4)

console.log('////////////////////////////////////////////')

let obj = {
    let: true,
    const: true,
    delete: true,
    function: true,
    array: true,
    object: true,
    0: true,
    '0': false,  // 0 and '0' string. Аll keys are strings
    undefined: 'now is defined',
    for: 'maybe'
}

console.log(obj)

console.log('////////////////////////////////////////////')

let obj1 = {}
console.log(obj1);
console.log(obj1.age);

obj1.age = undefined;
console.log(obj1);

console.log('/////////////////key in object///////////////////////////')

for(let key in obj){
    console.log(key);
    console.log(obj[key]);
    console.log(key, obj[key]);
}

console.log('////////////////////////////////////////////')

let countyCode = {
    '+359': 'Bulgaria',
    '+402': 'Austria',
    '+01' : 'USA',
}

for(let key in countyCode) {
    console.log(key ,countyCode[key])
}

let countyCode1 = {
    359: 'Bulgaria',
    402: 'Austria',
    01 : 'USA',
}

for(let key in countyCode1) {
    console.log(key ,countyCode1[key])
}

console.log('///////////Copy and Cloning of Object/////////////////////////////////')
console.log('///////////Copy/////////////////////////////////')


let obj2 = {
    name: 'Joe',
    lastName: 'Done',
}

let objCopy = obj2

console.log(obj2)
console.log(objCopy)

obj2.age = 25;

console.log(obj2)
console.log(objCopy)

objCopy.city = 'Varna';

console.log(obj2)
console.log(objCopy)

console.log(obj2 === objCopy)

console.log({} === {})

obj2 = null

console.log(obj2)
console.log(objCopy)

console.log('////////////////////////////////////////////')

let a = {}
let b = {}

console.log(a === b)

console.log('//////////////////Cloning//////////////////////////')

let obj3 = {
    name: 'Simeon',
    lastName: 'Nikolov',
}

let cloneObj = {}

for(let key in obj3) {
    cloneObj[key] = obj3[key];
}

console.log(obj3);
console.log(cloneObj);

cloneObj.coutry = 'Bulgaria';

console.log(obj3);
console.log(cloneObj);
console.log(obj3 === cloneObj)

console.log('////////////////////////////////////////////')

let obj4 = {
    name: 'Valeria',
    lastName: 'Nikolov',
}

let cloneObj1 = Object.assign({}, obj4);

console.log(obj4);
console.log(cloneObj1);
console.log(obj3 === cloneObj1)

console.log('////////////////////////////////////////////')

let obj5 = {
    name: 'Caloyan',
    lastName: 'Nikolov',
}

console.log(Object.assign(obj5, {age: 4}, {}))

console.log('////////////////////////////////////////////')

let obj6 = {
    name: 'Caloyan',
    lastName: 'Nikolov',
}

let otherObj = {
    city: 'Varna',
    movie: 'Die Hard'
}

console.log(Object.assign(obj5, {age: 4}, otherObj))

Object.assign(obj6, {name: 'Ivailo'})

console.log(obj6)

console.log('/////////////////////Nested objects///////////////////////')

let obj7 = {
    name: 'Simeon',
    lastName: 'Nikolov',
    partner: {
        name: 'Valeria',
        lastName: 'Nikolova'
    }
}

let cloneObj2 = Object.assign({}, obj7)

console.log(obj7);
console.log(cloneObj2);
console.log(obj7.partner);
console.log(cloneObj2.partner);
console.log(obj7.partner.name);
console.log(cloneObj2.partner.name);

cloneObj2.partner.name = 'Caloyan';

console.log(cloneObj2.partner.name);
console.log(obj7.partner.name);

console.log(obj7.partner === cloneObj2.partner);
console.log(obj7.partner.name === cloneObj2.partner.name);

cloneObj2.partner = null;

console.log(obj7.partner);
console.log(cloneObj2.partner);
console.log(obj7.partner === cloneObj2.partner);

console.log('////////////////////////////////////////////')

// let obj8 = {
//     name: 'Simeon',
//     lastName: 'Nikolov',
//     partner: {
//         name: 'Valeria',
//         lastName: 'Nikolova'
//     }
// }

// let cloneObj3 = {}

// for(let key in obj8){
//     if(typeof obj8[key] === 'object') {
//         for(let innerKey in obj8[key]) 
//             cloneObj3[key][innerKey] = obj8[key][innerKey]
//         }
//     cloneObj3[key] = obj8[key]
// }

let obj9 = {
        name: 'Joe',
        lastName: 'Done',
        partner: {
            name: 'Joanna',
            lastName: 'Doe',
        }
    }
    
    let clone = Object.assign({}, obj9);
    
    let cloneObj4 = {}
    
    for(let key in obj9){
    
        if(typeof obj9[key] === 'object'){
            cloneObj4[key] = {};
            for(let innerKey in obj9[key])
                cloneObj4[key][innerKey] = obj9[key][innerKey]
        }
        cloneObj4[key] = obj9[key];
    }

console.log(obj9)
console.log(cloneObj4)

console.log('//////////////This in Object//////////////////////////////')

function Cars(model, color){
    this.model = model;
    this.color = color;
}

let mercedes = new Cars('c220', 'blue');
let bmv = new Cars('e36', 'red')

console.log(mercedes)
console.log(bmv)
console.log(mercedes === bmv)