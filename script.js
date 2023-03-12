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
    theLastOfUs: "https://www.youtube.com/embed/uLtkt8BonwM",
    link: "https://www.hbomax.com/br/pt/series/urn:hbo:series:GYyofRQHeuJ6fiQEAAAEy",
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

    textSwallowedStar: [
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

    textTheLastOfUs: [
        `The Last of Us é uma série distópica da HBO baseada na franquia de jogos de videogame de mesmo nome criada por Neil Druckmann. O drama narra um futuro pandêmico que foi devastador para humanidade, deixando os seres humanos à beira da extinção.`
    ],

    altSwallowedStar: 
    [
        "Imagem de 3 personagens homens e uma mulher de Swallowed Star",
        "Imagem do Luo Fang o protagonista de Swallowed Star",
        "Imagem de um monstro gigantesco com a boca aberta com o chão pegando fogo, enquanto o protagonista que e comparação parece ter o tamanho de uma pedra está encarando o monstro",
        "Imagem de um home com cabelo loiro usando um oculos futurista",
        "Imagem do Luo Fang junto com a IA Babata encostada no seu ombro",
        "Imagem de Yi Si Te o quarto ancião do palácio dos Deuses da Guerra",
    ],
}

const page = {
    headTitle: document.querySelector("title"),
    main: document.querySelector("main"),
    modal: document.querySelector(".modal"),
    watch: document.querySelector(".watch"),
    btnTrailer: document.querySelector(".trailer"),
    btnClose: document.querySelector(".button-close"),
    btnCarousel: document.querySelectorAll(".button"),
    descrition: document.querySelector(".information"),
    logo: document.querySelector(".logo"),
    paragraph: document.querySelector(".paragraph"),
    buttonToggle: document.querySelector(".toggle"),
    iframe: document.querySelector("iframe"),
    activedToggle: false,
    h1: "",

    toggleDisplayModal(value) {
        this.modal.style.display = value
    },

    buttonSelected(index) {
        this.btnCarousel.forEach(button => {
            button.classList.remove("selected")
        })
        
        this.btnCarousel[index].classList.add("selected")
    },
    
    textOfDescription(title, text) {
        this.h1.textContent= title
        this.paragraph.textContent = text
    },

    changeDescriptionByIndex(index, string) {
        this.textOfDescription(text.title[index], text[string][index])
    },

    createTagH1(text) {
        const h1 = document.createElement("h1")
        h1.textContent = text
        h1.classList.add("title")

        this.descrition.replaceChild(h1, this.logo)
        this.h1 = h1
    },

    defaultBackground() {
        let index = 0
        images.backgrounds.forEach(image => {
            image.src = images.theLastOfUs[index++]           
        })
        this.paragraph.textContent = text.textTheLastOfUs[0]
        
    },

    transitionBackground(value) {
        images.backgrounds.forEach(currentBackground => {
            currentBackground.style.transform = `translateX(${value})`
        })
    },

    toggleElements() {
        let index = 0
        this.activedToggle = this.activedToggle == true ? false : true

        if(this.activedToggle) {
            this.headTitle.textContent = "Swallowerd Star"

            images.backgrounds.forEach(currentBackground => {
                currentBackground.src = images.swallowedStar[index]
                currentBackground.alt = text.altSwallowedStar[index]
                index++
            })
            
            this.main.classList.add("swallowed-star")
            this.createTagH1("Swallowed Star")
            this.changeDescriptionByIndex("0", "textSwallowedStar")

            this.iframe.src = video.swallowedStar
            this.watch.href = "https://donghuanosekai.com/swallowed-star"

        } else {
            this.headTitle.textContent = "The Last of Us"
           
            images.backgrounds.forEach(currentBackground => {
                currentBackground.src = images.theLastOfUs[index++]
            })

            this.main.classList.remove("swallowed-star")
            this.descrition.replaceChild(this.logo, this.h1)
            this.changeDescriptionByIndex("0", "textTheLastOfUs")

            this.iframe.src = video.theLastOfUs
            this.watch.href = "https://www.hbomax.com/br/pt/series/urn:hbo:series:GYyofRQHeuJ6fiQEAAAEy"

        }

    },

    changeElements(button) {
        if (button.contains(this.btnCarousel[0])) {
            this.transitionBackground("0%")
            this.buttonSelected("0")

            if(this.activedToggle) {
                this.changeDescriptionByIndex("0", "textSwallowedStar")
            }

        } else if (button.contains(this.btnCarousel[1])) {
            this.transitionBackground("-100%")
            this.buttonSelected("1")
            
            if(this.activedToggle) {
                this.changeDescriptionByIndex("1", "textSwallowedStar")
            }

        } else if (button.contains(this.btnCarousel[2])) {
            this.transitionBackground("-200%")
            this.buttonSelected("2")

            if(this.activedToggle) {
                this.changeDescriptionByIndex("2", "textSwallowedStar")
            }

        } else if (button.contains(this.btnCarousel[3])) {
            this.transitionBackground("-300%")
            this.buttonSelected("3")

            if(this.activedToggle) {
                this.changeDescriptionByIndex("3", "textSwallowedStar")
            }

        } else if (button.contains(this.btnCarousel[4])) {
            this.transitionBackground("-400%")
            this.buttonSelected("4")

            if(this.activedToggle) {
                this.changeDescriptionByIndex("4", "textSwallowedStar")
            }

        } else if (button.contains(this.btnCarousel[5])) {
            this.transitionBackground("-500%")
            this.buttonSelected("5")

            if(this.activedToggle) {
                this.changeDescriptionByIndex("5", "textSwallowedStar")
            }
        }
    },

    init() {
        page.btnTrailer.addEventListener("click", page.toggleDisplayModal.bind(page, "grid"))
        page.btnClose.addEventListener("click", page.toggleDisplayModal.bind(page, "none"))
        page.btnCarousel.forEach(button => {
            button.addEventListener("click", () => page.changeElements(button))
        })
        page.buttonToggle.addEventListener("click", page.toggleElements.bind(page))
        
    }
}

page.init()