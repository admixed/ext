export const addPlaylistHTML = function(parent) {
    // let playlist_elem = document.createElement("img");
    // playlist_elem.src = browser.runtime.getURL("img/alert.png");
    // playlist_elem.style.position = "absolute";
    var btn = document.createElement("button");
    btn.style.background = url("img/alert.png");
    btn.style.position = "absolute";
    btn.popoverTargetElement = "playlistPopover";

    let popoverElem = document.createElement("div");
    popoverElem.popover = true;
    popoverElem.id = "playlistPopover";

    
    parent.appendChild(btn)
    parent.appendChild(popoverElem)
}