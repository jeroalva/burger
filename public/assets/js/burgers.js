
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
            $.ajax("/api/new", {
                type: "POST",
                data: newBurger
              }).then(
                function() {
                  console.log("Created new Burger");
                  location.reload();
                }
              );
        }
    })

