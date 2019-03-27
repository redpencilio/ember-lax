import Service from '@ember/service';
import lax from 'lax.js';

export default class LaxService extends Service {
  listenerCount = 0

  constructor() {
    super();
    lax.setup();
  }

  addListener( name ) {
    console.debug(`Adding listener ${name}`);
    this.listenerCount++;
    if( this.listenerCount == 1 )
      this.enableLax();
    this.repopulate();
  }

  removeListener( name ) {
    console.debug(`Removing listener ${name}`);
    this.listenerCount--;
    if( this.listenerCount == 0 )
      this.disableLax();
    else
      this.repopulate();
  }

  enableLax() {
    document.addEventListener( 'scroll', this.updateLaxPosition );
  }

  disableLax() {
    document.removeEventListener( 'scroll', this.updateLaxPosition );
  }

  repopulate() {
    lax.populateElements();
  }

  updateLaxPosition() {
    window.requestAnimationFrame( () => {
      lax.update( window.scrollY );
    } );
  }
}
