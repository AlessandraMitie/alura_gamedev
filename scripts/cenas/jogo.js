class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }
  
  setup() {
    //instanciar o cenario, fazer existir
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 52, 52, 200, 150, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 15);
  
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }
  
  keyPressed(key){
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }
  }
  
  draw() {
    cenario.exibe();
    cenario.move();
  
    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
  
    personagem.exibe();
    personagem.aplicaGravidade();
  
//  inimigo.exibe();
//  inimigo.move();
//  inimigoGrande.exibe();
//  inimigoGrande.move();
//  inimigoVoador.exibe();
//  inimigoVoador.move();
  
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    //saber se saiu inteiro  da tela:
    const inimigoVisivel = inimigo.x < - inimigo.largura;
  
    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();
  
    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }
    
    if (personagem.estaColidindo(inimigo)) {
      //console.log('colidiu');
      //image(imagemGameOver, width/2 - 200, height/3);
      vida.perdeVida();
      personagem.tornarInvencivel();
      if(vida.vidas === 0) {
        image(imagemGameOver, width/2 - 200, height/3);
        noLoop();
         }
    }
  }
}