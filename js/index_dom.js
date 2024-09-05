import hamburguerMenu from "./dom/menu_burguer";
import { digitalClock, alarm } from "./dom/clock.js"
import { shrotcuts, moveBall } from "./dom/keyboard.js";
import countdown from "./dom/countdown.js";
import scrollTopButton from "./dom/scroll_button.js";
import darkTheme from "./dom/dark_theme.js";
import responsiveMedia from "./dom/responsive_object.js";
import responsive_tester from "./dom/responsive_test.js";
import userDeviceInfo from "./dom/user_agent.js";
import networkStatus from "./dom/network_detection.js";
import webCam from "./dom/webcam.js";
import getGeolocation from "./dom/geo.js";
import searchFilters from "./dom/search_filter.js";
import draw from "./dom/lottery.js";
import slider from "./dom/carousel.js";
import scrollSpy from "./dom/scroll_spy.js";
import smartVideo from "./dom/smart_video.js";
import contactFormValidations from "./dom/form_validations.js";
import speechReader from "./dom/narrator.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#clock", "#start-clock", "#end-clock")
    alarm("assets/alarm.mp3", "#start-alarm", "#end-alarm")
    countdown("countdown", "May 26,2021 03:23:19", "Happy birthday")
    scrollTopButton(".scroll-top-btn")
    responsiveMedia("youtube", "(min-width 1024px)", `<a href="https://www.youtube.com/embed/2SetvwBV-SU?si=1DqbnQ-t8pFHCY9s">See video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=1DqbnQ-t8pFHCY9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
    responsiveMedia("gmaps", "(min-width 1024px)", `<a href="https://maps.app.goo.gl/1jZwWvcRoxLsEe856">See map</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.330786071125!2d-99.16888681161511!3d19.42702312496518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses!2smx!4v1724703451045!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    responsive_tester("responsive-tester")
    userDeviceInfo("user-device")
    webCam("webcam")
    getGeolocation("geolocation")
    searchFilters(".card-filter", ".card")
    draw("#winner-btn", ".player")
    slider()
    scrollSpy()
    smartVideo()
    contactFormValidations()
})

d.addEventListener("keydown", e => { //"keydown" "keypressed" "keyup"
    shrotcuts(e)
    moveBall(e, ".ball", ".stage")
})


darkTheme("dark-theme-btn", "dark-mode")
networkStatus()
speechReader()
