Blockly.Blocks['no_args'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("no arguments");
        this.setOutput(true, "argumentList");
        this.setTooltip("no arguments for an element");
        this.setHelpUrl("");
        this.setStyle('arguments')
    }
};