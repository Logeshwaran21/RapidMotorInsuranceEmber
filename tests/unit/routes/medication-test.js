import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | medication', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:medication');
    assert.ok(route);
  });
});
