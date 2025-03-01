import './index.css'

console.log('Hello World!')

document.body.insertAdjacentElement('afterbegin', createHtmlElements())

function createHtmlElements() {
    const title = document.createElement('h1')
    title.textContent = 'I love JavaScript'

    const image = document.createElement('img')
    image.src = '../../assets/java-script-logo.jpg'
    image.alt = 'java-script-logo'

    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'

    wrapper.append(title, image)

    return wrapper
}