class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    
    <p>MadangResto &#169; 2023, Dicoding Academy | Created with <span style="color: #b2a4ff">&#9829;</span> by <a href="https://github.com/nurunnaf">Nurun Nafisah (20051204087)</a></p>
  </footer>      
          `;
  }
}
customElements.define('footer-bar', FooterBar);
