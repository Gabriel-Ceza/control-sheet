const radiobtns = document.getElementsByName('sn-or-lp');
const allTh = document.querySelectorAll('th');
const tBody = document.getElementById('tBody');
const createLineBtn = document.getElementById('create-line');

const arrayLp = ['Icms', 'Ipi', 'Pis', 'Cofins', 'Irpj', 'Csll', 'Dime'];

createLineBtn.addEventListener('click', () => {
    const btnValue = verifyRadioBtn();
    const row = document.createElement('tr');
    row.classList.add('row');
    tBody.appendChild(row);
    if (btnValue === 'sn') {
        const lastRow = tBody.lastElementChild;
        for (let index = 0; index < allTh.length; index += 1) {
            const thRow = allTh[index];
            const createTd = document.createElement('td');
            createTd.setAttribute('contenteditable', 'true');
            arrayLp.forEach(tax => {
                if (thRow.textContent === tax) {
                    createTd.setAttribute('contenteditable', 'false');
                    createTd.textContent = '*'    
                } 
                if (thRow.textContent === 'Apagar') {
                    createTd.setAttribute('contenteditable', 'false');
                    createTd.classList.add('delete');
                }
            });
            lastRow.appendChild(createTd);
        }
    } else {
        const lastRow = tBody.lastElementChild;
        for (const th of allTh) {
            const createTd = document.createElement('td');
            createTd.setAttribute('contenteditable', 'true');
            if (th.textContent === 'Simples') {
                createTd.textContent = '*';
                createTd.setAttribute('contenteditable', 'false');
            }
            if (th.textContent === 'Apagar') {
                createTd.setAttribute('contenteditable', 'false');
                createTd.classList.add('delete');
            }
            lastRow.appendChild(createTd);
        }
    }
})

const verifyRadioBtn = () => {
    for (const btn of radiobtns) {
        if (btn.checked === true && btn.value === 'sn') {
            const value = 'sn';
            return value;        
        } 
        const value = 'lp';
        return value;
        
    }    
}

const deleteRow = (event) => {   
    const target = event.target;
    if (target.classList.contains('delete')) {
        const result = confirmation(); 
        if (result) {
            const row = target.parentElement;
            row.remove();
        }           
    } 
}

const confirmation = () => {
    const result = window.confirm('Deseja realmente deletar?'); 
    return result;   
}

tBody.addEventListener('click', deleteRow);

/* para editar input quando preenchido -- AINDA TEM QUE FINALIZAR*/
const editableCells = document.querySelectorAll('td[contenteditable="true"]');
editableCells.forEach(cell => {
  cell.addEventListener('input', () => {
   
  });
});


