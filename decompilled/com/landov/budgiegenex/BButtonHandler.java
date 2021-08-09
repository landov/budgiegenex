/*     */ package com.landov.budgiegenex;
/*     */ 
/*     */ import java.awt.Color;
/*     */ import java.awt.event.ItemEvent;
/*     */ import java.awt.event.ItemListener;
/*     */ 
/*     */ class BButtonHandler
/*     */   implements ItemListener
/*     */ {
/*     */   private ControlPanel this$0;
/*     */   
/*     */   public BButtonHandler(ControlPanel var1) {
/*  13 */     this.this$0 = var1;
/*     */   }
/*     */   
/*     */   public void itemStateChanged(ItemEvent event) {
/*  17 */     this.this$0.budgiePanel.pointcolor = Color.BLACK;
/*  18 */     this.this$0.budgiePanel.spotcolor = new Color(55, 77, 178);
/*  19 */     this.this$0.budgiePanel.eyecolor = Color.BLACK;
/*  20 */     this.this$0.budgiePanel.wingpatterncolor = Color.BLACK;
/*  21 */     this.this$0.budgiePanel.headpatterncolor = Color.BLACK;
/*  22 */     this.this$0.budgiePanel.faceOn = false;
/*  23 */     this.this$0.budgiePanel.opalinOn = false;
/*  24 */     this.this$0.budgiePanel.opalinHeadOn = false;
/*  25 */     this.this$0.budgiePanel.headPatternOn = true;
/*  26 */     this.this$0.budgiePanel.pointsOn = true;
/*  27 */     this.this$0.budgiePanel.spotOn = true;
/*  28 */     this.this$0.budgiePanel.wingPatternOn = true;
/*  29 */     this.this$0.budgiePanel.tailPatternOn = true;
/*  30 */     this.this$0.budgiePanel.bodyOn = true;
/*  31 */     this.this$0.budgiePanel.dompiedOn = false;
/*  32 */     this.this$0.budgiePanel.dompied2On = false;
/*  33 */     if (!ControlPanel.access$100(this.this$0).isSelected() && !ControlPanel.access$200(this.this$0).isSelected()) {
/*  34 */       this.this$0.budgiePanel.basecolor = Color.WHITE;
/*  35 */       if (!ControlPanel.access$300(this.this$0).isSelected() && !ControlPanel.access$400(this.this$0).isSelected()) {
/*  36 */         if (ControlPanel.access$500(this.this$0).isSelected() && ControlPanel.access$600(this.this$0).isSelected()) {
/*  37 */           this.this$0.budgiePanel.bodycolor = new Color(94, 104, 196);
/*     */         } else {
/*  39 */           this.this$0.budgiePanel.bodycolor = new Color(114, 209, 221);
/*     */         } 
/*  41 */       } else if (ControlPanel.access$300(this.this$0).isSelected() && ControlPanel.access$400(this.this$0).isSelected()) {
/*  42 */         this.this$0.budgiePanel.bodycolor = new Color(155, 163, 183);
/*  43 */       } else if (!ControlPanel.access$500(this.this$0).isSelected() && !ControlPanel.access$600(this.this$0).isSelected()) {
/*  44 */         this.this$0.budgiePanel.bodycolor = new Color(96, 175, 221);
/*     */       } else {
/*  46 */         this.this$0.budgiePanel.bodycolor = new Color(94, 104, 196);
/*     */       } 
/*     */       
/*  49 */       if ((ControlPanel.access$700(this.this$0).isSelected() && ControlPanel.access$800(this.this$0).isSelected()) || (ControlPanel.access$900(this.this$0).isSelected() && ControlPanel.access$1000(this.this$0).isSelected())) {
/*  50 */         this.this$0.budgiePanel.faceOn = true;
/*  51 */         this.this$0.budgiePanel.facecolor = new Color(254, 247, 150);
/*  52 */       } else if (ControlPanel.access$1100(this.this$0).isSelected() && ControlPanel.access$1200(this.this$0).isSelected()) {
/*  53 */         this.this$0.budgiePanel.faceOn = true;
/*  54 */         this.this$0.budgiePanel.facecolor = new Color(254, 240, 82);
/*  55 */       } else if ((ControlPanel.access$900(this.this$0).isSelected() && ControlPanel.access$1200(this.this$0).isSelected()) || (ControlPanel.access$800(this.this$0).isSelected() && ControlPanel.access$1100(this.this$0).isSelected())) {
/*  56 */         this.this$0.budgiePanel.faceOn = true;
/*  57 */         this.this$0.budgiePanel.facecolor = new Color(254, 240, 82);
/*  58 */         this.this$0.budgiePanel.bodycolor = new Color(this.this$0.budgiePanel.bodycolor.getRed() + 10, this.this$0.budgiePanel.bodycolor.getGreen() + 10, this.this$0.budgiePanel.bodycolor.getBlue());
/*  59 */         this.this$0.budgiePanel.basecolor = new Color(this.this$0.budgiePanel.basecolor.getRed(), this.this$0.budgiePanel.basecolor.getGreen(), this.this$0.budgiePanel.basecolor.getBlue() - 20);
/*  60 */       } else if ((!ControlPanel.access$700(this.this$0).isSelected() || !ControlPanel.access$1200(this.this$0).isSelected()) && (!ControlPanel.access$1000(this.this$0).isSelected() || !ControlPanel.access$1100(this.this$0).isSelected())) {
/*  61 */         if ((ControlPanel.access$700(this.this$0).isSelected() && ControlPanel.access$1300(this.this$0).isSelected()) || (ControlPanel.access$1000(this.this$0).isSelected() && ControlPanel.access$1400(this.this$0).isSelected())) {
/*  62 */           this.this$0.budgiePanel.faceOn = true;
/*  63 */           this.this$0.budgiePanel.facecolor = new Color(254, 247, 150);
/*  64 */           this.this$0.budgiePanel.bodycolor = new Color(this.this$0.budgiePanel.bodycolor.getRed(), this.this$0.budgiePanel.bodycolor.getGreen() + 45, this.this$0.budgiePanel.bodycolor.getBlue());
/*  65 */           this.this$0.budgiePanel.basecolor = new Color(this.this$0.budgiePanel.basecolor.getRed(), this.this$0.budgiePanel.basecolor.getGreen(), this.this$0.budgiePanel.basecolor.getBlue() - 40);
/*     */         } 
/*     */       } else {
/*  68 */         this.this$0.budgiePanel.faceOn = true;
/*  69 */         this.this$0.budgiePanel.facecolor = new Color(254, 240, 82);
/*  70 */         this.this$0.budgiePanel.bodycolor = new Color(this.this$0.budgiePanel.bodycolor.getRed(), this.this$0.budgiePanel.bodycolor.getGreen() + 45, this.this$0.budgiePanel.bodycolor.getBlue());
/*  71 */         this.this$0.budgiePanel.basecolor = new Color(this.this$0.budgiePanel.basecolor.getRed(), this.this$0.budgiePanel.basecolor.getGreen(), this.this$0.budgiePanel.basecolor.getBlue() - 40);
/*     */       } 
/*     */     } else {
/*  74 */       this.this$0.budgiePanel.basecolor = new Color(254, 240, 82);
/*  75 */       if (!ControlPanel.access$300(this.this$0).isSelected() && !ControlPanel.access$400(this.this$0).isSelected()) {
/*  76 */         this.this$0.budgiePanel.bodycolor = new Color(140, 214, 0);
/*  77 */       } else if (ControlPanel.access$300(this.this$0).isSelected() && ControlPanel.access$400(this.this$0).isSelected()) {
/*  78 */         this.this$0.budgiePanel.bodycolor = new Color(86, 104, 42);
/*     */       } else {
/*  80 */         this.this$0.budgiePanel.bodycolor = new Color(99, 142, 26);
/*     */       } 
/*     */     } /*-----------
/*     */     
/*  84 */     if (ControlPanel.access$1500(this.this$0).isSelected()) {
/*  85 */       this.this$0.budgiePanel.cerescolor = new Color(235, 188, 108);
/*  86 */       if (ControlPanel.access$1600(this.this$0).isSelected()) {
/*  87 */         this.this$0.budgiePanel.wingpatterncolor = new Color(131, 104, 59);
/*  88 */         this.this$0.budgiePanel.headpatterncolor = new Color(131, 104, 59);
/*  89 */         this.this$0.budgiePanel.pointcolor = new Color(131, 104, 59);
/*  90 */       } else if (ControlPanel.access$1700(this.this$0).isSelected()) {
/*  91 */         this.this$0.budgiePanel.eyecolor = new Color(186, 56, 37);
/*  92 */         this.this$0.budgiePanel.headPatternOn = false;
/*  93 */         this.this$0.budgiePanel.pointsOn = false;
/*  94 */         this.this$0.budgiePanel.spotOn = false;
/*  95 */         this.this$0.budgiePanel.wingPatternOn = false;
/*  96 */         this.this$0.budgiePanel.tailPatternOn = false;
/*  97 */         this.this$0.budgiePanel.bodyOn = false;
/*  98 */       } else if (ControlPanel.access$1800(this.this$0).isSelected()) {
/*  99 */         this.this$0.budgiePanel.wingpatterncolor = new Color(196, 182, 172);
/* 100 */         this.this$0.budgiePanel.headpatterncolor = new Color(196, 182, 172);
/* 101 */         this.this$0.budgiePanel.pointcolor = new Color(196, 182, 172);
/* 102 */         this.this$0.budgiePanel.bodyOn = false;
/* 103 */         this.this$0.budgiePanel.spotcolor = new Color(197, 205, 224);
/* 104 */         this.this$0.budgiePanel.eyecolor = new Color(186, 56, 37);
/* 105 */       } else if (ControlPanel.access$1900(this.this$0).isSelected()) {
/* 106 */         this.this$0.budgiePanel.opalinOn = true;
/* 107 */         this.this$0.budgiePanel.opalinHeadOn = true;
/*     */       } else {
/* 109 */         this.this$0.budgiePanel.wingpatterncolor = Color.BLACK;
/* 110 */         this.this$0.budgiePanel.headpatterncolor = Color.BLACK;
/* 111 */         this.this$0.budgiePanel.pointcolor = Color.BLACK;
/*     */       } 
/*     */     } else {
/* 114 */       this.this$0.budgiePanel.cerescolor = new Color(89, 131, 181);
/* 115 */       if ((ControlPanel.access$2000(this.this$0).isSelected() && ControlPanel.access$1600(this.this$0).isSelected()) || (ControlPanel.access$2100(this.this$0).isSelected() && ControlPanel.access$1600(this.this$0).isSelected()) || (ControlPanel.access$2000(this.this$0).isSelected() && ControlPanel.access$1800(this.this$0).isSelected())) {
/* 116 */         this.this$0.budgiePanel.wingpatterncolor = new Color(131, 104, 59);
/* 117 */         this.this$0.budgiePanel.headpatterncolor = new Color(131, 104, 59);
/* 118 */         this.this$0.budgiePanel.pointcolor = new Color(131, 104, 59);
/* 119 */       } else if ((!ControlPanel.access$2200(this.this$0).isSelected() || !ControlPanel.access$1700(this.this$0).isSelected()) && (!ControlPanel.access$2100(this.this$0).isSelected() || !ControlPanel.access$1700(this.this$0).isSelected()) && (!ControlPanel.access$2200(this.this$0).isSelected() || !ControlPanel.access$1800(this.this$0).isSelected())) {
/* 120 */         if (ControlPanel.access$2300(this.this$0).isSelected() && ControlPanel.access$1900(this.this$0).isSelected()) {
/* 121 */           this.this$0.budgiePanel.opalinOn = true;
/* 122 */           this.this$0.budgiePanel.opalinHeadOn = true;
/* 123 */         } else if (ControlPanel.access$2100(this.this$0).isSelected() && ControlPanel.access$1800(this.this$0).isSelected()) {
/* 124 */           this.this$0.budgiePanel.wingpatterncolor = new Color(196, 182, 172);
/* 125 */           this.this$0.budgiePanel.headpatterncolor = new Color(196, 182, 172);
/* 126 */           this.this$0.budgiePanel.pointcolor = new Color(196, 182, 172);
/* 127 */           this.this$0.budgiePanel.bodyOn = false;
/* 128 */           this.this$0.budgiePanel.spotcolor = new Color(197, 205, 224);
/* 129 */           this.this$0.budgiePanel.eyecolor = new Color(186, 56, 37);
/*     */         } else {
/* 131 */           this.this$0.budgiePanel.wingpatterncolor = Color.BLACK;
/* 132 */           this.this$0.budgiePanel.headpatterncolor = Color.BLACK;
/* 133 */           this.this$0.budgiePanel.pointcolor = Color.BLACK;
/*     */         } 
/*     */       } else {
/* 136 */         this.this$0.budgiePanel.headPatternOn = false;
/* 137 */         this.this$0.budgiePanel.pointsOn = false;
/* 138 */         this.this$0.budgiePanel.spotOn = false;
/* 139 */         this.this$0.budgiePanel.wingPatternOn = false;
/* 140 */         this.this$0.budgiePanel.tailPatternOn = false;
/* 141 */         this.this$0.budgiePanel.bodyOn = false;
/* 142 */         this.this$0.budgiePanel.eyecolor = new Color(186, 56, 37);
/* 143 */         this.this$0.budgiePanel.cerescolor = new Color(186, 144, 190);
/*     */       } 
/*     */     } 
/*     */     
/* 147 */     if (!ControlPanel.access$2400(this.this$0).isSelected() && !ControlPanel.access$2500(this.this$0).isSelected())
/*     */     {
/*     */ 
/*     */       
/* 151 */       if ((ControlPanel.access$2600(this.this$0).isSelected() && ControlPanel.access$2700(this.this$0).isSelected()) || (ControlPanel.access$2600(this.this$0).isSelected() && ControlPanel.access$2800(this.this$0).isSelected()) || (ControlPanel.access$2700(this.this$0).isSelected() && ControlPanel.access$2900(this.this$0).isSelected())) {
/* 152 */         int r = this.this$0.budgiePanel.wingpatterncolor.getRed();
/* 153 */         int g = this.this$0.budgiePanel.wingpatterncolor.getGreen();
/* 154 */         int b = this.this$0.budgiePanel.wingpatterncolor.getBlue();
/* 155 */         this.this$0.budgiePanel.wingpatterncolor = new Color(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
/* 156 */         this.this$0.budgiePanel.headpatterncolor = this.this$0.budgiePanel.wingpatterncolor;
/* 157 */         this.this$0.budgiePanel.pointcolor = this.this$0.budgiePanel.wingpatterncolor;
/* 158 */         r = this.this$0.budgiePanel.bodycolor.getRed();
/* 159 */         g = this.this$0.budgiePanel.bodycolor.getGreen();
/* 160 */         b = this.this$0.budgiePanel.bodycolor.getBlue();
/* 161 */         this.this$0.budgiePanel.bodycolor = new Color(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
/* 162 */         r = this.this$0.budgiePanel.spotcolor.getRed();
/* 163 */         g = this.this$0.budgiePanel.spotcolor.getGreen();
/* 164 */         b = this.this$0.budgiePanel.spotcolor.getBlue();
/* 165 */         this.this$0.budgiePanel.spotcolor = new Color(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
/* 166 */       } else if ((ControlPanel.access$2600(this.this$0).isSelected() && ControlPanel.access$3000(this.this$0).isSelected()) || (ControlPanel.access$2700(this.this$0).isSelected() && ControlPanel.access$3100(this.this$0).isSelected())) {
/* 167 */         int r = this.this$0.budgiePanel.wingpatterncolor.getRed();
/* 168 */         int g = this.this$0.budgiePanel.wingpatterncolor.getGreen();
/* 169 */         int b = this.this$0.budgiePanel.wingpatterncolor.getBlue();
/* 170 */         this.this$0.budgiePanel.wingpatterncolor = new Color(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
/* 171 */         this.this$0.budgiePanel.headpatterncolor = this.this$0.budgiePanel.wingpatterncolor;
/* 172 */         this.this$0.budgiePanel.pointcolor = this.this$0.budgiePanel.wingpatterncolor;
/* 173 */       } else if ((!ControlPanel.access$3100(this.this$0).isSelected() || !ControlPanel.access$3000(this.this$0).isSelected()) && (!ControlPanel.access$3100(this.this$0).isSelected() || !ControlPanel.access$2800(this.this$0).isSelected()) && (!ControlPanel.access$3000(this.this$0).isSelected() || !ControlPanel.access$2900(this.this$0).isSelected())) {
/* 174 */         int r = this.this$0.budgiePanel.wingpatterncolor.getRed();
/* 175 */         int g = this.this$0.budgiePanel.wingpatterncolor.getGreen();
/* 176 */         int b = this.this$0.budgiePanel.wingpatterncolor.getBlue();
/* 177 */         this.this$0.budgiePanel.wingpatterncolor = new Color(r + 15 * (255 - r) / 20, g + 15 * (255 - r) / 20, b + 15 * (255 - r) / 20);
/* 178 */         this.this$0.budgiePanel.headpatterncolor = this.this$0.budgiePanel.wingpatterncolor;
/* 179 */         this.this$0.budgiePanel.pointcolor = this.this$0.budgiePanel.wingpatterncolor;
/* 180 */         r = this.this$0.budgiePanel.bodycolor.getRed();
/* 181 */         g = this.this$0.budgiePanel.bodycolor.getGreen();
/* 182 */         b = this.this$0.budgiePanel.bodycolor.getBlue();
/* 183 */         this.this$0.budgiePanel.bodycolor = new Color(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
/* 184 */         r = this.this$0.budgiePanel.spotcolor.getRed();
/* 185 */         g = this.this$0.budgiePanel.spotcolor.getGreen();
/* 186 */         b = this.this$0.budgiePanel.spotcolor.getBlue();
/* 187 */         this.this$0.budgiePanel.spotcolor = new Color(r + (255 - r) / 2, g + (255 - g) / 2, b + (255 - b) / 2);
/*     */       } else {
/* 189 */         int r = this.this$0.budgiePanel.wingpatterncolor.getRed();
/* 190 */         int g = this.this$0.budgiePanel.wingpatterncolor.getGreen();
/* 191 */         int b = this.this$0.budgiePanel.wingpatterncolor.getBlue();
/* 192 */         this.this$0.budgiePanel.wingpatterncolor = new Color(r + 15 * (255 - r) / 20, g + 15 * (255 - r) / 20, b + 15 * (255 - r) / 20);
/* 193 */         this.this$0.budgiePanel.headpatterncolor = this.this$0.budgiePanel.wingpatterncolor;
/* 194 */         this.this$0.budgiePanel.pointcolor = this.this$0.budgiePanel.wingpatterncolor;
/*     */       } 
/*     */     }
/*     */     
/* 198 */     this.this$0.budgiePanel.wingcolor = this.this$0.budgiePanel.basecolor;
/* 199 */     if (ControlPanel.access$3200(this.this$0).isSelected() || ControlPanel.access$3300(this.this$0).isSelected()) {
/* 200 */       if (ControlPanel.access$3200(this.this$0).isSelected() && ControlPanel.access$3300(this.this$0).isSelected()) {
/* 201 */         this.this$0.budgiePanel.headPatternOn = false;
/* 202 */         this.this$0.budgiePanel.pointsOn = false;
/* 203 */         this.this$0.budgiePanel.spotOn = false;
/* 204 */         this.this$0.budgiePanel.wingPatternOn = false;
/* 205 */         this.this$0.budgiePanel.tailPatternOn = false;
/* 206 */         this.this$0.budgiePanel.bodyOn = false;
/* 207 */       } else if (this.this$0.budgiePanel.wingPatternOn) {
/* 208 */         if (!this.this$0.budgiePanel.opalinOn) {
/* 209 */           this.this$0.budgiePanel.wingcolor = this.this$0.budgiePanel.wingpatterncolor;
/* 210 */           this.this$0.budgiePanel.wingpatterncolor = this.this$0.budgiePanel.basecolor;
/*     */         } else {
/* 212 */           this.this$0.budgiePanel.wingcolor = this.this$0.budgiePanel.bodycolor;
/* 213 */           this.this$0.budgiePanel.wingpatterncolor = this.this$0.budgiePanel.basecolor;
/* 214 */           this.this$0.budgiePanel.opalinOn = false;
/*     */         } 
/*     */       } 
/*     */     }
/*     */     
/* 219 */     if (ControlPanel.access$3400(this.this$0).isSelected() && ControlPanel.access$3500(this.this$0).isSelected()) {
/* 220 */       this.this$0.budgiePanel.dompied2On = true;
/* 221 */     } else if (ControlPanel.access$3400(this.this$0).isSelected() || ControlPanel.access$3500(this.this$0).isSelected()) {
/* 222 */       this.this$0.budgiePanel.dompiedOn = true;
/*     */     } 
/*     */     
/* 225 */     this.this$0.myApplet.repaint();
/*     */   }
/*     */ }


