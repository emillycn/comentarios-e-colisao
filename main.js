//Referencia a classe "character", e o [0] é para pegar o primeiro elemento dessa lista.
const character = document.getElementsByClassName("character")[0];
//Referencia a classe "container-character", e o [0] é para pegar o primeiro elemento dessa lista.
const containerCharacter = document.getElementsByClassName("container-character")[0];

//Configura a velocidade do personagem.
const VELOCITY = 10;
//Recebe a altura e largura da tela.
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;

//Declara as coordenadas para a posição inicial do personagem.
let xPosition = 500;
let yPosition = 300;
//Lista possíveis direções do personagem de acordo com os botões do teclado.
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];
//Função que espera o aperto de um botão.
window.addEventListener("keydown", (event) => {
    const key  = event.key;
//Verifica se o botão apertado "faz sentido", ou seja, se ele corresponde à pelo menos uma das opções apresentadas.
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })
//Se o botão apertado não corresponder à nenhuma das opções apresentadas, retorna, ou seja, não ocorre nada.
    if(!keyPressedAvaiable) return;
//"Para cada direção faça"
    directions.forEach((direction) => {
        //Tira todas as direções para adicionar novas.
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    //Se o botão apertado for com a seta para cima
    if(key === "ArrowUp"){
        //A posição do personagem é rotacionada para cima.
        character.classList.add("turnUp");
        //A posição é subtraída porque o "y" cresce para baixo, isso signfica que com mais perto for do topo, menor ele é.
        //Se for menor que 0, ele não pode subtrair.
        if(yPosition-VELOCITY >= 0){
            yPosition -= VELOCITY;
        }
    }
    //Se o botão for com a seta para baixo
    if(key === "ArrowDown"){
        //O personagem rotacionado para baixo.
        character.classList.add("turnDown");
        //E a posição é somada.
        //Porém se for maior que 200, a soma não ocorre.
        if ( yPosition+VELOCITY <= SCREEN_HEIGHT - 200){
            yPosition += VELOCITY;
        }
        
    }
    //Se o botão for com a seta para a esquerda
    if(key === "ArrowLeft"){
        //É adicionado a posição para ele ir para esquerda
        character.classList.add("turnLeft");
        //E a posição é subtraída.
        //Porém se for menor que 0, não subtrai.
        if(xPosition-VELOCITY  >= 0){
            xPosition -= VELOCITY;
        }
        
    }
    //Se o botão apertado for para a direita
    if(key === "ArrowRight"){
        //A posição é rotacionada para ele ir por essa direção.
        character.classList.add("turnRight");
        //E a posição é somada.
        //Porém se for maior que 100, não soma.
        if(xPosition+VELOCITY <= SCREEN_WIDTH - 100){
            xPosition += VELOCITY;
        }
        
    }


//As duas últimas linhas movem o personagem para as coordenadas/posições "y" e "x" já declaradas.
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
