
      var leagueArray=[];
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
              //populateTeamList(data[i]);
            };

          if (data.length < 4) {
            //alert('There are less than 8 teams.');
            $('#alert').append('<div class="alert alert-info alert-text">Beer league will be formed when a minimum of 4 teams have registered.</div>');
          };
          if (data.length >= 8){
            $('#addTeamBtn').hide();
            $('#alert').append('<div class="alert alert-danger alert-text">Registration is closed. All spots are filled!</div>');
          };

            popTips();
            createSchedule()

          }
        }); // End .ajax()

        // Call Boostrap functions
        $('.alert').alert();
        $('#mgrTip').tooltip();
        $('#tips').popover();
        $('#teamModal').on('shown', function () {
            $('#teamName').focus();
        });

      }); // End doc.ready
       
        // BASEBALL SCRIPT ========================================================= -->
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
              popTips();
              }
          });

        }; // end add team


        function addTeamToTable(team) {    
          $(
            "<tr id='" + team.id + "'>" +
            "<td><span id='teamPop' data-placement='top' data-original-title='" + team.name + " Team Info' data-content='Mgr. Name: " + team.mgrFirst + " " + team.mgrLast + ", Phone: " + team.mgrPhone + ", Sponsor: " + team.sponsor + "'>" + team.name + "</span>" + "</td>" + 
            "<td><span id='mgrTip' data-placement='right' data-original-title='615-555-5555'>" + team.mgrFirst + " " + team.mgrLast + "</span></td>" + "<td>" + team.wins + "</td>" + 
            "<td>" + team.losses + "</td>" + "<td>" + ".000" + "</td>" + 
            "<td>" + "<div class='btn-group'>" + "<a class='btn btn-small dropdown-toggle' data-toggle='dropdown' href='#'> Manage <span class='caret'></span></a>" + "<ul class='dropdown-menu'>" + "<li>" + "<a href='#editTeam' data-toggle='modal'><i class='icon-edit'></i> Edit</a>" + "</li>" + "<li class='divider'>" + "</li>" + "<li>" + "<a href='#deleteConfirm' data-toggle='modal' onclick='deleteTeam(\"" + team.id + "\")'><i class='icon-remove'></i> Delete</a>" + "</li>" + "</ul>" + "</div>" + "</td>" + 
            "</tr>").appendTo('#standings tbody');          
            };       

        function clearForm() {
          $(".team_inputs").each(function () {
            $(this).val("");
          });
        };

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
          };

        // Call Bootstrap popover & tooltip functions 
        function popTips(id) { 
          $('#teamPop').popover();
          $('#mgrTip').tooltip();
        };

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
              success: function(response) {
                var n = response.length,
                    schedule = '';
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
  // Iterate over the teams
  $('#schedule').append( 'Week #' + (i + 1) );
  
  for (var j = 0; j < schedule[i].length; j++) {
    console.log( response[ schedule[i][j][0] - 1 ]  );
    console.log( response[ schedule[i][j][1] - 1 ]  );
    //$('#schedule').append(  response[ schedule[i][j][k] - 1].name );  
    
  }

}

                for (var i = 0; i < schedule.length; i++) {
                $('#Week1').append("<tr>" + 
                  "<td>" + response[i].name + " vs. " + response[i+1].name + "</td>" + 
                  "<td>" + 0 + " - " + 0 + "</td>" +
                  "</tr>" );
                  }
                }  //end success
              }); //end ajax
            }; //end createSchedule 