let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo 
//3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow= document.querySelector('.yellow');
const blue = document.querySelector('.blue');

//cria ordem aleatória das cores
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1);
  }
}

//acende a proxima cor
let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
      element.classList.add('selected');
  }, number - 250);
  setTimeout(() => {
      element.classList.remove('selected');
  });
}


//checa se os botões clicados são os mesmos da ordem gerada pelo jogo 
let checkOrder = () => {
  for(let i in clickedOrder) {
    if(clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if(clickedOrder.length == order.length) {
    alert(`Pontuação: ${score}\n Você acertou! Iniciando o proximo nivél!`);
    nextLevel();
  }
}

//função para o clique do usuário 
let click = (color) => {
  clickedOrder[clickedOrder.length] = color; 
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
  })

  checkOrder();
}