import {
    manager
} from './src/Dependencies.js';
import {
    homescreen
} from './src/Dependencies.js'
import {
    loginscreen
} from './src/Dependencies.js'
import {
    mainscreen
} from './src/Dependencies.js'
import {
    registerscreen
} from './src/Dependencies.js'
import { 
    browsescreen 
} from './src/Dependencies.js'
import{
    viewscreen
}from './src/Dependencies.js'

manager.registerScreen('home', homescreen)
manager.registerScreen('login', loginscreen)
manager.registerScreen('main', mainscreen)
manager.registerScreen('register', registerscreen)
manager.registerScreen('browse',browsescreen)
manager.registerScreen('view',viewscreen)

manager.switchScreen('home')//this was at first home.show() and that led to bugs.
