
const dados = [
    {
        id: 1,
        nome: "Praça da Liberdade",
        descricao: "História, cultura e áreas verdes no centro de Belo Horizonte.",
        conteudo: "A Praça da Liberdade é um dos principais pontos turísticos de Belo Horizonte. O espaço reúne jardins, construções históricas e importantes equipamentos culturais.",
        categoria: "Cultura e lazer",
        endereco: "Praça da Liberdade, Funcionários, Belo Horizonte - MG",
        melhorEpoca: "Durante todo o ano",
        tempoVisita: "1 a 2 horas",
        destaque: true,
        imagem: "imagens/praca.jpg",
        fotos: [
            { imagem: "imagens/praca.jpg", titulo: "Praça da Liberdade" },
            { imagem: "imagens/praca-jardins.jpg", titulo: "Jardins da praça" },
            { imagem: "imagens/praca-fonte.jpg", titulo: "Fonte da praça" },
            { imagem: "imagens/praca-palacio.jpg", titulo: "Arquitetura histórica" }
        ],
        atracoes: ["Circuito Liberdade", "Jardins", "Edifícios históricos"]
    },
    {
        id: 2,
        nome: "Mercado Central",
        descricao: "Gastronomia, artesanato e tradição mineira.",
        conteudo: "O Mercado Central é um dos lugares mais conhecidos de Belo Horizonte. Nele é possível encontrar produtos típicos de Minas Gerais, queijos, doces, temperos, artesanato e diversas opções de gastronomia.",
        categoria: "Gastronomia",
        endereco: "Avenida Augusto de Lima, 744, Centro, Belo Horizonte - MG",
        melhorEpoca: "Durante todo o ano",
        tempoVisita: "1 a 2 horas",
        destaque: true,
        imagem: "imagens/mercado.jpg",
        fotos: [
             { imagem: "imagens/mercado.jpg", titulo: "Mercado Central" },
              { imagem: "imagens/mercado-interior.jpg", titulo: "Corredores do mercado" },
              { imagem: "imagens/mercado-queijos.jpg", titulo: "Produtos mineiros" },
              { imagem: "imagens/mercado-gastronomia.jpg", titulo: "Gastronomia mineira" }
        ],
        atracoes: ["Lojas de produtos mineiros", "Queijos e doces", "Artesanato"]
    },
    {
        id: 3,
        nome: "Pampulha",
        descricao: "Arquitetura, arte e natureza em um dos cartões-postais de BH.",
        conteudo: "A região da Pampulha é conhecida por seu conjunto arquitetônico e paisagístico. O local possui construções importantes, áreas verdes e uma lagoa que atrai moradores e visitantes.",
        categoria: "Arquitetura e natureza",
        endereco: "Região da Pampulha, Belo Horizonte - MG",
        melhorEpoca: "Durante todo o ano",
        tempoVisita: "2 a 4 horas",
        destaque: true,
        imagem: "imagens/pampulha.jpg",
        fotos: [
            { imagem: "imagens/pampulha.jpg", titulo: "Lagoa da Pampulha" },
            { imagem: "imagens/pampulha-igreja.jpg", titulo: "Igreja São Francisco de Assis" },
            { imagem: "imagens/pampulha-casa-baile.jpg", titulo: "Casa do Baile" },
            { imagem: "imagens/pampulha-museu.jpg", titulo: "Museu de Arte da Pampulha" }
        ],
        atracoes: ["Igreja São Francisco de Assis", "Casa do Baile", "Museu de Arte da Pampulha"]
    },
    {
        id: 4,
        nome: "Parque Municipal",
        descricao: "Um espaço para passear e aproveitar a natureza.",
        conteudo: "O Parque Municipal Américo Renné Giannetti é uma área verde localizada na região central de Belo Horizonte. O parque oferece jardins, árvores, caminhos para caminhadas e espaços para descanso.",
        categoria: "Natureza e lazer",
        endereco: "Avenida Afonso Pena, 1377, Centro, Belo Horizonte - MG",
        melhorEpoca: "Durante todo o ano",
        tempoVisita: "1 a 2 horas",
        destaque: false,
        imagem: "imagens/parque.jpg",
        fotos: [
            { imagem: "imagens/parque.jpg", titulo: "Parque Municipal" },
            { imagem: "imagens/parque-lago.jpg", titulo: "Lago do parque" },
            { imagem: "imagens/parque-jardins.jpg", titulo: "Jardins e árvores" },
            { imagem: "imagens/parque-caminhos.jpg", titulo: "Caminhos para caminhada" }
        ],
        atracoes: ["Jardins", "Lago", "Áreas para caminhada"]
    },
    {
        id: 5,
        nome: "Palácio das Artes",
        descricao: "Cultura, arte e atrações no centro de Belo Horizonte.",
        conteudo: "O Palácio das Artes é um importante espaço cultural de Belo Horizonte. O local recebe exposições, apresentações artísticas, espetáculos e atividades culturais.",
        categoria: "Cultura",
        endereco: "Avenida Afonso Pena, 1537, Centro, Belo Horizonte - MG",
        melhorEpoca: "Conforme a programação cultural",
        tempoVisita: "1 a 3 horas",
        destaque: true,
        imagem: "imagens/palacio.jpg",
        fotos: [
             { imagem: "imagens/palacio.jpg", titulo: "Palácio das Artes" },
             { imagem: "imagens/palacio-exposicao.jpg", titulo: "Exposição artística" },
             { imagem: "imagens/palacio-teatro.jpg", titulo: "Grande Teatro" },
             { imagem: "imagens/palacio-galeria.jpg", titulo: "Galeria de arte" }
],
        atracoes: ["Grande Teatro", "Galerias de arte", "Cine Humberto Mauro"]
    },
    {
        id: 6,
        nome: "Centro Cultural Banco do Brasil",
        descricao: "Exposições, arte e atividades culturais na Praça da Liberdade.",
        conteudo: "O Centro Cultural Banco do Brasil de Belo Horizonte ocupa um edifício histórico na Praça da Liberdade. O espaço recebe exposições, apresentações e diversas atividades culturais.",
        categoria: "Cultura",
        endereco: "Praça da Liberdade, 450, Funcionários, Belo Horizonte - MG",
        melhorEpoca: "Conforme a programação cultural",
        tempoVisita: "1 a 3 horas",
        destaque: true,
        imagem: "imagens/ccbb.jpg",
        fotos: [
            { imagem: "imagens/ccbb.jpg", titulo: "Fachada do CCBB" },
            { imagem: "imagens/ccbb-exposicao.jpg", titulo: "Exposição cultural" },
            { imagem: "imagens/ccbb-interior.jpg", titulo: "Interior do centro cultural" },
            { imagem: "imagens/ccbb-arquitetura.jpg", titulo: "Arquitetura do edifício" }
        ],
        atracoes: ["Exposições", "Teatro", "Cinema e atividades culturais"]
    },
    {
        id: 7,
        nome: "Parque das Mangabeiras",
        descricao: "Natureza, trilhas e belas paisagens em Belo Horizonte.",
        conteudo: "O Parque das Mangabeiras está localizado aos pés da Serra do Curral. É um espaço de preservação ambiental que oferece áreas verdes, trilhas e mirantes para contemplar a paisagem da cidade.",
        categoria: "Natureza e lazer",
        endereco: "Avenida José do Patrocínio Pontes, 580, Mangabeiras, Belo Horizonte - MG",
        melhorEpoca: "Durante todo o ano",
        tempoVisita: "2 a 4 horas",
        destaque: true,
        imagem: "imagens/mangabeiras.jpg",
        fotos: [
            { imagem: "imagens/mangabeiras.jpg", titulo: "Parque das Mangabeiras" },
            { imagem: "imagens/mangabeiras-mirante.jpg", titulo: "Mirante da Mata" },
            { imagem: "imagens/mangabeiras-trilha.jpg", titulo: "Trilhas do parque" },
            { imagem: "imagens/mangabeiras-natureza.jpg", titulo: "Natureza e paisagem" }

        ],
        atracoes: ["Mirantes", "Trilhas", "Praça das Águas"]
    },
    {
        id: 8,
        nome: "Parque Guanabara",
        descricao: "Diversão e brinquedos para aproveitar momentos de lazer.",
        conteudo: "O Parque Guanabara é um tradicional parque de diversões de Belo Horizonte, localizado na região da Pampulha. O espaço reúne brinquedos e atrações para diferentes idades.",
        categoria: "Lazer e diversão",
        endereco: "Avenida Expedicionário Benvindo Belém de Lima, 15, São Luiz, Belo Horizonte - MG",
        melhorEpoca: "Funcionamento de quinta-feira a domingo",
        tempoVisita: "2 a 4 horas",
        destaque: false,
        imagem: "imagens/guanabara.jpg",
        fotos: [
            { imagem: "imagens/guanabara.jpg", titulo: "Parque Guanabara" },
            { imagem: "imagens/guanabara-roda-gigante.jpg", titulo: "Roda-gigante" },
            { imagem: "imagens/guanabara-brinquedos.jpg", titulo: "Brinquedos do parque" },
            { imagem: "imagens/guanabara-noite.jpg", titulo: "Parque iluminado" }
        ],
        atracoes: ["Roda-gigante", "Brinquedos", "Jogos e diversões"]
    },
    {
        id: 9,
        nome: "Casa Fiat de Cultura",
        descricao: "Arte, história e exposições em um espaço cultural.",
        conteudo: "A Casa Fiat de Cultura é um espaço dedicado à arte e à cultura. Localizada na região da Praça da Liberdade, recebe exposições, atividades educativas e eventos culturais.",
        categoria: "Cultura",
        endereco: "Praça da Liberdade, 10, Funcionários, Belo Horizonte - MG",
        melhorEpoca: "Conforme a programação cultural",
        tempoVisita: "1 a 2 horas",
        destaque: false,
        imagem: "imagens/casa-fiat.jpg",
        fotos: [
           { imagem: "imagens/casa-fiat.jpg", titulo: "Casa Fiat de Cultura" },
           { imagem: "imagens/casa-fiat-exposicao.jpg", titulo: "Exposição artística" },
           { imagem: "imagens/casa-fiat-interior.jpg", titulo: "Espaço interno" },
           { imagem: "imagens/casa-fiat-arte.jpg", titulo: "Obras de arte" }
          
        ],
        atracoes: ["Galerias de exposição", "Atividades educativas", "Programação cultural"]
    },
    {
        id: 10,
        nome: "Museu de Ciências Naturais PUC Minas",
        descricao: "Ciência, fósseis e conhecimento sobre a natureza.",
        conteudo: "O Museu de Ciências Naturais da PUC Minas apresenta exposições relacionadas à biodiversidade, paleontologia e história natural. É um espaço de aprendizado e descoberta para visitantes de diferentes idades.",
        categoria: "Ciência e educação",
        endereco: "Avenida Dom José Gaspar, 290, Coração Eucarístico, Belo Horizonte - MG",
        melhorEpoca: "Funcionamento de terça-feira a sábado",
        tempoVisita: "1 a 2 horas",
        destaque: false,
        imagem: "imagens/museu-puc-minas.jpg",
        fotos: [
            { imagem: "imagens/museu-puc-minas.jpg", titulo: "Museu de Ciências Naturais" },
            { imagem: "imagens/museu-puc-minas-jardim.jpg", titulo: "Jardim das borboletas" },
            { imagem: "imagens/museu-puc-minas-dinossauros.jpg", titulo: "Coleção de paleontologia" },
            { imagem: "imagens/museu-puc-minas-animais.jpg", titulo: "Exposição de animais" }
        ],
        atracoes: ["Paleontologia", "Biodiversidade", "Exposições científicas"]
    }
];

function mostrarCards(lugares) {
    const lista = document.getElementById("lista-lugares");

    if (!lista) return;

    if (lugares.length === 0) {
        lista.innerHTML = "<p>Nenhum lugar encontrado.</p>";
        return;
    }

    let cards = "";

    for (let i = 0; i < lugares.length; i++) {
        cards += `
            <div class="col">
                <div class="card h-100">
                    <img src="${lugares[i].imagem}" class="card-img-top"
                         alt="${lugares[i].nome}">
                    <div class="card-body">
                        <h5 class="card-title">${lugares[i].nome}</h5>
                        <p class="card-text">${lugares[i].descricao}</p>
                        <a href="detalhes.html?id=${lugares[i].id}"
                           class="btn btn-verde">Ver detalhes</a>
                    </div>
                </div>
            </div>
        `;
    }

    lista.innerHTML = cards;
}

function mostrarDestaques() {
    const carrossel = document.getElementById("itens-destaque");

    if (!carrossel) return;

    const destaques = dados.filter(function(item) {
        return item.destaque;
    });

    let conteudo = "";

    for (let i = 0; i < destaques.length; i++) {
        conteudo += `
            <div class="carousel-item ${i === 0 ? "active" : ""}">
                <img src="${destaques[i].imagem}"
                     class="d-block w-100 imagem-carrossel"
                     alt="${destaques[i].nome}">
                <div class="carousel-caption">
                    <h3>${destaques[i].nome}</h3>
                    <p>${destaques[i].descricao}</p>
                    <a href="detalhes.html?id=${destaques[i].id}"
                       class="btn btn-light">Conheça o lugar</a>
                </div>
            </div>
        `;
    }

    carrossel.innerHTML = conteudo;
}

function pesquisarLugares(event) {
    event.preventDefault();

    const nome = document.getElementById("lugar").value.toLowerCase();
    const categoria = document.getElementById("tipo").value;

    const resultado = dados.filter(function(item) {
        return item.nome.toLowerCase().includes(nome) &&
            (categoria === "" || item.categoria === categoria);
    });

    mostrarCards(resultado);
}

function mostrarDetalhes() {
    const area = document.getElementById("detalhe-lugar");

    if (!area) return;

    const parametros = new URLSearchParams(window.location.search);
    const id = Number(parametros.get("id"));

    const lugar = dados.find(function(item) {
        return item.id === id;
    });

    if (!lugar) {
        area.innerHTML = "<p>Local não encontrado.</p>";
        return;
    }

    let fotos = "";

    for (let i = 0; i < lugar.fotos.length; i++) {
        fotos += `
            <div class="col">
                <div class="card h-100">
                    <img src="${lugar.fotos[i].imagem}"
                         class="card-img-top imagem-galeria"
                         alt="${lugar.fotos[i].titulo}">
                    <div class="card-body">
                        <p class="card-text">${lugar.fotos[i].titulo}</p>
                    </div>
                </div>
            </div>
        `;
    }

    let atracoes = "";

    for (let i = 0; i < lugar.atracoes.length; i++) {
        atracoes += `<li>${lugar.atracoes[i]}</li>`;
    }

    area.innerHTML = `
        <section class="detalhe-card">
            <img src="${lugar.imagem}" class="imagem-principal-detalhe"
                 alt="${lugar.nome}">

            <h1>${lugar.nome}</h1>

            <p>${lugar.conteudo}</p>

            <div class="informacoes-lugar">
                <p><strong>Categoria:</strong> ${lugar.categoria}</p>
                <p><strong>Endereço:</strong> ${lugar.endereco}</p>
                <p><strong>Melhor época:</strong> ${lugar.melhorEpoca}</p>
                <p><strong>Tempo recomendado:</strong> ${lugar.tempoVisita}</p>
                <p><strong>Descrição:</strong> ${lugar.descricao}</p>
            </div>

            <h2>Atrações e experiências</h2>
            <ul>${atracoes}</ul>
        </section>

        <section class="galeria">
            <h2>Galeria de fotos</h2>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                ${fotos}
            </div>
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarCards(dados);
    mostrarDestaques();
    mostrarDetalhes();

    const formulario = document.getElementById("form-pesquisa");

    if (formulario) {
        formulario.addEventListener("submit", pesquisarLugares);
    }
});
