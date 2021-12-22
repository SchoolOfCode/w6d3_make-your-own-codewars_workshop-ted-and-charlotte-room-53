import { getWordFromNumbers } from "../w6d3_make-your-own-codewars_workshop-ted-and-charlotte-room-53/main"


//👉 Write your tests below here:
describe("Kata tests", ()=>{
    test.each([[[6, 15, 15, 4], "food"],
    [[4, 15, 7], "dog"],
    [[23, 9, 12, 12, 9, 1, 13], "william"], 
    [[16, 27, 16, 31, 18], "paper"],
    [[29, 21, 16], "cup"], 
    [[97, 42, 53, 30, 135 ], "spade"]])
    ("Given an array, does the function return the correct word?", (input, output)=>{
        const actual = getWordFromNumbers(input)

        expect(actual).toBe(output)
    })
    test.each([[[-2, 3, 5, -8, 0], "This array is not valid."], 
    [[-1, 0], "This array is not valid."],
    [[], "This array is not valid."]])
    ("Given an invalid array, the function should throw an error.", (input, output)=>{
        expect(()=>{
            getWordFromNumbers(input)
        }).toThrow(output)
    })
})