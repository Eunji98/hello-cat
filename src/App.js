console.log("app is running!");

class App {
  $target = null;
  // data = [];
  data = {
    isAPILoading: false,
    catList: []
  }

  constructor($target) {
    this.$target = $target;

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        // api.fetchCats(keyword).then(({ data }) => this.setState(data));
        this.setState({ ...this.data, isAPILoading: true })
        api.fetchCats(keyword).then(({ data }) => this.setState({ isAPILoading: false, catList: data }));
      }
    });

    this.searchButton = new SearchButton({
      $target,
      onClick: async () => {
        this.setState({ ...this.data, isAPILoading: true })
        const data = await api.fetchRandomCats()
        this.setState({ isAPILoading: false, catList: data })
      }
    })

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      },
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
