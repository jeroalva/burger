    $(".btn").on("click", function(event){
        console.log($(this).attr("type"))
        if($(this).attr("type") === "button"){
            var id = $(this).attr("id");
            $.ajax("/api/devour/" + id, {
                type: "PUT"
            }).then(
                function(){
                    console.log("Updated value");
                    location.reload();
                }
            )
        }
        else if($(this).attr("type") === "submit"){
            event.preventDefault();
            var newBurger = {
                name: $("#burgerInput").val().trim()
            }
            if(!newBurger.name){
                console.log("show")
                $("#alertCol").append("<div class=\"alert alert-warning alert-dismissible fade show mt-2\" role=\"alert\"><strong>Holy guacamole!</strong> The name of the burger cannot be empty!<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>")
            }
            else{
                $.ajax("/api/new", {
                    type: "POST",
                    data: newBurger
                  }).then(
                    function(response) {
                            location.reload();
                            console.log("Created new Burger");
                    }
                  );
            }
        }
    })

