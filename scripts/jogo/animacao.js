class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    //x é o posicionamento na tela
    //largura, altura é do personagem em si
    //larguraSprite e alturaSprite é o tamanho das sprites na imagem
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.variacaoY = variacaoY;
    this.y = height - this.altura - this.variacaoY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.frameAtual = 0;
  }
  
  exibe() {
    image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.anima();
  }
  anima() {
    //para a imagem percorrer o frame atual
    this.frameAtual++;
    
    if(this.frameAtual >= this.matriz.length - 1) {
    //-1 porque matriz inicia com 0
      this.frameAtual = 0
    }
  }
}