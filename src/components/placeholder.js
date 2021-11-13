class Placeholder {
    constructor() {

    }

    build(){
        const placeholder = document.createElement('div')
        placeholder.classList.add('placeholder')
        return placeholder
    }
}

export default Placeholder