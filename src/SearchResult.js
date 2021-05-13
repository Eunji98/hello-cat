class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("div");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.isAPILoading) {
      this.$searchResult.innerHTML = `
        <h1>로딩 중...</h1>
      `
      return
    }

    if (this.data.catList.length === 0) {
      this.$searchResult.innerHTML = `
        <h1>검색 결과가 없습니다</h1>
      `
      return
    }

    this.$searchResult.innerHTML = this.data.catList
      .map(
        cat => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");

    this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
      $item.addEventListener("click", () => {
        this.onClick(this.data.catList[index]);
      });
    });
  }
}
