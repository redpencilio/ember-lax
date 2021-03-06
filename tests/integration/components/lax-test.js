import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | lax', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Lax />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Lax>
        template block text
      </Lax>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('It calls Lax registration and unregistration', async function(assert){
    assert.expect( 2 );

    const laxService = Service.extend({
      addListener: () => { assert.ok(true); },
      removeListener: () => { assert.ok( true ); }
    });

    this.owner.register('service:lax', laxService);

    await render(hbs`
      <Lax>
        template block text
      </Lax>
    `);
  });

  test('It registers and deregisters in the Lax service', async function(assert){
    const laxService = Service.extend({
      addListener: () => { assert.step("register"); },
      removeListener: () => { assert.step("unregister"); }
    });

    this.owner.register('service:lax', laxService);

    this.set('renderIt', true);

    await render(hbs`
     {{#if renderIt}}
       <Lax>
         template block text
       </Lax>
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
      addListener: (name) => { assert.equal(name, "testName"); },
      removeListener: (name) => { assert.equal(name, "testName"); }
    });

    this.owner.register( 'service:lax', laxService );

    await render(hbs`
      <Lax @name="testName">hello test</Lax>
    `);
  });
});
