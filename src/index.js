#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const inquirer = require('inquirer');
const figlet = require('figlet');
const shell = require('shelljs');
const fs = require('fs');

clear(); 
console.log(
    chalk.blue(
        figlet.textSync('MHM & AZINTELEKOM', {horizontalLayout: 'fitted'})
    )
);