import { LitElement, html, css } from 'lit';

export class CarBrand extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <div class="field">
              <label>Marca</label>
              <input type="text" id="marca" required />
            </div>
        
        `;
    }
}
customElements.define('car-brand', CarBrand);
