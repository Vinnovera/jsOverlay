(function(){
 	
 	var 
 		jso,
 		map
 	;

 	domready(function(){
		addEvent('click', document.getElementById('openoverlay'), onOpenBtnClick);
		addEvent('click', document.getElementById('openimage'), onOpenImageBtnClick);
		addEvent('click', document.getElementById('openmap'), onOpenMapBtnClick);

		map = new google.maps.Map(document.getElementById('map-holder'),{
			zoom: 8,
			center: new google.maps.LatLng(-34.397, 150.644)
		});

	});

	function onOpenBtnClick(e){
		preventDefault(e);

		var items = [
			{name:"Alexander", interests:"creating large empires"},
			{name:"Edward", interests:"ha.ckers.org <\nBGSOUND SRC=\"javascript:alert('XSS');\">"},
			{name:"..."},
			{name:"Yolando", interests:"working out"},
			{name:"Zachary", interests:"picking flowers for Angela"},
			{name:"Alexander", interests:"creating large empires"},
			{name:"Edward", interests:"ha.ckers.org <\nBGSOUND SRC=\"javascript:alert('XSS');\">"},
			{name:"..."},
			{name:"Yolando", interests:"working out"},
			{name:"Zachary", interests:"picking flowers for Angela"}
		];
		var template = _.template(document.getElementById('usageList').innerHTML, {items:items});
		
		var holder = document.createElement('div');
		holder.setAttribute('id', 'my_modal_content');
		holder.className = 'content-holder';
		holder.innerHTML = template;
		document.body.appendChild(holder);

		jso = new jsOverlay({
			content: 'my_modal_content',
			additionalStyleClasses: {
				closebutton: 'btn btn-block btn-lg btn-primary'
			}
		});
	}

	function onOpenImageBtnClick(e){
		preventDefault(e);
		
		var items = [
			{url:'img/SteacieLibrary.jpg', id:'demoimage-0'}
		];
		var template = _.template(document.getElementById('imageDemo').innerHTML, {items:items});
		
		var holder = document.createElement('div');
		holder.setAttribute('id', 'my_modal_content');
		holder.className = 'image-holder';
		holder.innerHTML = template;
		document.body.appendChild(holder);
		
		addEvent('load', document.getElementById('demoimage-0'), function(e){
			jso = new jsOverlay({
				content: 'my_modal_content',
				scrollable: false,
				additionalStyleClasses: {
					closebutton: 'btn btn-block btn-lg btn-primary'
				}
			});
		});
		
	}

	function onOpenMapBtnClick(e){
		preventDefault(e);
		
		jso = new jsOverlay({
			content: 'map-holder',
			scrollable: false,
			additionalStyleClasses: {
				closebutton: 'btn btn-block btn-lg btn-primary'
			},
			closebutton: {
				margin: {
					top: 40
				}
			},
			onOpen: function(){
				google.maps.event.trigger(map,'resize');
			},
			onBeforeClose: function(){
				document.getElementById('map-wrapper').appendChild(document.getElementById('map-holder'));
			}
		});
		
	}


	// Event manangement functions
	function addEvent(evnt, elem, func) {
		if (elem.addEventListener)  // W3C DOM
			elem.addEventListener(evnt,func,false);
		else if (elem.attachEvent) { // IE DOM
			elem.attachEvent("on"+evnt, func);
		}
		else { // No much to do
			elem[evnt] = func;
		}
	}
	function preventDefault(e){
		var evt = e || window.event;
		if(evt.preventDefault){  
			evt.preventDefault();  
		}else{  
			evt.returnValue = false;  
			evt.cancelBubble=true;  
		}
	}

 }());