import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | plab', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:plab');
    assert.ok(route);
  });
});
