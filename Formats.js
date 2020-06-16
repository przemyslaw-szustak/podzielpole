function Formats(length, width, $liContainer, parentIndex, onRemove){
    var $li = null
        , $remBtn = null  
        , length = length
        , width = width
        , $liContainer = $liContainer
        , parentIndex = parentIndex
    ;

    function init(){
        if(length > 100) length = length/100; 
        if(width > 100) width = width/100; 
        

        $li = $('<li class="mt5">długość: '+length+' [m], szerokość: '+width+' [m]</li>');
        $liContainer.append($li);
        $remBtn = $('<button class="btn btn-default" title="Usuń płytę"><i class="fas fa-times"></i></button>');
        $li.append($remBtn);
        $remBtn.on('click', function(e){
            e.preventDefault();
            $li.remove();
            onRemove(parentIndex);
        });
    };
    init();

    return {
        getSizes: function(){
            return {length: length, width: width};
        }
    };
}