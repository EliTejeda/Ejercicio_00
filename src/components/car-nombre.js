import { LitElement, html } from "lit";

export class CarNombre extends LitElement {
  static get properties() {
    return {
      nombreValue: { value: String },
    };
  }

  constructor() {
    super();
    this.nombreValue = "";
  }
  firstUpdated() {
    this.changeNombre();
  }

  render() {
    return html`
      <div class="field">
        <label>Nombre</label>
        <input
          type="text"
          id="name"
          required
          value=""
          @change=${this.changeName}
        />
      </div>
    `;
  }

  get inputNombre() {
    /*return this.renderRoot?.querySelector("#name") ?? null;*/
    return this.shadowRoot.getElementById("#name") ?? null;
  }

  changeNombre() {
    this.nombreValue = this.inputNombre;
    /*console.log("gatillo funciona");*/

    this.dispatchEvent(
      new CustomEvent("changeNombre", {
        detail: {
          value: this.nombreValue,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("car-nombre", CarNombre);
