import Ember from 'ember';

export default Ember._setModifierManager(
  owner => ({
    createModifier() {
      return { name: "lax-modifier" };
    },
    installModifier( state, element, { positional: [givenName] } ){
      state.name = givenName || state.name;
      const laxService = owner.lookup( 'service:lax' );
      laxService.addListener( state.name );
    },
    updateModifier() {},
    destroyModifier(state) {
      const laxService = owner.lookup( 'service:lax' );
      laxService.removeListener( state.name );
    }
  }),
  class HasLaxModifier {});

