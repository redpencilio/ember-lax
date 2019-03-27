ember-lax
==============================================================================

Use lax.js in EmberJS applications.

- Lax demo: https://alexfox.dev/laxxx/
- Lax docs: https://github.com/alexfoxy/laxxx#presets


Installation
------------------------------------------------------------------------------

Just install ember-lax, it works out of the box.

```
ember install ember-lax
```


Usage
------------------------------------------------------------------------------

Just drop your content inside a `<Lax>` component to turn it on, or add the `{{lax}}`
element modifier.

Done!

The dummy app contains some examples.

### Example with template component

Just wrap your content in Lax.  lax.js is updated when the component
is rendered for the first time.

```hbs
  ... previous content here ...
  <Lax>
    <div class="lax" data-lax-preset="leftToRight fadeInOut zoomInOut" style="background-color: red; width: 100px; height: 100px;">!AWESOME!</div>
    <div class="lax" data-lax-preset="driftRight zoomOut" style="background-color: grey; width: 100px; height: 100px;">!AWESOME!</div>
  </Lax>
  ... next content be here ...
```

### Example with element modifier

Have more dynamic content.  Add the `{{lax}}` element modifier on each
element.

```hbs
  ... previous content here ...
  <div {{lax}} class="lax" data-lax-preset="leftToRight fadeInOut zoomInOut" style="background-color: red; width: 100px; height: 100px;">!AWESOME!</div>
  <div {{lax}} class="lax" data-lax-preset="driftRight zoomOut" style="background-color: grey; width: 100px; height: 100px;">!AWESOME!</div>
  ... next content be here ...
```

### Mixing

You can freely combine `<Lax>` and `{{lax}}` if most content is static
but some is dynamic.

```hbs
  ... previous content be here ...
  <Lax>
    <div class="lax" data-lax-preset="leftToRight fadeInOut zoomInOut" style="background-color: red; width: 100px; height: 100px;">!AWESOME!</div>
    <div class="lax" data-lax-preset="driftRight zoomOut" style="background-color: grey; width: 100px; height: 100px;">!AWESOME!</div>
    {{#if superClient}}
      <div {{lax}} class="lax" data-lax-preset="blurOut slalom rotate swing" style="background-color: grey; width: 200; height: 100px;">ZUpaHClient</div>
    {{/if}}
    <button {{action (mut superClient) (not superClient)}}>ToggleSuper</button>
  </Lax>
  ... next content be here ...
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
