var chessboard = document.querySelector('.chessboard');
var table = document.createElement('table');
//  создание таблицы
for (var i = 0; i < 10; i++) {
    var tr = document.createElement('tr');
    table.append(tr);

    for (var j = 0; j < 10; j++) {
        var td = document.createElement('td');
        tr.append(td);
    }
}
chessboard.append(table); // массив для хренения "доски"
var board = [];
var tr = document.querySelectorAll('tr');
for (var i = 0; i < tr.length; i++) {
    board[i] = tr[i].querySelectorAll('td');
}

// покраска клеток
for (var i = 1; i < 9; i++) {
    for (var j = 1; j < 9; j++) {
        if ((i + j) % 2 == 0) {
            board[i][j].classList.add('white');
        } else {
            board[i][j].classList.add('black');

        }
    }
}

// вывод букв и чисел на краях доски
var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (var i = 1; i < 9; i++) {
    board[0][i].innerText = chars[i - 1];
    board[9][i].innerText = chars[i - 1];
    board[i][0].innerText = 9 - i;
    board[i][9].innerText = 9 - i;

    //разворот надписи и доб. границ
    board[i][9].classList.add('rotate180', 'border_right');
    board[0][i].classList.add('rotate180', 'border_top');
    board[9][i].classList.add('border_top');
    board[i][0].classList.add('border_right');

}
// класс для фигур
class Piece {
    constructor(posX, posY, pieceType, isWhite) {
        this.posX = posX;
        this.posY = posY;
        this.pieceType = pieceType;
        this.isWhite = isWhite;
        this.moveTo(this.posX, this.posY, this.pieceType);
    }
    //метод для перемещение фигуры
    moveTo(posX, posY, pieceType) {
        board[posX][posY].innerText = pieceType;
        board[posX][posY].classList.remove('black_piece', 'white_piece'); //удаление цвета фигуры из ячейки при перемещении
        if (this.isWhite) {
            board[posX][posY].classList.add('white_piece');
        } else {
            board[posX][posY].classList.add('black_piece');
        }
    }
}

//Буквы вместо фигур
//черные
var black_pawn1 = new Piece(2, 1, 'П', false);
var black_pawn2 = new Piece(2, 2, 'П', false);
var black_pawn3 = new Piece(2, 3, 'П', false);
var black_pawn4 = new Piece(2, 4, 'П', false);
var black_pawn5 = new Piece(2, 5, 'П', false);
var black_pawn6 = new Piece(2, 6, 'П', false);
var black_pawn7 = new Piece(2, 7, 'П', false);
var black_pawn8 = new Piece(2, 8, 'П', false);
var black_rook1 = new Piece(1, 1, 'Л', false);
var black_rook2 = new Piece(1, 8, 'Л', false);
var black_knight1 = new Piece(1, 2, 'К', false);
var black_knight2 = new Piece(1, 7, 'К', false);
var black_bishop1 = new Piece(1, 3, 'С', false);
var black_bishop2 = new Piece(1, 6, 'С', false);
var black_quen = new Piece(1, 4, 'Ф', false);
var black_king = new Piece(1, 5, 'К', false);

//белые
var white_pawn1 = new Piece(7, 1, 'П', true);
var white_pawn2 = new Piece(7, 2, 'П', true);
var white_pawn3 = new Piece(7, 3, 'П', true);
var white_pawn4 = new Piece(7, 4, 'П', true);
var white_pawn5 = new Piece(7, 5, 'П', true);
var white_pawn6 = new Piece(7, 6, 'П', true);
var white_pawn7 = new Piece(7, 7, 'П', true);
var white_pawn8 = new Piece(7, 8, 'П', true);
var white_rook1 = new Piece(8, 1, 'Л', true);
var white_rook2 = new Piece(8, 8, 'Л', true);
var white_knight1 = new Piece(8, 2, 'К', true);
var white_knight2 = new Piece(8, 7, 'К', true);
var white_bishop1 = new Piece(8, 3, 'С', true);
var white_bishop2 = new Piece(8, 6, 'С', true);
var white_quen = new Piece(8, 4, 'Ф', true);
var white_king = new Piece(8, 5, 'К', true);

//Фигуры
//черные фигуры
var black_pawn1 = new Piece(2, 1, '♟', false);
var black_pawn2 = new Piece(2, 2, '♟', false);
var black_pawn3 = new Piece(2, 3, '♟', false);
var black_pawn4 = new Piece(2, 4, '♟', false);
var black_pawn5 = new Piece(2, 5, '♟', false);
var black_pawn6 = new Piece(2, 6, '♟', false);
var black_pawn7 = new Piece(2, 7, '♟', false);
var black_pawn8 = new Piece(2, 8, '♟', false);
var black_rook1 = new Piece(1, 1, '♜', false);
var black_rook2 = new Piece(1, 8, '♜', false);
var black_knight1 = new Piece(1, 2, '♞', false);
var black_knight2 = new Piece(1, 7, '♞', false);
var black_bishop1 = new Piece(1, 3, '♝', false);
var black_bishop2 = new Piece(1, 6, '♝', false);
var black_quen = new Piece(1, 4, '♛', false);
var black_king = new Piece(1, 5, '♚', false);

//белые фигуры
var white_pawn1 = new Piece(7, 1, '♙', true);
var white_pawn2 = new Piece(7, 2, '♙', true);
var white_pawn3 = new Piece(7, 3, '♙', true);
var white_pawn4 = new Piece(7, 4, '♙', true);
var white_pawn5 = new Piece(7, 5, '♙', true);
var white_pawn6 = new Piece(7, 6, '♙', true);
var white_pawn7 = new Piece(7, 7, '♙', true);
var white_pawn8 = new Piece(7, 8, '♙', true);
var white_rook1 = new Piece(8, 1, '♖', true);
var white_rook2 = new Piece(8, 8, '♖', true);
var white_knight1 = new Piece(8, 2, '♘', true);
var white_knight2 = new Piece(8, 7, '♘', true);
var white_bishop1 = new Piece(8, 3, '♗', true);
var white_bishop2 = new Piece(8, 6, '♗', true);
var white_quen = new Piece(8, 4, '♕', true);
var white_king = new Piece(8, 5, '♔', true);