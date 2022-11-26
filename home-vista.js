import { LitElement, html, css } from "lit";
import "./components/lista-autos";

export class HomeVista extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      section {
        padding: 3rem 0;
        background-color: lightgray;
      }

      h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        color: #707070;
      }

      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
        max-width: 1000px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 1rem;
      }

      .field {
        display: flex;
        flex-direction: column;

        width: 18rem;
        margin: 0.5rem 0;
      }

      .field label {
        font-size: 0.9rem;
        margin-bottom: 0.2rem;

        color: #696969;
      }

      .field input {
        font-size: 1.1rem;

        width: 70%;
        height: 2.2rem;
        padding-left: 0.5rem;

        border: 2px solid #696969;
        border-radius: 5px;
      }

      .field select {
        font-size: 1rem;

        width: 12rem;
        height: 2.6rem;
        padding: 0.5rem;

        border: 2px solid #696969;
        border-radius: 5px;
      }

      .submit {
        display: flex;
        justify-content: center;

        width: 100%;
        margin-top: 1rem;
        margin-right: auto;
        margin-left: auto;
      }

      .submit button {
        padding: 0.5rem;
        font-size: 1.5rem;
        border: 2px solid #696969;
        border-radius: 5px;
      }
      p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
        max-width: 1000px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 1rem;
        border: 2px solid #696969;
        border-radius: 5px;
      }
    `,
  ];

  //static properties *JTCL
  static get propeties() {
    return {
      catalog: { type: Object },
    }
  }

  constructor() {
    super();
    this.catalog = [];
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

  get inputNombre() {
    return this.renderRoot?.querySelector("#nombre") ?? null;
  }

  get inputYear() {
    return this.renderRoot?.querySelector("#year") ?? null;
  }
  get inputMarca() {
    return this.renderRoot?.querySelector("#marca") ?? null;
  }

  get inputVersion() {
    return this.renderRoot?.querySelector("#version") ?? null;
  }

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
