import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'bundle-order/models/test';

F.attach(QUnit);

QUnit.module('bundle-order functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('bundle-order main page shows up', function() {
  F('title').text('bundle-order', 'Title is set');
});
