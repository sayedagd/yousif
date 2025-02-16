class HrRequests extends HTMLElement {
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
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-4 gy-md-7">
        ${cards
          .map(
            (card) => `
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <i class="gca-stroke gca-stroke-40 text-primary ${card.icon}"></i>
                  <h5 class="card-title mt-3">${card.title}</h5>
                  <a href="${card.link}" class="btn btn-primary w-100">${card.btntitle}</a>
                </div>
              </div>
            </div>
        `
          )
          .join("")}
      </div>
    `;
  }
}

customElements.define("hr-requests", HrRequests);
