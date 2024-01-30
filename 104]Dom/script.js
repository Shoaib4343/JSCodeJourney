// // //select by id
// // let heading = document.getElementById('heading');
// // console.log(heading);

// // // Select by class
// // let list_items = document.getElementsByClassName('list_items');
// // console.log(list_items);


// // // Seclect by Name
// // let radio = document.getElementsByName('language');
// // console.log(radio);

// // // Selcty by tag name
// // let tag_name = document.getElementsByTagName('div');
// // console.log(tag_name);


// // // Select by querry selctor      In querry selection we can use the selection like css selections
// // let querry_sel = document.querySelector('.container');
// // console.log(querry_sel);



// // let querry_sel_all = document.querySelectorAll('h1, .list_items');
// // console.log(querry_sel_all);




// // Selecting Element

// let child = document.querySelector('#child_1');  
// let parentNode = child.parentElement;   // select parent element

// let firstChild = parentNode.firstChild; //select child
// let lastElementChild = parentNode.lastElementChild;  // select child

// console.log(firstChild);
// console.log(lastElementChild);

// let PreSibling = lastElementChild.previousElementSibling;
// console.log(PreSibling);

// let NextSibling = firstChild.nextElementSibling;
// console.log(NextSibling);


// Manipulating the html element
// 1:Create a new element
// let div = document.createElement('div');
// div.innerHTML = '<p> Hi my Name is Mohammed Shoaib </p>';
// div.id = "div_id";
// div.className = "div_class";
// console.log(div);
// document.body.appendChild(div);



// let ul = document.createElement('ul');
// ul.innerHTML = '<li> First Li </li> <li> 2nd Li </li> <li> 3rd Li </li> <li> 4th Li </li> <li> 5th Li </li>';
// ul.className = "ul_li";
// ul.id = "ul_id";
// document.body.appendChild(ul);


// let li = document.createElement("ol");
// li.innerHTML = "<li> this is a li </li> ";
// li.id = "li_id";
// li.className = "li_className";
// document.body.appendChild(li);


// let h1 = document.createElement("h1");
// h1.innerHTML = "<h1 class='h1';> Heading First</h>";
// document.body.appendChild(h1);



// 2: appendChild()
let parent2 = document.getElementById('parent2');
let li = document.createElement('li');
li.innerHTML = "this is li";
parent2.appendChild(li);