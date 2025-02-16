class CustomCardGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let cards = [];

    // Read the `data-cards` attribute and parse it as JSON
    const data = this.getAttribute("data-cards");
    if (data) {
      try {
        cards = JSON.parse(data);
      } catch (error) {
        console.error("Invalid JSON format in data-cards attribute", error);
      }
    }

    this.innerHTML = `
    
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        ${cards
          .map(
            (card) => `
          <div class="col">
            <a href="${card.link}" class="text-decoration-none">
              <div class="card h-100">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center">
                    <div>
                      <i class="gca-stroke gca-stroke-40 text-primary ${card.icon}"></i>
                      <h5 class="card-title mt-3">${card.title}</h5>
                    </div>
                    <div>
                      <h2 class="m-0">${card.count}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}

customElements.define("custom-card-grid", CustomCardGrid);
