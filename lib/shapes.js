class Shape {
    constructor(shapeColor,text,textColor){
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

class Square extends Shape {
    constructor(shapeColor,text,textColor){
    super(shapeColor,text,textColor);
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
        `
    }
}

class Circle extends Shape {
    constructor(shapeColor,text,textColor){
        super(shapeColor,text,textColor);
    }
        render() {
            return `
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
            `;
        }
}

class Triangle extends Shape {
    constructor(shapeColor,text,textColor){
        super(shapeColor,text,textColor);
    }
    render() {
        return `
        <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>
        `
    }
}

function renderShape(userLogo) {
    let shape;
    let shapeRender;

    switch (userLogo.shape) {
        
        case "Square":
            shape = new Square(userLogo.shapeColor,userLogo.text, userLogo.textColor);
            shapeRender = shape.render();
            break;
        case "Circle":
            shape = new Circle(userLogo.shapeColor,userLogo.text, userLogo.textColor);
            shapeRender = shape.render();
            
            break;
        case "Triangle":
            shape = new Triangle(userLogo.shapeColor,userLogo.text, userLogo.textColor);
            shapeRender = shape.render();
            break;
        default:
            console.log(userLogo);
    }
    console.log("the shape is " + JSON.stringify(shape));

    return shapeRender;
    
}






module.exports = {Square,Circle, Triangle,renderShape};