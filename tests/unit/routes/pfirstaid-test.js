import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pfirstaid', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pfirstaid');
    assert.ok(route);
  });
});
