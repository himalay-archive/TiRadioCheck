(function() {
		
	var radioButton	= require('/ui/tiRadioButton');
	
	var win = Ti.UI.createWindow({
		layout:'vertical',
	});
	
	var headline = Ti.UI.createLabel({
		text:'Radio buttons',
		color:'#fff',
		font:{fontSize:23,fontWeight:'Bold'},
		shadowColor:'#000',
		shadowOffset:{x:1,y:1},
		top:0,
		textAlign:'center',
		height:45
	});
	
	var text = Ti.UI.createLabel({
		text:'Basic JS model that might be handy for someone out there. \nWorks on iOS and Android',
		color:'#fff',
		font:{fontSize:15,fontWeight:'Bold'},
		shadowColor:'#000',
		shadowOffset:{x:1,y:1},
		textAlign:'center',
		top:15
	});
	
	var headline2 = Ti.UI.createLabel({
		text:'Layout: horizontal',
		color:'#fff',
		font:{fontSize:20,fontWeight:'Bold'},
		shadowColor:'#000',
		shadowOffset:{x:1,y:1},
		top:15,
		textAlign:'center'
	});	
	
	var radioGroup = radioButton.createGroup({
		groupId:1,
		width:320,
		height:60,
		layout:'horizontal',
		radioItemsValue:['One', 'Two', 'Three'],
		radioItemsPadding:10,
		radioItemsBackgroundSelectedImage:'/assets/radioButtonActive.png',
		radioItemsBackgroundImage:'/assets/radioButton.png',
		radioItemsWidth:33,
		radioItemsHeight:34
	});
	
	var headline3 = Ti.UI.createLabel({
		text:'Layout: vertical',
		color:'#fff',
		font:{fontSize:20,fontWeight:'Bold'},
		shadowColor:'#000',
		shadowOffset:{x:1,y:1},
		top:15,
		textAlign:'center'
	});		
	var radioGroup2 = radioButton.createGroup({
		groupId:1,
		width:150,
		height:150,
		layout:'vertical',
		radioItemsValue:['Top', 'Middle', 'Lower'],/*
			
		*/
		radioItemsPadding:10,
		radioItemsBackgroundSelectedImage:'/assets/radioButtonActive.png',
		radioItemsBackgroundImage:'/assets/radioButton.png',
		radioItemsWidth:33,
		radioItemsHeight:34
	});	
	
	
	var button = Ti.UI.createButton({
		title:'Get value', top: 20
	});
	button.addEventListener('singletap', function(e) {
		alert("Horizontal radioGroup selectedIdx: " + radioGroup.selectedValue + "\n Vertical radioGroup selectedIdx: " + radioGroup2.selectedValue);
	});

	var reset = Ti.UI.createButton({
		title:'Reset', top: 15
	});
	reset.addEventListener('singletap', function(e) {
		radioGroup.reset();
		radioGroup2.reset();
	});
		
	win.add(headline);
	win.add(text);
	win.add(headline2);
	win.add(radioGroup);
	win.add(headline3);
	win.add(radioGroup2);
	
	win.add(button);
	win.add(reset);
	win.open();

})();
