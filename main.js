var app = null;
;(function(){
    app = new App();
    app
        .init()
        .addMainBoard(207, 280)
        .addMainBoard(125, 250)
        .addFormat(102, 103)
        .addFormat(1.02, 1.03)
        .addFormat(10.2, 10.3)
        .calc()
    ;
})();