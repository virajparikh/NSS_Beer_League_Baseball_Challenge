 // BASEBALL SCRIPT ========================================================= -->
      var leagueArray=[];
      var scoresAll=[];
      $(document).ready(function() {
        
        // Get teams from database
        $.ajax({
          url: 'backliftapp/team',
          type: "GET",
          dataType: "json",
          success: function (data) {
            leagueAll = data;
            for (var i = 0; i < data.length; i++) {
              addTeamToTable(data[i]);
            };

            // Call alerts function
            showAlerts();

            // Fire bootstrap popover and tooltip function
            popTips(); 
            createSchedule()

          } // End success
        }); // End .ajax()

        // Get scores from database
        $.ajax({
          url: 'backliftapp/scores',
          type: "GET",
          dataType: "json",
          success: function (data) {
            scoresAll = data;
            for (var i = 0; i < data.length; i++) {
              addScoresToTable(data[i]);
            };
          } // End success
        }); // End .ajax()

        // Call Boostrap functions
        $('.alert').alert();
        $('#mgrTip').tooltip();
        $('#tips').popover();
        $('#teamModal').on('shown', function () {
            $('#teamName').focus();
        });

      }); // END DOC .READY() ========================================================= -->


        var leagueAll = [];

        var team = {
          name: $("#teamName").val(),
          mgrFirst: $("#firstName").val(),
          mgrLast: $("#lastName").val(),
          mgrPhone: $("#phoneNum").val(),
          //mgrEmail: $("#email").val(),
          mgrZip: $("#zipCode").val(),
          sponsor: $("#sponsor").val(),
          wins: 0,
          losses: 0
        };

        // Add a team to The Beer League
        function addTeam() {
          var team = {
            name: $("#teamName").val(),
            mgrFirst: $("#firstName").val(),
            mgrLast: $("#lastName").val(),
            mgrPhone: $("#phoneNum").val(),
            //mgrEmail: $("#email").val(),
            mgrZip: $("#zipCode").val(),
            sponsor: $("#sponsor").val(),
            wins: 0,
            losses: 0
          };

          $.ajax({
            url: '/backliftapp/team',
            type: "POST",
            dataType: "json",
            data: team,
            success: function (data) {
              //console.dir(data);
              addTeamToTable(data);
              //populateTeamList(data); 
              clearForm();
              showAlerts();
              }
          });

        }; // end add team

        function addTeamToTable(team) {    
          $(
            "<tr id='" + team.id + "'>" +
            "<td>" + "<span id='teamPop' data-original-title='" + team.name + " Team Info' data-content='Mgr. Name: " + team.mgrFirst + " " + team.mgrLast + ", Phone: " + team.mgrPhone + ", Sponsor: " + team.sponsor + "'>" + team.name + "</span>" +
            "</td>" +
            "<td><span id='mgrTip' data-placement='left' data-original-title='" + team.mgrPhone + "'>" + team.mgrFirst + " " + team.mgrLast + "</span></td>" +
            "<td>" + team.wins + "</td>" +
            "<td>" + team.losses + "</td>" +
            "<td>" + ".000 %" + "</td>" +
            "<td>" + "<div class='btn-group'>" + "<a class='btn btn-small btn-inverse dropdown-toggle' data-toggle='dropdown' href='#'> Manage <span class='caret'></span></a>" + "<ul class='dropdown-menu'>" + 
              "<li>" + "<a href='#editTeam' data-toggle='modal'><i class='icon-edit'></i> Edit</a>" + "</li>" +
              "<li class='divider'>" + "</li>" +
              "<li>" + "<a href='#deleteConfirm' data-toggle='modal' onclick='deleteTeam(\"" + team.id + "\")'><i class='icon-remove'></i> Delete</a>" + "</li>" + 
            "</ul>" + "</div>" + "</td>" +
            "</tr>").appendTo('#standings tbody'
          );          
        }        

        function clearForm() {
          $(".team_inputs", "#scoreOne", "#scoreTwo").each(function () {
            $(this).val("");
          });
        };

        // Edit team info
        // function editTeam(id) {

        //   $('#edit').click(function() {
        //     $.ajax({
        //       url: '/backliftapp/team/' + id,
        //       type: "PUT",
        //       dataType: "json",
        //       data: team,
        //       success: function (data) {
        //         console.dir(data);
        //         addTeamToTable(data);
        //         //populateTeamList(data); 
        //         clearForm();
        //         popTips();
        //         }
        //     });
        //   }); // End .click()

        // }; // End editTeam()

        function deleteTeam(id) {
          $('#cutTeam').click(function() {
            $.ajax({
              url: "backliftapp/team/" + id,
              type: "DELETE",
              dataType: "json",
              success: function () {
                $('#' + id).remove();
              }
            }); // End .ajax()
          }); // End .click()
        }; // End deleteTeam()

        // Call Bootstrap popover & tooltip functions 
        function popTips(id) { 
          $('#standings').popover({
            selector: "#teamPop",
            html: true
          });
          $('#standings').tooltip({
            selector: "#mgrTip",
            html: true
          });
        }

        function showAlerts() {
          $('#register').click(function() {
            if (leagueAll.length < 4) {
              $('#alert').append('<div class="alert alert-info alert-text">Beer league will be formed when a minimum of 4 teams have registered.</div>');
            }; // End if

            if (leagueAll.length >= 8){
              alert('There are 8 teams.');
              $('#addTeamBtn').hide();
              $('#alert').append('<div class="alert alert-danger alert-text">Registration is closed. All spots are filled!</div>');
            };
          }); // End .click()

        } // End showAlerts()

        function createSchedule() {

            var sched4 = [ 
                        [ [1, 4], [2, 3 ] ],
                        [ [1, 3], [2, 4] ],
                        [ [1, 2], [3, 4] ]
                        ];

            var sched6 = [ 
                        [ [1, 6], [2, 5], [3, 4] ],
                        [ [1, 5], [4, 6], [2, 3] ],
                        [ [1, 4], [3, 5], [2, 6] ],
                        [ [1, 3], [2, 4], [5, 6] ],
                        [ [1, 2], [3, 6], [4, 5] ],
                        ];

            var sched8 = [
                        [ [1, 8], [2, 7], [3, 6], [4, 5] ],
                        [ [1, 7], [6, 8], [2, 5], [3, 4] ],
                        [ [1, 6], [5, 7], [4, 8], [2, 3] ],
                        [ [1, 5], [4, 6], [3, 7], [2, 8] ],
                        [ [1, 4], [3, 5], [2, 6], [7, 8] ],
                        [ [1, 3], [2, 4], [5, 8], [6, 7] ],
                        [ [1, 2], [3, 8], [4, 7], [5, 6] ],
                        ];

          $.ajax({
              url: '/backliftapp/team',
              type: "GET",
              dataType: "json",
              success: function(data) {  //data is the old "data" - the data we get back from the json file
                var n = data.length,
                    schedule ;
                if( n == 4 ){
                  schedule = sched4;
                } else if( n == 5 || n == 6 ){
                  schedule = sched6;
                } else if( n == 7 || n == 8 ){
                  schedule = sched8;
                }
                //console.log(schedule);

                // Iterate the Weeks
                for (var i = 0; i < schedule.length; i++) {  
                
                  $('#schedule').append('<table class="table table-bordered span12"><thead><tr><th> Week ' + (i + 1) + '<th>Final Scores</th></tr></thead><tbody id="weekOneMatches"></tbody></table>')
                  
                  // Iterate over the teams
                  if (n % 2 == 0) {  
                    for (var j = 0; j < schedule[i].length; j++) {
                      // console.log( data[ schedule[i][j][0] - 1 ].name  );  
                      // console.log( data[ schedule[i][j][1] - 1 ].name  );
                      //$('#schedule').append(  data[ schedule[i][j][k] - 1].name );  
                        $('#weekOneMatches').append("<tr><td>" + data[ schedule[i][j][0] - 1 ].name + " vs " + data[ schedule[i][j][1] - 1 ].name + "</td><td id='scores'></td></tr>"); // data is the data returned from json, so in this case data[].name is the team name

                        $('#teamVS').append('<option>' + data[ schedule[i][j][0] - 1 ].name + " vs " + data[ schedule[i][j][1] - 1 ].name + '</option>');                    
                    } // End for()
                  }
                  else {  //if odd number of teams 
                    for (var j = 0; j < schedule[i].length; j++) {
                      if ( schedule[i][j][1] === schedule.length+1) {
                         $('#schedule').append(data[ schedule[i][j][0] - 1 ].name + " BYE" + "<br>");
                         } else {
                        $('#schedule').append("<tr><td><span id='" + data[ schedule[i][j][0] - 1 ].id + "'>" + data[ schedule[i][j][0] - 1 ].name + "</span> vs <span id='" + data[ schedule[i][j][1] - 1 ].id + "'>" + data[ schedule[i][j][1] - 1 ].name + "</span></td><td id='scores'></td></tr>");

                          $('#teamVS').append('<option id=' + optionID + ' data-teams=''><span id=' + data[ schedule[i][j][0] - 1 ].id + '>' + data[ schedule[i][j][0] - 1 ].name + "</span> vs <span id='" + data[ schedule[i][j][1] - 1 ].id + "'>" + data[ schedule[i][j][1] - 1 ].name + '</option>' )
                          };

                    }; //end for statement
                  } //end else statement for odd number of team
                }; //end of original for statement
              }  //end success
          }); //end ajax
        }; //end createSchedule

        var scoresAll = [];

        var matches = {
          teams: $("#teamVS").val(),
          teamOneScore: $("#scoreOne").val(),
          teamTwoScore: $("#scoreTwo").val(),
        };

      function addScores() {
        var matches = {
          teams: $("#teamVS").val(),
          teamOneScore: $("#scoreOne").val(),
          teamTwoScore: $("#scoreTwo").val(),
        };

        $.ajax({
          url: '/backliftapp/scores',
          type: "POST",
          dataType: "json",
          data: matches,
          success: function (data) {
            addScoresToTable(data);                 
            clearForm();
            }
        }); // End .ajax()
      }; // End updateScores()

      function addScoresToTable(matches) {
        $('#testTable tbody').append("<tr id='" + matches.id + "'><td>" + matches.id + "</td><td>" + matches.teams + "</td><td></td><td>" + matches.teamOneScore + " - " + matches.teamTwoScore + "</td><td><a class='btn btn-mini' href='#deleteScoresConfirm' data-toggle='modal' onclick='deleteScores(\"" + matches.id + "\")'><i class='icon-remove'></i></a></td></tr>");
      }

      function deleteScores(id) {
        $('#deleteScore').click(function() {
          $.ajax({
            url: "backliftapp/scores/" + id,
            type: "DELETE",
            dataType: "json",
            success: function () {
              $('#' + id).remove();
            }
          }); // End .ajax()
        }); // End .click()
      }; // End deleteScores()