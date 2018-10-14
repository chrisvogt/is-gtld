import test from 'ava';
import isGTLD from '.';

test('it identifies a valid gTLD', t => {
  t.is(isGTLD('apple'), true);
});

test('it identifies an invalid gTLD', t => {
  t.is(isGTLD('n9p3fa!ls#'), false);
});
