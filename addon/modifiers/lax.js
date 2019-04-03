import { inject as service } from '@ember/service';
import Modifier from 'ember-oo-modifiers';

class LaxModifier extends Modifier {
  @service lax

  didInsertElement([name], attributes) {
    name = name ? name : "lax-modifier";
    Object.entries( attributes ).forEach( ([name, value]) => {
      this.element.setAttribute(
        `data-lax-${name}`,
        `${value}` );
    } );
    this.element.classList.add("lax");
    this.lax.addWatchedElement( this.element, name );
  }

  willDestroyElement([name], namedProperties) {
    name = name ? name : "lax-modifier";
    this.lax.removeListener( name );
    Object.entries( namedProperties ).forEach( ([name]) => {
      this.element.removeAttribute(`data-lax-${name}`);
    });
    this.element.classList.remove("lax");
    this.lax.removeWatchedElement( this.element, name );
  }
}

export default Modifier.modifier( LaxModifier );
