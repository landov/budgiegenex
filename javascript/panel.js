//Functions to draw the budgie on canvas
/*jshint esversion : 6 */
"use strict";

//Convert dec RGB to  CSS hex string
function rgbToCSSColor(r, g, b) {
    var redString = Math.floor(r).toString(16);
    if (redString.length < 2) { redString = "0" + redString; }
    var greenString = Math.floor(g).toString(16);
    if (greenString.length < 2) { greenString = "0" + greenString; }
    var blueString = Math.floor(b).toString(16);
    if (blueString.length < 2) { blueString = "0" + blueString; }
    return "#" + redString + greenString + blueString;
}

//one dec value of hex rgb
function getDecRGB(rgb, index) {
    return parseInt(rgb.substring(1 + index * 2, 3 + index * 2), 16);
}

//red dec value of hex rgb
function getRed(rgb) {
    return getDecRGB(rgb, 0);
}

//green dec value of hex rgb
function getGreen(rgb) {
    return getDecRGB(rgb, 1);
}

//blue dec value of hex rgb
function getBlue(rgb) {
    return getDecRGB(rgb, 2);
}

//Extract imagedata from image
function extarctImageData(image) {
    var tempCanvas = document.createElement("canvas");  //tempCanvas for iterating through image data
    tempCanvas.width = 480;
    tempCanvas.height = 640;
    var tempCtx = tempCanvas.getContext("2d");
    tempCtx.drawImage(image, 0, 0);
    var imageData = tempCtx.getImageData(0, 0, 480, 640);
    return imageData;
}


//Draw a single layer
function drawLayer(ctx, imageData, color) {
    setTimeout(function () {
        ctx.fillStyle = color;
        for (let i = 0; i < imageData.data.length; i = i + 4) {
            if (imageData.data[i] != 255) {
                let x = (i / 4) % 480;
                let y = Math.floor((i / 4) / 480);
                ctx.fillRect(x, y, 1, 1);
            }
        }
    });
}

//Draw a budgie layer by layer
function drawBudgie(budgie) {
    drawLayer(budgie.ctx, budgie.baseImg, budgie.baseColor);

    if (budgie.faceOn) {
        drawLayer(budgie.ctx, budgie.faceImg, budgie.faceColor);
    }

    drawLayer(budgie.ctx, budgie.eyeImg, budgie.eyeColor);
    drawLayer(budgie.ctx, budgie.eyeringImg, budgie.eyeringColor);
    drawLayer(budgie.ctx, budgie.ceresImg, budgie.ceresColor);
    drawLayer(budgie.ctx, budgie.cheekImg, budgie.cheekColor);

    if (budgie.bodyOn) {
        drawLayer(budgie.ctx, budgie.bodyImg, budgie.bodyColor);
    }

    if (budgie.pointsOn) {
        drawLayer(budgie.ctx, budgie.pointsImg, budgie.pointsColor);
    }

    if (budgie.spotOn) {
        drawLayer(budgie.ctx, budgie.spotImg, budgie.spotColor);
    }

    drawLayer(budgie.ctx, budgie.wingImg, budgie.wingColor);
    if (budgie.opalinOn && budgie.bodyOn) {
        drawLayer(budgie.ctx, budgie.upperwingImg, budgie.bodyColor);
    }

    if (budgie.headPatternOn) {
        if (budgie.opalinHeadOn) {
            drawLayer(budgie.ctx, budgie.headpatternopImg, budgie.headpatternColor);
        } else {
            drawLayer(budgie.ctx, budgie.headpatternImg, budgie.headpatternColor);
        }
    }

    if (budgie.wingPatternOn) {
        drawLayer(budgie.ctx, budgie.wingpatternImg, budgie.wingpatternColor);
    }

    drawLayer(budgie.ctx, budgie.botImg, budgie.botColor);
    drawLayer(budgie.ctx, budgie.legImg, budgie.legColor);
    drawLayer(budgie.ctx, budgie.tailImg, budgie.wingColor);
    if (budgie.wingPatternOn) {
        drawLayer(budgie.ctx, budgie.tailpatternImg, budgie.wingpatternColor);
    }

    if (budgie.dompiedOn) {
        drawLayer(budgie.ctx, budgie.dompiedImg, budgie.baseColor);
    }
    if (budgie.dompied2On) {
        drawLayer(budgie.ctx, budgie.dompied2Img, budgie.baseColor);
    }


    drawLayer(budgie.ctx, budgie.conturImg, "black");
}