document.addEventListener('DOMContentLoaded', function() {
    const lines = document.querySelectorAll('#animated-text-container .text-line');
    let lineIndex = 0;
    const delayBetweenLines = 700;
    const initialDelay = 500; 
  
    function revealLines() {
      if (lineIndex < lines.length) {
        lines[lineIndex].classList.add('visible');
        lineIndex++;
        setTimeout(revealLines, delayBetweenLines);
      }
    }
  
    setTimeout(revealLines, initialDelay);
  });