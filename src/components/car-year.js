import { LitElement, html } from "lit";

export class CarYear extends LitElement {
  static get properties() {
    return {
      yearValue: { value: String },
    };
  }

  constructor() {
    super();
    this.yearValue = "";
  }

  /*update () {
        super.update()
        const thingYear = this.ShadowRoot.getElemeyById("YearTest");
        select.addEventListener('change', (event) =>{

            select.dispatchEvent(new CustomEvent('changeYear', { 
                detail: {
                    value: select.value
                },
                bubbles: true,
                composed: true
            }))
        });

    }*/
  firstUpdated() {
    this.changeYear();
  }

  render() {
    return html`
      <div class="field">
        <label>Año</label>
        <input 
        type="number" 
        id="year" 
        required
        value =""
        @change=${this.changeYear} 
        />
      </div>
    `;
  }

  get inputYear() {
    /*return this.renderRoot?.querySelector("#year") ?? null;*/
    return this.shadowRoot.getElementById("#year") ?? null;
  }

  changeYear () {
    this.yearValue = this.inputYear;
    /*console.log("gatillo funciona");*/

    this.dispatchEvent(
      new CustomEvent("changeYear", {
        detail: {
          value: this.yearValue,
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("car-year", CarYear);
