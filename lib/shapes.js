class Shape {
    constructor(text, color, background) {
        this.text = text
        this.color = color
        this.background = background
    }

}

class Circle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        
        <circle cx="50" cy="50" r="49" stroke="black" stroke-width="2" fill="${this.background}" />
      
        <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="${this.color}">${this.text}</text>
      </svg>
      `
    }
}

class Triangle extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        
        <polygon points="50,0 0,100 100,100" fill="${this.background}" stroke="black" stroke-width="2" />
      
        
        <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="${this.color}">${this.text}</text>
      </svg>
      `
    }
}

class Square extends Shape {
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        
        <rect x="0" y="0" width="100" height="100" fill="${this.background}" stroke="black" stroke-width="2" />
      
        
        <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" font-size="16" fill="${this.color}">${this.text}</text>
      </svg>
      `
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
}