// ==UserScript==
// @name         ALAAAARM!
// @namespace    ALAAAARM!
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://support.lise.de/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

(function() {
    $(function() {
    'use strict';
    var meta = document.createElement('meta');
    meta.httpEquiv = "refresh";
    meta.content = "300"; // 5 minutes
    document.getElementsByTagName('head')[0].appendChild(meta);
    console.log("auto-refresh after 60 seconds.");

        var checkExist = setInterval(function(){
            if($('#ghx-pool > div.ghx-swimlane.ghx-first > ul > li:nth-child(1) > div').length){
        $.each($('#ghx-pool > div.ghx-swimlane.ghx-first > ul > li:nth-child(1) > div'),
           function(){
        console.log("checking key: "+key);
              var key = $(this).data('issue-key');
              if(localStorage.getItem(key) != "true"){
                 var a = new Audio("http://soundbible.com/mp3/submarine-diving-alarm-daniel_simon.mp3");
                  a.play();
                  localStorage.setItem(key,"true");
              }
           });
            clearInterval(checkExists);
        }
        },100);
    });
})();