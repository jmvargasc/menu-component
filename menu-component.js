import { LitElement, html, css } from 'lit';

export class MenuComponent extends LitElement {

  static properties = {
    menuItems: { type: Array, attribute: 'menu-items' }
  };

  static styles = css`
    .hamburger-menu{
      padding:2rem;
    }
    .hamburger-icon {
      width: 30px;
      height: 25px;
      position: relative;
      cursor: pointer;
    }

    .hamburger-icon span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background-color: #333;
      border-radius: 2px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }

    .hamburger-icon span:nth-child(1) {
      top: 0px;
    }

    .hamburger-icon span:nth-child(2) {
      top: 10px;
    }

    .hamburger-icon span:nth-child(3) {
      top: 20px;
    }

    .hamburger-menu ul {
      list-style: none;
      padding: 0;
      margin: 0;
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: opacity 0.25s ease-in-out, visibility 0.25s ease-in-out, transform 0.25s ease-in-out;
      display:flex;
      justify-content: space-around;
      background-color:#333;
    }

    .hamburger-menu.open ul {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      display:flex;
      justify-content: space-around;
      padding:1rem;
    }

    .hamburger-menu ul li {
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
      color: #ffffff;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .hamburger-menu ul li:hover {
      color: #ff6347;
    }
  `;

  constructor() {
    super();
    this.menuItems = [];
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.requestUpdate();
  }

  handleItemClick(item) {
    console.log(`Elemento del menú seleccionado: ${item}`);
  }

  render() {
    return html`
      <div class="hamburger-menu ${this.isOpen ? 'open' : ''}">
        <div class="hamburger-icon" @click=${this.toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          ${this.menuItems.map((item) => html`
            <li @click=${() => this.handleItemClick(item)}>${item}</li>
          `)}
        </ul>
      </div>
    `;
  }
}

customElements.define('menu-component', MenuComponent);