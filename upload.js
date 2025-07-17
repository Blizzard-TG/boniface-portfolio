// upload.js

document.getElementById('videoInput').addEventListener('change', function (e) {
  const file = e.target.files[0];

  if (file && file.type.startsWith('video/')) {
    const reader = new FileReader();

    reader.onload = function (event) {
      const videoPlayer = document.getElementById('videoPlayer');
      videoPlayer.src = event.target.result;
      videoPlayer.style.display = 'block';
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please upload a valid video file.');
  }
});
