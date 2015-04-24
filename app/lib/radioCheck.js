//
// https://github.com/himalay/TiRadioCheck.git
//
exports.createGroup = function(arg) {

    var combinedValues = _.isEqual(arg.checkBox,'yes')?_.union(arg.itemValues, arg.selectedValues, arg.disabledValues):
                            _.union(arg.itemValues, arg.selectedValues);
        combinedValues = combinedValues.sort();
    var itemActualHeight = arg.itemHeight + arg.itemPadding;
    var self = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: _.isEqual(arg.layout, 'vertical') ? itemActualHeight * combinedValues.length : itemActualHeight,
        selectedValues: arg.selectedValues,
        layout: arg.layout,
        top: 0,
    });
    for (var i = 0, count = combinedValues.length; i < count; i++) {
        var itemView = Ti.UI.createView({
            layout: arg.itemViewLayout,
            width: Ti.UI.SIZE,
            height: arg.itemHeight,
            left: _.isEqual(arg.layout, 'vertical') ? 0 : arg.itemPadding,
            top: _.isEqual(arg.layout, 'vertical') ? arg.itemPadding : null,
        });
        var itemImg = Ti.UI.createImageView({
            width: arg.itemWidth,
            height: arg.itemHeight,
            image: _.isEqual(arg.checkBox, 'no') ? 
                    _.contains(arg.selectedValues, combinedValues[i]) ? arg.itemActiveImage : arg.itemInactiveImage :
                    _.contains(arg.disabledValues, combinedValues[i]) ? arg.itemDisabledImage : 
                    _.contains(arg.selectedValues, combinedValues[i]) ? arg.itemActiveImage : arg.itemInactiveImage,
            top: 0,
            left: _.isEqual(arg.layout, 'vertical') ? null : _.isEqual(arg.itemViewLayout, 'vertical') ? null : 5,
            id: i,
        });

        var itemLabel = Ti.UI.createLabel({
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            text: combinedValues[i],
            font: arg.itemLabelFont,
            color: arg.labelFontColor,
            top: _.isEqual(arg.layout, 'vertical') ? null : 5,
            left: _.isEqual(arg.layout, 'vertical') ? 5 : _.isEqual(arg.itemViewLayout, 'vertical') ? null : 5,
            id: i,
        });

        if (i != 0 && !_.isEqual(arg.layout, 'vertical')) {
            itemView.setLeft(arg.itemPadding);
        }
        if (i != 0 && _.isEqual(arg.layout, 'vertical')) {
            itemView.setTop(arg.itemPadding);
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
                            theParent.children[i].children[0].setImage(arg.itemActiveImage);
                            arg.selectedValues = theParent.children[i].children[1].text;
                    } else {
                            theParent.children[i].children[0].setImage(arg.itemInactiveImage);
                    }
                }
                theParent.selectedValues = arg.selectedValues;
            }
        }

        itemImg.addEventListener('singletap', toggleImage);
        itemLabel.addEventListener('singletap', toggleImage);

        itemView.add(itemImg);
        itemView.add(itemLabel);
        self.add(itemView);
    }
    return self;
};