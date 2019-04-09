import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | lax', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:lax');
    assert.ok(service);
  });

  test('it allows registration and deregistration', function(assert) {
    let lax = this.owner.lookup('service:lax');

    assert.equal( lax.userCount, 0, "Should start without users" );

    lax.addListener('word');
    assert.equal( lax.userCount, 1, "Should indicate single added user" );
    lax.addListener('words');
    assert.equal( lax.userCount, 2, "Should indicate two added users" );

    lax.removeListener('word');
    assert.equal( lax.userCount, 1, "Should indicate one user with the first removed" );
    lax.removeListener('words');
    assert.equal( lax.userCount, 0, "Should indicate no users left" );
  });
});
