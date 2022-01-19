function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._iniPlugins();
};

MediaPlayer.prototype._iniPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
};

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function () {
    this.media.paused();
};

MediaPlayer.prototype.togglePlay = function() {
    this.media.paused ? this.media.play() : this.media.pause();
};

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
};

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
};

export default MediaPlayer;