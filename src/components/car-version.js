import { LitElement, html, css } from 'lit';

export class CarVersion extends LitElement {
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
              <label>Version</label>
              <input type="text" id="version" required />
            </div>
        
        `;
    }
}
customElements.define('car-version', CarVersion);
