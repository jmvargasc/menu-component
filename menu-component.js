import { LitElement, html, css } from 'lit';

export class MenuComponent extends LitElement {
  static properties = {
    version: {},
    menuItems: { type: Array, attribute: 'menu-items' }
  };

  static styles = css`
    nav {
      display: flex;
      justify-content: center;
    }

    nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    nav ul li {
      display: inline;
      margin-right: 20px;
      cursor: pointer;
      transition: color 0.3s ease; 
    }

    nav ul li:hover {
      color: #ff0000; 
    }

    nav ul li a {
      color: #fff;
      text-decoration: none;
    }
  `;


  constructor() {
    super();
    this.version = 'STARTING';
  }

  handleClick(event, item) {
    console.log(`Elemento del menú seleccionado: ${item}`);
  }

  render() {
    return html`
      <nav>
        <ul>
          ${this.menuItems.map((item, index) => html`
            <li key=${index} @click=${(e) => this.handleClick(e, item)}>
              ${item}
            </li>
          `)}
        </ul>
      </nav>
    `;
  }
}

customElements.define('menu-component', MenuComponent);