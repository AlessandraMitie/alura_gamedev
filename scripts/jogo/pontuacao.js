class Pontuacao {
  constructor() {
    //sempre que iniciar o jogo, a pontuação é zero
    this.pontos = 0;
  }
  
  //método para exibir os pontos
  exibe() {
    textAlign(RIGHT);
    //cor:
    fill('#fff');
    textSize(50);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  }
}