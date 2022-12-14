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
        <input type="text" id="nombre" @keyup= "${this.inputNombre}" required/>
      </div>
    `;
  }

  inputNombre() {
    console.log(this.shadowRoot.getElementById("nombre").value)
    /*return this.renderRoot?.querySelector("#name") ?? null;*/
    /*return this.shadowRoot.getElementById("#name") ?? null;*/
    this.changeNombre(this.shadowRoot.getElementById("nombre").value)
  }

  changeNombre(data) {
    this.nombreValue = this.inputNombre;
    /*console.log("gatillo funciona");*/

    this.dispatchEvent(
      new CustomEvent("changeNombre", {
        detail: {
          data
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("car-nombre", CarNombre);
