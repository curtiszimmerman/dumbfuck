
var dumbfuck = require('./');
var test = require('tape');

test('dumbfuck', function(t) {
	t.equals(dumbfuck(0), 0);
	t.equals(dumbfuck(1), 1);
	
	t.end();
});
