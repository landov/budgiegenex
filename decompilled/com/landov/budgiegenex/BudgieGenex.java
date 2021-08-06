/*    */ package com.landov.budgiegenex;
/*    */ 
/*    */ import java.awt.BorderLayout;
/*    */ import java.awt.Container;
/*    */ import java.awt.Dimension;
/*    */ import java.awt.Graphics;
/*    */ import java.awt.GridBagConstraints;
/*    */ import java.awt.GridBagLayout;
/*    */ import javax.swing.JApplet;
/*    */ 
/*    */ public class BudgieGenex
/*    */   extends JApplet {
/*    */   private BudgiePanel budgiePanel;
/*    */   private ControlPanel controlPanel;
/*    */   
/*    */   public void init() {
/* 17 */     this.budgiePanel = new BudgiePanel(getCodeBase());
/* 18 */     this.controlPanel = new ControlPanel();
/* 19 */     this.budgiePanel.setMinimumSize(new Dimension(480, 640));
/* 20 */     this.controlPanel.myApplet = this;
/* 21 */     Container content = getContentPane();
/* 22 */     content.setLayout(new BorderLayout());
/* 23 */     this.controlPanel.budgiePanel = this.budgiePanel;
/* 24 */     content.add(this.controlPanel, "East");
/* 25 */     content.add(this.budgiePanel, "Center");
/*    */   }
/*    */   private GridBagLayout layout; private GridBagConstraints constraints;
/*    */   public void paint(Graphics g) {
/* 29 */     super.paint(g);
/* 30 */     this.budgiePanel.paintComponent(g);
/*    */   }
/*    */ }


