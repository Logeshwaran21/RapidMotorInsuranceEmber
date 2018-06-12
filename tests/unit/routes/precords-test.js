import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | precords', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:precords');
    assert.ok(route);
  });
});
