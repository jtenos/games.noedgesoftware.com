module.exports = {
    init: function() {
        window.addEventListener("resize", this.resizeSquares);
        this.resizeSquares();
    },
    
    resizeSquares: () => {
        const squares = document.getElementsByTagName("board-square");
        const square = squares[0];
        if (!square) {
            return;
        }
        var documentHeight = "innerHeight" in window 
           ? window.innerHeight
           : document.documentElement.offsetHeight; 
        var documentWidth = "innerWidth" in window
            ? window.innerWidth
            : document.documentElement.offsetWidth;
           
        var maxHeight = (documentHeight / 3) - 10;
        var maxWidth = (documentWidth / 3) - 10;
        const width = Math.min(maxWidth, maxHeight);
        
        Array.from(squares).forEach(function(square) {
            square.style.height = width + "px";
            square.style.width = width + "px";
        });
    }
};
