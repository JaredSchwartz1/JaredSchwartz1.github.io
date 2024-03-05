import {
    addRecipeScreen
} from './Screens/addRecipeScreen.js'
export const addrecipescreen = new addRecipeScreen('add recipe');
import {
    browseScreen
} from './Screens/browseScreen.js'
export const browsescreen = new browseScreen('browse');
import {
    homeScreen
} from './Screens/homeScreen.js'
export const homescreen = new homeScreen('home');
import {
    loginScreen
} from './Screens/loginScreen.js'
export const loginscreen = new loginScreen('login');
import {
    mainScreen
} from './Screens/mainScreen.js'
export const mainscreen = new mainScreen('main');
import {
    registerScreen
} from './Screens/registerScreen.js'
export const registerscreen = new registerScreen('register');
import {
    shoppingListScreen
} from './Screens/shoppingListScreen.js'
export const shoppinglistscreen = new shoppingListScreen('shopping list');
// import{
//    Recipe
// }from './Recipe.js';
// export const recipe = new Recipe();
import {
    ScreenManager
} from './screenManager.js';
export const manager = new ScreenManager();


export function elementCreation(tag, host, ID = null, text = null) {
    let element = document.createElement(tag)
    if (tag == 'button') {
        element.setAttribute('type', 'button')
    }
    if (text != null) {
        let textNode = document.createTextNode(text)
        element.appendChild(textNode)
    }
    if (ID != null) {
        element.setAttribute('id', ID)
    }
    host.appendChild(element)
    return element
}