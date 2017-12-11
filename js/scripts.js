//business logic
function Places(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Places.prototype.printPlaces = function() {
  return this.location + this.landmarks + this.timeOfYear + this.notes;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmarks = $("input#landmarks").val();
    var inputtedTimeOfYear = $("input#timeOfYear").val();
    var inputtedNotes = $("input#notes").val();

    var newPlace = new Places(inputtedLocation, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);

    $("ul#places").append("<li><span class='contact'>" + newPlace.printPlaces() + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmarks").val("");
    $("input#new-timeOfYear").val("");
    $("input#new-notes").val("");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newPlace.location);
      $(".landmarks").text(newPlace.landmarks);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });
  });

});
