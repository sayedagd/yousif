class BreadcrumbNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const pageTitle =
      this.getAttribute("page-title") || "طلبات الموارد البشرية";
    const homeLink = this.getAttribute("home-link") || "hrIndex.html";

    this.innerHTML = `
          <div class="row mx-auto">
            <h3 class="fs-3 fw-bold mb-0">${pageTitle}</h3>
            <div class="col">
              <nav aria-label="breadcrumb">
                <ol id="breadcrumb_id" class="breadcrumb">
                  <li class="breadcrumb-item text-black" aria-current="page">
                    <a href="${homeLink}">الرئيسية</a>
                  </li>
                  <li class="breadcrumb-item text-black" aria-current="page">
                    <a href="#">${pageTitle}</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
      `;
  }
}

customElements.define("breadcrumb-nav", BreadcrumbNav);
