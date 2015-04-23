var createCheck = require('radioCheck');
var listVHgroup = createCheck.createGroup({
    checkBox: 'yes',
    hidLabels: 'no',
    itemActiveImage: '/images/checkActive.png',
    itemInactiveImage: '/images/check.png',
    itemDisabledImage: '/images/checkDisabled.png',
    itemLabelFont: {},
    itemsPadding: 10,
    itemsHeight: 24,
    itemsWidth: 24,
    itemValues: ['Separated', 'By Commas', 'Selected', 'Disabled'],
    selectedValues: ['Selected', 'Item'],
    disabledValues: ['I am', 'Disabled'],
    itemsViewLayout: 'horizontal',
    layout: 'vertical'
});
$.checkboxgrp.add(listVHgroup);
$.checkboxgrp.height = $.checkboxgrp.children.height; //this is optional. Use ScrollView with custom height if you have big list.

var createRado = require('radioCheck');
var radioList = createRado.createGroup({
    checkBox: 'no',
    hidLabels: 'no',
    itemActiveImage: '/images/radioActive.png',
    itemInactiveImage: '/images/radio.png',
    itemDisabledImage: '/images/radioDisabled.png',
    itemLabelFont: {},
    itemsPadding: 10,
    itemsHeight: 24,
    itemsWidth: 24,
    itemValues: ['Separated', 'By Commas', 'Selected', 'Disabled'],
    selectedValues: ['Selected'],
    disabledValues: ['Disabled'],
    itemsViewLayout: 'horizontal',
    layout: 'vertical'
});
$.radiogrp.add(radioList);
$.radiogrp.height =$.radiogrp.children.height;

$.showMeBtn.addEventListener('click', function(e) {
    alert('Checkbox values:\n' + listVHgroup.selectedValues.join('\n') + '\n\nRadiobutton value: ' + radioList.selectedValues);
});

$.index.open();