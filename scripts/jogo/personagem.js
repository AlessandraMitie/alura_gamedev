class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
//    this.frameAtual = 0;
    //qual a posição/o array da matriz
    
    this.variacaoY = variacaoY;
    //chão do cenário:
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }
  
//  exibe() {
//    image(this.imagem, 0, height - 135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270);
    //0, height - 135 -> são os eixos X e Y
    //height pega o eixo Y
    //como a altura da imagem é 135, ela ficará abaixo do eixo y, ou seja, o topo da cabeça ficará na linha. colocar negativo, para a imagem subir
    //110, 135 > largura e altura da imagem como um todo
    //this.matriz[this.frameAtual][0] -> a posição da imagem dentro do bloco de imagem. O segundo [0] é para ele pegar o valor X dessa matriz
    //220, 270 > quantos pixels serão pegos
    
//    this.anima();
//  }
  
  pula() {
    if(this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial) {
    //se ele passar do chão:
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000)
  }
  
  estaColidindo(inimigo) {
//    noFill();
//rect vai colocar uma borda na imagem
//    rect(this.x, this.y, this.largura, this.altura);
//    rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
    if(this.invencivel) {
    return false;
    }
    
    const precisao = .7;
    
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
}

