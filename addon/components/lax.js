import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default class LaxComponent extends Component {
  @service lax

  tagName = ""

  name = "lax component"

  didInsertElement() {
    this.lax.addListener( this.name );
  }

  willDestroyElement() {
    this.lax.removeListener( this.name );
  }

  @action
  update() {
    this.lax.repopulate();
  }
}
