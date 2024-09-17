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
                    <h3>${iptTarefa.value}</h3>
                    <div class="chkdel">                    
                        <input type="checkbox" id="concluida">
                        <button class="delBtn" id="delBtn${listas.length + 1}">X</button>
                    </div>
                </div>
            `;
    iptTarefa.setAttribute("placeholder", "Insira uma tarefa aqui...")
    iptTarefa.value = ""
    console.log(delBtns)
});

//Deletar tarefa

let delBtns = document.getElementsByClassName("delBtn")




//Editar tarefa