import { css } from 'lit';

export default css`

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
        justify-content: space-evenly;

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

    //cards
    .card{
      width: 20%;
      
    }

`;