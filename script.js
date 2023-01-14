function myFunction() {
    document.getElementById("inputs").innerHTML = " <div class = 'grid-container'> bulding: <input type ='Text' id='bulding' ><br> room_number: <input type ='number' id='room_number' > <br> capacity :<input type ='number' id='capacity'> </div><div class 'grid-row'><input type ='submit' id='serche' value='Serche' class= 'oper'><input type ='submit' id='insert' value='insert' class= 'oper'>  </div>"
    
    $.ajax({
                   data: {},
                   type :"GET",
                    url: "displayClassRoom.php" ,
                    success: function(response){//alert(response);
                         // $("#output").append(response);   
                         obj = jQuery.parseJSON(response);
                        let tableStr ="<table  class ='center'>";
                            
                        tableStr+= "<tr>"+"<td>" + "building" + "</td>"+"<td>" +"room_number" + "</td>"+"<td>" + "capacity" + "</td>"+"</tr>"
                            for(let i=0;i<obj.length;i++){
    let row=obj[i];
    tableStr+= "<tr><td>"+row['building']+"</td><td>"+row['room_number']+"</td><td>"+row['capacity']+"</td></tr>"
}

tableStr+= "</table>"
$('#output').html(tableStr);
                      }
})
    $(document).ready(function(){
              $("#insert").click(function(){
                bulding= $ ("#bulding").val();
                room_number= $ ("#room_number").val();
                capacity= $ ("#capacity").val();

               $.ajax({
                   data: {bulding: bulding, room_number: room_number ,capacity: capacity},
                   type :"GET",
                    url: "addClassRoom.php" ,
                    success: function(response){alert(response);
                          //$("#output").append(response);   
                      }

})

          });
        });
        $(document).ready(function(){
              $("#serche").click(function(){
                bulding= $ ("#bulding").val();
                room_number= $ ("#room_number").val();
                capacity= $ ("#capacity").val();

               $.ajax({
                   data: {bulding: bulding, room_number: room_number ,capacity: capacity},
                   type :"GET",
                    url: "sercheClassRoom.php" ,
                    success: function(response){//alert(response);
                         // $("#output").append(response);   
                         obj = jQuery.parseJSON(response);
                        let tableStr ="<table  class ='center'>";
                            
                        tableStr+= "<tr>"+"<td>" + "building" + "</td>"+"<td>" +"room_number" + "</td>"+"<td>" + "capacity" + "</td>"+"</tr>"
                            for(let i=0;i<obj.length;i++){
    let row=obj[i];
    tableStr+= "<tr><td>"+row['building']+"</td><td>"+row['room_number']+"</td><td>"+row['capacity']+"</td></tr>"
}

tableStr+= "</table>"
$('#output').html(tableStr);
                      }
})

          });
        });


  }



  function departmentFunction() {
    document.getElementById("inputs").innerHTML = " <div class = 'grid-container'> dept_name: <input type ='Text' id='dept_name' ><br> buliding: <input type ='Text' id='buliding' > <br> budget :<input type ='number' id='budget'> </div><div class 'grid-row'><input type ='submit' id='serche' value='Serche' class= 'oper'><input type ='submit' id='insert' value='insert' class= 'oper'>  </div>"
    $.ajax({
                data: {},
                    type :"GET",
                    url: "serchDepartment.php" ,
                    success: function(response){//alert(response);
                         // $("#output").append(response);   
                         obj = jQuery.parseJSON(response);
                        let tableStr ="<table  class ='center'>";
                            
                        tableStr+= "<tr>"+"<td>" + "dept_name" + "</td>"+"<td>" +"building" + "</td>"+"<td>" + "budget" + "</td>"+"</tr>"
                            for(let i=0;i<obj.length;i++){
    let row=obj[i];
    tableStr+= "<tr><td>"+row['dept_name']+"</td><td>"+row['building']+"</td><td>"+row['budget']+"</td></tr>"
}

tableStr+= "</table>"
$('#output').html(tableStr);
                      }
})
    $(document).ready(function(){
              $("#insert").click(function(){
                dept_name= $ ("#dept_name").val();
                buliding= $ ("#buliding").val();
                budget= $ ("#budget").val();

               $.ajax({
                   data: {dept_name: dept_name, buliding: buliding ,budget: budget},
                   type :"GET",
                    url: "addDepartment.php" ,
                    success: function(response){alert(response);
                          //$("#output").append(response);   
                      }

})

          });
        });
        $(document).ready(function(){
              $("#serche").click(function(){
                dept_name= $ ("#dept_name").val();
                buliding= $ ("#buliding").val();
                budget= $ ("#budget").val();

               $.ajax({
                data: {dept_name: dept_name, buliding: buliding ,budget: budget},
                    type :"GET",
                    url: "serchDepartment.php" ,
                    success: function(response){//alert(response);
                         // $("#output").append(response);   
                         obj = jQuery.parseJSON(response);
                        let tableStr ="<table  class ='center'>";
                            
                        tableStr+= "<tr>"+"<td>" + "dept_name" + "</td>"+"<td>" +"building" + "</td>"+"<td>" + "budget" + "</td>"+"</tr>"
                            for(let i=0;i<obj.length;i++){
    let row=obj[i];
    tableStr+= "<tr><td>"+row['dept_name']+"</td><td>"+row['building']+"</td><td>"+row['budget']+"</td></tr>"
}

tableStr+= "</table>"
$('#output').html(tableStr);
                      }
})

          });
        });


  }   