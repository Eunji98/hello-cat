class SearchButton {
    constructor({ $target, onClick }) {
        const $searchButton = document.createElement('button')
        this.$searchButton = $searchButton

        $searchButton.textContent = '검색'
        $searchButton.className = "search-button"
        $searchButton.addEventListener('click', (e) => {
            onClick();
        })

        $target.appendChild($searchButton)
    }

    setState() {

    }

    render() {

    }
}