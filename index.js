
   $(document).ready(function () {
  
        // FETCHING DATA FROM JSON FILE
        $.getJSON("team.json", function (data) {
           let datainfo=JSON.stringify(data);
           let cinfo=JSON.parse(datainfo);

            for(let i in cinfo){   
                $(".card img")[i].src=cinfo[i].url;    
                $(".card img")[i].alt=cinfo[i].name;       
                $(".card-title")[i].innerHTML=cinfo[i].name;
                $(".card-title-1")[i].innerHTML=cinfo[i].job;
                $(".card-text")[i].innerHTML=cinfo[i].description;
            }
        
           
        });
    });