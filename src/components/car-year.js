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

 
  firstUpdated() {
    this.changeYear();
  }

  render() {
    return html`
      <div class="field">
        <label>Año</label>
        <input type="number" id="year" @keyup= "${this.inputYear}" required  />
      </div>
    `;
  }

  inputYear() {
    //return this.renderRoot?.querySelector("#year") ?? null;
    //return this.shadowRoot.getElementById("#year") ?? null;
    this.changeYear(this.shadowRoot.getElementById("year").value)
  }

  changeYear (data) {
    this.yearValue = this.inputYear;
    /*console.log("gatillo funciona");*/

    this.dispatchEvent(
      new CustomEvent("changeYear", {
        detail: {
          data
        },
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("car-year", CarYear);


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