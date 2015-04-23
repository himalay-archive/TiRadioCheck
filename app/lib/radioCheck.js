//
// https://github.com/himalay/TiRadioCheck.git
//
exports.createGroup = function(arg) {

    var combinedValues = _.isEqual(arg.checkBox,'yes')?_.union(arg.itemValues, arg.selectedValues, arg.disabledValues):_.union(arg.itemValues, arg.selectedValues);
        var itemsActualHeight = arg.itemsHeight + arg.itemsPadding;
    var self = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: _.isEqual(arg.layout, 'vertical') ? itemsActualHeight * combinedValues.length : itemsActualHeight,
        selectedValues: arg.selectedValues,
        layout: arg.layout,
        top: 50,
    });
    for (var i = 0, count = combinedValues.length; i < count; i++) {
        var itemsView = Ti.UI.createView({
            layout: arg.itemsViewLayout,
            width: Ti.UI.SIZE,
            height: arg.itemsHeight,
            left: _.isEqual(arg.layout, 'vertical') ? 0 : arg.itemsPadding,
            top: _.isEqual(arg.layout, 'vertical') ? arg.itemsPadding : null,
        });
        var itemImg = Ti.UI.createImageView({
            width: arg.itemsWidth,
            height: arg.itemsHeight,
            image: _.isEqual(arg.checkBox, 'no') ? _.contains(arg.selectedValues, combinedValues[i]) ? arg.itemActiveImage : arg.itemInactiveImage :
_.contains(arg.disabledValues, combinedValues[i]) ? arg.itemDisabledImage : _.contains(arg.selectedValues, combinedValues[i]) ? arg.itemActiveImage : arg.itemInactiveImage,
            //_.contains(arg.disabledValues, combinedValues[i]) ? arg.itemDisabledImage : _.contains(arg.selectedValues, combinedValues[i]) ? arg.itemActiveImage : arg.itemInactiveImage,
            /*_.isEqual(arg.checkBox, 'yes') ?
                _.contains(arg.selectedValues, combinedValues[i]) ?
                arg.itemActiveImage :
                _.contains(arg.disabledValues, combinedValues[i]) ?
                arg.itemDisabledImage :
                arg.itemInactiveImage : _.isEqual(arg.selectedValues, combinedValues[i]) ?
                arg.itemActiveImage : _.isEqual(arg.disabledValues, combinedValues[i]) ?
                arg.itemDisabledImage : arg.itemInactiveImage,*/
            top: 0,
            left: _.isEqual(arg.layout, 'vertical') ? null : _.isEqual(arg.itemsViewLayout, 'vertical') ? null : 5,
            id: i,
        });

        var itemLabel = Ti.UI.createLabel({
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            text: combinedValues[i],
            font: arg.itemLabelFont,
            color: '#000',
            top: _.isEqual(arg.layout, 'vertical') ? null : 5,
            left: _.isEqual(arg.layout, 'vertical') ? 5 : _.isEqual(arg.itemsViewLayout, 'vertical') ? null : 5,
            id: i,
        });

        if (i != 0 && !_.isEqual(arg.layout, 'vertical')) {
            itemsView.setLeft(arg.itemsPadding);
        }
        if (i != 0 && _.isEqual(arg.layout, 'vertical')) {
            itemsView.setTop(arg.itemsPadding);
        }
        if (arg.hidLabels === 'yes') {
            itemLabel.width = 0;
            itemLabel.height = 0;
            itemLabel.top = 0;
            itemLabel.bottom = 0;
            itemLabel.left = 0;
            itemLabel.visible = false;
        }

        function toggleImage(e) {
            var theParent = this.getParent().getParent();
            for (var i = 0, count = theParent.children.length; i < count; i++) {
                if (i === e.source.id) {
                    if (arg.checkBox === 'yes') {
                        if (theParent.children[i].children[0].image !== arg.itemDisabledImage) {
                            if (theParent.children[i].children[0].image === arg.itemInactiveImage) {
                                theParent.children[i].children[0].setImage(arg.itemActiveImage);
                                arg.selectedValues.push(theParent.children[i].children[1].text.toString());
                            } else {
                                theParent.children[i].children[0].setImage(arg.itemInactiveImage);
                                var index = arg.selectedValues.indexOf(theParent.children[i].children[1].text.toString());
                                if (index > -1) {
                                    arg.selectedValues.splice(index, 1);
                                }
                            }
                        }
                    } else if(theParent.children[i].children[0].image !== arg.itemDisabledImage) {
                        
                            theParent.children[i].children[0].setImage(arg.itemActiveImage);
                            arg.selectedValues = theParent.children[i].children[1].text;

                    }
                    theParent.selectedValues = arg.selectedValues;
                    
                } else if((theParent.children[i].children[0].image !== arg.itemDisabledImage)){
                        theParent.children[i].children[0].setImage(arg.itemInactiveImage);
              
                }
                

            }
        }
      /*  function toggleImage(e) {
            var theParent = this.getParent().getParent();
            if (arg.checkBox === 'yes') {
                for (var i = 0, count = theParent.children.length; i < count; i++) {
                    if (i === e.source.id) {
                        if (theParent.children[i].children[0].image != arg.itemDisabledImage) {
                            if (theParent.children[i].children[0].image === arg.itemInactiveImage) {
                                theParent.children[i].children[0].setImage(arg.itemActiveImage);
                                arg.selectedValues.push(theParent.children[i].children[1].text.toString());
                            } else {
                                theParent.children[i].children[0].setImage(arg.itemInactiveImage);
                                var index = arg.selectedValues.indexOf(theParent.children[i].children[1].text.toString());
                                if (index > -1) {
                                    arg.selectedValues.splice(index, 1);
                                }
                            }
                        }
                    }
                    theParent.selectedValues = arg.selectedValues;
                }
            } else {
                for (var i = 0, count = theParent.children.length; i < count; i++) {
                    if (i === e.source.id) {
                        if (theParent.children[i].children[0].image != arg.itemDisabledImage) {
                            theParent.children[i].children[0].setImage(arg.itemActiveImage);
                            arg.selectedValues = theParent.children[i].children[1].text;
                        }
                    } else {
                        if (theParent.children[i].children[0].image != arg.itemDisabledImage) {
                            theParent.children[i].children[0].setImage(arg.itemInactiveImage);
                        }
                    }
                }
                theParent.selectedValues = arg.selectedValues;
            }
        }*/

        itemImg.addEventListener('singletap', toggleImage);
        itemLabel.addEventListener('singletap', toggleImage);

        itemsView.add(itemImg);
        itemsView.add(itemLabel);
        self.add(itemsView);
    }
    return self;
};