// Create a function to call when a button is clicked

// I had to google a bit to find out how to make the function work to both turn on and turn off the sound. This gave the solution: https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link 
// The critical part is the .paused attribute. Maybe there can be a hint on that one to make the exercise easier. 

const playAudio = (sound) => {
    return sound.paused ? sound.play() : sound.pause();
}