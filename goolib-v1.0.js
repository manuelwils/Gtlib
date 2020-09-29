/* 
*	this mini library is developed by Emmanuel Godswill to 
*	to provide autoscroll feature
*	the libray is absolute bug free
*	preview the readme.md to see how to initialize this library
*   Version: 1.0.0;
* 	Date: 2020-05-31T21:04Z
*/
(function(){

	//"use strict";

	//automated scrolling
	this.gootentAutomateScroll = function() 
	{
		if(arguments[0] && typeof arguments[0] === "object") 
		{
			__scrollPage(arguments[0]);
			console.log('valid parameters are passed');

		} else {
			console.log('the argument you pass to the object instance is not an object, please pass an object')
			return;
		}

		//this paragraph below allow you to instantiate 
		//the object without the new keyword - (optional)
		return this.gootentAutomateScroll = gootentAutomateScroll = new this.gootentAutomateScroll();

	} 
	// Private function 
	function __scrollPage(args) 
	{
		if(args.hasOwnProperty('speed') && args.hasOwnProperty('interval'))
		{

			console.log('properties exists')
			var _s = parseInt(args.speed);
			var _i = parseInt(args.interval);

			function __scrollElem() 
			{
				var _e = setInterval(function()
					{
						window.scrollBy(0,_s)
					}, _i) || {};
			} 

			//ensure the event is not triggered from some other IoT 
			//devices
			if(typeof window.touchmove !== undefined || typeof window.mousemove !== undefined)
			{
				console.log('automation begins because')
				__scrollElem();
			} 

		} else {
			console.log('the arguments required are speed and interval with their values')
		}
	}
	
})();
/* if the script is well linked to the document, 
*	you would see this console message 
*/
console.log('Gootent Autoscroll Library Fully Loaded');
