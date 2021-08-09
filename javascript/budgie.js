/*jshint esversion : 6*/

//Initialization
window.onload = function () {
    var budgie = {};

    resetBudgie(budgie);

    budgie.ctx = document.getElementById("budgieCanvas").getContext("2d");

    budgie.conturImg = document.getElementById("contur");
    budgie.baseImg = document.getElementById("base");
    budgie.faceImg = document.getElementById("face");
    budgie.eyeImg = document.getElementById("eye");
    budgie.eyeringImg = document.getElementById("eyering");
    budgie.ceresImg = document.getElementById("ceres");
    budgie.cheekImg = document.getElementById("cheek");
    budgie.bodyImg = document.getElementById("body");
    budgie.pointsImg = document.getElementById("points");
    budgie.spotImg = document.getElementById("spot");
    budgie.wingImg = document.getElementById("wing");
    budgie.headpatternImg = document.getElementById("headpattern");
    budgie.headpatternopImg = document.getElementById("headpatternop");
    budgie.wingpatternImg = document.getElementById("wingpattern");
    budgie.upperwingImg = document.getElementById("upperwing");
    budgie.botImg = document.getElementById("bot");
    budgie.legImg = document.getElementById("leg");
    budgie.tailImg = document.getElementById("tail");
    budgie.tailpatternImg = document.getElementById("tailpattern");
    budgie.dompiedImg = document.getElementById("dompied");
    budgie.dompied2Img = document.getElementById("dompied2");

    $("input[type=radio]").on("change", function(){doBudgie(budgie);});
    doBudgie(budgie);
};