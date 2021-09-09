// Evaulating the states of radiobuttons and set up budgie colors and patterns
/*jshint esversion : 6 */


function resetBudgie(budgie) {
    budgie.baseColor = rgbToCSSColor(254, 240, 82);
    budgie.faceColor = rgbToCSSColor(0, 255, 0);
    budgie.eyeColor = rgbToCSSColor(0, 0, 0);
    budgie.eyeringColor = rgbToCSSColor(203, 205, 200);
    budgie.ceresColor = rgbToCSSColor(235, 188, 108);
    budgie.cheekColor = rgbToCSSColor(194, 186, 85);
    budgie.pointsColor = rgbToCSSColor(0, 0, 0);
    budgie.bodyColor = rgbToCSSColor(140, 214, 0);
    budgie.spotColor = rgbToCSSColor(55, 77, 178);
    budgie.upperwingColor = rgbToCSSColor(254, 240, 82);
    budgie.wingColor = rgbToCSSColor(254, 240, 82);
    budgie.wingpatternColor = rgbToCSSColor(0, 0, 0);
    budgie.headpatternColor = rgbToCSSColor(0, 0, 0);
    budgie.botColor = rgbToCSSColor(201, 133, 78);
    budgie.legColor = rgbToCSSColor(200, 175, 170);

    budgie.faceOn = false;
    budgie.opalinOn = false;
    budgie.opalinHeadOn = false;
    budgie.headPatternOn = true;
    budgie.pointsOn = true;
    budgie.spotOn = true;
    budgie.wingPatternOn = true;
    budgie.tailPatternOn = true;
    budgie.bodyOn = true;
    budgie.dompiedOn = false;
    budgie.dompied2On = false;
}

// Do NOT ask about this logic. Done decades ago and I'm not remember why and how :)
// Although not proud of it
function doBudgie(budgie) {
    resetBudgie(budgie);

    if (!($("#B1").is(":checked")) && !($("#B2").is(":checked"))) {
        budgie.baseColor = "#FFFFFF";
        if (!($("#d1").is(":checked")) && !($("#d2").is(":checked"))) {
            if (($("#v1").is(":checked")) && ($("#v2").is(":checked"))) {
                budgie.bodyColor = rgbToCSSColor(94, 104, 196);
            } else {
                budgie.bodyColor = rgbToCSSColor(114, 209, 221);
            }
        } else if (($("#d1").is(":checked")) && ($("#d2").is(":checked"))) {
            budgie.bodyColor = rgbToCSSColor(155, 163, 183);
        } else if (!($("#v1").is(":checked")) && !($("#v2").is(":checked"))) {
            budgie.bodyColor = rgbToCSSColor(96, 175, 221);
        } else {
            budgie.bodyColor = rgbToCSSColor(94, 104, 196);
        }
        if (($("#b11").is(":checked") && $("#b22").is(":checked")) || ($("#b21").is(":checked") && $("#b12").is(":checked"))) {
            budgie.faceOn = true;
            budgie.faceColor = rgbToCSSColor(254, 247, 150);
        } else if ($("#bg1").is(":checked") && $("#bg2").is(":checked")) {
            budgie.faceOn = true;
            budgie.faceColor = rgbToCSSColor(254, 240, 82);
        } else if (($("#b21").is(":checked") && $("#bg2").is(":checked")) || ($("#b22").is(":checked") && $("#bg1").is(":checked"))) {
            budgie.faceOn = true;
            budgie.faceColor = rgbToCSSColor(254, 240, 82);
            budgie.bodyColor = rgbToCSSColor(getRed(budgie.bodyColor) + 10, getGreen(budgie.bodyColor) + 10, getBlue(budgie.bodyColor));
            budgie.baseColor = rgbToCSSColor(getRed(budgie.baseColor), getGreen(budgie.baseColor), getBlue(budgie.baseColor) - 20);
        } else if ((!($("#b11").is(":checked")) || !($("#bg2").is(":checked"))) && (!($("#b12").is(":checked")) || !($("#bg1").is(":checked")))) {
            if (($("#b11").is(":checked") && $("#by22").is(":checked")) || ($("#b12").is(":checked") && $("#by21").is(":checked"))) {
                budgie.faceOn = true;
                budgie.faceColor = rgbToCSSColor(254, 247, 150);
                budgie.bodyColor = rgbToCSSColor(getRed(budgie.bodyColor), getGreen(budgie.bodyColor) + 45, getBlue(budgie.bodyColor));
                budgie.baseColor = rgbToCSSColor(getRed(budgie.baseColor), getGreen(budgie.baseColor), getBlue(budgie.baseColor) - 40);
            }
        } else {
            budgie.faceOn = true;
            budgie.faceColor = rgbToCSSColor(254, 240, 82);
            budgie.bodyColor = rgbToCSSColor(getRed(budgie.bodyColor), getGreen(budgie.bodyColor) + 45, getBlue(budgie.bodyColor));
            budgie.baseColor = rgbToCSSColor(getRed(budgie.baseColor), getGreen(budgie.baseColor), getBlue(budgie.baseColor) - 40);
        }
    } else {
        budgie.baseColor = rgbToCSSColor(254, 240, 82);
        if (!($("#d1").is(":checked")) && !($("#d2").is(":checked"))) {
            budgie.bodyColor = rgbToCSSColor(140, 214, 0);
        } else if ($("#d1").is(":checked") && $("#d2").is(":checked")) {
            budgie.bodyColor = rgbToCSSColor(86, 104, 42);
        } else {
            budgie.bodyColor = rgbToCSSColor(99, 142, 26);
        }
    }

    //-------

    if ($("#W").is(":checked")) {
        budgie.ceresColor = rgbToCSSColor(235, 188, 108);
        if ($("#Zcin2").is(":checked")) {
            budgie.wingpatternColor = rgbToCSSColor(131, 104, 59);
            budgie.headpatternColor = rgbToCSSColor(131, 104, 59);
            budgie.pointsColor = rgbToCSSColor(131, 104, 59);
        } else if ($("#Zino2").is(":checked")) {
            budgie.eyeColor = rgbToCSSColor(186, 56, 37);
            budgie.headPatternOn = false;
            budgie.pointsOn = false;
            budgie.spotOn = false;
            budgie.wingPatternOn = false;
            budgie.tailPatternOn = false;
            budgie.bodyOn = false;
        } else if ($("#Zcino2").is(":checked")) {
            budgie.wingpatternColor = rgbToCSSColor(196, 182, 172);
            budgie.headpatternColor = rgbToCSSColor(196, 182, 172);
            budgie.pointsColor = rgbToCSSColor(196, 182, 172);
            budgie.bodyOn = false;
            budgie.spotColor = rgbToCSSColor(197, 205, 224);
            budgie.eyeColor = rgbToCSSColor(186, 56, 37);
        } else if ($("#Zop2").is(":checked")) {
            budgie.opalinOn = true;
            budgie.opalinHeadOn = true;
        } else {
            budgie.wingpatternColor = "#000000";
            budgie.headpatternColor = "#000000";
            budgie.pointsColor = "#000000";
        }
    } else {
        budgie.ceresColor = rgbToCSSColor(89, 131, 181);
        if (($("#Zcin1").is(":checked") && $("#Zcin2").is(":checked")) || ($("#Zcino1").is(":checked") && $("#Zcin2").is(":checked")) || ($("#Zcin1").is(":checked") && $("#Zcino2").is(":checked"))) {
            budgie.wingpatternColor = rgbToCSSColor(131, 104, 59);
            budgie.headpatternColor = rgbToCSSColor(131, 104, 59);
            budgie.pointsColor = rgbToCSSColor(131, 104, 59);
        } else if ((!($("#Zino1").is(":checked")) || !($("#Zino2").is(":checked"))) && (!($("#Zcino1").is(":checked")) || !($("#Zino2").is(":checked"))) && (!($("#Zino1").is(":checked")) || !($("#Zcino2").is(":checked")))) {
            if ($("#Zop1").is(":checked") && $("#Zop2").is(":checked")) {
                budgie.opalinOn = true;
                budgie.opalinHeadOn = true;
            } else if ($("#Zcino1").is(":checked") && $("#Zcino2").is(":checked")) {
                budgie.wingpatternColor = rgbToCSSColor(196, 182, 172);
                budgie.headpatternColor = rgbToCSSColor(196, 182, 172);
                budgie.pointsColor = rgbToCSSColor(196, 182, 172);
                budgie.bodyOn = false;
                budgie.spotColor = rgbToCSSColor(197, 205, 224);
                budgie.eyeColor = rgbToCSSColor(186, 56, 37);
            } else {
                budgie.wingpatternColor = "#000000";
                budgie.headpatternColor = "#000000";
                budgie.pointsColor = "#000000";
            }
        } else {
            budgie.headPatternOn = false;
            budgie.pointsOn = false;
            budgie.spotOn = false;
            budgie.wingPatternOn = false;
            budgie.tailPatternOn = false;
            budgie.bodyOn = false;
            budgie.eyeColor = rgbToCSSColor(186, 56, 37);
            budgie.ceresColor = rgbToCSSColor(186, 144, 190);
        }
    }

    //------------- 2

    if (!$("#C1").is(":checked") && !$("#C2").is(":checked")) {


        if (($("#cg1").is(":checked") && $("#cg2").is(":checked")) || ($("#cg1").is(":checked") && $("#cd2").is(":checked")) || ($("#cg2").is(":checked") && $("#cd1").is(":checked"))) {
            let r = getRed(budgie.wingpatternColor);
            let g = getGreen(budgie.wingpatternColor);
            let b = getBlue(budgie.wingpatternColor);
            budgie.wingpatternColor = rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
            budgie.headpatternColor = budgie.wingpatternColor;
            budgie.pointsColor = budgie.wingpatternColor;
            r = getRed(budgie.bodyColor);
            g = getGreen(budgie.bodyColor);
            b = getBlue(budgie.bodyColor);
            budgie.bodyColor = rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
            r = getRed(budgie.spotColor);
            g = getGreen(budgie.spotColor);
            b = getBlue(budgie.spotColor);
            budgie.spotColor = rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
        } else if (($("#cg1").is(":checked") && $("#cw2").is(":checked")) || ($("#cg2").is(":checked") && $("#cw1").is(":checked"))) {
            let r = getRed(budgie.wingpatternColor);
            let g = getGreen(budgie.wingpatternColor);
            let b = getBlue(budgie.wingpatternColor);
            budgie.wingpatternColor = rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
            budgie.headpatternColor = budgie.wingpatternColor;
            budgie.pointsColor = budgie.wingpatternColor;
        } else if ((!$("#cw1").is(":checked") || !$("#cw2").is(":checked")) && (!$("#cw1").is(":checked") || !$("#cd2").is(":checked")) && (!$("#cw2").is(":checked") || !$("#cd1").is(":checked"))) {
            let r = getRed(budgie.wingpatternColor);
            let g = getGreen(budgie.wingpatternColor);
            let b = getBlue(budgie.wingpatternColor);
            budgie.wingpatternColor = rgbToCSSColor(r + 15 * (255 - r) / 20, g + 15 * (255 - r) / 20, b + 15 * (255 - r) / 20);
            budgie.headpatternColor = budgie.wingpatternColor;
            budgie.pointsColor = budgie.wingpatternColor;
            r = getRed(budgie.bodyColor);
            g = getGreen(budgie.bodyColor);
            b = getBlue(budgie.bodyColor);
            budgie.bodyColor = rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
            r = getRed(budgie.spotColor);
            g = getGreen(budgie.spotColor);
            b = getBlue(budgie.spotColor);
            budgie.spotcolor = rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
        } else {
            let r = getRed(budgie.wingpatternColor);
            let g = getGreen(budgie.wingpatternColor);
            let b = getBlue(budgie.wingpatternColor);
            budgie.wingpatternColor = rgbToCSSColor(r + 15 * (255 - r) / 20, g + 15 * (255 - r) / 20, b + 15 * (255 - r) / 20);
            budgie.headpatternColor = budgie.wingpatternColor;
            budgie.pointsColor = budgie.wingpatternColor;
        }
    }

    budgie.wingColor = budgie.baseColor;
    if ($("#s1").is(":checked") || $("#s2").is(":checked")) {
        if ($("#s1").is(":checked") && $("#s2").is(":checked")) {
            budgie.headPatternOn = false;
            budgie.pointsOn = false;
            budgie.spotOn = false;
            budgie.wingPatternOn = false;
            budgie.tailPatternOn = false;
            budgie.bodyOn = false;
        } else if (budgie.wingPatternOn) {
            if (!budgie.opalinOn) {
                budgie.wingColor = budgie.wingpatternColor;
                budgie.wingpatternColor = budgie.baseColor;
            } else {
                budgie.wingColor = budgie.bodyColor;
                budgie.wingpatternColor = budgie.baseColor;
                budgie.opalinOn = false;
            }
        }
    }

    if ($("#t1").is(":checked") && $("#t2").is(":checked")) {
        budgie.dompied2On = true;
    } else if ($("#t1").is(":checked") || $("#t2").is(":checked")) {
        budgie.dompiedOn = true;
    }

    drawBudgie(budgie);

}