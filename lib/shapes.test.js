const { Circle, Triangle, Square, Shape } = require('../lib/shapes')

describe('Square', () => {

    describe('squareColor', () => {
        it('should return pink for the square color', () => {
            const shape = new Square('ABC', 'black', 'pink');
            const result = shape.render('pink');
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><!-- Square --><rect x="0" y="0" width="100" height="100" fill="pink" stroke="black" stroke-width="2" /><text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="black">ABC</text></svg>`
            expect(result).toBe(expectedSVG)
        })
    }) 
});

describe('Circle', () => {

    describe('circleColor', () => {
        it('should return orange for the circle color', () => {
            const shape = new Circle('ABC', 'black', 'orange');
            const result = shape.render('orange');
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><!-- Circle --><circle cx="50" cy="50" r="49" stroke="black" stroke-width="2" fill="orange" /><text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="black">ABC</text></svg>`
            expect(result).toEqual(expectedSVG)
        })
    }) 
});

describe('Triangle', () => {

    describe('triangleColor', () => {
        it('should return red for the triangle color', () => {
            const shape = new Triangle('ABC', 'black', 'red');
            const result = shape.render('red');
            const expectedSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><!-- Triangle --><polygon points="50,0 0,100 100,100" fill="red" stroke="black" stroke-width="2" /><text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="black">ABC</text></svg>`
            expect(result).toBe(expectedSVG)
        })
    }) 
});

//testing specific methods in the constructor
describe('shapeClass', () => {
    it('should render an object with specific properties', () => {
        const shape = new Shape('ABC', 'green', 'red')
        expect(shape.text).toBe('ABC')
        expect(shape.color).toBe('green')
        expect(shape.background).toBe('red')
        
    })
})