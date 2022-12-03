import { LitElement, html, css } from 'lit';

export class CarYear extends LitElement {
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
              <label>Año</label>
              <input type="number" id="year" required />
            </div>
        
        `;
    }
}
customElements.define('car-year', CarYear);
