import { LitElement, html} from 'lit';

export class CarName extends LitElement {
    static get properties() {
        return {
            thingValue: { value: String}   
        };
    }

    constructor(){
        super();
        this.thingValue = "";
    }
    firstUpdated(){
        this.changeName()
    }

    /*update() {
        super.update();
        this.addEventListener('changeName',(event) =>{
          console.log(event,"update,select");
          console.log(event.detail.value);
        });*/

    render() {
        return html`
        <div class="field">
              <label>Nombre</label>
              <input type="text" id="nombre" required value= "" @change=${this.changeName}/>
            </div>
        `;
    }

    get inputNombre() {
        return this.renderRoot?.querySelector("#nombre") ?? null;
      }

      changeName() {
        this.thingValue = this.inputNombre.value;
    
        this.dispatchEvent(new CustomEvent('changeName', {
          detail: {
            value: this.thingValue
          },
          bubbles: true,
          composed: true
        }))
    
      }

}
customElements.define('car-name', CarName);
