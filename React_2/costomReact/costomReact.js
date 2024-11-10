function customRender(reactElement, container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.cheldren
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)    this methord is very slow and extara line write code

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innHTML = reactElement.cheldren
    for (const prop in reactElement.props) {
        if(prop === 'cheldren') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    cheldren: 'click me visit then google'
}

const mainContent = document.querySelector('#root')

customRender(reactElement, mainContent)