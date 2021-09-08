/*jshint esversion : 6*/
// Building up a budgie instance after window is loaded


window.onload = function () {
    var budgie = {};

    resetBudgie(budgie);
    canvas = document.getElementById("budgieCanvas");
    budgie.ctx = canvas.getContext("2d");

    budgie.ctx.font = "30px Arial";
    budgie.ctx.fillStyle = "grey";
    budgie.ctx.textAlign = "center";
    budgie.ctx.fillText("Loading..", canvas.width / 2, (canvas.height / 2) - 40);

    setTimeout(function () {
        budgie.conturImg = extarctImageData(document.getElementById("contur"));
        budgie.baseImg = extarctImageData(document.getElementById("base"));
        budgie.faceImg = extarctImageData(document.getElementById("face"));
        budgie.eyeImg = extarctImageData(document.getElementById("eye"));
        budgie.eyeringImg = extarctImageData(document.getElementById("eyering"));
        budgie.ceresImg = extarctImageData(document.getElementById("ceres"));
        budgie.cheekImg = extarctImageData(document.getElementById("cheek"));
        budgie.bodyImg = extarctImageData(document.getElementById("body"));
        budgie.pointsImg = extarctImageData(document.getElementById("points"));
        budgie.spotImg = extarctImageData(document.getElementById("spot"));
        budgie.wingImg = extarctImageData(document.getElementById("wing"));
        budgie.headpatternImg = extarctImageData(document.getElementById("headpattern"));
        budgie.headpatternopImg = extarctImageData(document.getElementById("headpatternop"));
        budgie.wingpatternImg = extarctImageData(document.getElementById("wingpattern"));
        budgie.upperwingImg = extarctImageData(document.getElementById("upperwing"));
        budgie.botImg = extarctImageData(document.getElementById("bot"));
        budgie.legImg = extarctImageData(document.getElementById("leg"));
        budgie.tailImg = extarctImageData(document.getElementById("tail"));
        budgie.tailpatternImg = extarctImageData(document.getElementById("tailpattern"));
        budgie.dompiedImg = extarctImageData(document.getElementById("dompied"));
        budgie.dompied2Img = extarctImageData(document.getElementById("dompied2"));

        $("input[type=radio]").on("change", function () { doBudgie(budgie); });
        doBudgie(budgie);
    });
};