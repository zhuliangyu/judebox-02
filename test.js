/**
 * Created by macbook on 2016-11-04.
 */

$(document).ready(function () {

    //the delete icons for a song are clicked slide up that song over 0.5s
    $('i.fa-trash').on('click', function () {
        $(this).parent().slideUp(500);

    });

//AFTER the song is finished sliding up, remove it from the list entirely
//     $('i.fa-trash').parent().slideUp();
//     $('i.fa-trash').parent().remove();

//Make the song notes hidden when the page initially loads.
    $('div.notes').hide();
//     $('div .notes').hide();

// when you double click a song, they should slide down over 0.3 second.

    // $('div.notes').hide();
    //
    $('ul#library-list').on('click', 'li', function () {
        $(this).find('.notes').show(300);
    });

    //When a song is hovered, animate its background color to a lighter grey over 0.5s, using CSS selectors.
    var handlerIn = function () {
        $(this).css('background-color', '#d3d3d3');
    };
    var handlerOut = function () {
        $(this).css('background-color', 'black');


    };

    $('li').hover(handlerIn, handlerOut);


// ?????When your mouse hovers over a song, animate its delete icon's opacity to 1 using CSS transitions.
//     var handlerIn = function () {
//         $('i.fa-trash').addClass('i.fa-trash.active');
//         // console.log("asd");
//     };
//     var handlerOut = function () {
//         // $('i.fa-trash').removeClass('i.fa-trash.active');
//         //
//         // $('i.fa-trash').addClass('i.fa-trash');
//     };
//
//     $('li.ui-sortable-handle').hover(handlerIn, handlerOut);


    //When a song is played and then returned to the library


//Make the Library and Playlist sortable.
    $('#library-list').sortable();

// Allow dragging and dropping songs between the Library and the Playlist.
    $('ul#playlist-list').sortable({
        connectWith: "ul#library-list"
    });

    $('ul#library-list').sortable({
        connectWith: "ul#playlist-list"
    });

//Filter the library, so that it includes only songs that match whatever is typed in the "filter" box.
//
    $(document).on('keyup', function () {
        var key = $("#filter-library").val();

        var arr = $('span.title');

        // for (var i = 0; i < arr.length; i++) {
        //     var obj = arr.eq(i);
        //     if(obj.html()==key){
        //     }else{
        //         obj.parent().hide();
        //     }
        //
        // }

        $('li').hide();
        $("li:contains(" + key + ")").show()


    });

    //button shake
    //animation: shake
    $('#play-button').on('click', function () {
            if ($('ul#playlist-list').children().length == 0) {

                $('#play-button').effect("shake");

            }

        }
    );


});


