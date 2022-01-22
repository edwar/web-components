import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import { WyInputText } from '../src/Components/WyInputText/WyInputText.js';
import '../src/Components/WyInputText/wy-input-text.js';

let el: WyInputText

const cleanComponent = async () => {
  let octavio = "";
  el = await fixture<WyInputText>(html`<wy-input-text></wy-input-text>`)
  await el.updateComplete
}

describe('WyInputText', () => {
  describe('Default value', () => {
    cleanComponent();
    it('Props values', () => {
      expect(el.error).to.equal('')
      assert.typeOf(el.error, 'String')

      expect(el.identifier).to.equal('')
      assert.typeOf(el.identifier, 'String')

      expect(el.label).to.equal('')
      assert.typeOf(el.label, 'String')

      expect(el.mode).to.equal('light')
      assert.typeOf(el.mode, 'String')

      expect(el.placeholder).to.equal('')
      assert.typeOf(el.placeholder, 'String')

      expect(el.value).to.equal('')
      assert.typeOf(el.value, 'String')

      expect(el.withError).to.equal(false)
      assert.typeOf(el.withError, 'Boolean')

      expect(el.withLabel).to.equal(false)
      assert.typeOf(el.withLabel, 'Boolean')
    })

    describe('View component in DOM', () => {
      it('Label is not displayer', () => {
        const text = el.shadowRoot?.querySelector('label')?.textContent
        expect(text).to.equal(undefined)
      })

      it('Error is not displayer', () => {
        const error = el.shadowRoot?.querySelector('#error')?.textContent
        expect(error).to.equal(undefined)
      })

      it('View input', async () => {
        el.identifier = 'Test'
        await el.updateComplete
        const input = el.shadowRoot?.querySelector(`#${el.identifier}`)
        expect(input?.getAttribute('id')).to.equal(el.identifier)
      })
    })
  })
  describe('Change props', () => {
    cleanComponent()

    it('View error in DOM', async() => {
      el.error = 'Test'
      el.withError = true
      await el.updateComplete
      const text = el.shadowRoot?.querySelector('#error')?.textContent
      expect(text).to.equal('Test')
    })

    it('View input', async () => {
      el.identifier = 'Test'
      el.placeholder = 'Placeholder'
      await el.updateComplete
      const input = el.shadowRoot?.querySelector(`#${el.identifier}`)
      expect(input?.getAttribute('placeholder')).to.equal(el.placeholder)
    })

    it('View label in DOM', async() => {
      el.label = 'Test'
      el.withLabel = true
      await el.updateComplete
      const text = el.shadowRoot?.querySelector('label')?.textContent
      expect(text).to.equal('Test')
    })
  })
});
