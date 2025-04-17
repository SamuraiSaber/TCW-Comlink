// Simulate receiving a message from a character
function receiveMessage() {
  var messages = [
    "From Anakin Skywalker",
    "From Anakin Skywalker",
    "From Anakin Skywalker.",
    "From Anakin Skywalker.",
    "From Anakin Skywalker"
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
let url = "";

if (message === "This is Anakin Skywalker. Mission complete.") {
  url = "https://www.youtube.com/watch?v=XKZGOfZV6w8"; // ← 実際のURLに変更
} else if (message === "Clone troopers, assemble!") {
  url = "https://www.youtube.com/watch?v=XKZGOfZV6w8";
} else if (message === "Received information from Kamino.") {
  url = "https://www.youtube.com/watch?v=XKZGOfZV6w8";
} else if (message === "Orders from Darth Sidious received.") {
  url = "https://www.youtube.com/watch?v=XKZGOfZV6w8";
} else if (message === "I sense the dark side of the Force...") {
  url = "https://www.youtube.com/watch?v=XKZGOfZV6w8";
} else {
  url = "https://www.youtube.com/watch?v=XKZGOfZV6w8";
}

// YouTubeリンクを新しいタブで開く
window.location.href = 'url';
}


// Receive a message once when the page loads
window.onload = function() {
  receiveMessage();  // Receive the message
};
