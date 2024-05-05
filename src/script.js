function removerCaracteresEspeciais(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s]/gi, '').toLowerCase();
}

function gerarSugestao() {
    const textoDigitado = removerCaracteresEspeciais(document.getElementById('texto-digitado').value);

    const palavrasChave = {
                    "cards": [
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Carrossel de textos", link: "link-carrossel-textos" },
            { nome: "Módulo de Carrossel com imagens", link: "link-carrossel-imagens" },
            { nome: "Módulo de Carrossel com imagens redondas", link: "link-carrossel-redondas" },
            { nome: "Módulo de Carrossel com vídeos", link: "link-carrossel-videos" },
            { nome: "Módulo de Carrossel de parceiros", link: "link-carrossel-parceiros" },
            { nome: "Módulo de Comparativo de cards", link: "link-comparativo-cards" },
            { nome: "Módulo de Cards com lista", link: "link-cards-lista" },
            { nome: "Módulo de Cards com ícones", link: "link-cards-icones" },
            { nome: "Módulo de Cards com texto lateral", link: "link-cards-texto-lateral" },
            { nome: "Módulo de Dupla de cards", link: "link-dupla-cards" },
            { nome: "Módulo de Contratos e Tarifas", link: "link-contratos-tarifas" }
                    ],
                    "icone": [
            { nome: "Módulo de Ícones", link: "link-icones" },
            { nome: "Módulo de Cards com ícones", link: "link-cards-icones" },
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Cards com lista", link: "link-cards-lista" },
            { nome: "Módulo de Cards com texto lateral", link: "link-cards-texto-lateral" },
            { nome: "Módulo de Contratos e Tarifas", link: "link-contratos-tarifas" }
                    ],
                    "icone_imagem": [
            { nome: "Módulo de Ícones", link: "link-icones" },
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Cards com lista", link: "link-cards-lista" }
                    ],
                    "cards_icones": [
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Cards com lista", link: "link-cards-lista" },
            { nome: "Módulo de Cards com ícones", link: "link-cards-icones" },
            { nome: "Módulo de Cards com texto lateral", link: "link-cards-texto-lateral" },
            { nome: "Módulo de Contratos e Tarifas", link: "link-contratos-tarifas" }
                    ],
                    "texto": [
            { nome: "Módulo de Texto", link: "link-texto" },
            { nome: "Módulo de Texto com imagem de fundo", link: "link-texto-imagem-fundo" },
            { nome: "Módulo de Texto com imagem", link: "link-texto-imagem" },
            { nome: "Módulo de Texto com vídeo", link: "link-texto-video" },
            { nome: "Módulo de Texto com QR Code", link: "link-texto-qr" },
            { nome: "Módulo de Texto com link", link: "link-texto-link" },
            { nome: "Módulo de Carrossel de textos", link: "link-carrossel-textos" }
                    ],
                    "texto_link": [
            { nome: "Módulo de Texto com link", link: "link-texto-link" }
                    ],
                    "texto_video": [
            { nome: "Módulo de Texto com vídeo", link: "link-texto-video" }
                    ],
                    "carrossel": [
            { nome: "Módulo de Carrossel de textos", link: "link-carrossel-textos" },
            { nome: "Módulo de Carrossel com imagens", link: "link-carrossel-imagens" },
            { nome: "Módulo de Carrossel com imagens redondas", link: "link-carrossel-redondas" },
            { nome: "Módulo de Carrossel com vídeos", link: "link-carrossel-videos" },
            { nome: "Módulo de Carrossel de parceiros", link: "link-carrossel-parceiros" }
                    ],
                    "carrossel_video": [
            { nome: "Módulo de Carrossel com vídeos", link: "link-carrossel-videos" }
                    ],
                    "carrossel_imagem": [
            { nome: "Módulo de Carrossel com imagens", link: "link-carrossel-imagens" },
            { nome: "Módulo de Carrossel com imagens redondas", link: "link-carrossel-redondas" },
            { nome: "Módulo de Carrossel de parceiros", link: "link-carrossel-parceiros" }
                    ],
                    "parceiros": [
            { nome: "Módulo de Carrossel de parceiros", link: "link-carrossel-parceiros" }
                    ],
                    "imagem_redonda": [
            { nome: "Módulo de Carrossel com imagens redondas", link: "link-carrossel-redondas" }
                    ],        
                    "imagem": [   
            { nome: "Módulo de Banner principal", link: "link-banner-principal" },
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Texto com imagem de fundo", link: "link-texto-imagem-fundo" },
            { nome: "Módulo de Texto com imagem", link: "link-texto-imagem" },
            { nome: "Módulo de Passo-a-passo com imagem", link: "link-passo-imagem" },
            { nome: "Módulo de Carrossel com imagens", link: "link-carrossel-imagens" },
            { nome: "Módulo de Carrossel com imagens redondas", link: "link-carrossel-redondas" },
            { nome: "Módulo de Carrossel de parceiros", link: "link-carrossel-parceiros" },
            { nome: "Módulo de Comparativo de cards", link: "link-comparativo-cards" },
            { nome: "Módulo de Cards com lista", link: "link-cards-lista" },
            { nome: "Módulo de Ícones", link: "link-icones" }
                    ],
            
                    "videos": [ 
            { nome: "Módulo de Texto com vídeo", link: "link-texto-video" },
            { nome: "Módulo de Passo-a-passo com vídeo", link: "link-passo-video" },
            { nome: "Módulo de Carrossel com vídeos", link: "link-carrossel-videos" }
                    ],
            
                    "passo_passo": [ 
            { nome: "Módulo de Passo-a-passo com imagem", link: "link-passo-imagem" },
            { nome: "Módulo de Passo-a-passo com vídeo", link: "link-passo-video" }
                    ],
            
                    "passo_imagem": [ 
            { nome: "Módulo de Passo-a-passo com imagem", link: "link-passo-imagem" }
                    ],
            
                    "passo_video": [ 
            { nome: "Módulo de Passo-a-passo com vídeo", link: "link-passo-video" }
                    ],
            
                    "faq": [ 
            { nome: "Módulo de Acordeão", link: "link-acordeao" }
                    ],
            
                    "formulario": [ 
            { nome: "Módulo de Formulário", link: "link-faas" }
                    ],
            
                    "valores": [ 
            { nome: "Módulo de Comparativo detalhado", link: "link-comparativo-detalhado" },
            { nome: "Módulo de Card box comparativo", link: "link-card-box-comparativo" }
                    ],
            
                    "qr_code": [ 
            { nome: "Módulo de Texto com QR Code", link: "link-texto-qr" },
            { nome: "Módulo de QR Code nativo", link: "link-qr-nativo" }
                    ],
            
                    "banner": [ 
            { nome: "Módulo de Banner principal", link: "link-banner-principal" },
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Texto com imagem de fundo", link: "link-texto-imagem-fundo" }
                    ],
            
                    "banner_card": [ 
            { nome: "Módulo de Banner principal", link: "link-banner-principal" },
            { nome: "Módulo de Banner com cards", link: "link-banner-cards" },
            { nome: "Módulo de Texto com imagem de fundo", link: "link-texto-imagem-fundo" }
                    ],
            
                    "contratos": [ 
            { nome: "Módulo de Contratos e Tarifas", link: "link-contratos-tarifas" }
                    ],
            
                    "breadcrumb": [ 
            { nome: "Módulo de Breadcrumb", link: "link-breadcrumb" }
                    ],

                    "botao": [ 
            { nome: "Módulo de Botão de Ajuda", link: "link-botao-ajuda" },
            { nome: "Módulo de Botão do WhatsApp", link: "link-botao-whatsapp" }
                    ],

                    "ajuda": [ 
            { nome: "Módulo de Botão de Ajuda", link: "link-botao-ajuda" }
                    ],

                    "whatsapp": [ 
            { nome: "Módulo de Botão do WhatsApp", link: "link-botao-whatsapp" }
                    ],
    }

    // Inicializa a lista de sugestões como vazia
    let sugestoes = [];

    // Verifica as palavras-chave digitadas e adiciona as listas correspondentes à lista de sugestões
    for (const [palavraChave, lista] of Object.entries(palavrasChave)) {
        if (textoDigitado.includes(palavraChave)) {
            sugestoes = sugestoes.concat(lista);
        }
    }

    if (textoDigitado.includes("cards")) {
        sugestoes = palavrasChave["cards"];
    }

    if (textoDigitado.includes("card")) {
        sugestoes = palavrasChave["cards"];
    }
    if (textoDigitado.includes("icone")) {
        sugestoes = palavrasChave["icone"];
    }

    if (textoDigitado.includes("icones")) {
        sugestoes = palavrasChave["icone"];
    }
    if (textoDigitado.includes("icone") && textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["icone_imagem"];
    }

    if (textoDigitado.includes("icones") && textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["icone_imagem"];
    }
    if (textoDigitado.includes("icone") && textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["icone_imagem"];
    }

    if (textoDigitado.includes("icones") && textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["icone_imagem"];
    }
    if (textoDigitado.includes("icone") && textoDigitado.includes("cards")) {
        sugestoes = palavrasChave["cards_icones"];
    }

    if (textoDigitado.includes("icones") && textoDigitado.includes("cards")) {
        sugestoes = palavrasChave["cards_icones"];
    }
    if (textoDigitado.includes("icone") && textoDigitado.includes("card")) {
        sugestoes = palavrasChave["cards_icones"];
    }

    if (textoDigitado.includes("icones") && textoDigitado.includes("card")) {
        sugestoes = palavrasChave["cards_icones"];
    }
    if (textoDigitado.includes("texto")) {
        sugestoes = palavrasChave["texto"];
    }
    if (textoDigitado.includes("textos")) {
        sugestoes = palavrasChave["texto"];
    }
    if (textoDigitado.includes("texto") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["texto_video"];
    }
    if (textoDigitado.includes("textos") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["texto_video"];
    }
    if (textoDigitado.includes("textos") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["texto_video"];
    }
    if (textoDigitado.includes("texto") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["texto_video"];
    }
    if (textoDigitado.includes("texto") && textoDigitado.includes("link")) {
        sugestoes = palavrasChave["texto_link"];
    }
    if (textoDigitado.includes("textos") && textoDigitado.includes("links")) {
        sugestoes = palavrasChave["texto_link"];
    }
    if (textoDigitado.includes("textos") && textoDigitado.includes("link")) {
        sugestoes = palavrasChave["texto_link"];
    }
    if (textoDigitado.includes("texto") && textoDigitado.includes("links")) {
        sugestoes = palavrasChave["texto_link"];
    }
    if (textoDigitado.includes("carrossel")) {
        sugestoes = palavrasChave["carrossel"];
    }
    if (textoDigitado.includes("carrosseis")) {
        sugestoes = palavrasChave["carrossel"];
    }
    if (textoDigitado.includes("carrossel") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["carrossel_video"];
    }
    if (textoDigitado.includes("carrosseis") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["carrossel_video"];
    }
    if (textoDigitado.includes("carrossel") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["carrossel_video"];
    }
    if (textoDigitado.includes("carrosseis") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["carrossel_video"];
    }
    if (textoDigitado.includes("carrossel") && textoDigitado.includes("parceiro")) {
        sugestoes = palavrasChave["parceiros"];
    }
    if (textoDigitado.includes("carrosseis") && textoDigitado.includes("parceiro")) {
        sugestoes = palavrasChave["parceiros"];
    }
    if (textoDigitado.includes("carrossel") && textoDigitado.includes("parceiros")) {
        sugestoes = palavrasChave["parceiros"];
    }
    if (textoDigitado.includes("carrosseis") && textoDigitado.includes("parceiros")) {
        sugestoes = palavrasChave["parceiros"];
    }
    if (textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["imagem"];
    }
    if (textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["imagem"];
    }
    if (textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["videos"];
    }
    if (textoDigitado.includes("video")) {
        sugestoes = palavrasChave["videos"];
    }
    if (textoDigitado.includes("banner")) {
        sugestoes = palavrasChave["banner"];
    }
    if (textoDigitado.includes("banners")) {
        sugestoes = palavrasChave["banner"];
    }

    if (textoDigitado.includes("banner") && textoDigitado.includes("card")) {
        sugestoes = palavrasChave["banner_card"];
    }
    if (textoDigitado.includes("banners") && textoDigitado.includes("card")) {
        sugestoes = palavrasChave["banner_card"];
    }
    if (textoDigitado.includes("banner") && textoDigitado.includes("cards")) {
        sugestoes = palavrasChave["banner_card"];
    }
    if (textoDigitado.includes("banners") && textoDigitado.includes("cards")) {
        sugestoes = palavrasChave["banner_card"];
    }

    if (textoDigitado.includes("contratos")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("contrato")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("tarifas")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("tarifa")) {
        sugestoes = palavrasChave["contratos"];
    }

    if (textoDigitado.includes("contrato") && textoDigitado.includes("tarifa")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("contratos") && textoDigitado.includes("tarifa")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("contrato") && textoDigitado.includes("tarifas")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("contratos") && textoDigitado.includes("tarifas")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("card") && textoDigitado.includes("contratos")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("card") && textoDigitado.includes("contrato")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("card") && textoDigitado.includes("tarifas")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("card") && textoDigitado.includes("tarifa")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("cards") && textoDigitado.includes("contratos")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("cards") && textoDigitado.includes("contrato")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("cards") && textoDigitado.includes("tarifas")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("cards") && textoDigitado.includes("tarifa")) {
        sugestoes = palavrasChave["contratos"];
    }
    if (textoDigitado.includes("passo a passo")) {
        sugestoes = palavrasChave["passo_passo"];
    }
    if (textoDigitado.includes("passos a passos")) {
        sugestoes = palavrasChave["passo_passo"];
    }
    if (textoDigitado.includes("passo-a-passo")) {
        sugestoes = palavrasChave["passo_passo"];
    }
    if (textoDigitado.includes("passos-a-passos")) {
        sugestoes = palavrasChave["passo_passo"];
    }
    if (textoDigitado.includes("passo a passo") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passos a passos") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passo-a-passo") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passos-a-passos") && textoDigitado.includes("video")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passo a passo") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passos a passos") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passo-a-passo") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["passo_video"];
    }
    if (textoDigitado.includes("passos-a-passos") && textoDigitado.includes("videos")) {
        sugestoes = palavrasChave["passo_video"];
    }

    if (textoDigitado.includes("passo a passo") && textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passos a passos") && textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passo-a-passo") && textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passos-a-passos") && textoDigitado.includes("imagem")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passo a passo") && textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passos a passos") && textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passo-a-passo") && textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("passos-a-passos") && textoDigitado.includes("imagens")) {
        sugestoes = palavrasChave["passo_imagem"];
    }
    if (textoDigitado.includes("perguntas") && textoDigitado.includes("respostas")) {
        sugestoes = palavrasChave["faq"];
    }
    if (textoDigitado.includes("pergunta") && textoDigitado.includes("resposta")) {
        sugestoes = palavrasChave["faq"];
    }
    if (textoDigitado.includes("perguntas") && textoDigitado.includes("resposta")) {
        sugestoes = palavrasChave["faq"];
    }
    if (textoDigitado.includes("pergunta") && textoDigitado.includes("respostas")) {
        sugestoes = palavrasChave["faq"];
    }
    if (textoDigitado.includes("faq")) {
        sugestoes = palavrasChave["faq"];
    }
    if (textoDigitado.includes("faqs")) {
        sugestoes = palavrasChave["faq"];
    }
    if (textoDigitado.includes("formulario")) {
        sugestoes = palavrasChave["formulario"];
    }
    if (textoDigitado.includes("formularios")) {
        sugestoes = palavrasChave["formulario"];
    }
    if (textoDigitado.includes("valores")) {
        sugestoes = palavrasChave["valores"];
    }
    if (textoDigitado.includes("valor")) {
        sugestoes = palavrasChave["valores"];
    }
    if (textoDigitado.includes("qr code")) {
        sugestoes = palavrasChave["qr_code"];
    }
    if (textoDigitado.includes("qr codes")) {
        sugestoes = palavrasChave["qr_code"];
    }
    if (textoDigitado.includes("qr-code")) {
        sugestoes = palavrasChave["qr_code"];
    }
    if (textoDigitado.includes("qr-codes")) {
        sugestoes = palavrasChave["qr_code"];
    }
    if (textoDigitado.includes("breadcrumb")) {
        sugestoes = palavrasChave["breadcrumb"];
    }
    if (textoDigitado.includes("breadcrumbs")) {
        sugestoes = palavrasChave["breadcrumb"];
    }
    if (textoDigitado.includes("retorno")) {
        sugestoes = palavrasChave["breadcrumb"];
    }
    if (textoDigitado.includes("voltar")) {
        sugestoes = palavrasChave["breadcrumb"];
    }
    if (textoDigitado.includes("botao")) {
        sugestoes = palavrasChave["botao"];
    }
    if (textoDigitado.includes("botoes")) {
        sugestoes = palavrasChave["botao"];
    }
    if (textoDigitado.includes("ajuda")) {
        sugestoes = palavrasChave["ajuda"];
    }
    if (textoDigitado.includes("whatsapp")) {
        sugestoes = palavrasChave["whatsapp"];
    }
    if (textoDigitado.includes("whats")) {
        sugestoes = palavrasChave["whatsapp"];
    }
    if (textoDigitado.includes("ajuda") && textoDigitado.includes("botao")) {
        sugestoes = palavrasChave["ajuda"];
    }
    if (textoDigitado.includes("ajuda") && textoDigitado.includes("botoes")) {
        sugestoes = palavrasChave["ajuda"];
    }
    if (textoDigitado.includes("whatsapp") && textoDigitado.includes("botao")) {
        sugestoes = palavrasChave["whatsapp"];
    }
    if (textoDigitado.includes("whats") && textoDigitado.includes("botoes")) {
        sugestoes = palavrasChave["whatsapp"];
    }
    if (textoDigitado.includes("whatsapp") && textoDigitado.includes("botoes")) {
        sugestoes = palavrasChave["whatsapp"];
    }
    if (textoDigitado.includes("whats") && textoDigitado.includes("botao")) {
        sugestoes = palavrasChave["whatsapp"];
    }
    // Remove duplicatas da lista de sugestões
    sugestoes = sugestoes.filter((item, index) => sugestoes.indexOf(item) === index);

    // Exibe as sugestões
    exibirListaSugestoes(sugestoes);
}

function exibirListaSugestoes(sugestoes) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (sugestoes.length > 0) {
        const lista = document.createElement('ul');
        lista.classList.add('resultado-lista');

        sugestoes.forEach(function(sugestao) {
            const itemLista = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = sugestao.nome;
            link.href = sugestao.link;
            itemLista.appendChild(link);
            lista.appendChild(itemLista);
        });

        resultadoDiv.appendChild(lista);
        resultadoDiv.classList.remove('resultado-nao-encontrado');
    } else {
        exibirMensagemPadrao();
    }
}

function exibirMensagemPadrao() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = 'Não foi possível encontrar nenhuma sugestão de módulos. Reescreva utilizando outras palavras.';
    resultadoDiv.classList.add('resultado-nao-encontrado');
}
