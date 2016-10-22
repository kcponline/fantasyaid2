var runningbackAPILeft = function() {
  var queryURL = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=RB&format=json";
  var rbLeft = $('#rbInputLeft').val();
  console.log(rbLeft);
  console.log(queryURL);
  var catchTD, rushTD, passYardsLeft, rushYardsLeft;

  // Here we assemble our URL
  $.ajax({url: queryURL, method: "GET"}).done(function(response) {
    for (var i = 0; i < response.players.length; i++)
    if (rbLeft == response.players[i].name) {

        $("#rbLeftName").text(JSON.stringify(response.players[i].name));

        if (response.players[i].stats[13] === undefined) {
          $("#rbLeftRushes").html("0");
        } else {
          $("#rbLeftRushes").html(JSON.parse(response.players[i].stats[13]));
        }

        if (response.players[i].stats[14] === undefined) {
          $("#rbLeftRushYards").html("0");
          rushYardsLeft = 0;
        } else {
          $("#rbLeftRushYards").html(JSON.parse(response.players[i].stats[14]));
          rushYardsLeft = JSON.parse(response.players[i].stats[14] / 10);
        }

        if (response.players[i].stats[20] === undefined) {
          $("#rbLeftReceptions").html("0");
        } else {
          $("#rbLeftReceptions").html(JSON.parse(response.players[i].stats[20]));
        }

        if (response.players[i].stats[21] === undefined) {
          $("#rbLeftPassYards").html("0");
          passYardsLeft = 0;
        } else {
          $("#rbLeftPassYards").html(JSON.parse(response.players[i].stats[21]));
          passYardsLeft = JSON.parse(response.players[i].stats[21] / 10);
        }

        if (response.players[i].stats[22] === undefined) {
          catchTd = 0;
        } else {
          catchTd = JSON.parse(response.players[i].stats[22]);
        }

        if (response.players[i].stats[15] === undefined) {
          rushTD = 0;
        } else {
          rushTD = JSON.parse(response.players[i].stats[15]);
        }
        var totalTD = parseInt(catchTd) + parseInt(rushTD);
        $("#rbLeftTotalTD").html(totalTD);

        var totalTDLeft = totalTD * 6;

        var total = totalTDLeft + passYardsLeft + rushYardsLeft;
        $("#rbLeftPoints").html(total.toFixed(2));
      }
    });
};
