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
// let parent2 = document.getElementById('parent2');
// let li = document.createElement('li');
// li.innerHTML = "this is li";
// parent2.appendChild(li);


// 3: text Content

// let parent = document.querySelector('.parent');
// console.log(parent.textContent);
// parent.textContent = "this is text";



// 4: Inner HTML

// let parent = document.querySelector('.parent');
// parent.innerHTML  = "<h1> Heading !</h1> ";




// 5: after();

// let child = document.createElement('h1');
// child.innerHTML = "this is a child";
// let parent = document.querySelector('#parent');
// parent.after(child);


// 6: append();
// let li1 = document.createElement('li');
// li1.innerHTML = "child1";
// let li2 = document.createElement('li');
// li2.innerHTML = "li 2";
// let li3 = document.createElement('li');
// li3.innerHTML = "li 2";


// let parent = document.getElementById('parent');
// parent.append(li1, li2, li3);
// parent.appendChild(li1,li2,li3);



// 7: prepend

// let parent = document.getElementById('parent');
// let li_one = document.createElement('li');
// li_one.innerHTML = 'this is li 1';
// let li_two = document.createElement('li');
// li_two.innerHTML = 'this is li 2';
// let li_three = document.createElement('li');
// li_three.innerHTML = 'this is li 3';
// parent.prepend(li_one,li_two,li_three);

// 8: insertAdjacentHTML

// let parent = document.getElementById('parent');
// parent.insertAdjacentHTML("beforebegin", "<li>Before Begin</li>");
// parent.insertAdjacentHTML("afterbegin", "<li>After begin</li>");
// parent.insertAdjacentHTML("beforeend", "<li>before end</li>");
// parent.insertAdjacentHTML("afterend", "<li>After end</li>");



// 9:replaceChild
// let parent = document.getElementById('parent');
// let oldchild = parent.firstElementChild;
// let newchild = document.createElement('div');
// newchild.innerHTML = '<li>New Child Eement</li>';
// parent.replaceChild(newchild, oldchild);


// 10: cloneNode

// let parent = document.querySelector('#parent');
// let newClone = parent.cloneNode(true);
// console.log(newClone);

// 11:removeChild

// let parent = document.querySelector('#parent');
// parent.removeChild(parent.firstElementChild);


// 12: insertBefore

// let parent = document.querySelector('#parent');
// let newClone = document.createElement('div');
// newClone.innerHTML = "<div class='newClone'>this is new inserbeore child</div>";

// parent.insertBefore(newClone, parent.firstElementChild.nextElementSibling);