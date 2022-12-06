import { LitElement, html } from "lit";

export class CarVersion extends LitElement {
  static get properties() {
    return {
      versionValue: { value: String },//variable que guarda el valor a lanzar
    };
  }

  constructor() {
    super();
    this.versionValue = "";
  }

  
  firstUpdated() {
    this.changeVersion();
  }


    render() {
        return html`
        <div class="field">
              <label>Version</label>
              <input type="text" id="version" required />
            </div>
        
        `;
    }
    get inputVersion() {
        /*return this.renderRoot?.querySelector("#mversion") ?? null;*/
        return this.shadowRoot.getElementById("#version") ?? null;
      }
    
      changeVersion () {
        this.versionValue = this.inputVersion;
        /*console.log("gatillo funciona");*/
    
        this.dispatchEvent(
          new CustomEvent("changeVersion", {
            detail: {
              value: this.versionValue,
            },
            bubbles: true,
            composed: true,
          })
        );
      }
}
customElements.define('car-version', CarVersion);
