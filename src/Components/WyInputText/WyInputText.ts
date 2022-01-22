import { html, LitElement } from 'lit'
import { property, state } from 'lit/decorators.js'

import styles from './WyInputTextStyle'

export class WyInputText extends LitElement {

  static styles = [styles]

  @state() _value = ''
  @state() _class = ''

  @property({
    type: String
  }) error = ''

  @property({
    type: String
  }) identifier = ''

  @property({
    type: String
  }) label = ''

  @property({
    type: String
  }) mode = 'light'

  @property({
    type: String
  }) placeholder = ''

  @property({
    type: String
  }) value = ''

  @property({
    type: Boolean,
    attribute: 'with-error'
  }) withError = false

  @property({
    type: Boolean,
    attribute: 'with-label'
  }) withLabel = false

  set _setValue(value:string) {
    const oldValue = this.value;
    // do some side effect here        
    // set a pseudo-private property that will contain the actual value
    this._value = value;
    // call LitElement's requestUpdate so that a rerender is done if needed
    this.requestUpdate('value', oldValue);
  }

  get _getError() {
    return this.withError ? html`<div id="error">${this.error}</div>` : ''
  }
  get _getInput() {
    return html`<input type='text' placeholder='${this.placeholder}' id='${this.identifier}' @change=${this.onChange} value='${this._value}' class='${this._class}'>`
  }
  get _getLabel() {
    return this.withLabel ? html`<label>${this.label}</label>` : ''
  }

  get _getValue() {
    return this.value;
  }

  onChange(e:any) {
    this.value = e.target.value;
    if(this.value.length > 0) {
        this._class += 'is-not-empty'
    } else {
      let classClean =  this._class.replace('is-not-empty', '');
      classClean = classClean.replace('  ', ' ');
      this._class = classClean;
    }
  }

  render() {
    return html`
      <div class="container ${this.mode}">
        ${this._getInput}
        ${this._getLabel}
        ${this._getError}
      </div>
    `
  }
}
