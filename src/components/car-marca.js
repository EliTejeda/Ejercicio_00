import { LitElement, html } from "lit";

export class CarMarca extends LitElement {
  static get properties() {
    return {
      marcaValue: { value: String },
    };
  }

  constructor() {
    super();
    this.marcaValue = "";
  }

  
  firstUpdated() {
    this.changeMarca();
  }

    render() {
        return html`
        <div class="field">
              <label>Marca</label>
              <input type="text" id="marca" required />
            </div>
        
        `;
    }
    get inputMarca() {
        /*return this.renderRoot?.querySelector("#marca") ?? null;*/
        return this.shadowRoot.getElementById("#marca") ?? null;
      }
    
      changeMarca () {
        this.marcaValue = this.inputMarca;
        /*console.log("gatillo funciona");*/
    
        this.dispatchEvent(
          new CustomEvent("changeMarca", {
            detail: {
              value: this.marcaValue,
            },
            bubbles: true,
            composed: true,
          })
        );
      }
}
customElements.define('car-marca', CarMarca);
