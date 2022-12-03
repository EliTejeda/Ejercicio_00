//componente padre
import { LitElement, html, css } from "lit";
import style from "./src/styles/home-styles";

import "./src/components/lista-autos";
import "./src/components/car-name";
import "./src/components/car-year";
import "./src/components/car-brand";
import "./src/components/car-version";

export class HomeVista extends LitElement {
  

  //static properties *JTCL
  static get propeties() {
    return {
      catalog: { type: Object },
    }
  }
  
//retorna estilos de home-styles
  static get styles() {
    return[style]
  }
  
  constructor() {
    super();
    this.catalog = [];
  }

  update() {
    super.update();
    this.addEventListener('changeName',(event) =>{
      console.log(event,"update,nombre");
      console.log(event.detail.value);
    });

    this.addEventListener('changeYear',(event) =>{
      console.log(event,"update,select");
      console.log(event.detail.value);
    }); 

    this.addEventListener('changeBrand',(event) =>{
      console.log(event,"update,select");
      console.log(event.detail.value);
    }); 

    this.addEventListener('changeVersion',(event) =>{
      console.log(event,"update,select");
      console.log(event.detail.value);
    });
  }
    

  render() {
    return html`
      <main>
        <section>
          <h1>autobazar</h1>
          <form>
            <div class="field">
              <label>Nombre</label>
              <input type="text" id="nombre" required />
            </div> 
            <div class="field">
              <label>Año</label>
              <input type="number" id="year" required />
            </div>
            <div class="field">
              <label>Marca</label>
              <input type="text" id="marca" required />
            </div>
            <div class="field">
              <label>Version</label>
              <input type="text" id="version" required />
            </div>
            <div class="submit">
              <button @click=${this.addOption}>Agregar</button>
            </div>
          </form>
        </section>

        ${this.catalog.map(
          (element) =>
            html` <lista-autos
              nombre=${element.nombre}
              year=${element.year}
              marca=${element.marca}
              version=${element.version}
            ></lista-autos>`
        )}
      </main>
    `;
  }
  //JTCL
//componente hijo car-name
  /*get inputNombre() {
    return this.renderRoot?.querySelector("#nombre") ?? null;
  }*/

  get inputYear() {
    return this.renderRoot?.querySelector("#year") ?? null;
  }
  get inputMarca() {
    return this.renderRoot?.querySelector("#marca") ?? null;
  }

  get inputVersion() {
    return this.renderRoot?.querySelector("#version") ?? null;
  }
//componente hijo car-name
  /*changeName() {
    this.thingValue = this.inputNombre.value;

    this.dispatchEvent(new CustomEvent('changeName', {
      detail: {
        value: this.thingValue
      },
      bubbles: true,
      composed: true
    }))

  }*/

  //JTCL

  addOption(e) {
    console.log("click addOption");

    this.catalog.push({
      nombre: this.inputNombre.value,
      marca: this.inputMarca.value,
      year: this.inputYear.value,
      version: this.inputVersion.value,
    });
    this.requestUpdate();
  }
}

customElements.define("home-vista", HomeVista);
