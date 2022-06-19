import FetchAndRender from './FetchAndRender';

export default class mainPage extends FetchAndRender {
  constructor(refs) {
    super(refs);

    this.renderHeader();
    this.changePage();

    this.fetchAndRenderTrendingFilms();

    this.renderFooter();

    this.rendenBtnTop();
  }
  // =================== fetchAndRenderTrendingFilms ============================
  async fetchAndRenderTrendingFilms() {
    const data = await this.fetchTrendFilms();
    this.renderMain(data);

    // this.observerPagination();
  }

  // =================== Btn_To_Top ============================
  rendenBtnTop() {
    const elmToTop = ` <div class="to-top"><button class="btn-to-top" data-main="up"></button></div>`;
    this.refs.main.insertAdjacentHTML('afterbegin', elmToTop);
    const btnToTop = document.querySelector('.to-top');
    btnToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

    setInterval(function displayBtnScrollTop() {
      if (window.scrollY >= 500) {
        btnToTop.style.display = 'inline-block';
      } else {
        btnToTop.style.display = 'none';
      }
    }, 250);
  }
}
