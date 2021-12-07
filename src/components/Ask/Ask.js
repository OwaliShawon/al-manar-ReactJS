import React from 'react';
import "../Ask/Ask.css"

const Ask = () => {
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    
    var i;
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }
    return (
        <div>
            <div class="accordionWrapper">
                <div class="accordionItem open">
                    <h2 class="accordionItemHeading">Accordions Menu HTML CSS <span>+</span></h2>

                    <div class="accordionItemContent">
                        <p>This simple accordion degrades gracefully in browsers that don't support JavaScript or CSS.</p>
                    </div>

                </div>

                <div class="accordionItem close">
                    <h2 class="accordionItemHeading">Accordion Menu Javascript  <span>+</span></h2>

                    <div class="accordionItemContent">
                        <p>A JavaScript accordion is made up of a number of expandable/collapsible items. Only one item is ever shown at a time.</p>
                    </div>
                </div>

                <div class="accordionItem close">
                    <h2 class="accordionItemHeading">Accordion Menu Jquery <span>+</span></h2>

                    <div class="accordionItemContent">
                        <p>Click an accordion item's heading to expand it. To collapse the item, click it again, or click another item heading.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ask;