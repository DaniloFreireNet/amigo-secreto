let amigos = []; // Array para armazenar os nomes dos amigos

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const inputNome = document.getElementById("amigo"); // Captura o campo de entrada
    const nome = inputNome.value.trim(); // Obtém o valor do campo e remove espaços extras

    // Valida a entrada: verifica se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return; // Impede a execução se o nome estiver vazio
    }

    // Adiciona o nome ao array 'amigos'
    amigos.push(nome);

    // Limpa o campo de entrada após adicionar
    inputNome.value = "";

    // Atualiza a lista de amigos na interface
    atualizarLista();
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); // Seleciona a lista onde os amigos serão exibidos
    
    // Limpa a lista existente para evitar duplicação de itens
    listaAmigos.innerHTML = "";
    
    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Cria um novo item de lista
        li.textContent = amigos[i]; // Define o conteúdo do item com o nome do amigo
        
        // Adiciona o item <li> à lista HTML
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return; // Se não houver amigos, impede o sorteio
    }

    // Gera um índice aleatório entre 0 e o tamanho do array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado utilizando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento de resultado com o nome sorteado
    const resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
