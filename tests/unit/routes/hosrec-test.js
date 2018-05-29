import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hosrec', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hosrec');
    assert.ok(route);
  });
});
