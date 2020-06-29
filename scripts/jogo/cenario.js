class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    //a primeira imagem começa no zero
    this.x2 = width;
    //vai começar exatamente onde a imagem terminar
  }
  
  exibe() {
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2, 0, width, height);
  }
  
  move() {
    //x1 andar para esquerda
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    if (this.x1 < -width){
      //width negativo para poder garantir que a imagem passou por todo o tamanho da tela
      this.x1 = width;
    }
    
    if (this.x2 < -width){
      //width negativo para poder garantir que a imagem passou por todo o tamanho da tela
      this.x2 = width;
    }
  }
}