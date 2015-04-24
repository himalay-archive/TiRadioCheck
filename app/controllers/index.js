var createRadioCheck = require('radioCheck');
var listVHgroup = createRadioCheck.createGroup({
    checkBox: 'yes',
    hidLabels: 'no',
    itemActiveImage: '/images/checkActive.png',
    itemInactiveImage: '/images/check.png',
    itemDisabledImage: '/images/checkDisabled.png',
    itemLabelFont: {},
    itemPadding: 10,
    itemHeight: 24,
    itemWidth: 24,
    itemValues: ['Separated', 'By Commas', 'Selected', 'Disabled'],
    selectedValues: ['Selected'],
    disabledValues: ['I am', 'Disabled'],
    labelFontColor: '#000',
    itemViewLayout: 'horizontal',
    layout: 'vertical',
    top: 0,
    bottom: 0
});
$.checkboxgrp.add(listVHgroup);
$.checkboxgrp.height=$.checkboxgrp.children[0].height; // if you have long list, you might wanna use scrollview with a another height.

var radioList = createRadioCheck.createGroup({
    checkBox: 'no',
    hidLabels: 'no',
    itemActiveImage: '/images/radioActive.png',
    itemInactiveImage: '/images/radio.png',
    //    itemDisabledImage: '/images/radioDisabled.png', //only for checkbox.
    itemLabelFont: {},
    itemPadding: 10,
    itemHeight: 24,
    itemWidth: 24,
    itemValues: ['Separated', 'By Commas', 'Selected'],
    selectedValues: ['Selected'],
    //    disabledValues: [], //only for checkbox.
    labelFontColor: '#000',
    itemViewLayout: 'horizontal',
    layout: 'vertical'
});
$.radiogrp.add(radioList);
$.radiogrp.height=$.radiogrp.children[0].height; // if you have long list, you might wanna use scrollview with a another height.

$.showMeBtn.addEventListener('click', function(e) {
    alert('Checkbox values:\n' + listVHgroup.selectedValues.join('\n') + '\n\nRadiobutton value: ' + radioList.selectedValues);
});

$.index.open();