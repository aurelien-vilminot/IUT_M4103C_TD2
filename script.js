(function () {
    'use strict';
    $(()=> {
        $.ajax({
            url: 'https://sokoban.doonoo.fr',
            method: 'get',
            //data:
            error: function () {}
        })
            .done (function (data) {
                for (let key in data) {
                    $('body').append(
                        $('<div />').append(
                            $('<div />').html(data[key].description),
                            $('<div />').html(data[key].copyright),
                        ).css ({
                            'margin' : '5px',
                            'padding' : '5px',
                            'border' : '1px solid blue',
                        }).on ('click',function () {
                            let self = $(this);
                            $.ajax({
                                url: 'https://sokoban.doonoo.fr/levels/' + key,
                                method: 'get'
                            })
                                .done(function (data) {
                                    self.after(
                                        $('<div />').html(data['title'])
                                    );
                                    for (let level of data['levels']) {
                                        for (let cell of level['cells']) {
                                            self.after(
                                                $('<pre />').html(cell)
                                            )
                                        }
                                    }
                                })
                        })
                    )
                }
            })
            .fail(function () {
                /* erreur critique */
            })
    })
}) ();


/* ---------------Ma boucle ---------------*/

// .done(function (data) {
//     for (let maKey = 0 ; maKey < data['levels'].length ; ++maKey) {
//         for (let maCell = 0 ; maCell < data['levels'][maKey]['cells'].length ; ++maCell) {
//             $('#detail').append(
//                 $('<div />').html(data['levels'][maKey]['cells'][maCell])
//             ).css({
//                 'margin' : '5px',
//                 'padding' : '5px',
//                 'border' : '1px solid red',
//             })
//         }
//     }
// })
