checks = {
    "leadingOrTrailingSpace": {
        "regex": RegExp(/^\s|\n\s|\s\n|\s$/, "gm"),
        "class": "purple",
        "short-desc": "Leading/trailing space"
    },
    "spaceBetweenInitials": {
        "regex": RegExp(/\w\.\s+\w\./, "g"),
        "class": "red",
        "short-desc": "Space between initials"
    },
    "doubleSpace": {
        "regex": RegExp(/\s\s/, "g"),
        "class": "teal",
        "short-desc": "Double space"
    },
    "missingAnd": {
        "regex": RegExp(/(?<!and),\s?\S*,[^,\n]*(\d*)/, "g"),
        "class": 'blue',
        "short-desc": "Missing 'and'"
    },
    "missingCommaAfterSurname": {
        'regex': RegExp(/\b\w+\s([A-Z]\.)+/, "g"),
        'class': 'yellow',
        "short-desc": "Missing comma after surname"
    },
    "doiInCaps": {
        'regex': RegExp(/DOI|Doi/, "m"),
        'class': 'green',
        "short-desc": "Capitalised 'doi'"
    },
    "periodAfterDoi": {
        'regex': RegExp(/doi: \S*\.(?!\d)/, "m"),
        'class': 'pink',
        "short-desc": "Full stop after doi"
    }
}