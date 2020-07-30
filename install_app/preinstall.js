/* preinstall.js
 * Copyright (c) 2019 by David Asher, https://github.com/david-asher
 *
 * pre-installation script for electron-firebase
 */
'use strict';

const { execSync } = require( 'child_process' )

process.env.npm_config_loglevel = "error"

console.log( "Please be patient, electron and firebase are large projects and installation may take a few minutes." )

execSync( "npm install -g node-gyp" )