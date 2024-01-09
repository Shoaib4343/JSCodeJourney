import * as account from './account.js'


let name = "Shoaib Khan";
let age = 24;

export default function(){
    console.log("this is default function of User");
    account.withdraw();
}

function code(){
    console.log(`The ${name} is Coding`);
}

function cooking(){
    console.log(`The ${name} is Cooking`);
}

export {code, cooking};