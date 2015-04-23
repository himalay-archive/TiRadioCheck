#TiRadioCheck
#####A Crossplatform RadioButton and CheckBox in Titanium
I have added CheckBox and other useful bits on top of [yozef/TiRadioButtonGroup](https://github.com/yozef/TiRadioButtonGroup).

## WHAT'S NEW??
### TiRadioCheck V.1
##### 23 Apr 2015

* CheckBox option added

* Added option to hide/show the Labels

* Now you can have Preselected items

* You can also throw some Disabled items

* And you get reasults as an array of Labels 

### See it for yourself
<!---
![TiRadioButtonGroup](http://i62.tinypic.com/auwmrp.png "RadioButtons")
-->

### How the hell do I use it?
* Place the ```checkRadio.js``` file into ```/apps/lib/``` folder in Alloy project or ```/resources/lib/``` folder in Clasic project.
* Place the all ```*.png``` files from `/images/` to `/app/assets/images/` in Alloy project or `/Resources/images/` folder in Clasic project. *(Create the `images` folder if it is not there.)*
* Now you can start using it in your project by doing 
```JavaScript 
    var checkBox = require(checkRadio);
    var listOfStuff = new checkBox.createGroup({
    checkBox: 'yes', //boolen
    hidLabels: 'no', //boolen
    itemActiveImage: '/images/checkActive.png',
    itemInactiveImage: '/images/check.png',
    itemDisabledImage: '/images/checkDisabled.png',
    itemLabelFont: {},
    itemsPadding: 10,
    itemsHeight: 24,
    itemsWidth: 24,
    itemValues: ['Separated', 'By Commas'],
    selectedValues: ['There','Separated'],
    disabledValues: ['I am','Disabled'],
    itemsViewLayout: 'horizontal',
    layout: 'vertical'
});```
