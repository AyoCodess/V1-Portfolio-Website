const sharp = require("sharp");
const fs = require("fs");
const directory = '.public/static/images/arts';
const directoryProjects = '.public/static/images/key-projects';

fs.readdirSync(directory).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
});

fs.readdirSync(directoryProjects).forEach((file) => {
  sharp(`${directory}/${file}`)
    .resize(200, 100) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
});
