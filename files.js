var fs = require('fs'),
    _ = require('underscore');
var files = [
    'mj0114.json',
    'mj0214.json',
    'mj0314.json',
    'mj0414.json',
    'mj0514.json',
    'mj0614.json',
    'mj0714.json',
    'mj0814.json',
    'mj0914.json',
    'mj1014.json',
    'mj1114.json',
    'mj1214.json',
    'mj0115.json',
    'mj0215.json',
    'mj0315.json',
    'mj0415.json',
    'mj0515.json',
    'mj0615.json',
    'mj0715.json',
];
module.exports = function() {
    return files.map(function(file) {
        return {
            file: file,
            data: JSON.parse(fs.readFileSync(file).toString()).formImage.Pages[0].Texts,
            month: file.substring(2, 4),
            year: file.substring(4, 6),

        };
    });
};