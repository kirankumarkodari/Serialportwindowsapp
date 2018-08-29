 
 
 
 
 var Response = {};
 var Status_data_arr={};


        

// $(document).ready(function () {

           

            console.log('Document.ready() ');
            console.log('Started at');
            var currentdate = new Date();
			console.log(currentdate);
            var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth() + 1) + "/"
                + currentdate.getFullYear() ;
				// + " @ "
                // + currentdate.getHours() + ":"
                // + currentdate.getMinutes() + ":"
                // + currentdate.getSeconds() + " "
                // + currentdate.getMilliseconds();

            console.log(datetime);

  


    // Making Empty the carousals and table images



             $(".carousel-indicators").empty();
            $(".carousel-inner").empty();


  
	
	 

	  console.log('Document.ready() before AjaxRequest');
	  var currentdate = new Date();
	  var datetime = currentdate.getDate() + "/"
          + (currentdate.getMonth() ) + "/"
          + currentdate.getFullYear() + " @ "
          + currentdate.getHours() + ":"
          + currentdate.getMinutes() + ":"
          + currentdate.getSeconds() + " "
          + currentdate.getMilliseconds();

	  console.log(datetime);


	  ajax_request(); // 2 is to document.ready() invoked the ajax request.

      console.log("Req end");

	 
        // });

        // On document.ready() hide left indicator
      












function ajax_request() {
	console.log("Enter into Image Req:");
	var ImageReq={};
    $.ajax({
				
                    
						url: 'http://app.efftronics.org:8576/Mango_Main/Services/Status/AllImages',
                        contentType: "application/json",
						//headers:{'Access-Control-Allow-Origin' : 'http://app.efftronics.org:8576'},
					    dataType: "json",
						crossDomain : true,
                        type: "POST",
						data: JSON.stringify(ImageReq) ,
                        success: function (data) 
						{
                            console.log(' After Success of AjaxRequest');
							Response = data;
							Status_data_arr=Response.Data.ActionResult.Status;
							/*var Img_sno = Response.Data.ActionResult.Status.IMG_SNO;
							var Img_from_moblie = Response['Data']['ActionResult']['Status']['IMAGE_FROM_MOBILE'];
							var Img_saved_on = Response['Data']['ActionResult']['Status']['IMAGE_SAVED_ON'];
							var Imei_no = Response['Data']['ActionResult']['Status']['IMEI_NO'];
							var Img_name = Response['Data']['ActionResult']['Status']['IMAGE_NAME'];
							var Site_part_no = Response['Data']['ActionResult']['Status']['SITE_PART_NO'];
							var Location = Response['Data']['ActionResult']['Status']['LOCATION'];
							var y = Response['Data']['ActionResult']['Status']['Y'];
							var m = Response['Data']['ActionResult']['Status']['M'];
							var d = Response['Data']['ActionResult']['Status']['D'];
							var Img_name = Response['Data']['ActionResult']['Status']['IMG_NAME'];*/
							
							  for (var i = 0; i < Status_data_arr.length; i++)
							  {
							
                            var Img_name=Status_data_arr[i].IMG_NAME;					

							 $(".carousel-indicators").append('<li data-target="#myCarousel" data-slide-to="' + i + '" > </li>');
                                   
                                           // Need to Set Src attribute for first image of carousel
			                $(".carousel-inner").append('<div class="item"> <img src="' + Img_name + '" alt="Image">  </div>');
           
							
							  }
							  for (var i = 0; i < Status_data_arr.length; i++)
							  {
								var y=Status_data_arr[i].Y;					
								var m=Status_data_arr[i].M;					
								var d=Status_data_arr[i].D;
								var date= d+"/"+m+"/"+y;
								if(date==datetime)
								{
									console.log("compared");
								}
								else{
									console.log("unable to compare");
								}
								
							  }
							
							 // var currentdate = new Date();
                            // var datetime = currentdate.getDate() + "/"
                                // + (currentdate.getMonth() + 1) + "/"
                                // + currentdate.getFullYear() + " @ "
                                // + currentdate.getHours() + ":"
                                // + currentdate.getMinutes() + ":"
                                // + currentdate.getSeconds() + " "
                                // + currentdate.getMilliseconds();

                            // console.log(datetime);


                            // console.log(' After processing of AjaxRequest');
                            // var currentdate = new Date();
                            // var datetime = currentdate.getDate() + "/"
                                // + (currentdate.getMonth() + 1) + "/"
                                // + currentdate.getFullYear() + " @ "
                                // + currentdate.getHours() + ":"
                                // + currentdate.getMinutes() + ":"
                                // + currentdate.getSeconds() + " "
                                // + currentdate.getMilliseconds();

                            // console.log(datetime);

                            

                       
							

                        
						},
                        error: function () {
                           /* $(".carousel-inner").append('<div class="item"> <img src="Images/oops_error.jpg" alt="Image"></div>');*/
                        }


                    });
}




   //DatePicker
   // $(function () {



                     
          // });