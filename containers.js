Blockly.Blocks['html'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("html document");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "include_doctype")
            .appendField("include doctype");
        this.appendValueInput("args")
            .setCheck("argumentList")
            .appendField("arguments");
        this.appendStatementInput("content")
            .setCheck(null);
        this.setTooltip("html element (<html>) optionally with doctype (<!doctype html>)");
        this.setHelpUrl("");
        this.setStyle('containers')
    }
};
