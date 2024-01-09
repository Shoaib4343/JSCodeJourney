import * as usr from './modules/user.js'

import {default as default_user} from './modules/user.js'

import {default as default_account} from './modules/account.js'


// import{default as def_circle} from './module2/shapes/circle.js'
// import {default as def_triangle} from './module2/shapes/triangle.js'
// import rectangle, {default as def_rectangle} from './module2/shapes/rectangle.js'

// INSTEAD OF THESE THREE DIFFERENT LINE IMPORT WE CAN IMPORT THESE THREE DIFFER JS FILE FORM ONE FILE BY USING THE SHAPE FILE

import {circle, triangle, rectangle} from './module2/shapes.js';


circle();
triangle();
rectangle();

usr.code();
default_user();
default_account();