 // main document ready function to check if dom is loaded fully or not
  $(document).ready(function() {

    //Facebook token of user
    var myFacebookToken = 'EAACEdEose0cBABUpTcmg5ZBCZBwWWoTD2wUgpZCSbs3bVrkOmygESDK3Jbc7yXoEZBFSxsNOYeZBIZCxTvZAkZBFQ2WT6HNmfOsZC1COmXiVgwjiT4bR4ZCPE9V7pmflTeyVKheXVuO4nKr5TLJfJZAfLyxoP84qZB3RF2M5GUh1ooAPJck3ZBvDgMtqNDc7kNATsl2kZAIVquYiMOSQZDZD';

   
        //Getting information of user
        $.ajax('https://graph.facebook.com/me?fields=birthday,email,hometown,name,feed.limit(20).since(2016-1-01){story,link}&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    
                        //Alerting if any field value  is undefined
                        if (typeof response.name == 'undefined') {
                            alert("Name is not present");
                        }else{
                            $('.name').text('My Name is ' +response.name);
                        }


                        if (typeof response.email == 'undefined') {
                            alert("Email id is not present");
                        }
                        else{
                            $('.email').text('My email id is '+response.email);
                        }

                        if (typeof response.hometown.name == 'undefined') {
                            alert("Hometown is not present");
                        }
                        else{
                            $('.hometown').text('My Hometown is '+response.hometown.name);
                        }

                        if (typeof response.birthday == 'undefined') {
                            alert("Birthday is not present");
                        }
                        else{
                            $('.birthday').text('My Birthday is on '+response.birthday);
                        }
                        
                        
                    
                    

                    //Getting latest feed of user from 2016  and limiting it to max 20 count
                    $.each(response.feed.data, function( index, value ) {
                        $('.feed'+index).text(value.story);
                    });

                    
                    
                    
                },

                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert(errorMessage);
                }

       
            }
        );// end ajax call 


  });