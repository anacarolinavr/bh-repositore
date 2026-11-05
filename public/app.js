
const dados = [
    {
        id: 1,
        nome: "Praça da Liberdade",
        descricao: "História, cultura e áreas verdes no centro de Belo Horizonte.",
        conteudo: "A Praça da Liberdade é um dos principais pontos turísticos de Belo Horizonte. O espaço reúne jardins, construções históricas e importantes equipamentos culturais. É um ótimo lugar para passear, conhecer a história da cidade e aproveitar a paisagem.",
        categoria: "Cultura e lazer",
        endereco: "Praça da Liberdade, Funcionários, Belo Horizonte - MG",
        imagem: "imagens/praca.jpg"
    },
    {
        id: 2,
        nome: "Mercado Central",
        descricao: "Gastronomia, artesanato e tradição mineira.",
        conteudo: "O Mercado Central é um dos lugares mais conhecidos de Belo Horizonte. Nele é possível encontrar produtos típicos de Minas Gerais, queijos, doces, temperos, artesanato e diversas opções de gastronomia. É um espaço que representa muito da cultura mineira.",
        categoria: "Gastronomia",
        endereco: "Avenida Augusto de Lima, 744, Centro, Belo Horizonte - MG",
        imagem: "imagens/mercado.jpg"
    },
    {
        id: 3,
        nome: "Pampulha",
        descricao: "Arquitetura, arte e natureza em um dos cartões-postais de BH.",
        conteudo: "A região da Pampulha é conhecida por seu conjunto arquitetônico e paisagístico. O local possui construções importantes, áreas verdes e uma lagoa que atrai moradores e visitantes. É uma das regiões mais conhecidas de Belo Horizonte.",
        categoria: "Arquitetura e natureza",
        endereco: "Região da Pampulha, Belo Horizonte - MG",
        imagem: "imagens/pampulha.jpg"
    },
    {
        id: 4,
        nome: "Parque Municipal",
        descricao: "Um espaço para passear e aproveitar a natureza.",
        conteudo: "O Parque Municipal Américo Renné Giannetti é uma área verde localizada na região central de Belo Horizonte. O parque oferece jardins, árvores, caminhos para caminhadas e espaços para descanso, sendo uma opção de lazer em meio à cidade.",
        categoria: "Natureza e lazer",
        endereco: "Avenida Afonso Pena, 1377, Centro, Belo Horizonte - MG",
        imagem: "imagens/parque.jpg"
    },
    {
        id: 5,
        nome: "Palácio das Artes",
        descricao: "Cultura, arte e atrações no centro de Belo Horizonte.",
        conteudo: "O Palácio das Artes é um importante espaço cultural de Belo Horizonte. O local recebe exposições, apresentações artísticas, espetáculos e atividades culturais. É uma referência para quem deseja conhecer e aproveitar a produção artística da cidade.",
        categoria: "Cultura",
        endereco: "Avenida Afonso Pena, 1537, Centro, Belo Horizonte - MG",
        imagem: "imagens/palacio.jpg"
    }
];

const listaLugares = document.getElementById("lista-lugares");

function mostrarCards(lugares) {

    let cards = "";

    for (let i = 0; i < lugares.length; i++) {

        cards += `
            <article class="card">

                <img src="${lugares[i].imagem}" alt="${lugares[i].nome}">

                <h3>${lugares[i].nome}</h3>

                <p>${lugares[i].descricao}</p>

                <a href="detalhes.html?id=${lugares[i].id}">
                    Ver detalhes
                </a>

            </article>
        `;
    }

    if (lugares.length === 0) {
        cards = "<p>Nenhum lugar encontrado.</p>";
    }

    listaLugares.innerHTML = cards;
}

if (listaLugares) {

    mostrarCards(dados);

    const formulario = document.getElementById("form-pesquisa");

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("lugar").value.toLowerCase();
        const categoria = document.getElementById("tipo").value;

        const resultado = dados.filter(function(item) {

            return item.nome.toLowerCase().includes(nome) &&
                (categoria === "" || item.categoria === categoria);

        });

        mostrarCards(resultado);

    });
}

const detalheLugar = document.getElementById("detalhe-lugar");

if (detalheLugar) {

    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const lugar = dados.find(function(item) {
        return item.id === id;
    });

    if (lugar) {

        detalheLugar.innerHTML = `
            <article class="detalhe-card">

                <img src="${lugar.imagem}" alt="${lugar.nome}">

                <h2>${lugar.nome}</h2>

                <p><strong>Categoria:</strong> ${lugar.categoria}</p>

                <p><strong>Endereço:</strong> ${lugar.endereco}</p>

                <p>${lugar.conteudo}</p>

            </article>
        `;

    } else {

        detalheLugar.innerHTML = `
            <p>Local não encontrado.</p>
        `;

    }
}
