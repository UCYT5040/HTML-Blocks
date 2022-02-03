var toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Containers",
            "contents": [
                {
                    "kind": "block",
                    "type": "html"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Arguments",
            "contents": [
                {
                    "kind": "block",
                    "type": "no_args"
                }
            ]
        }
    ]
}

var workspace = Blockly.inject('blocklyDiv', { toolbox: toolbox, theme: theme });