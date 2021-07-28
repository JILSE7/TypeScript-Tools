"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(ctx, originX, originY) {
        this.ctx = ctx;
        this.originX = originX;
        this.originY = originY;
    }
    return Shape;
}());
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(ctx, originX, originY, x, y) {
        var _this = _super.call(this, ctx, originX, originY) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    Line.prototype.drawLine = function () {
        this.ctx.moveTo(this.originX, this.originY);
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
    };
    return Line;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(ctx, originX, originY, radius) {
        var _this = _super.call(this, ctx, originX, originY) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.drawCircle = function () {
        ctx.beginPath();
        ctx.arc(this.originX, this.originY, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Circle;
}(Shape));
var TextShape = /** @class */ (function (_super) {
    __extends(TextShape, _super);
    function TextShape(ctx, originX, originY, text) {
        var _this = _super.call(this, ctx, originX, originY) || this;
        _this.text = text;
        return _this;
    }
    TextShape.prototype.drawText = function () {
        this.ctx.font = '30px Arial';
        this.ctx.fillText(this.text, this.originX, this.originY);
    };
    return TextShape;
}(Shape));
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.generateRandom = function () {
        return Math.floor(Math.random() * 500);
    };
    return MathHelper;
}());
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
var button = document.querySelector("#drawLine");
var buttonCircle = document.querySelector('#drawCircle');
var buttonText = document.querySelector('#drawText');
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    for (var index = 0; index < 5; index++) {
        var firstLine = new Line(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
        firstLine.drawLine();
    }
});
buttonCircle === null || buttonCircle === void 0 ? void 0 : buttonCircle.addEventListener('click', function () {
    for (var index = 0; index < 500; index++) {
        var firstCircle = new Circle(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), 5);
        firstCircle.drawCircle();
    }
});
buttonText === null || buttonText === void 0 ? void 0 : buttonText.addEventListener('click', function () {
    var firstText = new TextShape(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), 'Said');
    firstText.drawText();
});
/* firstLine.drawLine();
firstLine2.drawLine();

setTimeout(() => {
    window.location.reload();
}, 500); */
var firstLine2 = new Line(ctx, MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom(), MathHelper.generateRandom());
console.log(MathHelper.generateRandom());
