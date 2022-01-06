checks = {
    "leadingOrTrailingSpace": {
        "regex": RegExp(/^ |\n | \n| $/, "gm"),
        "class": "purple",
        "short-desc": "Leading/trailing space",
        "help": "You may have some spaces at the start or end of lines.<br>Consider removing."
    },
    "spaceBetweenInitials": {
        "regex": RegExp(/\w\.\s+\w\./, "g"),
        "class": "red",
        "short-desc": "Space between initials",
        "help": "Quick Start Guide available on University website has names with more than one initial with no spaces between initials<br>(e.g. Perkin, G.D.)."
    },
    "doubleSpace": {
        "regex": RegExp(/  +/, "g"),
        "class": "teal",
        "short-desc": "Double space",
        "help": "You may have some double spaces in your reference list.<br>Consider removing."
    },
    "missingAnd": {
        "regex": RegExp(/(?<!and) \S+,[^\n,]*\(\d{4}/, "g"),
        "class": 'blue',
        "short-desc": "Missing 'and'",
        "help": "Quick Start Guide available on University website has 'and' before the last name in lists of names<br>(e.g. Ratnawati, V., Freddy, D. and Hardi, H.)"
    },
    "missingCommaAfterSurname": {
        'regex': RegExp(/\b\w+\s([A-Z]\.)+/, "g"),
        'class': 'yellow',
        "short-desc": "Missing comma after surname",
        "help": "A comma is required after each surname before the initials<br>(e.g. Watt, I.S.)"
    },
    "doiInCaps": {
        'regex': RegExp(/DOI|Doi/, "g"),
        'class': 'green',
        "short-desc": "Capitalised 'doi'",
        'help': "Quick Start Guide available on University website has 'doi' in lowercase"
    },
    "fullStopAfterDoi": {
        'regex': RegExp(/doi: \S*\.(?!\d)/, "g"),
        'class': 'pink',
        "short-desc": "Full stop after doi",
        'help': "Quick Start Guide available on University website has no full stop at the end of lines ending with a DOI"
    },
    "serialComma": {
        'regex': RegExp(/,\s?and/, "g"),
        'class': 'navy',
        'short-desc': 'Serial comma',
        'help': "Quick Start Guide available on University website has lists of three or more names without serial commas<br>(e.g. Ratnawati, V., Freddy, D. and Hardi, H.)."
    },
    "etAl": {
        'regex': RegExp(/[Ee][Tt] [Aa][Ll]/, "g"),
        'class': 'maroon',
        'short-desc': 'Et al.',
        'help': "'Et al.' belongs in in-text citations. Authors should be listed in full in the list of references."
    }
    // TODO: Add check for missing comma between names
}