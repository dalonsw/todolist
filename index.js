//Pegar tarefa
let iptTarefa = document.getElementById('tarefa-input');
let addBtn = document.getElementById('addBtn');
let listaTarefas = document.getElementById('lista-tarefas')
let listas = document.getElementsByClassName('tarefas')

addBtn.addEventListener('click', () => {
    if (iptTarefa.value == "") {
        return iptTarefa.setAttribute("placeholder", "Não foi inserido nenhuma tarefa! Tente novamente.")
    }
    listaTarefas.innerHTML += `<div class="tarefas" id="tarefa${listas.length + 1}">
                    <div class="infoTarefa">
                        <h3>${iptTarefa.value}</h3>
                    </div>
                    <div class="chkdel">                    
                        <button class="delBtn" id="delBtn${listas.length + 1}">X</button>
                    </div>
                </div>
            `;
    iptTarefa.setAttribute("placeholder", "Insira uma tarefa aqui...")
    iptTarefa.value = ""

});

//Deletar tarefa

const delButtons = document.getElementsByClassName('delBtn')

document.addEventListener('click', (e) => {
    const delBtn = e.target

    if(delBtn.classList.contains("delBtn")) {
        delBtn.parentElement.parentElement.remove()
    }
})



