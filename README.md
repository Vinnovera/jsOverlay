jsOverlay
=========
A responsive, cross platform, touch friendly, library agnostic lightbox overlay written in javascript.

## The point and limits with jsOverlay
With jsOverlay the point is not to provide a simple plug and play tool that takes care of all your problems, but rather to provide something to make life a little easier for developers already fluent in javascript, CSS and HTML. Thus there is no styling, nor image loading, image sliding or other features of that kind. You will need to provide your own, which I am quite sure that you are capable of :)

The reason to use jsOverlay for your lightboxing is to get something that works well across a large number of platforms without locking you into a particular framework or requiring you to jump through hoops to force jsOverlay to fit with your needs. 

## How to use
When creating a new overlay, make a new object like so:

```
jso = new jsOverlay({
	content: 'my_content'
});
```

The only option that must be set is the "content"-option, which is the ID of the element you wish to be the container of the content you want to place in the overlay. The default setting is that this will add the overlay element to your DOM and append your content element to it at creation. 

As a default, you will also get at "Close"-button appended to the overlay element. 

Also as a default, the close-button will get the CSS class "jso-close", and the overlay will have the CSS class "jso-overlay", which you can use to apply styling to them as needed. 

## Options
There are serveral options that you can use to modify the behaviour of jsOverlay. The default options-object looks like this:

```
{
	content: '',
	showOnCreate: true,
	zIndex: 10000,
	styleNS: 'jso-',
	styleNames: {
		overlay: 'overlay',
		closebutton: 'closebutton'
	},
	additionalStyleClasses: {
		closebutton: '',
		overlay: ''
	},
	usePushState: true,
	pushStateName: 'jso',
	closebutton: {
		show: true,
		text: 'Close',
		margin: {
			top: 10,
			right: 10
		}
	},
	modal: true,
	scrollable: true,
	onBeforeClose: function(){},
	onClose: function(){},
	onOpen: function(){}
}
```

#### content
This is the content element you wish to append to the overlay. 

#### showOnCreate
If this is 'true', the overlay will be appended to your DOM on creation, otherwise it will not. 

#### zIndex
The z-index of the overlay. 

#### styleNS
The styling namespace for the classes that are added to the overlay and close-elements. 

#### styleNames
The class names for the overlay and close-elements. They are constructed from styleNS + styleName like this: 'jso-' + 'overlay' = 'jso-overlay'.

#### additionalStyleClasses
If you should wish to add more classes than the default class names (a common reason would be to add the regular 'button'-class of your project to the close-button), add them here. 

#### usePushState
If this is 'true', jsOverlay will use the history object where available to enable the back button to close the overlay. A reason to disable this would be if this somehow is in conflict with your own usage of the history object. 

#### pushStateName
A custom name for the pushstate if you for some reason dislike '#jso'.

#### closebutton
##### show
If 'true', the close-button will be appended. 
##### text
The text of the close-button. 
##### margin
The close-button is placed in the top right corner of your browser, with these margins. Other positioning options of the close-button will come later. 

#### modal
If set to 'true', the content will be assumed to be positioned in the middle of the screen. If set to 'false', the assumption will be that the content will be taking up all of the available space.

#### scrollable
If the content is larger than the available screen space and scrollable is 'true', the user will be able to scroll the content. If set to 'false' scrolling will be locked. 

#### onBeforeClose
A function that will trigger just before the closing functions is triggered. Good to use if you wish to grab your content element and inject a another point of the DOM before losing it. 

#### onClose
Triggers after all closing is done. 

#### onOpen
Triggers after all opening is done. 

## Examples
Look in the demo folder to see some basic examples of how to use jsOverlay. 