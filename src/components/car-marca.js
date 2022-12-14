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
              <input type="text" id="marca" @keyup= "${this.inputMarca}" required />
        </div>
        
        `;
    }
    inputMarca() {
      console.log(this.shadowRoot.getElementById("marca").value)
        //return this.renderRoot?.querySelector("#marca") ?? null;
        this.changeMarca(this.shadowRoot.getElementById("marca").value)
      }
    
      changeMarca (data) {
        this.marcaValue = this.inputMarca;
        //console.log("gatillo funciona");
    
        this.dispatchEvent(
          new CustomEvent("changeMarca", {
            detail: {
              data
            },
            bubbles: true,
            composed: true,
          })
        );
      }
}
customElements.define('car-marca', CarMarca);
