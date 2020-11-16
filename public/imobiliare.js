$(document).ready(function() {
    $('form').on('submit', function() {
        var area = $('form input');
        var data = {area: area.val()};

        // console.log("/////////////////");
        // $.ajax({
        //     type: 'POST',
        //     url: '/',
        //     data: data,
        //     success: function(data) {
        //         // console.log(data);
        //         location.reload();
        //     }
        // });
        $.post("/",
        {
            name: "Donald Duck",
            city: "Duckburg"
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });

        return false;
    });
})