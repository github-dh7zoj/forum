var mobile = $("#myhk").attr("m");
if (typeof mobile === "undefined") {
    mobiles = 0;
} else {
    mobiles = mobile;
}
;
var skin = $("#myhk").attr("skin");
if (typeof skin === "undefined") {
    skins = "";
} else {
    skins = "&skin=" + skin;
}
;
var lr = $("#myhk").attr("lr");
if (typeof lr === "undefined") {
    lr = "";
} else {
    lr = "&lr=" + lr;
}
;
var op = $("#myhk").attr("op");
if (typeof op === "undefined") {
    op = 1;
} else {
    op = op;
}
;
var au = $("#myhk").attr("au");
if (typeof au === "undefined") {
    au = 1;
} else {
    au = au;
}
;
var sg = $("#myhk").attr("sg");
if (typeof sg === "undefined") {
    sg = 1;
} else {
    sg = sg;
}
;
var myhkload = localStorage.getItem("myhk_player_load");
var myhkfeed = localStorage.getItem("myhk_player_feed");
myhkload = typeof myhkload === "undefined" ? false : myhkload === "true";
myhkload = myhkload && typeof myhkfeed !== "undefined" && (new Date).getTime() - parseInt(myhkfeed) < 1e3;
if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i.test(navigator.userAgent) && mobiles < 1 && window.location.href.indexOf("//myhkw") < 0) {
    $("#myhkplayer").hide();
    throw new Error("音乐播放器已禁止在移动端加载！");
} else {
    if (myhkload && window.location.href.indexOf("//myhkw") < 0) {
        $("#myhkplayer").hide();
        throw new Error("音乐播放器已在其他页面加载！");
    } else {
        var songSheetList;
        if ($("#myhk").attr("src").replace("player/js/player.js", "").indexOf("myhkw.cn") > 0) {
            var webURL = "https://myhkw.cn/";
            var keyId = $("#myhk").attr("key");
            console.log("\n %c 调用音乐播放器V.20230418 - " + keyId + "，当前网站： %c https://forum.dh7zoj.top\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
        } else {
            if ($("#myhk").attr("src").replace("player/js/player.js", "").indexOf("myhkw.com") > 0) {
                var webURL = "https://myhkw.cn/";
                var keyId = $("#myhk").attr("key");
                console.log("\n %c 调用音乐播放器V.20230418 - " + keyId + "，当前网站： %c https://forum.dh7zoj.top\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
            }
        }
        ;
        localStorage.setItem("myhk_player_load", "true");
        $("head").append('<link id="myhkcss" rel="stylesheet" type="text/css" media="all" href="' + webURL + "api/playercss?id=" + keyId + skins + lr + '">');
        $("body").append('<div id="myhkplayer" style="display:none">\n    <div class="myhkplayer">\n        <div class="myhkblur-img">\n            <img src="' + webURL + 'static/images/default.jpg" class="myhkblur" style="top: 0px; display: inline;">\n' + "        </div>\n" + '        <div class="myhkinfo">\n' + '            <div class="songstyle"><i class="myhkfont myhkicon-music"></i> <div class="myhkname"><span class="myhksong"></span></div></div>\n' + '            <div class="timestyle"><i class="myhkfont myhkicon-clockCircle"></i> <span class="myhktime">00:00 / 00:00</span></div>\n' + '            <div class="artiststyle"><i class="myhkfont myhkicon-user"></i> <span class="myhkartist"></span><span class="myhkmoshi"><i\n' + '                    class="myhkfont myhkicon-suijibofang"></i> 随机播放</span></div>\n' + '            <div class="artiststyle"><i class="myhkfont myhkicon-musicAlbum"></i>\n' + '                <span class="myhkalbum"></span>\n' + '                <span class="myhkgeci"><span class="geci"></span></span>\n' + "            </div>\n" + "        </div>\n" + '        <div class="myhkcontrol">\n' + '            <i class="myhkaprev myhkfont myhkicon-first"></i>\n' + '            <i class="myhkprev myhkfont myhkicon-backward"></i>\n' + '            <div class="myhkstatus">\n' + "                <b>\n" + '                    <i class="myhkplay myhkfont myhkicon-playCircle"></i>\n' + '                    <i class="myhkpause myhkfont myhkicon-pauseCircle"></i>\n' + "                </b>\n" + '                <div id="pdyf1" class="myhknote">\n' + '                    <i class="myhkfont myhkicon-music" aria-hidden="true"></i>\n' + "                </div>\n" + '                <div id="pdyf2" class="myhknote">\n' + '                    <i class="myhkfont myhkicon-music" aria-hidden="true"></i>\n' + "                </div>\n" + '                <div id="pdyf3" class="myhknote">\n' + '                    <i class="myhkfont myhkicon-music" aria-hidden="true"></i>\n' + "                </div>\n" + "            </div>\n" + '            <i class="myhknext myhkfont myhkicon-forward"></i>\n' + '            <i class="myhkanext myhkfont myhkicon-last"></i>\n' + "        </div>\n" + '		<div class="musicbottom">\n' + '			<div class="volumecontrol">\n' + '		        <div class="volume myhkfont myhkicon-volumeMiddle"></div>\n' + '		        	<div class="volumeprogress">\n' + '		                    <div class="progressbg">\n' + '		                        <div class="progressbg1" style="height: 19px;"></div>\n' + '		                        <div class="ts" style="top: 81px;"></div>\n' + "		                    </div>\n" + "		                </div>\n" + "		        </div>\n" + '		        <div class="playprogress">\n' + '		            <div class="progressbg">\n' + '		                <div class="progressbg1"></div>\n' + '		                <div class="progressbg2"></div>\n' + '		                <div class="ts"></div>\n' + "		            </div>\n" + "		        </div>\n" + '            <div class="switch-playlist">\n' + '                <i class="myhkfont myhkicon-list"></i>\n' + "            </div>\n" + '            <div class="qhms">\n' + '                <i class="myhkfont myhkicon-suijibofang"></i>\n' + "            </div>\n" + '            <div class="switch-ksclrc">\n' + '                <i class="myhkfont myhkicon-anniu_kaiqi"></i>\n' + "            </div>\n" + "        </div>\n" + '        <div class="myhkcover"></div>\n' + "    </div>\n" + '    <div class="myhkplaylist">\n' + '        <div class="myhkplaylist-bd">\n' + '            <div class="album-list">\n' + '                <div class="musicheader"></div>\n' + '                <div class="myhklist"></div>\n' + "            </div>\n" + '            <div class="song-list">\n' + '                <div class="musicheader"><i class="myhkfont myhkicon-arrow-right-bold"></i><span></span></div>\n' + '                <div class="myhklist">\n' + "                    <ul></ul>\n" + "                </div>\n" + "            </div>\n" + "        </div>\n" + "    </div>\n" + '    <div class="switch-player">\n' + '        <i class="myhkfont myhkicon-arrow-right-bold"></i>\n' + "    </div>\n" + "</div>\n" + '<div id="myhkTips"></div>\n' + '<div id="myhkKsc"></div>\n' + '<div id="myhkLrc"></div>');
        var audio = new Audio, $player = $("#myhkplayer"), $tips = $("#myhkTips"), $lk = $("#myhkLrc"), $kk = $("#myhkKsc"), $switchPlayer = $(".switch-player", $player), $songName = $(".myhksong", $player), $cover = $(".myhkcover", $player), $songTime = $(".myhktime", $player), $songList = $(".song-list .myhklist", $player), $albumList = $(".album-list", $player), $songFrom = $(".myhkplayer .myhkartist", $player), $songFrom1 = $(".myhkplayer .myhkalbum", $player), $songFrom2 = $(".myhkplayer .myhkmoshi", $player), $songFrom3 = $(".myhkplayer .myhkgeci .geci", $player), $songFrom4 = $(".myhkplayer .switch-ksclrc", $player), myhkqq = "48939749", songFrom33 = "开启", songFrom55 = "", myhknow = "myhknow", ycgeci = true, myhkfirst = 1;
        errCount = 0;
        randcolor = 0;
        letterfx = 0;
        myhkcolor = "0,0,0";
        myhkfcolor = "255,255,255";
        localStorage.setItem("myhk_player_lrc", "null");
        localStorage.setItem("myhk_player_ksc", "null");
        songTotal = 0, myhkrandom = true, myhkloop = false, myhkpass = true, errjc = true, hasLrc = false, hasKsc = false, currentFrameId = 0, playisTsMoving = false, autoswitch = false, zdyc = true, gcdw = false, hasgeci = false;
        playing = true;
        myhkplaytime = localStorage.getItem("myhk_player_time") ? localStorage.getItem("myhk_player_time") : false;
        myhkplaying = localStorage.getItem("myhk_player_times") ? localStorage.getItem("myhk_player_times") : false;
        playingalbumId = localStorage.getItem("myhk_player_album") ? localStorage.getItem("myhk_player_album") : false;
        playingsongId = localStorage.getItem("myhk_player_song") ? localStorage.getItem("myhk_player_song") : false;
        myhk_player_songid = localStorage.getItem("myhk_player_songid") ? localStorage.getItem("myhk_player_songid") : false;
        function myhkCicle() {
            $songTime.text(formatSecond(audio.currentTime) + " / " + formatSecond(audio.duration));
        }
        var cicleTime = null;
        var myhkadTime = null;
        $songName.html('<a style="color:#f00">初始化歌单</a>');
        $songFrom.html('<a style="color:#f00">定海七中论坛</a>');
        $songFrom1.html('<a style="color:#f00">音乐播放器</a>');
        $songFrom3.html('<i class="myhkfont myhkicon-mapMarker"></i> 欢迎光临');
        var myhkMedia = {
            play: function () {
                hasgeci = true;
                $player.addClass("playing");
                currentFrameId = GetCurrentFrame();
                cicleTime = setInterval(myhkCicle, 800);
                if (hasLrc) {
                    lrcTime = setInterval(myhkLrc.lrc.play, 500);
                    if (!gcdw) {
                        $("#myhkLrc").addClass("myhkshow");
                    }
                    ;
                    if (zdyc) {
                        $songFrom4.show();
                    }
                }
                ;
                if (hasKsc) {
                    kscTime = setInterval(myhkLrc.ksc.play, 80);
                    if (!gcdw) {
                        $("#myhkKsc").addClass("showPlayer");
                    }
                    ;
                    if (zdyc) {
                        $songFrom4.show();
                    }
                }
            }, pause: function () {
                clearInterval(cicleTime);
                $player.removeClass("playing");
                $songFrom4.hide();
                if (hasLrc) {
                    myhkLrc.lrc.hide();
                }
                ;
                if (hasKsc) {
                    myhkLrc.ksc.hide();
                }
            }, error: function () {
                clearInterval(cicleTime);
                $player.removeClass("playing");
                if (errCount > 2) {
                    myhkTips.show("连续播放失败超过3次！已停止播放！");
                    errCount = 0;
                    errjc = true;
                } else {
                    errCount++;
                    errjc = false;
                    myhkTips.show(songSheetList[albumId].songNames[songId] + " - 资源获取失败！尝试获取下一首...");
                    console.log("播放失败 " + errCount + " 次！");
                    setTimeout(function () {
                        $cover.removeClass("coverplay");
                        localStorage.setItem("myhk_player", "no");
                        hasgeci = true;
                        auto = "";
                        myhkMedia.next();
                    }, 1500);
                }
            }, seeking: function () {
                if (audio.paused === true) {
                    audio.play();
                }
                ;
                $player.addClass("playing");
                $cover.addClass("coverplay");
                myhkLrc.load();
                myhkTips.show("缓冲中...");
            }, seeked: function () {
                currentFrameId = GetCurrentFrame();
            }, volumechange: function () {
                var a = audio.volume;
                0 == a ? $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeCross").removeClass("myhkicon-volumeLow myhkicon-volumeMiddle myhkicon-volumeHigh") : a >= 0.4 && a <= 0.7 ? $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeMiddle").removeClass("myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeHigh") : a >= 0.7 && a <= 1 ? $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeHigh").removeClass("myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeMiddle") : $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeLow").removeClass("myhkicon-volumeHigh myhkicon-volumeCross myhkicon-volumeMiddle");
            }, getInfos: function (a, b) {
                currentFrameId = 0;
                $cover.removeClass("coverplay");
                songId = a;
                albumId = b;
                allmusic();
                localStorage.setItem("myhk_player_qq", myhkqq);
                localStorage.setItem("myhk_player_version", myhkversion);
                localStorage.setItem("myhk_player_album", albumId + 1);
                localStorage.setItem("myhk_player_song", songId + 1);
                localStorage.setItem("myhk_player_songid", songSheetList[albumId].songTypes[songId] + songSheetList[albumId].songIds[songId]);
                if (songSheetList[albumId].songTypes[songId] == "wy") {
                    songFrom55 = "网易音乐";
                    musictype = "wy";
                    netmusic();
                } else {
                    if (songSheetList[albumId].songTypes[songId] == "kg") {
                        songFrom55 = "酷狗音乐";
                        musictype = "kg";
                        netmusic();
                    } else {
                        if (songSheetList[albumId].songTypes[songId] == "qq") {
                            songFrom55 = "QQ音乐";
                            musictype = "qq";
                            netmusic();
                        } else {
                            if (songSheetList[albumId].songTypes[songId] == "mg") {
                                songFrom55 = "咪咕音乐";
                                musictype = "mg";
                                netmusic();
                            } else {
                                if (songSheetList[albumId].songTypes[songId] == "kw") {
                                    songFrom55 = "酷我音乐";
                                    musictype = "kw";
                                    netmusic();
                                } else {
                                    if (songSheetList[albumId].songTypes[songId] == "qi") {
                                        songFrom55 = "千千音乐";
                                        musictype = "qi";
                                        netmusic();
                                    } else {
                                        if (songSheetList[albumId].songTypes[songId] == "local") {
                                            songFrom55 = "自定义音乐";
                                            musictype = "local";
                                            netmusic();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, nexts: function () {
                if (myhkloop) {
                    myhkMedia.getInfos(songId, albumId);
                } else {
                    myhkMedia.next();
                }
            }, next: function () {
                myhkpass = false;
                songTotal = songSheetList[albumId].songIds.length;
                if (myhkrandom) {
                    rid = parseInt(Math.random() * songTotal);
                    if (songTotal > 1) {
                        if (rid != songId) {
                            myhkMedia.getInfos(rid, albumId);
                        } else {
                            if (rid + 1 >= songTotal) {
                                myhkMedia.getInfos(0, albumId);
                            } else {
                                myhkMedia.getInfos(rid + 1, albumId);
                            }
                        }
                    } else {
                        myhkMedia.getInfos(0, albumId);
                    }
                } else {
                    if (parseInt(songId) + 1 >= songTotal) {
                        myhkMedia.getInfos(0, albumId);
                    } else {
                        myhkMedia.getInfos(parseInt(songId) + 1, albumId);
                    }
                }
                ;
                setTimeout(function () {
                    myhkpass = true;
                }, 1e3);
            }, prev: function () {
                myhkpass = false;
                songTotal = songSheetList[albumId].songIds.length;
                if (myhkrandom) {
                    rid = parseInt(Math.random() * songTotal);
                    if (songTotal > 1) {
                        if (rid != songId) {
                            myhkMedia.getInfos(rid, albumId);
                        } else {
                            if (rid + 1 >= songTotal) {
                                myhkMedia.getInfos(0, albumId);
                            } else {
                                myhkMedia.getInfos(rid + 1, albumId);
                            }
                        }
                    } else {
                        myhkMedia.getInfos(0, albumId);
                    }
                } else {
                    if (parseInt(songId) - 1 < 0) {
                        myhkMedia.getInfos(songTotal - 1, albumId);
                    } else {
                        myhkMedia.getInfos(parseInt(songId) - 1, albumId);
                    }
                }
                ;
                setTimeout(function () {
                    myhkpass = true;
                }, 1e3);
            }, anext: function () {
                myhkpass = false;
                albumTotal = songSheetList.length;
                if (myhkrandom) {
                    rid = parseInt(Math.random() * albumTotal);
                    if (albumTotal > 1) {
                        if (rid != albumId) {
                            songTotals = songSheetList[rid].songIds.length;
                            rids = parseInt(Math.random() * songTotals);
                            myhkMedia.getInfos(rids - 1, rid);
                        } else {
                            if (rid + 1 >= albumTotal) {
                                songTotals = songSheetList[0].songIds.length;
                                rids = parseInt(Math.random() * songTotals);
                                myhkMedia.getInfos(rids - 1, 0);
                            } else {
                                songTotals = songSheetList[rid + 1].songIds.length;
                                rids = parseInt(Math.random() * songTotals);
                                myhkMedia.getInfos(rids - 1, rid + 1);
                            }
                        }
                    } else {
                        songTotals = songSheetList[0].songIds.length;
                        rids = parseInt(Math.random() * songTotals);
                        myhkMedia.getInfos(rids, 0);
                    }
                } else {
                    if (albumTotal > 1) {
                        if (parseInt(albumId) + 1 >= albumTotal) {
                            myhkMedia.getInfos(0, 0);
                        } else {
                            myhkMedia.getInfos(0, parseInt(albumId) + 1);
                        }
                    } else {
                        songTotals = songSheetList[0].songIds.length;
                        rids = parseInt(Math.random() * songTotals);
                        myhkMedia.getInfos(rids, 0);
                    }
                }
                ;
                $player.removeClass("showSongList");
                setTimeout(function () {
                    myhkpass = true;
                }, 1e3);
            }, aprev: function () {
                myhkpass = false;
                albumTotal = songSheetList.length;
                if (myhkrandom) {
                    rid = parseInt(Math.random() * albumTotal);
                    if (albumTotal > 1) {
                        if (rid != albumId) {
                            songTotals = songSheetList[rid].songIds.length;
                            rids = parseInt(Math.random() * songTotals);
                            myhkMedia.getInfos(rids - 1, rid);
                        } else {
                            if (rid + 1 >= albumTotal) {
                                songTotals = songSheetList[0].songIds.length;
                                rids = parseInt(Math.random() * songTotals);
                                myhkMedia.getInfos(rids - 1, 0);
                            } else {
                                songTotals = songSheetList[rid + 1].songIds.length;
                                rids = parseInt(Math.random() * songTotals);
                                myhkMedia.getInfos(rids - 1, rid + 1);
                            }
                        }
                    } else {
                        songTotals = songSheetList[0].songIds.length;
                        rids = parseInt(Math.random() * songTotals);
                        myhkMedia.getInfos(rids, 0);
                    }
                } else {
                    if (albumTotal > 1) {
                        if (parseInt(albumId) - 1 < 0) {
                            myhkMedia.getInfos(0, albumTotal - 1);
                        } else {
                            myhkMedia.getInfos(0, parseInt(albumId) - 1);
                        }
                    } else {
                        songTotals = songSheetList[0].songIds.length;
                        rids = parseInt(Math.random() * songTotals);
                        myhkMedia.getInfos(rids, 0);
                    }
                }
                ;
                $player.removeClass("showSongList");
                setTimeout(function () {
                    myhkpass = true;
                }, 1e3);
            }, timeupdate: function () {
                if (audio.buffered.length) {
                    if (!errjc) {
                        errCount = 0;
                        errjc = true;
                    }
                    ;
                    var a = 100 * audio.buffered.start(currentFrameId) / audio.duration, b = 100 * audio.buffered.end(currentFrameId) / audio.duration;
                    $(".playprogress .progressbg .progressbg2", $player).css({ left: a + "%", width: b - a + "%" });
                }
                ;
                if (audio.currentTime > 0 && audio.duration > 0) {
                    localStorage.setItem("myhk_player_time", audio.currentTime);
                    playisTsMoving || ($(".playprogress .progressbg .ts", $player).css("left", 100 * (audio.currentTime / audio.duration).toFixed(2) + "%"), $(".playprogress .progressbg .progressbg1", $player).css("width", 100 * (audio.currentTime / audio.duration).toFixed(2) + "%"), $(".myhktime", $player).text(formatSecond(audio.currentTime) + " / " + formatSecond(audio.duration)));
                } else {
                    $(".playprogress .progressbg .ts", $player).css("left", "0");
                    $(".playprogress .progressbg .progressbg1", $player).css("width", "0");
                    $(".playprogress .progressbg .progressbg2", $player).css({ left: "0", width: "0" });
                    $(".myhktime", $player).text("00:00 / 00:00");
                }
            }
        };
        var myhkTipsTime = null;
        var myhkTips = {
            show: function (a) {
                clearTimeout(myhkTipsTime);
                $("#myhkTips").text(a).addClass("myhkshow");
                this.hide();
            }, hide: function () {
                myhkTipsTime = setTimeout(function () {
                    $("#myhkTips").removeClass("myhkshow");
                }, 3e3);
            }
        };
        audio.addEventListener("play", myhkMedia.play, false);
        audio.addEventListener("pause", myhkMedia.pause, false);
        audio.addEventListener("ended", myhkMedia.nexts, false);
        audio.addEventListener("playing", myhkMedia.playing, false);
        audio.addEventListener("volumechange", myhkMedia.volumechange, false);
        audio.addEventListener("error", myhkMedia.error, false);
        audio.addEventListener("seeking", myhkMedia.seeking, false);
        audio.addEventListener("timeupdate", myhkMedia.timeupdate, false);
        $switchPlayer.click(function () {
            $player.toggleClass("myhkshow");
            autoswitch = true;
        });
        $(".myhkpause", $player).click(function () {
            hasgeci = false;
            var a = songSheetList.length;
            if (a == 1) {
                $("li", $albumList).eq(songId).addClass(myhknow).find(".artist").html("暂停播放 > ").parent().siblings().removeClass(myhknow).find(".artist").html("").parent();
            } else {
                $("li", $albumList).eq(albumId).addClass(myhknow).find(".artist").html("暂停播放 > ").parent().siblings().removeClass(myhknow).find(".artist").html("").parent();
            }
            ;
            myhkTips.show("暂停播放 - " + songSheetList[albumId].songNames[songId]);
            $cover.removeClass("coverplay");
            audio.pause();
            localStorage.setItem("myhk_player_auto", "no");
        });
        $(".myhkplay", $player).click(function () {
            hasgeci = true;
            var a = songSheetList.length;
            if (a == 1) {
                $("li", $albumList).eq(songId).addClass(myhknow).find(".artist").html("当前播放 > ").parent().siblings().removeClass(myhknow).find(".artist").html("").parent();
            } else {
                $("li", $albumList).eq(albumId).addClass(myhknow).find(".artist").html("当前播放 > ").parent().siblings().removeClass(myhknow).find(".artist").html("").parent();
            }
            ;
            startPlay();
            localStorage.setItem("myhk_player_auto", "yes");
        });
        $(".myhkprev", $player).click(function () {
            if (myhkpass) {
                hasgeci = true;
                myhkMedia.prev();
                localStorage.setItem("myhk_player_auto", "yes");
            }
        });
        $(".myhknext", $player).click(function () {
            if (myhkpass) {
                hasgeci = true;
                myhkMedia.next();
                localStorage.setItem("myhk_player_auto", "yes");
            }
        });
        $(".myhkaprev", $player).click(function () {
            if (myhkpass) {
                hasgeci = true;
                myhkMedia.aprev();
                localStorage.setItem("myhk_player_auto", "yes");
            }
        });
        $(".myhkanext", $player).click(function () {
            if (myhkpass) {
                hasgeci = true;
                myhkMedia.anext();
                localStorage.setItem("myhk_player_auto", "yes");
            }
        });
        $(".qhms", $player).click(function () {
            myhkrandom ? (myhkrandom = false, myhkTips.show("专辑循环"), $(this).html('<i class = "random myhkfont myhkicon-shunxubofang"></i>'), $songFrom2.html('<i class="myhkfont myhkicon-shunxubofang"></i> 专辑循环')) : myhkloop ? (myhkrandom = true, myhkloop = false, myhkTips.show("随机播放"), $(this).html('<i class = "random myhkfont myhkicon-suijibofang"></i>'), $songFrom2.html('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放')) : (myhkrandom = false, myhkloop = true, myhkTips.show("单曲循环"), $(this).html('<i class = "random myhkfont myhkicon-danquxunhuan"></i>'), $songFrom2.html('<i class="myhkfont myhkicon-danquxunhuan"></i> 单曲循环'));
            if (autoswitch) {
                autoswitch = false;
                setTimeout(function () {
                    autoswitch = true;
                }, 500);
            }
        });
        $(".myhkrandom", $player).click(function () {
            $(this).addClass(myhknow);
            $(".myhkloop", $player).removeClass(myhknow);
            myhkrandom = true;
            myhkTips.show("随机播放");
            $songFrom2.html('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放');
            localStorage.setItem("random_play", "true");
        });
        $(".myhkloop", $player).click(function () {
            $(this).addClass(myhknow);
            $(".myhkrandom", $player).removeClass(myhknow);
            myhkrandom = false;
            myhkTips.show("顺序播放");
            $songFrom2.html('<i class="myhkfont myhkicon-shunxubofang"></i> 顺序播放');
            localStorage.setItem("random_play", "false");
        });
        var $Volumeprogress = $(".volumeprogress .progressbg .ts", $player);
        $Volumeprogress.Drag({
            parentObj: $(".volumeprogress .progressbg", $player), lockY: true, callback: function (a, b, c, e, g) {
                if (5 == arguments.length) {
                    var d;
                    d = ((84 - c) / 84).toFixed(2);
                    1 < Number(d) ? d = 1 : 0 > Number(d) && (d = 0, $(a).css("top", "84px"));
                    $(".volumeprogress .progressbg .progressbg1", $player).height(100 * d);
                    audio.volume = d, volume = d, localStorage.setItem("myhk_player_volume", d);
                    setTimeout(function () {
                        myhkTips.show("音量：" + parseInt(d * 100) + "%");
                    }, 500);
                }
            }
        });
        $(".volumeprogress .progressbg", $player).click(function (a) {
            if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
                myhkTips.show("苹果移动设备禁用音量调节！");
            } else {
                d = ((84 - (a.pageY - $(this).offset().top - 6)) / 84).toFixed(2);
                1 < Number(d) ? d = 1 : 0 > Number(d) && (d = 0, $(a).css("top", "84px"));
                $(".volumeprogress .progressbg .progressbg1", $player).height(100 * d);
                audio.volume = d, volume = d, localStorage.setItem("myhk_player_volume", d);
                if (100 * d != "0") {
                    $(".volumeprogress .progressbg .ts", $player).css("top", 84 * (1 - d) + "px");
                } else {
                    $(".volumeprogress .progressbg .ts", $player).css("top", "84px");
                }
                ;
                setTimeout(function () {
                    myhkTips.show("音量：" + parseInt(d * 100) + "%");
                }, 500);
            }
        });
        var $playprogress = $(".playprogress .progressbg .ts", $player);
        $playprogress.Drag({
            parentObj: $(".playprogress .progressbg", $player), lockX: true, callback: function (a, b, c, e, g) {
                if (5 == arguments.length) {
                    playisTsMoving = true;
                    var d = $(".playprogress .progressbg", $player).width(), d = b / (d - $(a).width()), d = d.toFixed(2);
                    $(".playprogress .progressbg .progressbg1", $player).width(b);
                    audio.currentTime = audio.duration * d;
                } else {
                    playisTsMoving = false;
                }
            }
        });
        $(".playprogress .progressbg", $player).click(function (a) {
            $("#myhkLrc").removeClass("myhkshow");
            $("#myhkKsc").removeClass("showPlayer");
            hasgeci = true;
            playisTsMoving = false;
            a = a.pageX - $(this).offset().left;
            var b = $(this).width();
            a = (a / b).toFixed(2);
            audio.currentTime = audio.duration * a;
        });
        $(".switch-playlist").click(function () {
            $player.toggleClass("showAlbumList");
            playerHeight = $("#myhkplayer .myhkplayer").height();
            playlistHeight = $("#myhkplayer .myhkplaylist").height();
            if (playerHeight >= 300 && playlistHeight <= 200) {
                $(".myhkplayer .musicbottom .playprogress", $player).hide();
                $(".myhkplayer .musicbottom .volumecontrol", $player).hide();
                $(".myhkplayer", $player).height(90);
                $(".myhkplayer .myhkblur", $player).height(90);
                $(".myhkplayer .myhkcover img", $player).height(90);
                $(".myhkplayer .musicbottom", $player).css({ background: "rgba(255,255,255,.7)" });
                $songFrom4.hide();
            } else {
                if (playerHeight == 90 && playlistHeight >= 200) {
                    $(".myhkplayer .musicbottom .playprogress", $player).show();
                    $(".myhkplayer .musicbottom .volumecontrol", $player).show();
                    $(".myhkplayer", $player).height(300);
                    $(".myhkplayer .myhkblur", $player).height(300);
                    $(".myhkplayer .myhkcover img", $player).height(300);
                    $(".myhkplayer .musicbottom", $player).css({ background: "rgba(255,255,255,.8)" });
                    if (zdyc && (hasLrc || hasKsc)) {
                        $songFrom4.show();
                    }
                }
            }
        });
        $songList.mCustomScrollbar();
        $(".song-list .musicheader,.song-list .myhkicon-arrow-right-bold", $player).click(function () {
            $player.removeClass("showSongList");
        });
        $(".switch-ksclrc").click(function () {
            $("#myhkLrc").toggleClass("hide");
            $("#myhkKsc").toggleClass("hidePlayer");
            if (!$("#myhkLrc").hasClass("hide") || !$("#myhkKsc").hasClass("hidePlayer")) {
                ycgeci = true;
                if (hasLrc || hasKsc) {
                    if (gcdw) {
                        $songFrom3.html('<i class="myhkfont myhkicon-mapMarker"></i> 歌词定位');
                    } else {
                        $songFrom3.html('<i class="myhkfont myhkicon-successCircle"></i> 歌词开启');
                    }
                }
                ;
                myhkTips.show("开启歌词显示");
                songFrom33 = "开启";
                $songFrom4.html('<i class="myhkfont myhkicon-anniu_kaiqi"></i>');
            } else {
                ycgeci = false;
                if (hasLrc || hasKsc) {
                    $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 歌词关闭');
                }
                ;
                myhkTips.show("歌词显示已关闭");
                songFrom33 = "关闭";
                $songFrom4.html('<i class="myhkfont myhkicon-anniu_guanbi"></i>');
            }
            ;
            if (autoswitch) {
                autoswitch = false;
                setTimeout(function () {
                    autoswitch = true;
                }, 500);
            }
        });
        myhkplayer.playList = {
            creat: {
                album: function () {
                    var b = songSheetList.length, albumList = "";
                    if (typeof myhkid === "undefined") {
                        $(".musicheader", $albumList).html(siteName);
                    } else {
                        $(".musicheader", $player).css("cssText", "display:block !important;");
                    }
                    ;
                    if (b == 1) {
                        for (var i = 0; i < songSheetList[0].songIds.length; i++) {
                            albumList += '<li><span class="index">' + (i + 1) + '</span><span class="artist"></span>' + songSheetList[0].songNames[i] + " - " + songSheetList[0].artistNames[i] + "</li>";
                        }
                    } else {
                        for (var c = 0; c < b; c++) {
                            albumList += '<li><i class="myhkfont myhkicon-arrow-right-bold"></i><span class="index">' + (c + 1) + '</span><span class="artist"></span>《' + songSheetList[c].songSheetName + "》 - " + songSheetList[c].author + "</li>";
                        }
                    }
                    ;
                    $(".myhklist", $albumList).html("<ul>" + albumList + "</ul>").mCustomScrollbar();
                    $("li", $albumList).click(function () {
                        if (b == 1) {
                            hasgeci = true;
                            albumId = 0;
                            if ($(this).hasClass(myhknow)) {
                                myhkTips.show("正在播放 - " + songSheetList[albumId].songNames[songId].replace(songId + 1 + "#", ""));
                            } else {
                                localStorage.setItem("myhk_player_auto", "yes");
                                songId = $(this).index();
                                myhkMedia.getInfos(songId, albumId);
                            }
                        } else {
                            var a = $(this).index();
                            $(this).hasClass(myhknow) ? myhkplayer.playList.creat.song(a, true) : myhkplayer.playList.creat.song(a, false);
                            $player.addClass("showSongList");
                            $(".myhkplaylist .myhklist li", $player).css({ color: "rgb(" + myhkfcolor + ")" });
                        }
                    });
                    songTotal = songSheetList[albumId].songIds.length;
                    playingalbumId && playingsongId ? myhkMedia.getInfos(myhkplayer.playList.creat.getSongId(playingsongId - 1), myhkplayer.playList.creat.getalbumId(playingalbumId - 1)) : myhkrandom ? myhkMedia.getInfos(window.parseInt(Math.random() * songTotal), albumId) : myhkMedia.getInfos(0, albumId);
                }, getSongId: function (n) {
                    return n >= songTotal ? 0 : n < 0 ? songTotal - 1 : n;
                }, getalbumId: function (n) {
                    return n >= songSheetList.length ? 0 : n < 0 ? songSheetList.length - 1 : n;
                }, song: function (a, b) {
                    songTotal = songSheetList[a].songIds.length;
                    $(".song-list .musicheader span", $player).text(songSheetList[a].songSheetName + "(" + songTotal + ")");
                    var c = "";
                    for (var i = 0; i < songTotal; i++) {
                        c += '<li><span class="index">' + (i + 1) + '</span><span class="artist"></span>' + songSheetList[a].songNames[i] + " - " + songSheetList[a].artistNames[i] + "</li>";
                    }
                    ;
                    $("ul", $songList).html(c);
                    $songList.attr("data-album", a);
                    $songList.mCustomScrollbar("update");
                    if (b) {
                        $("li", $songList).eq(songId).addClass(myhknow).siblings().removeClass(myhknow);
                        $songList.mCustomScrollbar("scrollTo", $("li.myhknow", $songList).position().top - 90);
                    } else {
                        $songList.mCustomScrollbar("scrollTo", "top");
                    }
                    ;
                    $("li", $songList).click(function () {
                        hasgeci = true;
                        albumId = a;
                        if ($(this).hasClass(myhknow)) {
                            myhkTips.show("正在播放 - " + songSheetList[albumId].songNames[songId].replace(songId + 1 + "#", ""));
                        } else {
                            localStorage.setItem("myhk_player_auto", "yes");
                            songId = $(this).index();
                            myhkMedia.getInfos(songId, albumId);
                        }
                    });
                }
            }
        };
        var lrcTimeLine = [], tempNum1 = 0, tempNum2 = 0, kscLineNow1 = false, kscLineNow2 = false, lrcTimeEnable = false, lrcOutTime = 0, kscTime = null, lrcTime = null;
        var myhkLrc = {
            load: function () {
                myhkLrc.lrc.hide();
                myhkLrc.ksc.hide();
                hasLrc = false;
                hasKsc = false;
                $("#myhkLrc").html("");
                $("#myhkKsc").html("");
                setTimeout(function () {
                    if (ycgeci) {
                        $songFrom3.html('<i class="myhkfont myhkicon-successCircle"></i> 歌词' + songFrom33);
                    } else {
                        $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 歌词' + songFrom33);
                    }
                    ;
                    var b = localStorage.getItem("myhk_player_lrc");
                    var c = localStorage.getItem("myhk_player_ksc");
                    if (c.indexOf(songSheetList[albumId].songIds[songId] + songSheetList[albumId].songNames[songId]) >= 0) {
                        if (c.indexOf("karaoke") >= 0) {
                            if (zdyc) {
                                $songFrom4.show();
                            }
                            ;
                            myhkLrc.ksc.format(c.replace(songSheetList[albumId].songIds[songId] + songSheetList[albumId].songNames[songId], ""));
                        } else {
                            $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                            $songFrom4.hide();
                        }
                    } else {
                        if (b.indexOf(songSheetList[albumId].songIds[songId] + songSheetList[albumId].songNames[songId]) >= 0) {
                            if (b.indexOf("[00") >= 0) {
                                if (zdyc) {
                                    $songFrom4.show();
                                }
                                ;
                                myhkLrc.lrc.format(b.replace(songSheetList[albumId].songIds[songId] + songSheetList[albumId].songNames[songId], ""));
                            } else {
                                $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                $songFrom4.hide();
                            }
                        } else {
                            if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i.test(navigator.userAgent)) {
                                var d = "";
                            } else {
                                var d = "&ksc=" + songSheetList[albumId].songId[songId];
                            }
                            ;
                            if (songSheetList[albumId].songTypes[songId] == "local") {
                                lrcurl = webURL + "api/lyric?song=" + songSheetList[albumId].songIds[songId] + "&type=" + songSheetList[albumId].songTypes[songId] + "&id=" + keyId + d + "&sign=" + songSheetList[albumId].sign[songId] + "&play=" + albumId + "." + songId;
                            } else {
                                lrcurl = webURL + "api/lyric?song=" + songSheetList[albumId].songIds[songId] + "&type=" + songSheetList[albumId].songTypes[songId] + "&id=" + keyId + "&sign=" + songSheetList[albumId].sign[songId] + d;
                            }
                            ;
                            $.ajax({
                                url: lrcurl, type: "GET", cache: false, dataType: "jsonp", jsonp: "jsoncallback", success: function (a) {
                                    if (a.type == "ksc") {
                                        localStorage.setItem("myhk_player_ksc", songSheetList[albumId].songIds[songId] + songSheetList[albumId].songNames[songId] + a.txt);
                                        if (zdyc) {
                                            $songFrom4.show();
                                        }
                                        ;
                                        myhkLrc.ksc.format(a.txt);
                                    } else {
                                        if (a.type == "lrc") {
                                            if (a.txt == "null" || a.txt == "") {
                                                $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                                $songFrom4.hide();
                                            } else {
                                                localStorage.setItem("myhk_player_lrc", songSheetList[albumId].songIds[songId] + songSheetList[albumId].songNames[songId] + a.txt);
                                                if (zdyc) {
                                                    $songFrom4.show();
                                                }
                                                ;
                                                myhkLrc.lrc.format(a.txt);
                                            }
                                        } else {
                                            $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                            $songFrom4.hide();
                                        }
                                    }
                                }, error: function () {
                                    $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 暂无歌词');
                                    $songFrom4.hide();
                                }
                            });
                        }
                    }
                }, 50);
            }, lrc: {
                format: function (i) {
                    gcdw = true;
                    if (ycgeci == true) {
                        $songFrom3.html('<i class="myhkfont myhkicon-mapMarker"></i> 歌词定位');
                    }
                    ;
                    offsetcont = i.match(/\[offset:(\w+)\]/i);
                    offsetcont = null != offsetcont && 0 == isNaN(offsetcont[1]) ? Number(offsetcont[1]) : 0;
                    lrcArray = decodeURIComponent(i).split("\n");
                    hasLrc = true;
                    a = 0;
                    var c = '<li class="myhkLrc0"></li>';
                    lrcTimeLine = [];
                    lrcStr = [];
                    1 > lrcArray.length && (lrcArray = i.split(/\s+/));
                    for (var b = lrcArray.length; a < b; a++) {
                        var d = lrcArray[a].replace(/\[\d*:\d*((\.|\:)\d*)*\]/g, ""), e = lrcArray[a].match(/\[\d*:\d*((\.|\:)\d*)*\]/g);
                        if (void 0 != d && ("undefined" == d && (d = ""), e)) {
                            for (var h = 0, f = e.length; h < f; h++) {
                                var g = Number(String(e[h].match(/\[(\d*)/i)[1])), m = Number(String(e[h].match(/\:(\d+(\.\d*)*)/i)[1]));
                                try {
                                    k = Number(String(e[h].match(/\:.*\:(\d*)/i)[1]));
                                } catch (l) {
                                    k = 0;
                                }
                                ;
                                for (g = Math.round(1e3 * (60 * g + m) + k - offsetcont); 0 == g || -1 != lrcTimeLine.indexOf(g);) {
                                    g++;
                                }
                                ;
                                "string" == typeof d && lrcTimeLine.push(Number(g));
                                lrcStr[String(g)] = String(d.replace(/[-\u001f]/g, ""));
                            }
                        }
                    }
                    ;
                    lrcTimeLine = lrcTimeLine.sort(function (a, b) {
                        return a - b;
                    });
                    a = 0;
                    for (b = lrcTimeLine.length; a < b; a++) {
                        if (d = lrcTimeLine[a], e = lrcStr[d], g = lrcTimeLine[a + 1], f = Math.round(Number(g) - Number(d)), void 0 !== e) {
                            c = '<li class="myhkLrc0"></li>' == c && 0 == d ? '<li class="myhkLrc' + d + " " + f + " " + h + ' myhknow">' + e + "</li>" : c + '<li class="myhkLrc' + d + " " + f + ' ">' + e + "</li>";
                        }
                    }
                    ;
                    $("#myhkLrc").html("<ul>" + c + "</ul>");
                    lrcTime = setInterval(myhkLrc.lrc.play, 100);
                }, play: function () {
                    var d = Math.round(1e3 * audio.currentTime);
                    if ($("#myhkLrc").height() >= 40) {
                        lrcHeight = 40;
                    } else {
                        lrcHeight = 20;
                    }
                    ;
                    d >= lrcTimeLine[0] && (lrcOutTime = lrcTimeLine.shift());
                    if (lrcOutTime + 1e3 - d > 0 && d + 1e3 - lrcOutTime > 0) {
                        var a = $(".myhkLrc" + lrcOutTime), b = Number(String(a.attr("class")).split(" ")[1]) / (a.text().length + 1);
                        !a.hasClass(myhknow) && $("li").hasClass("myhkLrc" + lrcOutTime) && (a.html = "<span>" + a.html() + "</span>", a.addClass(myhknow).siblings().removeClass(myhknow), $words = a, $words.each(function () {
                            if (randcolor == 1) {
                                lrccolor = myhkrandColor();
                            } else {
                                lrccolor = myhkcolor;
                            }
                            ;
                            $(this).attr("style", "color:rgba(" + lrccolor + ")!important").siblings().removeAttr("style");
                            if (letterfx == 1) {
                                if (a.text().length > 6) {
                                    if (b > 500) {
                                        $(this).letterfx({ fx: "smear", letter_end: "rewind" });
                                    } else {
                                        var c = $(this), ticker = new Ticker(c).reset();
                                        c.data("ticker", ticker);
                                    }
                                } else {
                                    $(this).letterfx({ fx: "wave", fx_duration: "150ms" });
                                }
                            }
                        }));
                        $("#myhkLrc").scrollTop(lrcHeight * a.index());
                        if (ycgeci) {
                            $songFrom3.html('<i class="myhkfont myhkicon-successCircle"></i> 歌词开启');
                            gcdw = false;
                        }
                        ;
                        if (hasgeci && hasLrc) {
                            $("#myhkLrc").addClass("myhkshow");
                        }
                    }
                }, hide: function () {
                    clearInterval(lrcTime);
                    $("#myhkLrc").removeClass("myhkshow");
                }
            }, ksc: {
                format: function (b) {
                    gcdw = true;
                    if (ycgeci == true) {
                        $songFrom3.html('<i class="myhkfont myhkicon-mapMarker"></i> 歌词定位');
                    }
                    ;
                    hasKsc = true;
                    var c = [], kscEndTimeLine = [], kscCont = [], kscTimePer = [], kscMain = "", lineNow = 0, sex = "b";
                    b.replace(/\'(\d*):(\d*).(\d*)\','(\d*):(\d*).(\d*)\','(.*)\',\s\'(.*)\'/g, function () {
                        var a = arguments[1] | 0, startSec = arguments[2] | 0, startKsec = arguments[3] | 0, endMin = arguments[4] | 0, endSec = arguments[5] | 0, endKsec = arguments[6] | 0;
                        c.push(a * 600 + startSec * 10 + Math.round(startKsec / 100));
                        kscEndTimeLine.push(endMin * 600 + endSec * 10 + Math.round(endKsec / 100));
                        kscCont.push(arguments[7]);
                        kscTimePer.push(arguments[8]);
                    });
                    for (var i = 0; i < c.length; i++) {
                        var d = false;
                        var e = new Array;
                        var f = 0;
                        var g = "", kscTextPerTime = kscTimePer[i].split(",");
                        if (kscCont[i].indexOf("男：") >= 0) {
                            sex = "m";
                            kscCont[i] = kscCont[i].replace("男：", " ");
                        }
                        ;
                        if (kscCont[i].indexOf("女：") >= 0) {
                            sex = "g";
                            kscCont[i] = kscCont[i].replace("女：", " ");
                        }
                        ;
                        if (kscCont[i].indexOf("合：") >= 0) {
                            sex = "t";
                            kscCont[i] = kscCont[i].replace("合：", " ");
                        }
                        ;
                        var h = kscCont[i].match(/(\w+)'+(\w+)|(\w+)|([^\w\s])|(^\s+)|(\s+$)|\s+/g);
                        for (var j = 0; j < h.length; j++) {
                            if (h[j] == " ") {
                                var d = true;
                                e[j] = "0";
                                f++;
                            } else {
                                if (d) {
                                    e[j] = kscTextPerTime[j - f];
                                } else {
                                    e[j] = kscTextPerTime[j];
                                }
                            }
                            ;
                            if (kscCont[i][j] == "，") {
                                g += '<span class="blank"><em dir="' + e[j] + '"></em></span>';
                            } else {
                                g += '<span><em dir="' + e[j] + '">' + h[j] + "</em></span>";
                            }
                        }
                        ;
                        kscMain += '<div id="myhkKsc' + kscEndTimeLine[i] + '" class="myhkKsc' + c[i] + " line line" + (i % 2 == 0 ? 1 : 2) + " " + sex + '"><div class="bg">' + g + '</div><div class="lighter">' + g + "</div></div>";
                    }
                    ;
                    $("#myhkKsc").html(kscMain);
                    kscTime = setInterval(myhkLrc.ksc.play, 100);
                }, play: function () {
                    var a = Math.round(audio.currentTime * 10);
                    if ($(".myhkKsc" + (a + 10)).length && !$(".myhkKsc" + (a + 10)).hasClass(myhknow)) {
                        if (ycgeci == true) {
                            $songFrom3.html('<i class="myhkfont myhkicon-successCircle"></i> 歌词开启');
                            gcdw = false;
                        }
                        ;
                        if (hasgeci && hasKsc) {
                            $("#myhkKsc").addClass("showPlayer");
                        }
                        ;
                        var b = $(".myhkKsc" + (a + 10));
                        if (randcolor == 1) {
                            lrccolor = myhkrandColor();
                        } else {
                            lrccolor = myhkcolor;
                        }
                        ;
                        b.addClass(myhknow).css("color", "rgba(" + lrccolor + ")");
                        b.hasClass("line1") ? b.siblings(".line1").removeClass(myhknow).removeAttr("style") : b.siblings(".line2").removeClass(myhknow).removeAttr("style");
                        setTimeout(function () {
                            if (b.hasClass("line1")) {
                                myhkLrc.ksc.showLetters.line1(b);
                                kscLineNow1 = true;
                            } else {
                                myhkLrc.ksc.showLetters.line2(b);
                                kscLineNow2 = true;
                            }
                        }, 1e3);
                    } else {
                        kscCont = "";
                    }
                    ;
                    if ($("#myhkKsc" + (a - 30)).length) {
                        $("#myhkKsc" + (a - 30)).removeClass(myhknow);
                    }
                }, showLetters: {
                    line1: function (a) {
                        var b = $(".lighter span", a), $spanNow = b.eq(tempNum1++), $em = $("em", $spanNow), spanT = +$em.attr("dir");
                        $em.animate({ width: "100%" }, spanT);
                        if (tempNum1 < b.length) {
                            letterTime1 = setTimeout(function () {
                                myhkLrc.ksc.showLetters.line1(a);
                            }, spanT);
                        } else {
                            tempNum1 = 0;
                            kscLineNow1 = false;
                        }
                    }, line2: function (a) {
                        var b = $(".lighter span", a), $spanNow = b.eq(tempNum2++), $em = $("em", $spanNow), spanT = +$em.attr("dir");
                        $em.animate({ width: "100%" }, spanT);
                        if (tempNum2 < b.length) {
                            letterTime2 = setTimeout(function () {
                                myhkLrc.ksc.showLetters.line2(a);
                            }, spanT);
                        } else {
                            tempNum2 = 0;
                            kscLineNow2 = false;
                        }
                    }
                }, hide: function () {
                    clearInterval(kscTime);
                    $("#myhkKsc").removeClass("showPlayer");
                }
            }
        };
        myhkplayerlist = localStorage.getItem("myhk_player_list") ? localStorage.getItem("myhk_player_list") : false;
        myhkplayerversion = localStorage.getItem("myhk_player_version") ? localStorage.getItem("myhk_player_version") : 1;
        if (myhkplayerlist && window.location.href.indexOf("myhkw.cn/admin/#/") < 0) {
            $.ajax({
                url: webURL + "api/playlist?id=" + keyId + "&version=" + keyId, type: "GET", dataType: "text", success: function (d) {
                    if (d != myhkplayerversion) {
                        $.ajax({
                            url: webURL + "api/playlist?id=" + keyId, type: "GET", dataType: "text", success: function (a) {
                                try {
                                    localStorage.removeItem("myhk_player_list");
                                    localStorage.setItem("myhk_player_list", a);
                                    localStorage.removeItem("myhk_player_version");
                                    localStorage.setItem("myhk_player_version", d);
                                    console.log("新歌单：" + parseInt(a.length / 1024) + "KB 缓存成功！");
                                } catch (e) {
                                    console.log("新歌单：" + parseInt(a.length / 1024) + "KB 已超出浏览器最大限制！");
                                }
                                ;
                                if (typeof songSheetList === "undefined") {
                                    eval(a);
                                    console.log("播放器：成功缓存最新歌单！");
                                }
                                ;
                                playercss = setInterval(myhkcss, 100);
                            }, error: function (a, b, c) {
                                eval(myhkplayerlist);
                                console.log("播放器：新歌单数据获取失败！");
                                playercss = setInterval(myhkcss, 100);
                            }
                        });
                    } else {
                        eval(myhkplayerlist);
                        console.log("播放器：歌单缓存读取成功！");
                        playercss = setInterval(myhkcss, 100);
                    }
                }, error: function (a, b, c) {
                    eval(myhkplayerlist);
                    console.log("播放器：歌单缓存读取成功！");
                    playercss = setInterval(myhkcss, 100);
                }
            });
        } else {
            $.ajax({
                url: webURL + "api/playlist?id=" + keyId, type: "GET", dataType: "text", success: function (a) {
                    try {
                        localStorage.removeItem("myhk_player_list");
                        localStorage.setItem("myhk_player_list", a);
                        console.log("歌单：" + parseInt(a.length / 1024) + "KB 缓存成功！");
                    } catch (e) {
                        console.log("歌单：" + parseInt(a.length / 1024) + "KB 已超出浏览器最大限制！");
                    }
                    ;
                    if (typeof songSheetList === "undefined") {
                        eval(a);
                        console.log("播放器：成功缓存最新歌单！");
                    }
                    ;
                    playercss = setInterval(myhkcss, 100);
                }, error: function (a, b, c) {
                    $("#myhkplayer").hide();
                    myhkTips.show("原歌单数据获取失败!");
                }
            });
        }
        ;
        setInterval(function () {
            localStorage.setItem("myhk_player_feed", (new Date).getTime().toString());
        }, 500);
        window.addEventListener("beforeunload", beforeUnloadHandler, true);
        function beforeUnloadHandler(a) {
            localStorage.setItem("myhk_player_load", "false");
        }
    }
}
;
function myhkcss() {
    if ($player.css("display") == "contents") {
        clearInterval(playercss);
        console.log("音乐播放器已禁止非中国IP加载！");
    } else {
        if ($player.css("display") != "none") {
            clearInterval(playercss);
            console.log("播放器：界面数据加载成功！");
            getlist();
        }
    }
}
function getlist() {
    if (typeof myhkid !== "undefined") {
        clearInterval(myhkadTime);
        function myhkad() {
            var a = adList.length;
            adid = parseInt(Math.random() * a);
            $("a", $player).css("cssText", "display:unset !important;");
            $(".musicheader", $albumList).html('<a style="display: unset!important" href="' + webURL + "ad/" + keyId + "." + adList[adid].adurl + '" title="' + adList[adid].adtitle + '" style="color:rgb(' + myhkfcolor + ')" target="_blank"><i class="myhkfont myhkicon-megaphone"></i> ' + adList[adid].adtitle + "</a>");
            $(".myhkgeci", $player).html('<a style="display: unset!important;float: right;color:rgb(' + myhkfcolor + ')" href="' + webURL + "ad/" + keyId + "." + adList[adid].adurl + '" title="' + adList[adid].adtitle + '" target="_blank"><i class="myhkfont myhkicon-share"></i> ' + adList[adid].adname + "</a>");
            if ($(".myhkgeci", $player).css("display") == "none" || $(".musicheader", $player).css("display") == "none" || $(".artiststyle", $player).css("display") == "none") {
                $(".myhkgeci", $player).css("cssText", "display:unset !important;");
                $(".musicheader", $player).css("cssText", "display:block !important;");
                $(".artiststyle", $player).css("cssText", "display:block !important;");
                console.log("音乐播放器被篡改，已自动重载！");
            }
        }
        myhkadTime = setInterval(myhkad, 1e4);
    }
    ;
    if (!isNaN(defaultVolume)) {
        if (defaultVolume >= "100") {
            vol = "1";
        } else {
            vol = "0." + defaultVolume;
        }
    } else {
        vol = "0.5";
    }
    ;
    if (showNotes !== 1) {
        $(".myhkstatus .myhknote", $player).hide();
    }
    ;
    volume = localStorage.getItem("myhk_player_volume") ? localStorage.getItem("myhk_player_volume") : vol;
    if (100 * volume != "0") {
        $(".volumeprogress .progressbg .ts", $player).css("top", 84 * (1 - volume) + "px");
    } else {
        $(".volumeprogress .progressbg .ts", $player).css("top", "84px");
    }
    ;
    $(".volumeprogress .progressbg .progressbg1", $player).height(100 * volume);
    0 == volume ? $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeCross").removeClass("myhkicon-volumeLow myhkicon-volumeMiddle myhkicon-volumeHigh") : volume >= 0.4 && volume <= 0.7 ? $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeMiddle").removeClass("myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeHigh") : volume >= 0.7 && volume <= 1 ? $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeHigh").removeClass("myhkicon-volumeLow myhkicon-volumeCross myhkicon-volumeMiddle") : $(".myhkplayer .musicbottom .volume", $player).addClass("myhkicon-volumeLow").removeClass("myhkicon-volumeHigh myhkicon-volumeCross myhkicon-volumeMiddle");
    audio.volume = volume;
    if (switchopen == 1 && op == 1) {
        if (!isNaN(time)) {
            setTimeout(function () {
                if (!$player.hasClass("myhkshow") && !autoswitch) {
                    $player.toggleClass("myhkshow");
                }
            }, time * 1e3);
        }
    }
    ;
    if (localStorage.getItem("random_play") != null) {
        if (localStorage.getItem("random_play") == "true") {
            $(".qhms", $player).html('<i class = "random myhkfont myhkicon-suijibofang"></i>');
            $songFrom2.html('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放');
            myhkrandom = true;
        } else {
            $(".qhms", $player).html('<i class = "random myhkfont myhkicon-shunxubofang"></i>');
            $songFrom2.html('<i class="myhkfont myhkicon-shunxubofang"></i> 专辑循环');
            myhkrandom = false;
        }
    } else {
        if (randomPlayer != 1) {
            myhkrandom = false;
            $(".qhms", $player).html('<i class = "random myhkfont myhkicon-shunxubofang"></i>');
            $songFrom2.html('<i class="myhkfont myhkicon-shunxubofang"></i> 专辑循环');
        } else {
            $(".qhms", $player).html('<i class = "random myhkfont myhkicon-suijibofang"></i>');
            $songFrom2.html('<i class="myhkfont myhkicon-suijibofang"></i> 随机播放');
            myhkrandom = true;
        }
    }
    ;
    albumTotals = songSheetList.length;
    if (typeof myhkalbum === "undefined") {
        albumIds = playingalbumId ? playingalbumId : defaultAlbum - 1;
        if (albumIds > albumTotals) {
            albumId = 0;
            console.log("播放器：优先播放专辑大于总数（" + albumTotals + "）！");
        } else {
            albumId = playingalbumId ? playingalbumId - 1 : defaultAlbum - 1;
            if (albumId < 0) {
                albumId = 0;
                playingalbumId = 0;
            }
            ;
            console.log("播放器：播放数据加载成功！");
        }
    } else {
        if (typeof myhksong === "undefined") {
            if (myhkalbum > albumTotals) {
                albumId = 0;
                myhkMedia.getInfos(0, 0);
                console.log("播放器：优先播放专辑大于总数（" + albumTotals + "），未指定优先播放歌曲！");
            } else {
                playingalbumId = myhkalbum;
                albumId = myhkalbum;
                myhkMedia.getInfos(0, myhkalbum - 1);
                console.log("播放器：已指定优先播放专辑（" + myhkalbum + "），未指定优先播放歌曲！");
            }
        } else {
            if (myhkalbum > albumTotals) {
                console.log("播放器：优先播放专辑大于总数（" + albumTotals + "），已指定优先播放歌曲（" + myhksong + "）！");
                albumId = 0;
                myhkMedia.getInfos(myhksong - 1, 0);
            } else {
                console.log("播放器：已指定优先播放专辑（" + myhkalbum + "），已指定优先播放歌曲（" + myhksong + "）！");
                playingalbumId = myhkalbum;
                playingsongId = myhksong;
                albumId = myhkalbum;
                myhkMedia.getInfos(myhksong - 1, myhkalbum - 1);
            }
        }
    }
    ;
    if (showLrc == 0) {
        $("#myhkLrc").addClass("hide");
        $("#myhkKsc").addClass("hidePlayer");
        ycgeci = false;
        if (hasLrc) {
            $songFrom3.html('<i class="myhkfont myhkicon-errorCircle"></i> 歌词关闭');
        }
        ;
        songFrom33 = "关闭";
        $songFrom4.html('<i class="myhkfont myhkicon-anniu_guanbi"></i>');
    }
    ;
    if (showGreeting == 1 && sg == 1) {
        setTimeout(function () {
            myhkTips.show(greeting);
        }, 5e3);
    }
    ;
    myhkplayer.playList.creat.album();
}
function LimitStr(a, b, t) {
    LimitHeight = $("#myhkplayer .myhkplayer").height();
    if (LimitHeight == 300) {
        b = b || 14;
    } else {
        if (LimitHeight == 90) {
            b = b || 14;
        } else {
            b = b || 6;
        }
    }
    ;
    t = t || "...";
    var c = "";
    var d = a.length;
    var h = 0;
    for (var i = 0; h < b * 2 && i < d; i++) {
        h += a.charCodeAt(i) > 128 ? 2 : 1;
        c += a.charAt(i);
    }
    ;
    if (i < d) {
        c += t;
    }
    ;
    return c;
}
function netmusic() {
    myhkLrc.load();
    songlocations = songSheetList[albumId].locations[songId] ? songSheetList[albumId].locations[songId] : false;
    if (songlocations) {
        audio.src = songSheetList[albumId].locations[songId];
    } else {
        audio.src = webURL + "api/url?song=" + songSheetList[albumId].songIds[songId] + "&type=" + songSheetList[albumId].songTypes[songId] + "&id=" + keyId + "&sign=" + songSheetList[albumId].sign[songId];
    }
    ;
    $songName.html("<span>" + LimitStr(songSheetList[albumId].songNames[songId]) + "</span>");
    $songFrom.html("<span>" + LimitStr(songSheetList[albumId].artistNames[songId], 6) + "</span>");
    $songFrom1.html("<span>" + LimitStr(songSheetList[albumId].albumNames[songId], 6) + "</span>");
    var d = new Image;
    newimg = webURL + "api/pic?song=" + songSheetList[albumId].songIds[songId] + "&pic=" + encodeURIComponent(songSheetList[albumId].albumCovers[songId]) + "&type=" + songSheetList[albumId].songTypes[songId] + "&id=" + keyId + "&sign=" + songSheetList[albumId].sign[songId];
    d.src = newimg;
    $cover.addClass("changing");
    d.onload = function () {
        $cover.removeClass("changing");
        $.ajax({
            url: webURL + "api/color", type: "GET", dataType: "script", data: { song: songSheetList[albumId].songIds[songId], type: songSheetList[albumId].songTypes[songId], pic: encodeURIComponent(songSheetList[albumId].albumCovers[songId]), id: keyId, sign: songSheetList[albumId].sign[songId] }, success: function () {
                playerColor();
            }, error: function () {
                var a = "0,0,0";
                playerColor();
            }
        });
    };
    d.onerror = function () {
        newimg = "https://q1.qlogo.cn/g?b=qq&nk=" + myhkqq + "&s=140";
        d.src = newimg;
        setTimeout(function () {
            myhkTips.show(songSheetList[albumId].songNames[songId] + " - 专辑图片获取失败！");
        }, 4e3);
    };
    $cover.html(d);
    if (background == 1) {
        $(".myhkblur", $player).show();
        $(".myhkblur", $player).attr("src", d.src);
    } else {
        $(".myhkblur", $player).hide();
    }
    ;
    coverHeight = $("#myhkplayer .myhkplayer").height();
    if (coverHeight == 300) {
        $(".myhkblur", $player).height(300);
        $(".myhkplayer .myhkcover img", $player).height(300);
    } else {
        if (coverHeight == 90) {
            $(".myhkblur", $player).height(90);
            $(".myhkplayer .myhkcover img", $player).height(90);
        }
    }
    ;
    if (myhkfirst == 1) {
        myhkfirst = 2;
        if (/(iPhone|iPod|iPad|Android|ios|Nokia|Black Berry|MIDP|Phone)/i.test(navigator.userAgent)) {
            if (mautoPlayer == 1 && au == 1) {
                if (localStorage.getItem("myhk_player_auto") !== "no") {
                    startPlay();
                } else {
                    $cover.removeClass("coverplay");
                    audio.pause();
                }
            } else {
                if (localStorage.getItem("myhk_player_auto") === "yes") {
                    startPlay();
                } else {
                    $cover.removeClass("coverplay");
                    audio.pause();
                }
            }
        } else {
            if (autoPlayer == 1 && au == 1) {
                if (localStorage.getItem("myhk_player_auto") !== "no") {
                    startPlay();
                } else {
                    $cover.removeClass("coverplay");
                    audio.pause();
                }
            } else {
                if (localStorage.getItem("myhk_player_auto") === "yes") {
                    startPlay();
                } else {
                    $cover.removeClass("coverplay");
                    audio.pause();
                }
            }
        }
    } else {
        startPlay();
    }
    ;
    if (myhkplaytime && myhkplaying && playing && songSheetList[albumId].songTypes[songId] + songSheetList[albumId].songIds[songId] == myhk_player_songid) {
        $(".playprogress .progressbg .ts", $player).css("left", 100 * (myhkplaytime / myhkplaying).toFixed(2) + "%");
        $(".playprogress .progressbg .progressbg1", $player).css("width", 100 * (myhkplaytime / myhkplaying).toFixed(2) + "%");
        $(".myhktime", $player).text(formatSecond(myhkplaytime) + " / " + formatSecond(myhkplaying));
    }
    ;
    $(window).scroll(function () {
        var a = $(this).scrollTop();
        var b = $(window.document).height();
        var c = $(this).height();
        if (a + c == b) {
            zdyc = false;
            if (hasgeci && ycgeci) {
                $songFrom4.hide();
                $("#myhkLrc").addClass("hide");
                $("#myhkKsc").addClass("hidePlayer");
                if (hasLrc || hasKsc) {
                    myhkTips.show("歌词自动隐藏");
                }
            }
        } else {
            zdyc = true;
            if (hasgeci && ycgeci) {
                if (hasLrc || hasKsc) {
                    $songFrom4.show();
                }
                ;
                $("#myhkLrc").removeClass("hide");
                $("#myhkKsc").removeClass("hidePlayer");
            }
        }
    });
}
function startPlay() {
    document.addEventListener("WeixinJSBridgeReady", function () {
        var a = function () {
            audio.play();
            document.removeEventListener("touchstart", a, false);
        };
        audio.play();
        document.addEventListener("touchstart", a, false);
    }, false);
    var b = audio.play();
    if (b) {
        b.then(() => {
            if (playingalbumId == albumId + 1 && playingsongId == songId + 1 && myhkplaytime && playing && songSheetList[albumId].songTypes[songId] + songSheetList[albumId].songIds[songId] == myhk_player_songid) {
                audio.currentTime = myhkplaytime;
                playing = false;
            }
            ;
            var t = audio.duration;
            localStorage.setItem("myhk_player_times", t);
            $cover.addClass("coverplay");
            myhkTips.show("开始从" + songFrom55 + "播放：" + songSheetList[albumId].songNames[songId]);
            if (showMsg === 1) {
                showMsgNotification(songSheetList[albumId].songNames[songId], songSheetList[albumId].artistNames[songId] + " - " + songSheetList[albumId].albumNames[songId], newimg);
            }
            ;
            console.log(Number(parseInt(albumId) + 1) + "-" + Number(parseInt(songId) + 1) + " " + songSheetList[albumId].songNames[songId] + " - " + songSheetList[albumId].artistNames[songId] + " 时长：" + Math.floor(t / 60) + ":" + (t % 60 / 100).toFixed(2).slice(-2));
        })["catch"](e => {
            console.log("浏览器限制音频自动播放，需要点击播放！");
        });
    }
}
function allmusic() {
    var a = songSheetList.length;
    if (a == 1) {
        $("li", $albumList).eq(songId).addClass(myhknow).find(".artist").html("当前播放&nbsp;>&nbsp;").parent().siblings().removeClass(myhknow).find(".artist").html("").parent();
        if (!$(".myhklist ul", $albumList).html() == "") {
            $(".myhklist", $albumList).mCustomScrollbar("scrollTo", $("li.myhknow", $albumList).position().top - 90);
        }
    } else {
        $("li", $albumList).eq(albumId).addClass(myhknow).find(".artist").html("当前播放&nbsp;>&nbsp;").parent().siblings().removeClass(myhknow).find(".artist").html("").parent();
        $(".myhklist", $albumList).mCustomScrollbar("scrollTo", $("li.myhknow", $albumList).position().top - 90);
        if (!$("ul", $songList).html() == "" && $("[data-album=" + albumId + "]").length) {
            $("[data-album=" + albumId + "]").find("li").eq(songId).addClass(myhknow).siblings().removeClass(myhknow);
            $songList.mCustomScrollbar("scrollTo", $("li.myhknow", $songList).position().top - 90);
        }
    }
    ;
    if (Number(playingalbumId) !== Number(parseInt(albumId) + 1) || Number(playingsongId) !== Number(parseInt(songId) + 1)) {
        playing = false;
    }
}
function playerColor() {
    $player.css({ background: "rgba(" + myhkcolor + ",.8)" });
    $switchPlayer.css({ background: "rgba(" + myhkcolor + ",.3)" });
    $tips.css({ background: "rgba(" + myhkcolor + ",.6)" });
    $lk.css({ background: "rgba(" + myhkcolor + ",.3)" });
    $kk.css({ background: "rgba(" + myhkcolor + ",.3)" });
    $(".myhkinfo,.myhkcontrol,.myhkstatus .myhknote,.myhkgeci a,.myhkplaylist .myhklist li,.musicheader a,.myhkplaylist,.musicheader", $player).css({ color: "rgb(" + myhkfcolor + ")" });
    $(".myhkplayer .myhkcover", $player).css("border", "4px rgb(" + myhkfcolor + ") solid");
    $(".myhkplayer .myhkcontrol .myhkstatus", $player).css("background-image", "linear-gradient(90deg, rgb(" + myhkfcolor + ") 50%, transparent 50%, transparent), linear-gradient(90deg, rgb(" + myhkfcolor + ") 50%, rgb(" + myhkfcolor + ") 50%, rgb(" + myhkfcolor + ")");
    $(".myhkplayer .myhkcontrol .myhkstatus b", $player).css({ background: "rgba(" + myhkcolor + ",.5)" });
}
function GetCurrentFrame() {
    var a = audio.buffered.length;
    if (1 == a) {
        return 0;
    }
    ;
    for (var b = $(".playprogress .progressbg", $player).width(), b = parseInt($(".playprogress .progressbg .ts", $player).css("left")) / b * audio.duration, c = 0; c < a; c++) {
        if (b >= audio.buffered.start(c) && b <= audio.buffered.end(c)) {
            return c;
        }
    }
    ;
    return 0;
}
function myhkrandColor() {
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.color = this.r + "," + this.g + "," + this.b;
    return this.color;
}
function showMsgNotification(c, d, e) {
    var f = window.Notification || window.mozNotification || window.webkitNotification;
    if (f) {
        if (f.permission == "granted") {
            var g = new f(c, { body: d, icon: e });
            setTimeout(function () {
                g.close();
            }, 3e3);
            g.onclick = function () {
                g.close();
            };
            g.onerror = function () {
                console.log("onerror");
            };
            return false;
        } else {
            f.requestPermission(function (a) {
                if (a === "granted") {
                    var b = new f(c, { body: d, icon: e });
                    b.onclick = function () { };
                    b.onerror = function () { };
                    b.onshow = function () { };
                    b.onclose = function () { };
                } else {
                    return false;
                }
            });
        }
    }
}
function MillisecondToDate(a) {
    a = parseFloat(a) / 1e3;
    return a = null != a && "" != a ? 60 < a && 3600 > a ? foo(parseInt(a / 60)) + ":" + foo(parseInt(60 * (parseFloat(a / 60) - parseInt(a / 60)))) : 3600 <= a && 86400 > a ? parseInt(a / 3600) + ":" + foo(parseInt(60 * (parseFloat(a / 3600) - parseInt(a / 3600)))) + ":" + foo(parseInt(60 * (parseFloat(60 * (parseFloat(a / 3600) - parseInt(a / 3600))) - parseInt(60 * (parseFloat(a / 3600) - parseInt(a / 3600)))))) : "00:" + foo(parseInt(a)) : "00:00";
}
function foo(a) {
    a = "00" + a;
    return a.substring(a.length - 2, a.length);
}
function Ticker(a, c) {
    a.lettering();
    this.done = false;
    this.cycleCount = Number(String(a.attr("class")).split(" ")[1]) / 1e3;
    this.cycleCurrent = 0;
    this.original = a.html();
    this.letters = a.find("span");
    this.letterCount = this.letters.length;
    this.letterCurrent = 0;
    this.chars = String(a.attr("aria-label"));
    this.charsCount = this.chars.length;
    this.letters.each(function () {
        var a = $(this);
        a.attr("data-orig", a.text());
        a.text("-");
    });
}
function formatSecond(t) {
    if (t > 0) {
        return ("00" + Math.floor(t / 60)).substr(-2) + ":" + ("00" + Math.floor(t % 60)).substr(-2);
    } else {
        return "00:00";
    }
}
Ticker.prototype.getChar = function () {
    return this.chars[Math.floor(Math.random() * this.charsCount)];
};
Ticker.prototype.reset = function () {
    this.done = false;
    this.letterCurrent = this.cycleCurrent = 0;
    this.letters.each(function () {
        var a = $(this);
        a.text(a.attr("data-orig"));
        a.removeClass("done");
    });
    this.loop();
};
Ticker.prototype.loop = function () {
    if (randcolor == 1) {
        lrccolor = myhkrandColor();
    } else {
        lrccolor = myhkcolor;
    }
    ;
    self = this;
    this.letters.each(function (a, b) {
        b = $(b);
        a >= self.letterCurrent && (b.css("color", "#000"), b.css("opacity", "0.4"));
    });
    if (this.cycleCurrent < this.cycleCount) {
        this.cycleCurrent++;
    } else {
        if (this.letterCurrent < this.letterCount) {
            var a = this.letters.eq(this.letterCurrent);
            this.cycleCurrent = 0;
            a.attr("style", "color:rgb(" + lrccolor + ")");
            a.text(a.attr("data-orig")).css("opacity", 1).addClass("done");
            this.letterCurrent++;
        } else {
            this.done = true;
        }
    }
    ;
    this.done || requestAnimationFrame(function () {
        self.loop();
    });
};
document.onclick = function (e) {
    var e = e || window.event;
    var a = e.target || e.srcElement;
    var b = document.getElementById("myhkplayer");
    if (!(a == b) && !b.contains(a) && $player.hasClass("myhkshow") && autoswitch) {
        $player.toggleClass("myhkshow");
        autoswitch = false;
    }
};
function myhkloadlist(d, e, f) {
    $.ajax({
        url: webURL + "api/playlist?id=" + d, type: "GET", dataType: "text", success: function (a) {
            if (a.includes("songSheetList") && a.includes("defaultAlbum")) {
                localStorage.setItem("myhk_player_lrc", "null");
                localStorage.setItem("myhk_player_ksc", "null");
                $("#myhkplayer .myhkgeci").html('<span class="geci"><i class="myhkfont myhkicon-mapMarker"></i> 欢迎光临</span>');
                $songFrom3 = $("#myhkplayer .myhkplayer .myhkgeci .geci");
                if (typeof myhkadTime != "undefined") {
                    clearInterval(myhkadTime);
                }
                ;
                cssReset = document.getElementById("myhkcss");
                cssReset.href = webURL + "api/playercss?id=" + d;
                eval(a);
                if (e) {
                    eval(myhkalbum = e);
                } else {
                    eval(myhkalbum = defaultAlbum);
                }
                ;
                if (f) {
                    eval(myhksong = f);
                } else {
                    eval(myhksong = false);
                }
                ;
                console.log("播放器：成功加载新歌单！");
                getlist();
                $player.removeClass("showSongList");
                $player.removeClass("showAlbumList");
                $(".myhkplayer .musicbottom .playprogress", $player).show();
                $(".myhkplayer .musicbottom .volumecontrol", $player).show();
                $(".myhkplayer .musicbottom .switch-ksclrc", $player).show();
                $(".myhkplayer", $player).height(300);
                $(".myhkplayer .myhkblur", $player).height(300);
                $(".myhkplayer .myhkcover img", $player).height(300);
                $(".myhkplayer .musicbottom", $player).css({ background: "rgba(255,255,255,.8)" });
                $player.addClass("myhkshow");
            } else {
                myhkTips.show("播放器：歌单数据异常!");
            }
        }, error: function (a, b, c) {
            myhkTips.show("播放器：歌单数据获取失败!");
        }
    });
}
function myhklist(a, b, c) {
    if (a.includes("songSheetList") && a.includes("defaultAlbum")) {
        localStorage.setItem("myhk_player_lrc", "null");
        localStorage.setItem("myhk_player_ksc", "null");
        $("#myhkplayer .myhkgeci").html('<span class="geci"><i class="myhkfont myhkicon-mapMarker"></i> 欢迎光临</span>');
        $songFrom3 = $("#myhkplayer .myhkplayer .myhkgeci .geci");
        if (typeof myhkadTime != "undefined") {
            clearInterval(myhkadTime);
        }
        ;
        eval(a);
        if (b) {
            eval(myhkalbum = b);
        } else {
            eval(myhkalbum = defaultAlbum);
        }
        ;
        if (c) {
            eval(myhksong = c);
        } else {
            eval(myhksong = false);
        }
        ;
        console.log("播放器：成功加载新歌单！");
        getlist();
        $player.removeClass("showSongList");
        $player.removeClass("showAlbumList");
        $(".myhkplayer .musicbottom .playprogress", $player).show();
        $(".myhkplayer .musicbottom .volumecontrol", $player).show();
        $(".myhkplayer .musicbottom .switch-ksclrc", $player).show();
        $(".myhkplayer", $player).height(300);
        $(".myhkplayer .myhkblur", $player).height(300);
        $(".myhkplayer .myhkcover img", $player).height(300);
        $(".myhkplayer .musicbottom", $player).css({ background: "rgba(255,255,255,.8)" });
        $player.addClass("myhkshow");
    } else {
        myhkTips.show("播放器：歌单数据异常!");
    }
}
