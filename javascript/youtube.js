var ytPlayer;
function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player("ytPlayer", {
    height: "100%",
    width: "100%",
    videoId: "ALZHF5UqnU4",
    playerVars: { autoplay: 0, controls: 0, rel: 0 },
    events: {
      onReady: onPlayerReady,
    },
  });
  addWmode();
}

function onPlayerReady(event) {
  console.log("Player Ready.");
  //   event.target.playVideo();
}

function loadYoutubeVideo(id) {
  ytPlayer.loadVideoByUrl(id, 0);
  ytPlayer.setVolume(100);
}

function playVideo() {
  ytPlayer.playVideo();
}

function resetVideo() {
  ytPlayer.seekTo(0);
  ytPlayer.pauseVideo();
}

function getPlayerTime() {
  return ytPlayer.getCurrentTime();
}

function addWmode() {
  let url = document.getElementById("ytPlayer").getAttribute("src");
  let char = url.indexOf("?") != -1 ? "&" : "?";
  document.getElementById("ytPlayer").setAttribute("src", url + char + "wmode=transparent");
}