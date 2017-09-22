var _ = require('./lodash');
_.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred',   'active': false }
];

// using the `_.matches` callback shorthand
_.every(users, { 'user': 'barney', 'active': false });
// => false

// using the `_.matchesProperty` callback shorthand
_.every(users, 'active', false);
// => true

// using the `_.property` callback shorthand
_.every(users, 'active');
// => false


_.capitalize('fred');
_.deburr([string='']);