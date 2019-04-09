[![Build Status](https://travis-ci.org/redpencilio/ember-lax.svg?branch=master)](https://travis-ci.org/redpencilio/ember-lax)

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

Drop your lax animations inside the `<Lax>` component, or add the `{{lax}}`
element modifier to your tag.  Done!

The dummy app contains some examples.

### Example with element modifier

Have more dynamic content or want to write less content?  Add the
`{{lax}}` element modifier on each element you want animated instead.

```hbs
  ... previous content here ...
  <div {{lax preset="leftToRight fadeInOut zoomInOut"}}>!AWESOME!</div>
  <div {{lax preset="driftRight zoomOut"}}>!AWESOME!</div>
  ... next content be here ...
```

The lax modifier accepts any attribute lax understands but doesn't
require the `data-lax-` prefix to be specified.  The current
implementation prefixes all attributes with `data-lax-` but it is
possible to divert from that if Lax takes a turn in the future.

### Example with template component

Just wrap your content in `Lax`.  lax.js is updated when the component
is rendered for the first time.

```hbs
  ... previous content here ...
  <Lax>
    <div class="lax" data-lax-preset="leftToRight fadeInOut zoomInOut">!AWESOME!</div>
    <div class="lax" data-lax-preset="driftRight zoomOut">!AWESOME!</div>
  </Lax>
  ... next content be here ...
```

### Mixing

You can freely combine `<Lax>` and `{{lax}}` if most content is static
but some is dynamic.

```hbs
  ... previous content be here ...
  <Lax>
    <div class="lax" data-lax-preset="leftToRight fadeInOut zoomInOut">!AWESOME!</div>
    <div class="lax" data-lax-preset="driftRight zoomOut">!AWESOME!</div>
    {{#if superClient}}
      <div {{lax preset="blurOut slalom rotate swing"}}>ZUpaHClient</div>
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
