/*     */ package com.landov.budgiegenex;
/*     */ 
/*     */ import java.awt.Color;
/*     */ import java.awt.Dimension;
/*     */ import java.awt.Graphics;
/*     */ import java.awt.image.BufferedImage;
/*     */ import java.net.URL;
/*     */ import javax.imageio.ImageIO;
/*     */ import javax.swing.JPanel;
/*     */ 
/*     */ public class BudgiePanel extends JPanel {
/*     */   private BufferedImage base;
/*     */   private BufferedImage face;
/*     */   private BufferedImage eye;
/*     */   private BufferedImage eyering;
/*     */   private BufferedImage ceres;
/*     */   private BufferedImage cheek;
/*     */   private BufferedImage body;
/*     */   private BufferedImage spot;
/*     */   private BufferedImage points;
/*     */   private BufferedImage upperwing;
/*     */   private BufferedImage wing;
/*     */   private BufferedImage wingpattern;
/*     */   private BufferedImage headpattern;
/*     */   private BufferedImage headpatternop;
/*     */   private BufferedImage bot;
/*     */   private BufferedImage leg;
/*     */   private BufferedImage tail;
/*     */   private BufferedImage tailpattern;
/*     */   private BufferedImage dompied;
/*     */   private BufferedImage dompied2;
/*     */   private BufferedImage contur;
/*     */   private BudgiePanel budgiePanel;
/*     */   public URL baseurl;
/*     */   public URL turl;
/*  36 */   private BufferedImage drawing = new BufferedImage(480, 640, 1);
/*  37 */   private final int pixcolor = -16777216;
/*  38 */   public Color basecolor = new Color(254, 240, 82);
/*     */   public Color facecolor;
/*     */   public Color eyecolor;
/*     */   public Color eyeringcolor;
/*     */   public Color cerescolor;
/*     */   public Color cheekcolor;
/*     */   public Color pointcolor;
/*     */   public Color bodycolor;
/*     */   public Color spotcolor;
/*     */   public Color upperwingcolor;
/*     */   public Color wingcolor;
/*     */   public Color wingpatterncolor;
/*     */   public Color headpatterncolor;
/*     */   public Color botcolor;
/*     */   public Color legcolor;
/*     */   public boolean faceOn;
/*     */   public boolean opalinOn;
/*     */   public boolean opalinHeadOn;
/*     */   public boolean headPatternOn;
/*     */   public boolean pointsOn;
/*     */   public boolean spotOn;
/*     */   public boolean wingPatternOn;
/*     */   public boolean tailPatternOn;
/*     */   public boolean bodyOn;
/*     */   public boolean dompiedOn;
/*     */   public boolean dompied2On;
/*     */   
/*     */   private void drawLayer(int sx, int sy, int ex, int ey, BufferedImage filter, int rgb) {
/*  66 */     for (int i = sx; i < ex; i++) {
/*  67 */       for (int j = sy; j < ey; j++) {
/*  68 */         int pix = filter.getRGB(i, j);
/*  69 */         if (pix == -16777216) {
/*  70 */           this.drawing.setRGB(i, j, rgb);
/*     */         }
/*     */       } 
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public BudgiePanel(URL baseurl) {
/*  78 */     this.facecolor = new Color(Color.GREEN.getRGB());
/*  79 */     this.eyecolor = new Color(Color.BLACK.getRGB());
/*  80 */     this.eyeringcolor = new Color(203, 205, 200);
/*  81 */     this.cerescolor = new Color(235, 188, 108);
/*  82 */     this.cheekcolor = new Color(194, 186, 85);
/*  83 */     this.pointcolor = new Color(Color.BLACK.getRGB());
/*  84 */     this.bodycolor = new Color(140, 214, 0);
/*  85 */     this.spotcolor = new Color(55, 77, 178);
/*  86 */     this.upperwingcolor = new Color(254, 240, 82);
/*  87 */     this.wingcolor = new Color(254, 240, 82);
/*  88 */     this.wingpatterncolor = new Color(Color.BLACK.getRGB());
/*  89 */     this.headpatterncolor = new Color(Color.BLACK.getRGB());
/*  90 */     this.botcolor = new Color(201, 133, 78);
/*  91 */     this.legcolor = new Color(200, 175, 170);
/*  92 */     this.faceOn = false;
/*  93 */     this.opalinOn = false;
/*  94 */     this.opalinHeadOn = false;
/*  95 */     this.headPatternOn = true;
/*  96 */     this.pointsOn = true;
/*  97 */     this.spotOn = true;
/*  98 */     this.wingPatternOn = true;
/*  99 */     this.tailPatternOn = true;
/* 100 */     this.bodyOn = true;
/* 101 */     this.dompiedOn = false;
/* 102 */     this.dompied2On = false;
/* 103 */     this.baseurl = baseurl;
/* 104 */     Graphics gt = this.drawing.getGraphics();
/* 105 */     gt.setColor(Color.WHITE);
/* 106 */     gt.fillRect(0, 0, 480, 640);
/* 107 */     setMinimumSize(new Dimension(480, 640));
/*     */     
/*     */     try {
/* 110 */       this.turl = new URL(baseurl + "layers/base.PNG");
/* 111 */       this.base = ImageIO.read(new URL(baseurl + "layers/base.PNG"));
/* 112 */       this.face = ImageIO.read(new URL(baseurl + "layers/face.PNG"));
/* 113 */       this.eye = ImageIO.read(new URL(baseurl + "layers/eye.PNG"));
/* 114 */       this.eyering = ImageIO.read(new URL(baseurl + "layers/eyering.PNG"));
/* 115 */       this.ceres = ImageIO.read(new URL(baseurl + "layers/ceres.PNG"));
/* 116 */       this.cheek = ImageIO.read(new URL(baseurl + "layers/cheek.PNG"));
/* 117 */       this.body = ImageIO.read(new URL(baseurl + "layers/body.PNG"));
/* 118 */       this.spot = ImageIO.read(new URL(baseurl + "layers/spot.PNG"));
/* 119 */       this.points = ImageIO.read(new URL(baseurl + "layers/points.PNG"));
/* 120 */       this.wing = ImageIO.read(new URL(baseurl + "layers/wing.PNG"));
/* 121 */       this.upperwing = ImageIO.read(new URL(baseurl + "layers/upperwing.PNG"));
/* 122 */       this.wingpattern = ImageIO.read(new URL(baseurl + "layers/wingpattern.PNG"));
/* 123 */       this.headpattern = ImageIO.read(new URL(baseurl + "layers/headpattern.PNG"));
/* 124 */       this.headpatternop = ImageIO.read(new URL(baseurl + "layers/headpatternop.PNG"));
/* 125 */       this.bot = ImageIO.read(new URL(baseurl + "layers/bot.PNG"));
/* 126 */       this.leg = ImageIO.read(new URL(baseurl + "layers/leg.PNG"));
/* 127 */       this.tail = ImageIO.read(new URL(baseurl + "layers/tail.PNG"));
/* 128 */       this.tailpattern = ImageIO.read(new URL(baseurl + "layers/tailpattern.PNG"));
/* 129 */       this.dompied = ImageIO.read(new URL(baseurl + "layers/dompied.PNG"));
/* 130 */       this.dompied2 = ImageIO.read(new URL(baseurl + "layers/dompied2.PNG"));
/* 131 */       this.contur = ImageIO.read(new URL(baseurl + "layers/contur.PNG"));
/* 132 */     } catch (Exception var4) {
/* 133 */       System.err.println(var4);
/* 134 */       System.err.println(this.turl);
/*     */     } 
/*     */   }
/*     */ 
/*     */   
/*     */   public void paintComponent(Graphics g) {
/* 140 */     super.paintComponent(g);
/* 141 */     g.drawImage(this.drawing, 0, 0, this);
/* 142 */     drawLayer(35, 0, 355, 640, this.base, this.basecolor.getRGB());
/* 143 */     if (this.faceOn) {
/* 144 */       drawLayer(224, 5, 322, 123, this.face, this.facecolor.getRGB());
/*     */     }
/*     */     
/* 147 */     if (this.faceOn) {
/* 148 */       drawLayer(224, 5, 322, 123, this.face, this.facecolor.getRGB());
/*     */     }
/*     */     
/* 151 */     drawLayer(273, 39, 290, 55, this.eye, this.eyecolor.getRGB());
/* 152 */     drawLayer(273, 39, 290, 55, this.eyering, this.eyeringcolor.getRGB());
/* 153 */     drawLayer(228, 36, 264, 62, this.ceres, this.cerescolor.getRGB());
/* 154 */     drawLayer(228, 51, 256, 95, this.cheek, this.cheekcolor.getRGB());
/* 155 */     if (this.bodyOn) {
/* 156 */       drawLayer(100, 85, 345, 515, this.body, this.bodycolor.getRGB());
/*     */     }
/*     */     
/* 159 */     if (this.pointsOn) {
/* 160 */       drawLayer(225, 85, 296, 118, this.points, this.pointcolor.getRGB());
/*     */     }
/*     */     
/* 163 */     if (this.spotOn) {
/* 164 */       drawLayer(268, 68, 290, 90, this.spot, this.spotcolor.getRGB());
/*     */     }
/*     */     
/* 167 */     drawLayer(45, 135, 255, 460, this.wing, this.wingcolor.getRGB());
/* 168 */     if (this.opalinOn && this.bodyOn) {
/* 169 */       drawLayer(118, 127, 268, 329, this.upperwing, this.bodycolor.getRGB());
/*     */     }
/*     */     
/* 172 */     if (this.headPatternOn) {
/* 173 */       if (this.opalinHeadOn) {
/* 174 */         drawLayer(206, 18, 350, 143, this.headpatternop, this.headpatterncolor.getRGB());
/*     */       } else {
/* 176 */         drawLayer(206, 18, 350, 143, this.headpattern, this.headpatterncolor.getRGB());
/*     */       } 
/*     */     }
/*     */     
/* 180 */     if (this.wingPatternOn) {
/* 181 */       drawLayer(45, 135, 255, 460, this.wingpattern, this.wingpatterncolor.getRGB());
/*     */     }
/*     */     
/* 184 */     drawLayer(153, 362, 353, 400, this.bot, this.botcolor.getRGB());
/* 185 */     drawLayer(188, 345, 317, 410, this.leg, this.legcolor.getRGB());
/* 186 */     drawLayer(33, 405, 180, 640, this.tail, this.wingcolor.getRGB());
/* 187 */     if (this.wingPatternOn) {
/* 188 */       drawLayer(33, 403, 180, 640, this.tailpattern, this.wingpatterncolor.getRGB());
/*     */     }
/*     */     
/* 191 */     if (this.dompiedOn) {
/* 192 */       drawLayer(42, 26, 340, 467, this.dompied, this.basecolor.getRGB());
/*     */     }
/*     */     
/* 195 */     if (this.dompied2On) {
/* 196 */       drawLayer(16, 23, 355, 640, this.dompied2, this.basecolor.getRGB());
/*     */     }
/*     */     
/* 199 */     drawLayer(35, 0, 355, 640, this.contur, -16777216);
/* 200 */     g.drawImage(this.drawing, 0, 0, this);
/* 201 */     g.drawRect(0, 0, 480, 640);
/*     */   }
/*     */ }



