function App(){
    var   that = this
        , init = null
        , $container = null
        , mainBoards = null
        , formats = null
    ;
    
    formats = {
        list: []
        , $container: null
        , $list: null
        , $form: null
        , $formLength: null
        , $formWidth: null
        , onRemove: function(index){
            formats.list[index] = null;
        }
        , createNew: function(length, width){
            formats.list[formats.list.length] = new Formats(length, width, formats.$list, formats.list.length, formats.onRemove);
        }
        , init: function(){
            formats.$container = $('.formatsContainer');
            formats.$list = $('.formatsListContainer').html('').append('<ul />').find('ul');
            formats.$form = $('.formatsContainer form');
            formats.$formLength = $('#newFormatLength');
            formats.$formWidth = $('#newFormatWidth');
    
            formats.$form.on('submit', function(e){
                e.preventDefault();
                formats.createNew(formats.$formLength.val(), formats.$formWidth.val());
                formats.$formLength.val('');
                formats.$formWidth.val('');
            });

        }
    };

    mainBoards = {
        list: []
        , $container: null
        , $list: null
        , $form: null
        , onRemove: function(index){
            mainBoards.list[index] = null;
            mainBoards.list[index] = null;
        }
        , createNew: function(length, width){
            mainBoards.list[mainBoards.list.length] = new MainBoards(length, width, mainBoards.$list, mainBoards.list.length, mainBoards.onRemove);
        }
        , init: function(){
            mainBoards.$container = $('.mainBoardsContainer');
            mainBoards.$list = $('.mainBoardsListContainer').html('').append('<ul />').find('ul');
            mainBoards.$form = $('.mainBoardsContainer form');
        }
    };

    init = function(){
        mainBoards.init();
        formats.init();
    };

    return {
        getFormats: function(){
            return formats.list;
        }
        , addFormat: function(length, width){
            formats.createNew(length, width);
            return this;
        }
        , getMainBoards: function(){
            return mainBoards.list;
        }
        , addMainBoard: function(length, width){
            mainBoards.createNew(length, width);
            return this;
        }
        , calc: function(){
            
        }
        , init: function(){
            init();
            return this;
        }
    }
}