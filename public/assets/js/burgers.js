$(function(){

    console.log("it be working");

    $('.create-form').on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#submitBurger').val() == undefined ? '' : $('#submitBurger').val().trim(),
            devoured: false
        };
        console.log(newBurger);

        $.ajax('/api/burgers', {
            type:'POST',
            data: newBurger
        }).then(
            function() {
                $('#submitBurger').val('');
                console.log("Burger Created");
            }
        );

        location.reload();
    });

    $('.devour').on('click', function(event) {
        var id = $(this).data('id');
        var newDevour = $(this).data('newdevoured');

        newBurgerStatus = {
            devoured: newDevour
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newBurgerStatus
        }).then(
            function() {
                console.log("Dis burger has been devoured!", newDevour);
                location.reload();
            }
        )
    })
})