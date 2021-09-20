/*jshint esversion : 6 */
"use strickt";

//global;
var opalinOn = false;

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

//Reset to a wild type 
function resetBudgie() {
    $("#base").attr("fill", rgbToCSSColor(254, 240, 82));
    $("#face").attr("fill", rgbToCSSColor(0, 255, 0));
    $("#eye").attr("fill", rgbToCSSColor(0, 0, 0));
    $("#eyering").attr("fill", rgbToCSSColor(203, 205, 200));
    $("#ceres").attr("fill", rgbToCSSColor(235, 188, 108));
    $("#cheek").attr("fill", rgbToCSSColor(194, 186, 85));
    $("#points").attr("fill", rgbToCSSColor(0, 0, 0));
    $("#body").attr("fill", rgbToCSSColor(140, 214, 0));
    $("#spot").attr("fill", rgbToCSSColor(55, 77, 178));
    $("#upperwing").attr("fill", rgbToCSSColor(254, 240, 82));
    $("#wing").attr("fill", rgbToCSSColor(254, 240, 82));
    $("#wingpattern").attr("fill", rgbToCSSColor(0, 0, 0));
    $("#headpattern").attr("fill", rgbToCSSColor(0, 0, 0));
    $("#bot").attr("fill", rgbToCSSColor(201, 133, 78));
    $("#leg").attr("fill", rgbToCSSColor(200, 175, 170));

    $("#face").attr("visibility", "hidden");
    $("#opalin").attr("visibility", "hidden");
    $("#headpatternop").attr("visibility", "hidden");
    $("#headpattern").attr("visibility", "visible");
    $("#points").attr("visibility", "visible");
    $("#spot").attr("visibility", "visible");
    $("#upperwing").attr("visibility", "hidden");
    $("#wingpattern").attr("visibility", "visible");
    $("#tailpattern").attr("visibility", "visible");
    $("#body").attr("visibility", "visible");
    $("#dompied").attr("visibility", "hidden");
    $("#dompied2").attr("visibility", "hidden");

    opalinOn = false;
}

function violet(){
    $("#body").attr("fill", rgbToCSSColor(157, 104, 254));
}

function lightViolet(){
    $("#body").attr("fill", rgbToCSSColor(155, 148, 240));
}

// Do NOT ask about this logic. Done decades ago and I'm not remember why and how :)
// Although not proud of it
function doBudgie() {
    resetBudgie();

    if (!($("#B1").is(":checked")) && !($("#B2").is(":checked"))) {
        //Blue budgie
        $("#base").attr("fill", "#FFFFFF");
        if (!($("#d1").is(":checked")) && !($("#d2").is(":checked"))) {
            if (($("#v1").is(":checked")) && ($("#v2").is(":checked"))) {
                violet();
            } else if (($("#v1").is(":checked")) || ($("#v2").is(":checked"))){
                lightViolet();
            } else {
                $("#body").attr("fill", rgbToCSSColor(114, 209, 221));
            }
        } else if (($("#d1").is(":checked")) && ($("#d2").is(":checked"))) {
            $("#body").attr("fill", rgbToCSSColor(155, 163, 183));
        } else if (!($("#v1").is(":checked")) && !($("#v2").is(":checked"))) {
            $("#body").attr("fill", rgbToCSSColor(96, 175, 221));
        } else {
            $("#body").attr("fill", rgbToCSSColor(94, 104, 196));
        }
        if (($("#b11").is(":checked") && $("#b22").is(":checked")) || ($("#b21").is(":checked") && $("#b12").is(":checked"))) {
            $("#face").attr("visibility", "visible");
            $("#face").attr("fill", rgbToCSSColor(254, 247, 150));
        } else if ((($("#bg1").is(":checked") || ($("#by21").is(":checked"))) && $("#bg2").is(":checked")) || 
                  (($("#bg2").is(":checked") || ($("#by22").is(":checked"))) && $("#bg1").is(":checked"))) {
            // Goldenface 
            $("#face").attr("visibility", "visible");
            $("#face").attr("fill", rgbToCSSColor(254, 240, 82));
        } else if (($("#b21").is(":checked") && $("#bg2").is(":checked")) || ($("#b22").is(":checked") && $("#bg1").is(":checked"))) {
            $("#face").attr("visibility", "visible");
            $("#face").attr("fill", rgbToCSSColor(254, 240, 82));
            $("#body").attr("fill", rgbToCSSColor(getRed($("#body").attr("fill")) + 10, getGreen($("#body").attr("fill")) + 10, getBlue($("#body").attr("fill"))));
            $("#base").attr("fill", rgbToCSSColor(getRed($("#base").attr("fill")), getGreen($("#base").attr("fill")), getBlue($("#base").attr("fill")) - 20));
        } else if ((!($("#b11").is(":checked")) || !($("#bg2").is(":checked"))) && (!($("#b12").is(":checked")) || !($("#bg1").is(":checked")))) {
            if (($("#b11").is(":checked") && $("#by22").is(":checked")) || ($("#b12").is(":checked") && $("#by21").is(":checked"))) {
                $("#face").attr("visibility", "visible");
                $("#face").attr("fill", rgbToCSSColor(254, 247, 150));
                $("#body").attr("fill", rgbToCSSColor(getRed($("#body").attr("fill")), getGreen($("#body").attr("fill")) + 45, getBlue($("#body").attr("fill"))));
                $("#base").attr("fill", rgbToCSSColor(getRed($("#base").attr("fill")), getGreen($("#base").attr("fill")), getBlue($("#base").attr("fill")) - 40));
            }
        } else {
            $("#face").attr("visibility", "visible");
            $("#face").attr("fill", rgbToCSSColor(254, 240, 82));
            $("#body").attr("fill", rgbToCSSColor(getRed($("#body").attr("fill")), getGreen($("#body").attr("fill")) + 45, getBlue($("#body").attr("fill"))));
            $("#base").attr("fill", rgbToCSSColor(getRed($("#base").attr("fill")), getGreen($("#base").attr("fill")), getBlue($("#base").attr("fill")) - 40));
        }
    } else {
        $("#base").attr("fill", rgbToCSSColor(254, 240, 82));
        if (!($("#d1").is(":checked")) && !($("#d2").is(":checked"))) {
            $("#body").attr("fill", rgbToCSSColor(140, 214, 0));
        } else if ($("#d1").is(":checked") && $("#d2").is(":checked")) {
            $("#body").attr("fill", rgbToCSSColor(86, 104, 42));
        } else {
            $("#body").attr("fill", rgbToCSSColor(99, 142, 26));
        }
    }

    //-------

    if ($("#W").is(":checked")) {
        $("#ceres").attr("fill", rgbToCSSColor(235, 188, 108));
        if ($("#Zcin2").is(":checked")) {
            $("#wingpattern").attr("fill", rgbToCSSColor(131, 104, 59));
            $("#headpattern").attr("fill", rgbToCSSColor(131, 104, 59));
            $("#points").attr("fill", rgbToCSSColor(131, 104, 59));
        } else if ($("#Zino2").is(":checked")) {
            $("#eye").attr("fill", rgbToCSSColor(186, 56, 37));
            $("#headpattern").attr("visibility", "hidden");
            $("#points").attr("visibility", "hidden");
            $("#spot").attr("visibility", "hidden");
            $("#wingpattern").attr("visibility", "hidden");
            $("#tailpattern").attr("visibility", "hidden");
            $("#body").attr("visibility", "hidden");
        } else if ($("#Zcino2").is(":checked")) {
            $("#wingpattern").attr("fill", rgbToCSSColor(196, 182, 172));
            $("#headpattern").attr("fill", rgbToCSSColor(196, 182, 172));
            $("#points").attr("fill", rgbToCSSColor(196, 182, 172));
            $("#body").attr("visibility", "hidden");
            $("#spot").attr("fill", rgbToCSSColor(197, 205, 224));
            $("#eye").attr("fill", rgbToCSSColor(186, 56, 37));
        } else if ($("#Zop2").is(":checked")) {
            opalinOn = true;
            //budgie.opalinHeadOn = true;
            $("#headpatternop").attr("visibility", "visible");
            $("#headpattern").attr("visibility", "hidden");
        } else {
            $("#wingpattern").attr("fill", "#000000");
            $("#headpattern").attr("fill", "#000000");
            $("#points").attr("fill", "#000000");
        }
    } else {
        $("#ceres").attr("fill", rgbToCSSColor(89, 131, 181));
        if (($("#Zcin1").is(":checked") && $("#Zcin2").is(":checked")) || ($("#Zcino1").is(":checked") && $("#Zcin2").is(":checked")) || ($("#Zcin1").is(":checked") && $("#Zcino2").is(":checked"))) {
            $("#wingpattern").attr("fill", rgbToCSSColor(131, 104, 59));
            $("#headpattern").attr("fill", rgbToCSSColor(131, 104, 59));
            $("#points").attr("fill", rgbToCSSColor(131, 104, 59));
        } else if ((!($("#Zino1").is(":checked")) || !($("#Zino2").is(":checked"))) && (!($("#Zcino1").is(":checked")) || !($("#Zino2").is(":checked"))) && (!($("#Zino1").is(":checked")) || !($("#Zcino2").is(":checked")))) {
            if ($("#Zop1").is(":checked") && $("#Zop2").is(":checked")) {
                opalinOn = true;
                //budgie.opalinHeadOn = true;
                $("#headpatternop").attr("visibility", "visible");
                $("#headpattern").attr("visibility", "hidden");
            } else if ($("#Zcino1").is(":checked") && $("#Zcino2").is(":checked")) {
                $("#wingpattern").attr("fill", rgbToCSSColor(196, 182, 172));
                $("#headpattern").attr("fill", rgbToCSSColor(196, 182, 172));
                $("#points").attr("fill", rgbToCSSColor(196, 182, 172));
                $("#body").attr("visibility", "hidden");
                $("#spot").attr("fill", rgbToCSSColor(197, 205, 224));
                $("#eye").attr("fill", rgbToCSSColor(186, 56, 37));
            } else {
                $("#wingpattern").attr("fill", "#000000");
                $("#headpattern").attr("fill", "#000000");
                $("#points").attr("fill", "#000000");
            }
        } else {
            $("#headpattern").attr("visibility", "hidden");
            $("#points").attr("visibility", "hidden");
            $("#spot").attr("visibility", "hidden");
            $("#wingpattern").attr("visibility", "hidden");
            $("#tailpattern").attr("visibility", "hidden");
            $("#body").attr("visibility", "hidden");
            $("#eye").attr("fill", rgbToCSSColor(186, 56, 37));
            $("#ceres").attr("fill", rgbToCSSColor(186, 144, 190));
        }
    }

    //------------- 2

    if (!$("#C1").is(":checked") && !$("#C2").is(":checked")) {


        if (($("#cg1").is(":checked") && $("#cg2").is(":checked")) || ($("#cg1").is(":checked") && $("#cd2").is(":checked")) || ($("#cg2").is(":checked") && $("#cd1").is(":checked"))) {
            let r = getRed($("#wingpattern").attr("fill"));
            let g = getGreen($("#wingpattern").attr("fill"));
            let b = getBlue($("#wingpattern").attr("fill"));
            $("#wingpattern").attr("fill", rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2));
            $("#headpattern").attr("fill", $("#wingpattern").attr("fill"));
            $("#points").attr("fill", $("#wingpattern").attr("fill"));
            r = getRed($("#body").attr("fill"));
            g = getGreen($("#body").attr("fill"));
            b = getBlue($("#body").attr("fill"));
            $("#body").attr("fill", rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2));
            r = getRed($("#spot").attr("fill"));
            g = getGreen($("#spot").attr("fill"));
            b = getBlue($("#spot").attr("fill"));
            $("#spot").attr("fill", rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2));
        } else if (($("#cg1").is(":checked") && $("#cw2").is(":checked")) || ($("#cg2").is(":checked") && $("#cw1").is(":checked"))) {
            let r = getRed($("#wingpattern").attr("fill"));
            let g = getGreen($("#wingpattern").attr("fill"));
            let b = getBlue($("#wingpattern").attr("fill"));
            $("#wingpattern").attr("fill", rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2));
            $("#headpattern").attr("fill", $("#wingpattern").attr("fill"));
            $("#points").attr("fill", $("#wingpattern").attr("fill"));
        } else if ((!$("#cw1").is(":checked") || !$("#cw2").is(":checked")) && (!$("#cw1").is(":checked") || !$("#cd2").is(":checked")) && (!$("#cw2").is(":checked") || !$("#cd1").is(":checked"))) {
            let r = getRed($("#wingpattern").attr("fill"));
            let g = getGreen($("#wingpattern").attr("fill"));
            let b = getBlue($("#wingpattern").attr("fill"));
            $("#wingpattern").attr("fill", rgbToCSSColor(r + 15 * (255 - r) / 20, g + 15 * (255 - r) / 20, b + 15 * (255 - r) / 20));
            $("#headpattern").attr("fill", $("#wingpattern").attr("fill"));
            $("#points").attr("fill", $("#wingpattern").attr("fill"));
            r = getRed($("#body").attr("fill"));
            g = getGreen($("#body").attr("fill"));
            b = getBlue($("#body").attr("fill"));
            $("#body").attr("fill", rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2));
            r = getRed($("#spot").attr("fill"));
            g = getGreen($("#spot").attr("fill"));
            b = getBlue($("#spot").attr("fill"));
            $("#spot").attr("fill", rgbToCSSColor(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2));
        } else {
            let r = getRed($("#wingpattern").attr("fill"));
            let g = getGreen($("#wingpattern").attr("fill"));
            let b = getBlue($("#wingpattern").attr("fill"));
            $("#wingpattern").attr("fill", rgbToCSSColor(r + 15 * (255 - r) / 20, g + 15 * (255 - r) / 20, b + 15 * (255 - r) / 20));
            $("#headpattern").attr("fill", $("#wingpattern").attr("fill"));
            $("#points").attr("fill", $("#wingpattern").attr("fill"));
        }
    }

    $("#wing").attr("fill", $("#base").attr("fill"));
    if ($("#s1").is(":checked") || $("#s2").is(":checked")) {
        if ($("#s1").is(":checked") && $("#s2").is(":checked")) {
            $("#headpattern").attr("visibility", "hidden");
            $("#points").attr("visibility", "hidden");
            $("#spot").attr("visibility", "hidden");
            $("#wingpattern").attr("visibility", "hidden");
            $("#tailpattern").attr("visibility", "hidden");
            $("#body").attr("visibility", "hidden");
        } else if ($("#wingpattern").attr("visibility") == "visible") {
            if (!opalinOn) {
                $("#wing").attr("fill", $("#wingpattern").attr("fill"));
                $("#wingpattern").attr("fill", $("#base").attr("fill"));
            } else {
                $("#wing").attr("fill", $("#body").attr("fill"));
                $("#wingpattern").attr("fill", $("#base").attr("fill"));
                opalinOn = false;
            }
        }
    }

    if ($("#t1").is(":checked") && $("#t2").is(":checked")) {
        $("#dompied2").attr("visibility", "visible");
    } else if ($("#t1").is(":checked") || $("#t2").is(":checked")) {
        $("#dompied").attr("visibility", "visible");
    }

    //Logic from older version drawBudgie  -----------

    if (opalinOn && ($("#body").attr("visibility") == "visible")) {
        //drawLayer(budgie.ctx, budgie.upperwingImg, budgie.bodyColor);
        $("#upperwing").attr("fill", $("#body").attr("fill"));
        $("#upperwing").attr("visibility", "visible");
    }

    $("#headpatternop").attr("fill", $("#headpattern").attr("fill"));

    $("#tail").attr("fill", $("#wing").attr("fill"));

    $("#tailpattern").attr("fill", $("#wingpattern").attr("fill"));

    if ($("#dompied").attr("visibility") == "visible") {
        $("#dompied").attr("fill",$("#base").attr("fill"));
    }
    if ($("#dompied2").attr("visibility") == "visible") {
        $("#dompied2").attr("fill",$("#base").attr("fill"));
    }

}


window.onload = function () {
    console.log($("#contur").attr("fill"));
    //resetBudgie();
    $("input[type=radio]").on("change", function () { doBudgie(); });
    doBudgie();

};