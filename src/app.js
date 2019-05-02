var _ = require('lodash');

var foo = ['foo', 'foo', 'foo'];
var foobar = _.map(foo, function(item) {
    return item + 'bar';
});
var foobarString = JSON.stringify(foobar, null, 2);

var el = document.createElement('pre');
el.innerHTML = foobarString;
document.body.appendChild(el);
console.log(foobarString);
