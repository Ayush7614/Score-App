/* Author - Ayush Kumar */

function scoreTeamBlue(val) {
    var score = document.getElementById('blue').value;
    var new_score = parseInt(score,10) + val;
    
    if (new_score < 0) {
        new_score = 0;
    }
    
    var path='audio/'+val+'.mp3';
    var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
   document.getElementById('blue').value = new_score;
    return new_score;
    
}

function scoreTeamRed(val) {
    var score = document.getElementById('red').value;
    var new_score = parseInt(score,10) + val;
    
    if (new_score < 0) {
        new_score = 0;
    }
    
    var path='audio/'+val+'.mp3';
    var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
   document.getElementById('red').value = new_score;
    return new_score;
}

function reset(val){
    var path='audio/'+val+'.mp3';
    var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
    document.getElementById('red').value=0;
    document.getElementById('blue').value=0;   
}

/* Made by Ayush Kumar */
