var direction = 'asc';

function sorting() {
    var cards = $('.goods__cards'), card = cards.children('.card');


    card.detach().sort(function (a, b) {
        var card1 = $(a).data('price');
        var card2 = $(b).data('price');

        var sort = (direction === "asc") ? card1 > card2 : card1  < card2;

        return (sort) ? (sort) ? 1 : 0 : -1;
    });

    if (direction === "asc") {
        direction = 'desc';
    } else {
        direction = 'asc';
    }

    cards.append(card);

}