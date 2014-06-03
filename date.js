
window.addEventListener("load", function(){
	
	var day = document.getElementById("day");
	
	var month = document.getElementById("month");
	
	var year = document.getElementById("year");
	
	var d = new XDate();
	
	var methods = {
			
			currentDate: function(){
				
				day.innerHTML = d.getDate();
				month.innerHTML = d.getMonth() + 1;
				year.innerHTML = d.getFullYear();
			},
	
			addDay : function(){
				day.innerHTML = d.addDays(1).getDate(); 	
				
			},
	
			subDay: function(){
				day.innerHTML = d.addDays(-1).getDate(); 
			},
			
	
			addMonth : function(){
				
				month.innerHTML = d.addMonths(1).getMonth() + 1; 	
			
			},
	
			subMonth: function(){
				
				month.innerHTML = d.addMonths(-1).getMonth() + 1;
			},
			
			addYear : function(){
				year.innerHTML = d.addYears(1).getFullYear(); 	
				
			},
	
			subYear: function(){
				year.innerHTML = d.addYears(-1).getFullYear(); 
			},
			
	
			
	};
	
	//initialize date
	methods.currentDate();
	
	//attach events
	
	//day
	document.getElementById("addDay").addEventListener("click", methods.addDay);
	document.getElementById("subDay").addEventListener("click", methods.subDay);
	
	//month
	document.getElementById("addMonth").addEventListener("click", methods.addMonth);
	document.getElementById("subMonth").addEventListener("click", methods.subMonth);
	
	//year
	document.getElementById("addYear").addEventListener("click", methods.addYear);
	document.getElementById("subYear").addEventListener("click", methods.subYear);
	
	//ok button
	
	document.getElementById("ok").addEventListener("click", function(){
		var chosenDate = document.getElementById("chosenDate");
		
		chosenDate.innerHTML = new XDate(year.innerHTML, month.innerHTML, day.innerHTML).toDateString();
		
	});
	
	
	//cancel
	document.getElementById("cancel").addEventListener("click", function(){
		methods.currentDate();
	});
	
});
