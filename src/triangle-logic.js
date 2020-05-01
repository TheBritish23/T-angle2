export function Triangle(side1, side2, side3){
  console.log(side1, side2, side3);
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  debugger;
}

  Triangle.prototype.Typecheck = function();
    if ((this.side1 > (this.side2 > this.side3))) || ((this.side3 > (this.side2 > this.side1))) || ((this.side2 > (this.side3 > this.side1))) || ((this.side1 > (this.side3 > this.side2))) {
      return "not a triangle"

      {  else if ((this.side1 > (this.side2 > this.side3))) || ((this.side3 > (this.side2 > this.side1))) || ((this.side2 > (this.side3 > this.side1))) || ((this.side1 > (this.side3 > this.side2))) {
         return "isoceles"
      }

      {  else if ((this.side1 > (this.side2 > this.side3))) || ((this.side3 > (this.side2 > this.side1))) || ((this.side2 > (this.side3 > this.side1))) || ((this.side1 > (this.side3 > this.side2))) {
          return "scalene"
      }

      }
    }
