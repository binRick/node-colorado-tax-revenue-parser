var fs = require('fs'),
    _ = require('underscore'),
    matches = require('./Matches.js'),
    files = require('./files')();

var report = {};
_.each(files, function(file) {
    report[file.month + '-' + file.year] = {
        year: file.year,
        month: file.month,
        sums: [],
    };
    _.each(matches, function(match) {
        var Pages = file.data;
        var p = file.data.length;
        var onI = false;
        var totalMonthlyReported = 0;
        _.each(file.data, function(text) {
            if (onI) {
                totalMonthlyReported = text.R[0].T;
                onI = false;
            }
            if ((text.R[0].T == match.match || text.R[0].T == match.match + '**') && onI == false)
                onI = true;
        });
        totalMonthlyReported = totalMonthlyReported.replace(/%2C/g, '');
        report[file.month + '-' + file.year].sums.push({
            title: match.title,
            value: totalMonthlyReported,
            line: match.line
        });
        //        console.log(file.month, file.year, match.title, totalMonthlyReported);
    });
});
console.log(JSON.stringify(report));