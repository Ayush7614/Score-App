/* Author - Ayush Kumar */

function scoreTeamBlue(val) {
  const score = document.getElementById("blue").value;
  let new_score = parseInt(score, 10) + val;

  if (new_score < 0) {
    new_score = 0;
  }

  const path = "audio/" + val + ".mp3";
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("src", path);
  audioElement.play();
  document.getElementById("blue").value = new_score;
  return new_score;
}

function scoreTeamRed(val) {
  const score = document.getElementById("red").value;
  let new_score = parseInt(score, 10) + val;

  if (new_score < 0) {
    new_score = 0;
  }

  const path = "audio/" + val + ".mp3";
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("src", path);
  audioElement.play();
  document.getElementById("red").value = new_score;
  return new_score;
}

function reset(val) {
  const path = "audio/" + val + ".mp3";
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("src", path);
  audioElement.play();
  document.getElementById("red").value = 0;
  document.getElementById("blue").value = 0;
}

/* Made by Ayush Kumar */
