// Simulate receiving a message from a character
function receiveMessage() {
    var messages = [
      "This is Anakin Skywalker. Mission complete.",
      "Clone troopers, assemble!",
      "Received information from Kamino.",
      "Orders from Darth Sidious received.",
      "I sense the dark side of the Force..."
    ];
  
    // Display the initial "Receiving message..."
    var screen = document.getElementById("screen");
    screen.innerHTML = "Receiving message...";
  
    // After 2 seconds, remove "Receiving message..." and display a random message
    setTimeout(function() {
      screen.classList.add("fade-out"); // Apply fade-out effect to remove "Receiving message..."
  
      // After the fade-out is completed (1 second), show a random message
      setTimeout(function() {
        screen.innerHTML = ""; // Clear the "Receiving message..." text
        screen.classList.remove("fade-out"); // Remove fade-out effect
  
        // Randomly select a message
        var randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
        // Display the received message with fade-in effect
        screen.classList.add("fade-out"); // Apply fade-out before showing new message
        setTimeout(function() {
          screen.innerHTML = randomMessage;
          screen.classList.remove("fade-out"); // Remove fade-out effect to make it visible
  
          // Play the corresponding audio
          playAudio(randomMessage);
  
          // Do not change the screen further after this message
          // No setTimeout for further message display, screen remains unchanged
        }, 1000); // Wait for 1 second before displaying random message
      }, 1000); // Fade-out duration for "Receiving message..."
    }, 2000); // Clear "Receiving message..." after 2 seconds
  }
  
  // Play the audio file corresponding to the message
  function playAudio(message) {
    var audio = new Audio();
  
    // Select different audio files based on the message
    if (message === "This is Anakin Skywalker. Mission complete.") {
      audio.src = "audio/anakins_message.mp3";  // Anakin's voice message
    } else if (message === "Clone troopers, assemble!") {
      audio.src = "audio/clonetrooper_message.mp3";  // Clone troopers' voice message
    } else if (message === "Received information from Kamino.") {
      audio.src = "audio/camino_message.mp3";  // Kamino information voice message
    } else if (message === "Orders from Darth Sidious received.") {
      audio.src = "audio/sidious_message.mp3";  // Darth Sidious' voice message
    } else if (message === "I sense the dark side of the Force...") {
      audio.src = "audio/sith_message.mp3";  // Sith message
    } else {
      audio.src = "audio/default.mp3";  // Default message audio file
    }
  
    // Play the audio file
    audio.play();
  }
  
  // Receive a message once when the page loads
  window.onload = function() {
    receiveMessage();  // Receive the message
  };
  