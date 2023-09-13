// 1

function elementor(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        throw new Error(`No element found for selector: ${selector}`);
    }
    return {
        attribute(key, value) {
            element.setAttribute(key, value);
            return this;
        },
        on(eventName, handler) {
            element.addEventListener(eventName, handler);
            return this;
        },
        click(handler) {
            element.addEventListener('click', handler);
            return this;
        },
        text(content) {
            element.textContent = content;
            return this;
        },
        class(className) {
            if (Array.isArray(className)) {
                className.forEach(cls => element.classList.add(cls));
            } else {
                element.classList.add(className);
            }
            return this;
        },
        removeClass(className) {
            element.classList.remove(className);
            return this;
        }
    };
}

elementor('#some-id')
    .click(() => console.log('HI'))
    .text('Click Me')
    .attribute('title', 'a click button')
    .on('mouseenter', () => console.log('Mouse Entered'))
    .class(['text-bold', 'class2']);

// 2

function render(obj) {
    const el = document.createElement(obj.name);
    if (obj.attributes) {
        for (const attr of obj.attributes) {
            el.setAttribute(attr.key, attr.value);
        }
    }
    if (obj.children) {
        for (const child of obj.children) {
            if (typeof child === 'string') {
                el.appendChild(document.createTextNode(child));
            } else {
                el.appendChild(render(child));
            }
        }
    }
    return el;
}

const inputObj = {
    name: 'div',
    attributes: [{ key: 'class', value: 'container' }, { key: 'id', value: 'some-id' }],
    children: [
        "Salam",
        {
            name: 'p',
            attributes: [{ key: 'class', value: 'text-bold' }],
            children: ["Some Text"]
        }
    ]
};

document.body.appendChild(render(inputObj));

// 3

function render(formFields) {
    const form = document.createElement('form');
    formFields.forEach(field => {
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        form.appendChild(label);

        if (field.type === 'text') {
            const input = document.createElement('input');
            input.setAttribute('id', field.id);
            input.setAttribute('type', field.inputType);
            input.setAttribute('placeholder', field.placeholder);
            form.appendChild(input);
        } else if (field.type === 'checkbox') {
            const input = document.createElement('input');
            input.setAttribute('id', field.id);
            input.setAttribute('type', 'checkbox');
            form.appendChild(input);
        } else if (field.type === 'select') {
            const select = document.createElement('select');
            select.setAttribute('id', field.id);
            field.options.forEach(option => {
                const opt = document.createElement('option');
                opt.setAttribute('value', option.value);
                opt.textContent = option.label;
                select.appendChild(opt);
            });
            form.appendChild(select);
        }
    });
    return form;
}

const formFields = [
    {
        id: "firstName",
        type: "text",
        label: "نام:",
        placeholder: "نام خود را وارد کنید...",
        inputType: "text"
    },
    {
        id: "lastName",
        type: "text",
        label: "نام خانوادگی:",
        placeholder: "نام خانوادگی خود را وارد کنید...",
        inputType: "text"
    },
    {
        id: "email",
        type: "text",
        label: "ایمیل:",
        placeholder: "ایمیل خود را وارد کنید...",
        inputType: "email"
    },
    {
        id: "experiences",
        type: "select",
        label: "میزان سابقه:",
        options: [
            { value: '1', label: '1 سال' },
            { value: '2', label: '2 سال' },
            { value: '3', label: '3 سال' },
            { value: '4', label: '4 سال' },
            { value: 'more-than-4', label: 'بیش از 4 سال' }
        ]
    }
];

document.body.appendChild(render(formFields));