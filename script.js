var video_disp = document.getElementById("video");
var demo_button = document.getElementById("product-demo");
var exit = document.getElementById("exit-button");
var video_output = document.getElementById("lawn");
var video_output2 = document.getElementById("shear");
var feature_button = document.getElementById("feature-button");
var feature_container = document.getElementById("features");
var feature_exit = document.getElementById("feature-exit");
var feature_button_2 = document.getElementById("feature-button2");
var feature_container_2 = document.getElementById("features2");
var feature_exit_2 = document.getElementById("feature-exit2");
var hamburger_menu = document.getElementById("hamburger-button");
var navlink = document.getElementById("navlink-container");
var exit_button2 = document.getElementById("exit");
var modal = document.getElementById("modal");
var banner = document.getElementById("banners");
var exit_button_3 = document.getElementById("ad-exit");

demo_button.onclick = function() {
    video_disp.style.display = "flex";
    video_disp.appendChild(video_output);
}

exit.onclick = function() {
    video_disp.style.display = "none";
    video_disp.removeChild(video_output);
}

document.getElementById("product-demo2").onclick = function() {
    document.getElementById("video2").style.display = "flex";
    document.getElementById("video2").appendChild(video_output2);
}

document.getElementById("exit-button2").onclick = function() {
    document.getElementById("video2").style.display = "none";
    document.getElementById("video2").removeChild(video_output2);
}

feature_button.onclick = function() {
    feature_container.style.display = "flex";
}

feature_exit.onclick = function() {
    feature_container.style.display = "none";
}

feature_button_2.onclick = function() {
    feature_container_2.style.display = "flex";
}

feature_exit_2.onclick = function() {
    feature_container_2.style.display = "none";
}

hamburger_menu.onclick = function() {
    if (navlink.style.display === "flex") {
        navlink.style.display = "none";
    }
    else {
        navlink.style.display = "flex";
    }
}

function modaldisp() {
    modal.style.display = "flex";
}

setTimeout(modaldisp, 3000);

exit_button2.onclick = function() {
    modal.style.display = "none";
}

exit_button_3.onclick = function() {
    banner.style.display = "none";
}
