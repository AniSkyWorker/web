function Circle() {
    Circle.superclass.constructor.apply(this)
    this._radius = 0;
    this._center = new Point();
}
extend(Circle, Shape)

Circle.prototype.setRadius = function (value) {
    this._radius = value;
}

Circle.prototype.getRadius = function () {
    return this._radius;
}

Circle.prototype.setCenter = function (x1, y1) {
    this._center._x = x1;
    this._center._y = y1;
}

Circle.prototype.getCenter = function () {
    return this._center;
}

Circle.prototype.draw = function (context) {
    context.beginPath();
    context.arc(this.getCenter()._x, this.getCenter()._y, this.getRadius(), 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
    Circle.superclass.draw.apply(this, context);
}

Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this._radius, 2)).toFixed(2);
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this._radius).toFixed(2);
}