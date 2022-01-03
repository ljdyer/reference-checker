function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()[\]]/g, '\\$&'); // $& means the whole matched string
}

function makeGlobalRegex(pattern) {
    // Escape special characters
    // escaped = escapeRegExp(pattern)
    // Make global regex
    return new RegExp(pattern, "gm")
    // return new RegExp(pattern, "g")
}

doubleSpace = makeGlobalRegex(checks['doubleSpace']['regex'])

highlightOptions = [];

for (check in checks){
    highlightOptions.push({
        highlight: makeGlobalRegex(checks[check]['regex']),
        className: checks[check]['class']
    })
}

console.log(highlightOptions)

$(document).ready(function () {
    $('.reference-list').highlightWithinTextarea({
        highlight: highlightOptions
    }); 
});