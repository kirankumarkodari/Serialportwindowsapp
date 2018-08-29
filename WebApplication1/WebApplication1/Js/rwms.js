$(function () {
//SumoSelect intialization
$('.station').SumoSelect({ search: true, searchText: 'Enter here.', forceCustomRendering: true });
$('.department').SumoSelect({ search: true, searchText: 'Enter here.', forceCustomRendering: true });
});
        //  #Start Region add Station text Box validation
        $('#StnEntryTxt').bind('keypress', function (event) {
                      var regex = new RegExp("^[a-zA-Z\b]+$");
                      var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                          if (!regex.test(key)) {
                               event.preventDefault();
                               $("#StnEntryErr").css("display",regex.test(key) ? "none" : "inline");
                               return false;
                            }
                            else {
                              $("#StnEntryErr").css("display", "none");
                              $("#StnAddBtn").addClass("btnEnable");
                              $("#StnAddBtn").prop('disabled', false);
                              $("#StnAddBtn").removeClass("btnDisable");
                            }
              });
      $('#StnEntryTxt').keyup(function(){
                if($(this).val().length ==0) {
                  $("#StnAddBtn").addClass("btnDisable");
                  $("#StnAddBtn").prop('disabled', true);
                  $("#StnAddBtn").removeClass("btnEnable");
              }
                else{
                  $("#StnAddBtn").addClass("btnEnable");
                  $("#StnAddBtn").prop('disabled', false);
                  $("#StnAddBtn").removeClass("btnDisable");
                }
        });
        $('#addStnMdl').on('hidden.bs.modal', function () {
          //Clear Textbox when Modal Closed
          document.getElementById("StnEntryTxt").value = "";
          $("#StnAddBtn").addClass("btnDisable");
          $("#StnAddBtn").prop('disabled', true);
          $("#StnAddBtn").removeClass("btnEnable");
        });
      //  #End Region add Station text Box validation

      //  #Start Region Rename Station text Box validation
        $('#RnTxtBox').bind('keypress', function (event) {
                var regex = new RegExp("^[a-zA-Z\b]+$");
                var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                    if (!regex.test(key)) {
                         event.preventDefault();
                         $("#RnStnEntryErr").css("display",regex.test(key) ? "none" : "inline");
                               return false;
                                  }
                     else {
                        $("#RnStnEntryErr").css("display", "none");
                        $("#StnRnModfyBtn").addClass("btnEnable");
                        $("#StnRnModfyBtn").prop('disabled', false);
                        $("#StnRnModfyBtn").removeClass("btnDisable");
                          }
        });
              $('#RnTxtBox').keyup(function(){
                        if($(this).val().length ==0) {
                          $("#StnRnModfyBtn").addClass("btnDisable");
                          $("#StnRnModfyBtn").prop('disabled', true);
                          $("#StnRnModfyBtn").removeClass("btnEnable");
                      }
                        else{
                          $("#StnRnModfyBtn").addClass("btnEnable");
                          $("#StnRnModfyBtn").prop('disabled', false);
                          $("#StnRnModfyBtn").removeClass("btnDisable");
                        }
                });
                $('#RenameStnMdl').on('hidden.bs.modal', function () {
                  //Clear Textbox when Modal Closed
                  document.getElementById("RnTxtBox").value = "";
                  document.getElementById("RnTxtBox").readOnly = true;
                  $("#StnRnModfyBtn").removeClass("btnEnable");
                  $("#StnRnModfyBtn").addClass("btnDisable");
                  $("#StnRnModfyBtn").prop('disabled', true);
                  //$('select#stationRnSel')[0].sumo.selectItem(0);
                });
              //  #End Region Rename Station text Box validation

      //  #Start Region add Depratment text Box validation
      $('#addDeptTxtBox').bind('keypress', function (event) {
                    var regex = new RegExp("^[a-zA-Z0-9\b]+$");
                    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                        if (!regex.test(key)) {
                             event.preventDefault();
                             $("#deptEntryErr").css("display",regex.test(key) ? "none" : "inline");
                             return false;
                          }
                          else {
                            $("#deptEntryErr").css("display", "none");
                            $("#addDeptBtn").addClass("btnEnable");
                            $("#addDeptBtn").prop('disabled', false);
                            $("#addDeptBtn").removeClass("btnDisable");
                          }
            });
    $('#addDeptTxtBox').keyup(function(){
              if($(this).val().length ==0) {
              $("#addDeptBtn").addClass("btnDisable");
              $("#addDeptBtn").prop('disabled', true);
              $("#addDeptBtn").removeClass("btnEnable");
            }
              else{
              $("#addDeptBtn").addClass("btnEnable");
              $("#addDeptBtn").prop('disabled', false);
              $("#addDeptBtn").removeClass("btnDisable");
              }
      });
      $('#addDeptMdl').on('hidden.bs.modal', function () {
        //Clear Textbox when Modal Closed
        document.getElementById("addDeptTxtBox").value = "";
        $("#addDeptBtn").removeClass("btnEnable");
        $("#addDeptBtn").addClass("btnDisable");
        $("#addDeptBtn").prop('disabled', true);
      });
    //  #End Region add Depratment text Box validation

    //  #Start Region Rename Depratment text Box validation
    $('#deptRnTxtBox').bind('keypress', function (event) {
                  var regex = new RegExp("^[a-zA-Z0-9\b]+$");
                  var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
                      if (!regex.test(key)) {
                           event.preventDefault();
                           $("#deptRnEntryErr").css("display",regex.test(key) ? "none" : "inline");
                           return false;
                        }
                        else {
                          $("#deptRnEntryErr").css("display", "none");
                          $("#deptMdfyBtn").addClass("btnEnable");
                          $("#deptMdfyBtn").prop('disabled', false);
                          $("#deptMdfyBtn").removeClass("btnDisable");
                        }
          });
  $('#deptRnTxtBox').keyup(function(){
            if($(this).val().length ==0) {
            $("#deptMdfyBtn").addClass("btnDisable");
            $("#deptMdfyBtn").prop('disabled', true);
            $("#deptMdfyBtn").removeClass("btnEnable");
          }
            else{
            $("#deptMdfyBtn").addClass("btnEnable");
            $("#deptMdfyBtn").prop('disabled', false);
            $("#deptMdfyBtn").removeClass("btnDisable");
            }
    });
    $('#RenameDeptMdl').on('hidden.bs.modal', function () {
      //Clear Textbox when Modal Closed
      document.getElementById("deptRnTxtBox").value = "";
      document.getElementById("deptRnTxtBox").readOnly = true;
      $("#deptMdfyBtn").removeClass("btnEnable");
      $("#deptMdfyBtn").addClass("btnDisable");
      $("#deptMdfyBtn").prop('disabled', true);
    });
  //  #End Region Rename Depratment text Box validation


        $('#delStnMdl').on('hidden.bs.modal', function () {
          //Clear Textbox when Modal Closed
          document.getElementById("RnTxtBox").value = "";
          $("#StnDelBtn").removeClass("btnEnable");
          $("#StnDelBtn").addClass("btnDisable");
          $("#StnDelBtn").prop('disabled', true);
          //$('select#stationDelSel')[0].sumo.selectItem(0);
        });



//Get Slected Station to be renamed in rename textbox
function getSelStation(){
  document.getElementById("RnTxtBox").value = $("#stationRnSel").val();
  document.getElementById("RnTxtBox").readOnly = false;
  console.log($("#stationRnSel").val());
  $("#StnRnModfyBtn").removeClass("btnDisable");
  $("#StnRnModfyBtn").addClass("btnEnable");
  $("#StnRnModfyBtn").prop('disabled', false);
  //alert($("#stationRnSel").val());
}
function deleteSelStation(){
  console.log($("#stationDelSel").val());
  $("#StnDelBtn").removeClass("btnDisable");
  $("#StnDelBtn").addClass("btnEnable");
  $("#StnDelBtn").prop('disabled', false);
}
//get selected department in renamed textbox
function getSelDept(){
  document.getElementById("deptRnTxtBox").value = $("#deptRnSel").val();
  document.getElementById("deptRnTxtBox").readOnly = false;
  console.log($("#deptRnSel").val());
  $("#deptMdfyBtn").removeClass("btnDisable");
  $("#deptMdfyBtn").addClass("btnEnable");
  $("#deptMdfyBtn").prop('disabled', false);
}

function deleteDept(){
  console.log($("#deptDelSel").val());
  $("#deptDelBtn").removeClass("btnDisable");
  $("#deptDelBtn").addClass("btnEnable");
  $("#deptDelBtn").prop('disabled', false);
}

/* Reports Page JS Code*/
//Get Slectd record ID from WorkDetails display table
$('.detailsTable').on('click', '.clickable-row', function(event) {
  var SelID = $(this).closest("tr").find('td:eq(0)').text();
  $('#workDetailsModal').modal('toggle');
  console.log(SelID);
});
