#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var rootDir = process.argv[2];

//specify your input, output folders and icon name
var inputFolder = path.join(rootDir, 'resources/android/push_icons/');
var outputFolder = path.join(rootDir, '/platforms/android/res/');
var iconName = 'ic_stat_onesignal_default.png';
var inputFile = null;
var outputFile = null;

console.log('------------------------------------------------------------------------------------------');
console.log("Running hook: " + path.basename(process.env.CORDOVA_HOOK));
console.log('------------------------------------------------------------------------------------------');

fs.readdir(inputFolder, function (err, folders) {
  folders.forEach(function (folder) {
    if (folder.indexOf('drawable') === 0) {
      inputFile = inputFolder + folder + '/' + iconName;
      if (inputFile) {
        outputFile = outputFolder + folder + '/' + iconName;
        fs.createReadStream(inputFile)
          .pipe(fs.createWriteStream(outputFile));
        console.log('copying: ' + inputFile + ' to --> ' + outputFile);
      }
    }
  });
});
