var WELCOME_MESSAGE = "Paste your reference list into the box below to check for potential issues."
var NO_ISSUES_MESSAGE = "No issues were detected. But still be sure to carry out a thorough human check!"
var WARNING_MESSAGE = "Potential issues detected. Hover over issue types below for more information."

highlightOptions = [];
issueTypes = []

/* Generate options object for highlight-within-textarea plugin from check data in checks.js */
function generateOptions(){
        for (check in checks){
        thisCheck = checks[check]
        highlightOptions.push({
            highlight: thisCheck['regex'],
            className: thisCheck['class'] + ' ' + check
        })
    }
}

/* Generate issue type display */
function createIssueTypes(){
    for (check in checks){
        thisCheck = checks[check] 
        thisIssue = $(`<div class="${thisCheck['class']} ${check} issue-type">
                            ${thisCheck['short-desc']}
                            <span class="tooltiptext">
                                ${thisCheck['help']}
                            </span>
                        </div>`)
        $('#issue-types').append(thisIssue)
        // Hide all for now
        $('.issue-type').hide()
    }
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
            $('#num-warnings').removeClass('danger')
            $('#num-warnings').addClass('safe')
            $('#num-warnings').text(NO_ISSUES_MESSAGE)
        }
        else{
            $('#num-warnings').removeClass('safe')
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
    // Initialize textarea highlighting using highlight-within-textarea plugin
    generateOptions();
    $('.reference-list').highlightWithinTextarea({
        highlight: highlightOptions
    }); 
    // Initialize issue display
    createIssueTypes();
    // Update issue display
    customInputHandler();
});