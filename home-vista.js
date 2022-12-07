//componente padre
import { LitElement, html, css } from "lit";
import style from "./src/styles/home-styles";

import "./src/components/lista-autos";
import "./src/components/car-nombre";
import "./src/components/car-year";
import "./src/components/car-marca";
import "./src/components/car-version";

export class HomeVista extends LitElement {

   
  //static properties *JTCL
  static get propeties() {
    return {
      catalog: { type: Object },
      inputNombre: { type: String },
      inputYear: { type: String },
      inputMarca: { type: String },
      inputVersion: { type: String },
      obj: { type: Object},
    };
  }

  //retorna estilos de home-styles
  static get styles() {
    return [style];
  }
//
  constructor() {
    super();
    this.catalog = [];
    this.obj = {
      log: ['example','test'],
      log2: ['dos'],
      get latest() {
        if (this.log.length === 0) return undefined;
        return this.log[this.log.length - 1];
      }
    };
    console.log(this.obj.latest);


  } 

  update() {
    super.update();
    this.addEventListener("changeNombre", (event) => {
      this.inputNombre = event.detail.value;
      /*console.log(event, "update,nombre");
      console.log(event.detail.value);*/
    });

    this.addEventListener("changeYear", (event) => {
      this.inputYear = event.detail.value;
      /*console.log(event, "update, year");
      console.log(event.detail.value);*/
    });

    this.addEventListener("changeMarca", (event) => {
      this.inputMarca = event.detail.value;
      /*console.log(event, "update,marca");
      console.log(event.detail.value);*/
    });

    this.addEventListener("changeVersion", (event) => {
      this.inputVersion = event.detail.value;
      /*console.log(event, "update,version");
      console.log(event.detail.value);*/
    });
  }

  render() {
    return html`
      <main>
        <section>
          <h1>autobazar</h1>
          
            <car-nombre></car-nombre>
            <car-year></car-year>
            <car-marca></car-marca>
            <car-version></car-version>
            <div class="submit">
              <button @click=${this.addOption}>Agregar</button>
            </div>
          
        </section>
        ${console.log (this.catalog,"render")}
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

  /*get inputYear() {
    return this.renderRoot?.querySelector("#year") ?? null;
  }*/
  /*get inputMarca() {
    return this.renderRoot?.querySelector("#marca") ?? null;
  }*/

  /*get inputVersion() {
    return this.renderRoot?.querySelector("#version") ?? null;
  }*/
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
    console.log("click addOption"); //aparce en consola en flash

   this.catalog.push({
      nombre: this.inputNombre,
      marca: this.inputMarca,
      year: this.inputYear,
      version: this.inputVersion,
    });
    
   this.requestUpdate();
  }
}

customElements.define("home-vista", HomeVista);
//EJEMPLO OBJ
/*const obj = {
  log: ['example','test'],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  }
}*/

/*/ejemplo 
catalogo = [
    { 
        indice: valor,
        indice: valor,
        indice: valor,
    }
    ...
]*/

