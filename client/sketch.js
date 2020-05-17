
const diameter = 50; 
const xwidth = 600; 
const yheight = 600 ;
const rows = 7; 
const cols = 7 ; 
const platformMargin = 2;

function playNow() 
{
    let myCanv = document.getElementById('defaultCanvas0');
    myCanv.style.display ="block";
    let btnPlay = document.getElementById('btn-play');
    btnPlay.style.display ="none";
    let btnQuit = document.getElementById('btn-quit');
    btnQuit.style.display ="block";
}
function quitGame(){
    let myCanv = document.getElementById('defaultCanvas0');
    myCanv.style.display ="none";
    let btnQuit = document.getElementById('btn-quit');
    btnQuit.style.display ="none";
    let btnPlay = document.getElementById('btn-play');
    btnPlay.style.display ="block";
}
// 300px in x and in y  , 25 in diameter
let piece = new Piece(xwidth / 2, yheight / 2, diameter, {r:250, g:250, b:10});

let platform = new Platform (rows, cols, 0, 0, 50, {r:0, g:0,b:0}, platformMargin);

let player1 = new Player (1, {r:250, g:250, b:10}, true, [piece]);

let player2 = new Player (2, {r:250, g:10, b:0},false, []);

let currentPlayer = null ;
function setup(){
    //let canv = 
    createCanvas(xwidth,yheight); 
    //canv.postion(0, 0, 'relative');
    //select('canvas').position(451.2, 230);

    givePieces(player1, rows * cols);
    givePieces(player2, rows * cols);
}

function draw(){
    //background color 
    background(0,0,255);
    platform.show();
    //piece.show();
    currentPlayer = defineCurrentPlayer(player1, player2);
    piece = currentPlayer.getCurrentPiece();
    piece.show();
    //textSize(16);
    //text('Font Size 16', 10, 90);
    textSize(32);
    text('Player ' + currentPlayer.id, 10, 30);
    movementOfPiece(piece);
}

let defineCurrentPlayer = (p1,p2) => {
    return p1.hasTurn ? p1:p2;
}

let givePieces = (player, amount) => {

    let range = [...Array(amount).keys()]; 
    player.pieces = range.map((e)=> new Piece(width /2, height /2, diameter, player.color));
}

//movement
let movementOfPiece = p => {
    p.x = mouseX;
    p.y = mouseY;
}

let putPieceOnPlatform = (piece, platform) => {
    //map function from p5.js
    //map(value, start1, stop1, start2, stop2, [withinBounds])
    let mapX = map(piece.x, 0, width, 0, rows )
    let mapY = map(piece.y, 0, width, 0, cols )

    //console.log(mapX, mapY);
    //console.log(floor(mapX), floor(mapY));

    //console.log(mapY);
    //Rule1
    if (floor(mapY) === rows - 1 || platform.existsNeighborAtBottom(floor(mapX),floor(mapY))){
        platform.platform[floor(mapX)][floor(mapY)] = new Piece(piece.x, piece.y, piece.diameter, piece.color);

        currentPlayer.hasTurn = false;

        if(currentPlayer === player2){
            player1.hasTurn = true;
        }
    }

    //platform.insert(piece)
}

//p5.js click function
function mouseClicked() {

    putPieceOnPlatform(piece, platform);

    // if (value === 0) {
    //   value = 255;
    // } else {
    //   value = 0;
    // }
  }

  