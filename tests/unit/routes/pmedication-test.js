import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | pmedication', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:pmedication');
    assert.ok(route);
  });
});
