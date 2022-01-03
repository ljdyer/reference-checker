var WELCOME_MESSAGE = "Paste your reference list into the box below."

checks = {
    "doubleSpace": {
        "regex": "\\s\\s",
        "class": "red"
    },
    "leadingOrTrailingSpace": {
        "regex": "\^\\s|\\s\$",
        "class": "purple"
    },
    "spaceBetweenInitials": {
        "regex": '\\w\\.\\s\\w\\.',
        "class": "yellow"
    },
    "missingAnd": {
        "regex": '\(\?\<\!and\),\\s\?\\S\*,\[\^,\n\]\*\\(\\d\*\\)',
        "class": 'blue'
    },
    "missingCommaAfterSurname": {
        'regex': '\\b\\w\*\\s\\S\\\.',
        'class': 'pink'
    },
    "doiInCaps": {
        'regex': 'DOI|Doi',
        'class': 'red'
    },
    "periodAfterDoi": {
        'regex': 'doi: \\S\*\\\.\(\?\!\\d\)',
        'class': 'red'
    }
}