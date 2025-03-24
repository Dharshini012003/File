var states={
  India:["Tamil Nadu","Maharashtra","Karnataka"],
  US:["New York","California","Texas"]
};
 
 var cities={
	"Tamil Nadu":["Chennai","Trichy","Coimbatore"],
	Maharashtra:["Mumbai","Pune"],
	Karnataka:["Banglore","Mysore"],
    "New York":["New York city","Detroit"],
	California:["Los Angels","San Francisco"],
	Texas:["Houston","Dallas"]

 };
 
    var countrySelect = document.getElementById("selCtryID");
    var stateSelect = document.getElementById("selStateID");
    var citySelect = document.getElementById("selCityID");
	
   function populateStates() {
      stateSelect.innerHTML = '<option disabled hidden selected  value="">Select State</option>';
      citySelect.innerHTML = '<option disabled hidden selected  value="">Select City</option>';
	  
	  var selectedCountry=countrySelect.value;
	  if(selectedCountry)
	  {
	     var selectedStates = states[selectedCountry];
        selectedStates.forEach(function(state) {
          var option = document.createElement("option");
          option.value = state;
          option.text = state;
          stateSelect.appendChild(option);
        });
      }
    }

	 
	 function populateCities(){
	   citySelect.innerHTML='<option disabled hidden selected value="">Select City</option>';
	   var selectedState = stateSelect.value;
 	   if(selectedState){
	     var selectedCities=cities[selectedState];
		 selectedCities.forEach(function(city){
		    var option=document.createElement("option");
			option.value=city;
			option.text = city;
			citySelect.appendChild(option);
		  });
		 }
	}
		  