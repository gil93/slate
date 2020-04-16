// Imports
var ___CSS_LOADER_API_IMPORT___ = require("../../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".heading {\n  color: {{ settings.headings_color }};\n  background-color: '#FF00FF';\n  letter-spacing: {{ settings.letter_spacing }}px;\n}\n\n.title {\n  color: {{ settings.headings_color }};\n  font-weight: {{ font_body_bold.weight | default: \"bold\" }};\n}\n\nbody {\n  background-color: {{ settings.body_color }};\n}", ""]);
// Exports
module.exports = exports;
