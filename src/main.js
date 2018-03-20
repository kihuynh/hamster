import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hamster } from './hamster.js';
import { Cage } from './game.js';

$(document).ready(function() {
  $("#hamster-form").submit(function(event){
    event.preventDefault();

    var name = $("#hamster-name").val();
    var cage = new Cage(name);

    $("#hamster-form").hide();
    $("#hamster-heaven").show();

    cage.waterLevel();
    cage.activityLevel();
    cage.poopLevel();

    setInterval(function() {
      $('#thirst').html(cage.hammie.thirst);
      $('#exercise').html(cage.hammie.exercise);
      $('#poop').html(cage.hammie.poop);
    });


    $('#drink').click(function(){
      cage.hammie.waterBottle();
    });

    $('#workout').click(function(){
      cage.hammie.hamsterWheel();
    });

    $('#use-toilet').click(function(){
      cage.hammie.toiletPoopies();
    });
  });
});
