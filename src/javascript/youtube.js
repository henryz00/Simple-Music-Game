export default class YoutubePlayer {
  constructor(vm) {
    this.vm = vm;
    this.ytPlayer = vm.ytPlayer;
  }

  loadYoutubeVideo(id) {
    if (this.vm.srcMode !== "youtube" && this.ytPlayer) return;
    this.vm.youtubeId = id;
    this.ytPlayer.setVolume(100);
  }

  playVideo() {
    if (this.vm.srcMode !== "youtube" && this.ytPlayer) return;
    this.ytPlayer.setVolume(100);
    this.ytPlayer.playVideo();
  }

  pauseVideo() {
    if (this.vm.srcMode !== "youtube" && this.ytPlayer) return;
    this.ytPlayer.pauseVideo();
  }

  resetVideo() {
    if (this.vm.srcMode !== "youtube" && this.ytPlayer) return;
    this.ytPlayer.seekTo(0);
    this.ytPlayer.pauseVideo();
  }

  getPlayerTime() {
    if (this.vm.srcMode !== "youtube" && this.ytPlayer) return 0;
    return this.ytPlayer.getCurrentTime();
  }
}
