var WELCOME_MESSAGE = "Paste your reference list into the box below to check for potential issues."
var NO_ISSUES_MESSAGE = "No issues were detected. But still be sure to carry out a thorough human check!"
var WARNING_MESSAGE = "Potential issues detected. Hover over issue types below for more information."

highlightOptions = [];

for (check in checks){
    thisCheck = checks[check]
    highlightOptions.push({
        highlight: thisCheck['regex'],
        className: thisCheck['class'] + ' ' + check
    })
}

issueTypes = []

for (check in checks){
    thisCheck = checks[check]
    issueTypes.push(
        $(`<div class="${thisCheck['class']} ${check} issue-type">${thisCheck['short-desc']}
            <span class="tooltiptext">
                ${thisCheck['help']}
            </span>
        </div>`)
    )
}

function customInputHandler(){
    // Temporarily hide all issues
    $('.issue-type').hide()
    // If nothing in input box, display welcome message
    let input = $('#input-area').val()
    if (input == "") {
        $('#num-warnings').removeClass()
        $('#num-warnings').text(WELCOME_MESSAGE)
    }
    // Otherwise, check for issues
    else {
        issuesPresent = []
        $('mark').each(function(index){
            classes = $(this).attr('class').split(/\s+/);
            for (this_class in classes){
                issuesPresent.push(classes[this_class]);
            }
        })
        // If no issues, found, display OK message
        if (issuesPresent.length == 0){
            $('#num-warnings').removeClass()
            $('#num-warnings').addClass('safe')
            $('#num-warnings').text(NO_ISSUES_MESSAGE)
        }
        else{
            $('#num-warnings').addClass('danger')
            $('#num-warnings').text(WARNING_MESSAGE)
            for (check in checks) {
                if (issuesPresent.includes(check)) {
                    $(`.${check}.issue-type`).show()
                }
            }
        }
    }
}

$(document).ready(function () {
    $('.reference-list').highlightWithinTextarea({
        highlight: highlightOptions
    }); 
    for (issueType in issueTypes){
        $('#issue-types').append(issueTypes[issueType])
    }
    customInputHandler();
});