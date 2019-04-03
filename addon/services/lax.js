import Service from '@ember/service';
import lax from 'lax.js';

export default class LaxService extends Service {
  userCount = 0

  constructor() {
    super();
    lax.setup();
  }

  addWatchedElement( domNode, name ) {
    console.debug(`Adding watched element ${name}`);
    this.userCount++;
    if( this.userCount == 1 )
      this.enableLax();
    lax.addElement( domNode );
  }

  removeWatchedElement( domNode, name ) {
    console.debug(`Removing watched element ${name}`);
    this.userCount--;
    if( this.userCount == 0 )
      this.disableLax();
    lax.removeElement( domNode );
  }

  addListener( name ) {
    console.debug(`Adding listener ${name}`);
    this.userCount++;
    if( this.userCount == 1 )
      this.enableLax();
    this.repopulate();
  }

  removeListener( name ) {
    console.debug(`Removing listener ${name}`);
    this.userCount--;
    if( this.userCount == 0 )
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
