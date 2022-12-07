import { LitElement, html } from 'lit';

export class ListaAutos extends LitElement {

    
    //Properties and Atributes
    static properties = {
        nombre: {type: String, hasChanged: function(){console.log("cambio de propiedad")}},
        year: {type: String},
        marca: {type: String},
        version: {type: String},
    }

    constructor(){
        super();/*version*/
        console.log("ListaAutos"); //aparce en consola de volada como flash
    }


    render() {
        return html`
            <div style= "border: 1px solid black">
                <p>${this.nombre}</p>
                <p>${this.year}</p>
                <p>${this.marca}</p>
                <p>${this.version}</p>
            </div>
        `;
    }

}

customElements.define('lista-autos', ListaAutos);
