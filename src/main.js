import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Triangle} from "./triangle-logic.js";

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var Angle1 = parseInt($("input#AngleOne").val());
    var Angle2 = parseInt($("input#AngleTwo").val());
    var Angle3 = parseInt($("input#AngleThree").val());
    var newTriangle = new Triangle(Angle1, Angle2, Angle3);
    var sum = Angle1+Angle2+Angle3;
    console.log(newTriangle, "newTriangle");
    $("#output").text(sum);

    $("#type").text(newTriangle.Typecheck());
    // if (Angle1&&Angle2)(Angle2&&Angle3)(Angle3&&Angle1) {
    //
    // }
    event.preventDefault();
  });
});
