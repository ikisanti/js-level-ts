class CRUD {
    constructor() {
        this.data = [];
        this.indexToEdit = null;
        this.initUI();
        this.renderTable();
    }

    initUI() {
        this.title = this.create('h2', 'CRUD con clases JS puro');
        document.body.appendChild(this.title);

        this.input = this.create('input');
        this.input.placeholder = 'Nombre';

        this.button = this.create('button', 'Guardar');
        this.button.addEventListener('click', () => this.save());

        this.form = this.create('div');
        this.form.append(this.input, this.button);
        document.body.appendChild(this.form);

        this.table = this.create('table');
        this.table.innerHTML = `
      <thead>
        <tr><th>#</th><th>Nombre</th><th>Acciones</th></tr>
      </thead>
    `;
        this.tbody = this.create('tbody');
        this.table.appendChild(this.tbody);
        document.body.appendChild(this.table);
    }

    create(tag, text = '') {
        const el = document.createElement(tag);
        if (text) el.textContent = text;
        return el;
    }

    save() {
        const value = this.input.value.trim();
        if (!value) return;

        if (this.indexToEdit === null) {
            this.data.push(value);
        } else {
            this.data[this.indexToEdit] = value;
            this.indexToEdit = null;
        }

        this.input.value = '';
        this.renderTable();
    }

    edit(index) {
        this.input.value = this.data[index];
        this.indexToEdit = index;
    }

    delete(index) {
        this.data.splice(index, 1);
        this.renderTable();
    }

    renderTable() {
        this.tbody.innerHTML = '';
        this.data.forEach((value, index) => {
            const tr = this.create('tr');
            tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${value}</td>
      `;

            const tdActions = this.create('td');

            const editBtn = this.create('button', 'Editar');
            editBtn.onclick = () => this.edit(index);

            const deleteBtn = this.create('button', 'Eliminar');
            deleteBtn.onclick = () => this.delete(index);

            tdActions.append(editBtn, deleteBtn);
            tr.appendChild(tdActions);
            this.tbody.appendChild(tr);
        });
    }
}

new CRUD();
