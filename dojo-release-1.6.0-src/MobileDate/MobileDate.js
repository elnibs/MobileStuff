dojo.provide("MobileDate");

dojo.require("dijit._Widget");
dojo.require("dijit._Templated");

var myContext = null;

dojo.declare("MobileDate", [dijit._Widget, dijit._Templated], {
	

	d: new XDate(),
	
	_currentDate: function(){
		
		var date = new XDate();
		
		this.day.innerHTML = date.getDate();
		this.month.innerHTML = date.getMonth() + 1;
		this.year.innerHTML = date.getFullYear();
	},
	
	/**
	 * Utility methods for the widget organized in an object
	 * 
	 * TODO to be optimized, too much redundancy
	 */
	methods : {
		
		addDay : function(){
			arguments[0].el.innerHTML = arguments[0].d.addDays(1).getDate(); 	
			
		},

		subDay: function(el, d){
			arguments[0].el.innerHTML = arguments[0].d.addDays(-1).getDate(); 
		},
		

		addMonth : function(el, d){
			
			arguments[0].el.innerHTML = arguments[0].d.addMonths(1).getMonth() + 1; 	
		
		},

		subMonth: function(el, d){
			
			arguments[0].el.innerHTML = arguments[0].d.addMonths(-1).getMonth() + 1;
		},
		
		addYear : function(el, d){
			arguments[0].el.innerHTML = arguments[0].d.addYears(1).getFullYear(); 	
			
		},

		subYear: function(el, d){
			arguments[0].el.innerHTML = arguments[0].d.addYears(-1).getFullYear(); 
		}
},
	
	templateString:
        dojo.cache("MobileDate", "templates/MobileDate.html"),
	
    /**
     * PostCreate method
     */
	postCreate: function(){
		var domNode = this.domNode;
		
		this.inherited(arguments);
		
		//first initialize
		this._currentDate();
		
		
					var day = {
							"el":this.day, 
							"d": this.d 
						};
					
					var	month = { 
							"el": this.month, 
							"d": this.d
						};
						
					var year = { 
							"el": this.year, 
							"d": this.d
						};
					
		//attach events
		//day
		dojo.connect(this.addDay, "onclick", dojo.partial(this.methods.addDay, day));
		dojo.connect(this.subDay, "onclick", dojo.partial(this.methods.subDay, day));
		
		//month
		dojo.connect(this.addMonth,"onclick", dojo.partial(this.methods.addMonth, month));
		dojo.connect(this.subMonth,"onclick", dojo.partial(this.methods.subMonth, month));
		
		//year
		dojo.connect(this.addYear,"onclick", dojo.partial(this.methods.addYear, year));
		dojo.connect(this.subYear,"onclick", dojo.partial(this.methods.subYear, year));
		
		if(!myContext)
			myContext = this;
		
		//ok button
		dojo.connect(this.ok, "onclick", dojo.partial(function(){
			
			var ctxt = arguments[0];
			
			var chosenDate = ctxt.chosenDate;
			
			chosenDate.innerHTML = new XDate(ctxt.year.innerHTML, ctxt.month.innerHTML, ctxt.day.innerHTML).toDateString();
			
		}, myContext));
		
		
		//cancel
		dojo.connect(this.cancel, "onclick", dojo.partial(function(){
			arguments[0]._currentDate();
		}, myContext));
		
	}
	
	
});