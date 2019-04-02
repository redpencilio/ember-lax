import { inject as service } from '@ember/service';
import Modifier from 'ember-oo-modifiers';

class LaxModifier extends Modifier {
  @service lax

  didInsertElement([name]) {
    name = name ? name : "lax-modifier";
    this.lax.addListener( name );
  }

  willDestroyElement([name]) {
    name = name ? name : "lax-modifier";
    this.lax.removeListener( name );
  }
}

export default Modifier.modifier( LaxModifier );
