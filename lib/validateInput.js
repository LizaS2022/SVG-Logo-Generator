const colorName = require('color-name-list');

function validateinputText(input) {
    
        if(input.length <= 3) {
            return true;
        }
        else {
            return "Maximum of three characters"
        }
    }

function validateColorName(input) {
        const colorEl = colorName.find((colorEl) => colorEl.name.toLowerCase() == input.toLowerCase());
        if (colorEl) {
            return true;
        }
        else {
            return "Please enter a valid color name";
        }
    }


    module.exports = { validateinputText, validateColorName };