import parse from 'html-react-parser';
var prettyHtml = require('json-pretty-html').default;

function PrettyError(errorJson) {
    let stringed = prettyHtml(errorJson)
    stringed = stringed.replace(/{/g, '').replace(/}/g, '').replace(/"/g, '')
    return parse(stringed)
}

export default PrettyError