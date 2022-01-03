checks = {
    "leadingOrTrailingSpace": {
        "regex": RegExp(/^\s|\n\s|\s\n|\s$/, "gm"),
        "class": "purple",
        "short-desc": "Leading/trailing space",
        "help": "You may have some spaces at the start or end of lines.<br>Consider removing."
    },
    "spaceBetweenInitials": {
        "regex": RegExp(/\w\.\s+\w\./, "g"),
        "class": "red",
        "short-desc": "Space between initials",
        "help": "'Quick start' guide available on University website has names with more than one initial with no spaces between initials<br>(e.g. Perkin, G.D.)."
    },
    "doubleSpace": {
        "regex": RegExp(/\s\s/, "g"),
        "class": "teal",
        "short-desc": "Double space",
        "help": "You may have some double spaces in your reference list.<br>Consider removing."
    },
    "missingAnd": {
        "regex": RegExp(/(?<!and),\s?\S*,[^,\n]*(\d*)/, "g"),
        "class": 'blue',
        "short-desc": "Missing 'and'",
        "help": "'Quick start' guide available on University website has 'and' before the last name in lists of names<br>(e.g. Ratnawati, V., Freddy, D. and Hardi, H.)"
    },
    "missingCommaAfterSurname": {
        'regex': RegExp(/\b\w+\s([A-Z]\.)+/, "g"),
        'class': 'yellow',
        "short-desc": "Missing comma after surname",
        "help": "A comma is required after each surname before the initials<br>(e.g. Watt, I.S.)"
    },
    "doiInCaps": {
        'regex': RegExp(/DOI|Doi/, "m"),
        'class': 'green',
        "short-desc": "Capitalised 'doi'",
        'help': "'Quick start' guide available on University website has 'doi' in lowercase"
    },
    "fullStopAfterDoi": {
        'regex': RegExp(/doi: \S*\.(?!\d)/, "m"),
        'class': 'pink',
        "short-desc": "Full stop after doi",
        'help': "'Quick start' guide available on University website has no full stop at the end of lines ending with a DOI"
    },
    "serialComma": {
        'regex': RegExp(/,\s?and/, "m"),
        'class': 'navy',
        'short-desc': 'Serial comma',
        'help': "'Quick start' guide available on University website has lists of three or more names without serial commas<br>(e.g. Ratnawati, V., Freddy, D. and Hardi, H.)."
    }
}