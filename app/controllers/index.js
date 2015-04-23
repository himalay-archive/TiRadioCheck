var createRadoCheck = require('radioCheck');
var listVHgroup = createRadoCheck.createGroup({
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

var radioList = createRadoCheck.createGroup({
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
// event listeners
$.showMeBtn.addEventListener('click', function(e) {
    alert("Checkbox values:\n" + listVHgroup.selectedValues.join("\n") + "\n\nRadiobutton value: " + radioList.selectedValues);
});

$.index.open();