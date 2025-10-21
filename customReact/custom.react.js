function customRender(element, container) {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    for (const prop in element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, element.props[prop]);
    }

    container.appendChild(domElement);
}

const clickMeElement = {
    type: 'a',
    props: {
        href: 'https://youtu.be/dQw4w9WgXcQ?si=Owkq6YUIFwbl3zNP',
        target: '_blank',
        style: 'color: white; text-decoration: none;'
    },
    children: 'Click me!'
}

const container = document.getElementById('root');
customRender(clickMeElement, container);