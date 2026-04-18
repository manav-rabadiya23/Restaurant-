import { jsPDF } from "jspdf";
import type { Order } from "../types";

export const generatePremiumPDF = (order: Order) => {
  const doc = new jsPDF();

  // --- DESIGN CONFIGURATION ---
  const primaryBlack = "#0B0B0C";
  const accentOrange = "#F97316";
  const textGray = "#4B5563";
  const dividerGray = "#E5E7EB";

  // --- 1. FULL-PAGE PREMIUM WATERMARK ---
  // Large center-aligned image with soft transparency for brand depth
  const bgImg = "food.jpg";
  doc.saveGraphicsState();
  const bgState = new (doc as any).GState({ opacity: 0.12 });
  doc.setGState(bgState);
  doc.addImage(bgImg, "JPEG", 15, 80, 180, 130);
  doc.restoreGraphicsState();

  // --- 2. THE SIGNATURE HEADER ---
  doc.setFillColor(primaryBlack);
  doc.rect(0, 0, 210, 65, "F");

  // Logo Integration with circular accent
  const logoImg = "food.jpg";
  try {
    doc.setDrawColor(accentOrange);
    doc.setLineWidth(0.5);
    doc.circle(35, 32, 22, "S");
    doc.addImage(logoImg, "JPEG", 15, 12, 40, 40);
  } catch (e) {
    console.error("Logo load failed");
  }

  // Restaurant Identity
  doc.setTextColor(255, 255, 255);
  doc.setFont("serif", "bold");
  doc.setFontSize(24);
  doc.text("GUJARATI RASOI", 195, 25, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(180, 180, 180);
  doc.text("Traditional Taste • Premium Experience", 195, 32, {
    align: "right",
  });
  doc.text("GSTIN: 24ABCDE1234F1Z5", 195, 39, { align: "right" });
  doc.text("Sayajigunj, Vadodara, Gujarat 390005", 195, 44, { align: "right" });
  doc.text("Contact: +91 98765 43210 | gujaratirasoi.com", 195, 49, {
    align: "right",
  });

  // --- 3. INVOICE META STRIP ---
  doc.setFillColor(accentOrange);
  doc.rect(0, 65, 210, 14, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  // Clean split for short ID display
  const shortId = order.id.includes("-") ? order.id.split("-").pop() : order.id;
  doc.text(`GUEST BILL: #${shortId?.toUpperCase()}`, 18, 74);
  doc.text(`SERVED ON: ${order.date}`, 192, 74, { align: "right" });

  // --- 4. GUEST & TRANSACTION DETAILS (DUAL COLUMN) ---
  let y = 95;
  doc.setDrawColor(dividerGray);
  doc.setLineWidth(0.3);
  doc.line(15, y - 5, 195, y - 5);

  doc.setTextColor(primaryBlack);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text("BILL TO / GUEST", 18, y);
  doc.text("TRANSACTION DETAILS", 115, y);

  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(textGray);
  doc.text(`Guest: ${order.customer.name.toUpperCase()}`, 18, y);
  doc.text(`Email: ${(order.customer as any).email || "N/A"}`, 18, y + 6);
  doc.text(`Phone: ${order.customer.phone}`, 18, y + 12);
  doc.text(order.customer.address, 18, y + 18, { maxWidth: 80 });

  doc.text(`Place of Supply: Gujarat (24)`, 115, y);
  doc.text(
    `Payment Status: ${(order as any).paymentMethod || "Confirmed"}`,
    115,
    y + 6,
  );
  doc.text(`Service: Dine-In / Standard`, 115, y + 12);
  doc.text(`Order Status: Paid & Completed`, 115, y + 18);

  y += 30;
  doc.line(15, y - 5, 195, y - 5);

  // --- 5. THE CULINARY TABLE ---
  y += 10;
  // Professional Header
  doc.setFillColor(248, 249, 250);
  doc.rect(15, y - 8, 180, 12, "F");
  doc.setTextColor(primaryBlack);
  doc.setFont("helvetica", "bold");
  doc.text("SR.", 20, y);
  doc.text("MENU ITEM DESCRIPTION", 40, y);
  doc.text("QTY", 110, y, { align: "center" });
  doc.text("RATE", 145, y, { align: "right" });
  doc.text("TOTAL", 190, y, { align: "right" });

  y += 12;
  doc.setFont("helvetica", "normal");
  order.items.forEach((item, index) => {
    // Elegant Zebra Stripes
    if (index % 2 === 0) {
      doc.setFillColor(252, 252, 252);
      doc.rect(15, y - 7, 180, 10, "F");
    }
    doc.setTextColor(textGray);
    doc.text(`${index + 1}`, 20, y);
    doc.text(item.name.toUpperCase(), 40, y);
    doc.text(`${item.qty}`, 110, y, { align: "center" });
    doc.text(`${item.price.toFixed(2)}`, 145, y, { align: "right" });

    doc.setTextColor(primaryBlack);
    doc.setFont("helvetica", "bold");
    doc.text(`${(item.qty * item.price).toFixed(2)}`, 190, y, {
      align: "right",
    });
    doc.setFont("helvetica", "normal");

    y += 11;
  });

  // --- 6. SETTLEMENT SUMMARY ---
  y += 10;
  const subtotal = order.total;
  const tax = subtotal * 0.05; // 5% GST
  const grandTotal = subtotal + tax;

  // Draw alignment line
  doc.setDrawColor(primaryBlack);
  doc.setLineWidth(0.5);
  doc.line(125, y, 195, y);

  y += 10;
  doc.setFontSize(10);
  doc.setTextColor(textGray);
  doc.text("Sub-Total Value", 130, y);
  doc.text(`${subtotal.toFixed(2)}`, 190, y, { align: "right" });

  y += 7;
  doc.text("GST (CGST 2.5% + SGST 2.5%)", 130, y);
  doc.text(`${tax.toFixed(2)}`, 190, y, { align: "right" });

  y += 12;
  // Premium Total Box
  doc.setFillColor(primaryBlack);
  doc.rect(125, y - 8, 70, 14, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("AMOUNT PAID", 130, y);
  doc.text(`Rs. ${grandTotal.toFixed(2)}`, 190, y, { align: "right" });

  // --- 7. TAX COMPLIANCE & NOTES ---
  y += 30;
  doc.setDrawColor(dividerGray);
  doc.line(15, y, 195, y);

  y += 8;
  doc.setTextColor(primaryBlack);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("TAX INVOICE NOTES:", 18, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(textGray);
  doc.text(`Total Taxable Amount: Rs. ${subtotal.toFixed(2)}`, 18, y + 5);
  doc.text(`GST calculated at 5% as per restaurant service norms.`, 18, y + 10);

  // --- 8. THE EXPERIENCE FOOTER ---
  y = 282;
  doc.setFontSize(9);
  doc.setTextColor(primaryBlack);
  doc.setFont("serif", "italic");
  doc.text("Atithi Devo Bhava! Thank you for your patronage.", 105, y, {
    align: "center",
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(150, 150, 150);
  doc.text(
    "This is a digital receipt generated by Gujarati Rasoi Management System.",
    105,
    y + 7,
    { align: "center" },
  );

  doc.save(`GujaratiRasoi_Invoice_${shortId}.pdf`);
};
