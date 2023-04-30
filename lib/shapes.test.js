
const { describe } = require("node:test");
const { validateinputText, validateColorName } = require("./validateInput");

describe ("validateInput", () =>{
    describe("validateinputText", () =>{
        it("should throw an error when the input length is more than three characters", () =>{

            const value  = "Atlanta";
                expect(validateinputText(value)).toEqual("Maximum of three characters");
        })
    })

    describe(validateinputText, () => {
        it("should return true if the input is less than three characters", () =>{
            expect(validateinputText("lev")).toEqual(true);
        })
    })
})

describe ("validateInput", () =>{
    describe("validateColorName", () =>{
        it("should throw an error when the color name is invalid", () =>{
                expect(validateColorName("reedd")).toEqual("Please enter a valid color name");
        })
    })

    describe("validateColorName", () =>{
        it("should return true if the color name is in the color-list-name", () =>{
                expect(validateColorName("red")).toEqual(true);
        })
    })
})
