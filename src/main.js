import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var Angle1 = parseInt($("input#AngleOne").val());
    var Angle2 = parseInt($("input#AngleTwo").val());
    var Angle3 = parseInt($("input#AngleThree").val());
    var sum = Angle1+Angle2+Angle3;
    console.log(sum);
  });
});
