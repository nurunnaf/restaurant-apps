class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="app-bar">
    <div class="app-bar__brand">
      <h1>MadangResto</h1>
    </div>
    <div class="app-bar__menu  fixed-top">
      <button id="hamburgerButton">☰</button>
    </div>
    
    <nav id="navigationDrawer" class="app-bar__navigation fixed-top">
      <ul>
        <li><a href="#/restaurant-list">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/nurunnaf">About Us</a></li>
      </ul>
    </nav>
  </div>
  <div class="hero">
   <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4.jpg">
        <img src="./images/heros/hero-image_4.jpg" 
             alt="Jumbotroon image">
      </picture>
      
    </div>
          `;
  }
}
customElements.define('app-bar', AppBar);
