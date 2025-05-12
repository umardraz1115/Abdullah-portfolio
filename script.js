// Minimal JS for project overlay click effect

document.querySelectorAll('.project-overlay').forEach((overlay, idx) => {
  overlay.addEventListener('click', () => {
    const projectNames = [
      'Steezy',
      'Art Not Evidence',
      'Urban Drive',
      'Retro Sound'
    ];
    alert('Project: ' + projectNames[idx]);
  });
}); 