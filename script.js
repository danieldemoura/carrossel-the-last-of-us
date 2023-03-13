const images = {
    backgrounds: document.querySelectorAll(".background"),
    swallowedStar: 
    [
        "./assests/imagens/swallowed-star/image-01.jpg",
        "./assests/imagens/swallowed-star/image-02.jpg",
        "./assests/imagens/swallowed-star/image-03.jpg",
        "./assests/imagens/swallowed-star/image-04.jpg",
        "./assests/imagens/swallowed-star/image-05.jpg",
        "./assests/imagens/swallowed-star/image-06.jpg",
    ],

    theLastOfUs: 
    [
        "./assests/imagens/the-last-of-us/tlou-1.jpg",
        "./assests/imagens/the-last-of-us/tlou-2.jpg",
        "./assests/imagens/the-last-of-us/tlou-3.jpg",
        "./assests/imagens/the-last-of-us/tlou-4.jpg",
        "./assests/imagens/the-last-of-us/tlou-5.jpg",
        "./assests/imagens/the-last-of-us/tlou-6.jpg",
    ],
}

const video = {
    swallowedStar: "https://www.youtube.com/embed/yfPbAQHXMEc",
    donghuaNoSekai: "https://donghuanosekai.com/swallowed-star",
    theLastOfUs: "https://www.youtube.com/embed/uLtkt8BonwM",
    hboMax: "https://www.hbomax.com/br/pt/series/urn:hbo:series:GYyofRQHeuJ6fiQEAAAEy",
}

const text = {
    title: [
        "Swallowed Star", 
        "Luo Fang", 
        "O fim da humanidade?", 
        "Candice Paulinus",
        "Babata IA",
        "Yi Si Te",
    ],

    swallowedStar: [
        `
            Swallowed Star é um Donghua (Anime Chinês) que é adaptação da Web Novel chinesa de mesmo nome, onde conta a história em que um dia um vírus mistérioso começou a infectar os animais tranformando eles em mostros.             
        `,

        `      
            Luo Fang é o protagonista de Swallowed Star, ele é uma cara que se preocupa muito com a sua família, no começo da obra mostra ele tentado arranja um jeito de dar uma boa vida para sua familia, ele consegue realizar o seu desejo no dia que consegue se tonar um lutador.
        `,

        `
            Nos episódios mais recente da 2ª temporada surgiu um monstro vindo das profundezas do oceano, lutadores de todos os países se uniram para tentar matar essa criatura, mas parece que as coisa não vão acabar nada bem.
        `,

        `
            Candice Paulinus foi o advsersário de Luo Fang na 2ª temporada, ele tinha recebido a ordem para matar Luo Fang. Mas diferente do que se imaginava, no momento que teve a chance para fazer isso ele não fez, o acabou mostrando que ele era um cara que respeitava a honra do código dos lutadores.

        `,

        `
            A personagem apareceu na 2ª Temporada ela se apresentou para o Luo Fang como sendo Babata uma inteligência articiail vinda do planeta Yen Mo. 
        `,

        `
            O quarto Ancião do Palácio dos Deuses da Guerra, antes de Luo Feng entrar no Estágio do Viajante Estelar, ele era o Mestre Espiritual mais forte da Terra e o único mestre espiritual que entrou no Estágio Viajante Estelar. Ele é o guerreiro mais forte do continente da Europa.
        `,

    ],

    theLastOfUs: [
        `The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção.`
    ],

    altSwallowedStar: 
    [
        "Imagem do Luo Fang de armadura parecendo com o homem de ferro com uma pose de herói ajoelhado",
        "Imagem do Luo Fang o protagonista de Swallowed Star",
        "Imagem de um monstro gigantesco com a boca aberta com o chão pegando fogo, enquanto o protagonista que e comparação parece ter o tamanho de uma pedra está encarando o monstro",
        "Imagem de um home com cabelo loiro usando um oculos futurista",
        "Imagem do Luo Fang junto com a IA Babata encostada no seu ombro",
        "Imagem de Yi Si Te o quarto ancião do palácio dos Deuses da Guerra",
    ],

    altTheLastOfUs: 
    [
        "Ellie e Joel abraçados",
        "Personagens The Last of Us",
        "Joel olhando pela janela",
        "Ellie e Tess se olhando",
        "Ellie e Joel caminhando em uma cidade destruída",
        "Joel segurando uma lanterna ligada na mão direita",
    ],
}

const page = {
    headTitle: document.querySelector("title"),
    main: document.querySelector("main"),
    modal: document.querySelector(".modal"),
    buttonWatch: document.querySelector(".watch"),
    btnTrailer: document.querySelector(".trailer"),
    btnClose: document.querySelector(".button-close"),
    buttonsCarousel: document.querySelectorAll(".button"),
    descrition: document.querySelector(".information"),
    logo: document.querySelector(".logo"),
    paragraph: document.querySelector(".paragraph"),
    buttonToggle: document.querySelector(".toggle"),
    buttonLoop: document.querySelector(".infinity"),
    iframe: document.querySelector("iframe"),
    h1: document.createElement("h1"),
    indexOfArrayText: 0,
    activedToggle: false,
    intervalId: null,

    toggleDisplayModal(value) {
        this.modal.style.display = value
    },

    buttonSelected(index) {
        this.buttonsCarousel.forEach(button => {
            button.classList.remove("selected")
        })
        
        this.buttonsCarousel[index].classList.add("selected")
    },

    changeParagraph(text) {
        this.paragraph.textContent = text
    },

    defaultBackground() {
        images.backgrounds.forEach((image, index) => {
            image.src = images.theLastOfUs[index]           
        })
        this.paragraph.textContent = text.theLastOfUs[0]  
    },

    transitionBackground(value) {
        images.backgrounds.forEach(currentBackground => {
            currentBackground.style.transform = `translateX(${value})`
        })
    },

    iterateImagesObject(background, imagesUrl, alt) {
        images[background].forEach((currentBackground, index) => {
            currentBackground.src = images[imagesUrl][index]
            currentBackground.alt = text[alt][index]
        })
    }, 

    updateVideoURL(name, streaming) {
        this.iframe.src = video[name]
        this.buttonWatch.href = video[streaming]
    },

    changeInformationsOnThePage(classCss, title, proprety) {
        this.headTitle.textContent = title

        if(this.activedToggle) {
            this.main.classList.add(classCss)
        } else {
            this.main.classList.remove(classCss)
        }
    },

    toggleElements() {
        this.activedToggle = this.activedToggle == true ? false : true

        if(this.activedToggle) {

            this.iterateImagesObject("backgrounds", "swallowedStar", "altSwallowedStar")
            this.changeInformationsOnThePage("swallowed-star", "Swallowed Star", "swallowedStar")
            this.updateVideoURL("swallowedStar", "donghuaNoSekai")
            this.changeParagraph(text.swallowedStar[this.indexOfArrayText])
            this.h1.classList.add("title")
            this.descrition.replaceChild(this.h1, this.logo)
            this.h1.textContent = text.title[this.indexOfArrayText]

        } else {
           
            this.iterateImagesObject("backgrounds", "theLastOfUs", "altTheLastOfUs")
            this.changeInformationsOnThePage("swallowed-star", "The Last of Us", "theLastOfUs")
            this.changeParagraph(text.theLastOfUs[0])
            this.updateVideoURL("theLastOfUs", "hboMax")
            this.descrition.replaceChild(this.logo, this.h1)
        }

    },

    nextImage(index) {
        this.transitionBackground(`-${index}00%`)
        this.buttonSelected(index)
        this.indexOfArrayText = index
        const displayedSwallowedStar = this.activedToggle
        
        if(displayedSwallowedStar) {
            this.h1.textContent = text.title[index]
            this.changeParagraph(text.swallowedStar[index])
        }
    },

    automaticBackgroundTransition() {
        let index = 0
        let actived = this.buttonLoop.classList.toggle("red")
        
        if(actived) {
            
            this.intervalId = setInterval(() => {
                index = index === 5 ? 0 : index + 1
                this.nextImage(index)

            }, 2000)

        } else {
            clearInterval(this.intervalId)
        }

    },

    init() {
        page.btnTrailer.addEventListener("click", page.toggleDisplayModal.bind(page, "grid"))
        page.btnClose.addEventListener("click", page.toggleDisplayModal.bind(page, "none"))
        page.buttonsCarousel.forEach((button, index) => {
            button.addEventListener("click", () => page.nextImage(index))
        })
        page.buttonToggle.addEventListener("click", page.toggleElements.bind(page))
        page.buttonLoop.addEventListener("click", this.automaticBackgroundTransition.bind(page))
    }
}

page.init()