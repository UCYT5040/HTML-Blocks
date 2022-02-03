Blockly.JavaScript['html'] = function (block) {
    var checkbox_include_doctype = block.getFieldValue('include_doctype') == 'TRUE';
    var value_args = Blockly.JavaScript.valueToCode(block, 'args', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_content = Blockly.JavaScript.statementToCode(block, 'content');
    var code = '';
    if (checkbox_include_doctype) {
        code += "<!doctype html>\n";
    }
    code += "<html ";
    code += value_args;
    code += ">\n";
    code += statements_content;
    code += "</html>";
    return code;
};
