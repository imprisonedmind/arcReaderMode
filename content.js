/* This runs after a web page loads */
let hasOverlay = false;
const overlay = document.createElement("overlay")
overlay.id = "customOverlay"

addEventListener('keypress', (event) => {
  const ctrl = event.ctrlKey
  const y = event.key

  if (hasOverlay) {
    if (y == "y" && ctrl == true) {
      hasOverlay = false;
      overlay.remove()
    }
  } else {
    if (y == "y" && ctrl == true) {
      hasOverlay = true;
      document.body.appendChild(overlay)
    } 
  }
});
