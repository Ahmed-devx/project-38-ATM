function withdraw() {
  var amount = parseInt(document.getElementById("amount").value);
  var output = document.getElementById("output");

  // available notes
  var notes = [5000, 1000, 500, 100, 50, 20, 10];
  var count = {};
  var totalNotes = 0;

  // check input
  if (isNaN(amount) || amount <= 0) {
    output.innerText = "Invalid amount!";
    return;
  }

  if (amount % 10 !== 0) {
    output.innerText = "Cannot dispense exact amount\nwith available notes.";
    return;
  }

  // logic
  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];
    count[note] = Math.floor(amount / note);
    amount = amount % note;
    totalNotes += count[note];
  }

  // display result
  var result = "Notes Breakdown:\n\n";
  for (var i = 0; i < notes.length; i++) {
    result += notes[i] + ": " + count[notes[i]] + " notes\n";
  }
  result += "\nTotal notes: " + totalNotes;

  output.innerText = result;
}



