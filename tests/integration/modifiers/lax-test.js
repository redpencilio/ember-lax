import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Modifier | lax', function(hooks) {
  setupRenderingTest(hooks);

  test('It calls Lax registration and unregistration', async function(assert){
    assert.expect( 2 );

    const laxService = Service.extend({
      addWatchedElement: () => { assert.ok(true); },
      removeWatchedElement: () => { assert.ok( true ); },
      removeListener: () => { assert.ok( true ); }
    });

    this.owner.register('service:lax', laxService);

    await render(hbs`
      <div {{lax}}>
        Baloo contentzz
      </div>
    `);
  });

  test('It registers and deregisters in the Lax service', async function(assert){
    const laxService = Service.extend({
      addWatchedElement: () => { assert.step("register"); },
      removeWatchedElement: () => { assert.step("unregister"); }
    });

    this.owner.register('service:lax', laxService);

    this.set('renderIt', true);

    await render(hbs`
     {{#if renderIt}}
       <div {{lax}}>
         template block text
       </div {{lax}}>
     {{else}}
       <h1>see me stand!</h1>
     {{/if}}
    `);

    this.set('renderIt', false);

    assert.verifySteps(["register","unregister"]);
  });

  test('It shares a name for debugging', async function(assert){
    assert.expect(2);

    const laxService = Service.extend({
      addWatchedElement: (domElement, name) => { assert.equal(name, "testName"); },
      removeWatchedElement: (domElement, name) => { assert.equal(name, "testName"); }
    });

    this.owner.register( 'service:lax', laxService );

    await render(hbs`
      <div {{lax "testName"}}>hello test</div>
    `);
  });
});
