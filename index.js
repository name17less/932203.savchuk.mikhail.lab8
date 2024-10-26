const fieldContainer = document.querySelector('.field_container');
const outputField = document.querySelector('#output_field');
class Field
{
    constructor()
    {
        this.container = document.createElement('div');
        this.container.className = 'field';

        this.name = document.createElement('input');
        this.number = document.createElement('input');

        this.name.type = 'text';
        this.number.type = 'number';

        this.upButton = document.createElement('button');
        this.upButton.innerText = '↑';
        this.downButton = document.createElement('button');
        this.downButton.innerText = '↓';
        this.removeButton = document.createElement('button');
        this.removeButton.innerText = 'x';

        this.upButton.addEventListener('click', this.up.bind(this));
        this.downButton.addEventListener('click', this.down.bind(this));
        this.removeButton.addEventListener('click', this.remove.bind(this));

        this.container.append(this.name);
        this.container.append(this.number);
        this.container.append(this.upButton);
        this.container.append(this.downButton);
        this.container.append(this.removeButton);
    }

    up()
    {
        let previousSibling = this.container.previousElementSibling;

        if (previousSibling) {
            previousSibling.before(this.container);
        }
    }

    down()
    {
        let nextSibling = this.container.nextElementSibling;

        if (nextSibling) {
            nextSibling.after(this.container);
        }
    }

    remove()
    {
        this.container.remove();
    }
}

function createField()
{
    var newField = new Field();
    fieldContainer.appendChild(newField.container);
    fieldList.push(newField);
}

function saveFields()
{
    let saveText = '{';

    const fieldContainers = fieldContainer.querySelectorAll('.field');

    fieldContainers.forEach((fieldContainer) => {
        let name = fieldContainer.querySelector('input[type="text"]').value;
        let number = fieldContainer.querySelector('input[type="number"]').value;

        saveText += `"${name}":"${number}",`;
    });

    if (saveText[saveText.length - 1] == ',') {
        saveText = saveText.substr(0, saveText.length - 1);
    }

    saveText += '}'
    outputField.innerHTML = saveText;
}