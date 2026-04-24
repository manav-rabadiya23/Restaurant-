import { jsPDF } from "jspdf";
import type { Order } from "../types";

export const generatePremiumPDF = (order: Order) => {
  const doc = new jsPDF();

  const brandDark = "#000000";
  const brandOrange = "#F97316";
  const lightBg = "#FFF7ED";
  const textGray = "#4B5563";
  const borderGray = "#E5E7EB";

  // Put your square logo in public/logo.jpg
  const logoImg = "/logo.jpg";

  const shortId = order.id.includes("-") ? order.id.split("-").pop() : order.id;

  const customerEmail = order.customer?.email || "Not provided";

  doc.setFillColor(lightBg);
  doc.rect(0, 0, 210, 297, "F");

  doc.setFillColor(brandDark);
  doc.rect(0, 0, 210, 62, "F");

  // Square logo, no circle
  try {
    doc.addImage(logoImg, "JPEG", 15, 10, 45, 45);
  } catch (e) {
    doc.setFillColor(brandOrange);
    doc.rect(15, 10, 45, 45, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text("GR", 37.5, 35, { align: "center" });
  }

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Gujarati Rasoi", 195, 24, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(220, 220, 220);
  doc.text("Authentic Gujarati Food • Fresh Taste • Fast Service", 195, 32, {
    align: "right",
  });
  doc.text("Sayajigunj, Vadodara, Gujarat - 390005", 195, 39, {
    align: "right",
  });
  doc.text("Phone: +91 98765 43210 | Web: gujaratirasoi.com", 195, 46, {
    align: "right",
  });

  doc.setFillColor(brandOrange);
  doc.rect(0, 62, 210, 14, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(`BILL NO: #${shortId?.toUpperCase()}`, 16, 71);
  doc.text(`DATE: ${order.date}`, 195, 71, { align: "right" });

  let y = 92;

  doc.setTextColor(brandDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Customer Details", 16, y);
  doc.text("Order Details", 115, y);

  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(textGray);

  doc.text(`Name: ${order.customer.name}`, 16, y);
  doc.text(`Phone: ${order.customer.phone}`, 16, y + 7);
  doc.text(`Email: ${customerEmail}`, 16, y + 14);
  doc.text(`Address: ${order.customer.address}`, 16, y + 21, {
    maxWidth: 80,
  });

  doc.text(`Payment: ${order.customer.payment || "Paid"}`, 115, y);
  doc.text("Status: Completed", 115, y + 7);
  doc.text("Service Type: Restaurant Order", 115, y + 14);
  doc.text("GST: 5%", 115, y + 21);

  y += 40;

  doc.setFillColor(brandDark);
  doc.rect(15, y, 180, 12, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("No.", 20, y + 8);
  doc.text("Item", 40, y + 8);
  doc.text("Qty", 110, y + 8, { align: "center" });
  doc.text("Price", 145, y + 8, { align: "right" });
  doc.text("Total", 190, y + 8, { align: "right" });

  y += 18;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);

  order.items.forEach((item, index) => {
    doc.setFillColor(
      index % 2 === 0 ? 255 : 255,
      index % 2 === 0 ? 255 : 247,
      index % 2 === 0 ? 255 : 237,
    );

    doc.rect(15, y - 7, 180, 11, "F");

    doc.setTextColor(textGray);
    doc.text(`${index + 1}`, 20, y);
    doc.text(item.name, 40, y, { maxWidth: 60 });
    doc.text(`${item.qty}`, 110, y, { align: "center" });
    doc.text(`Rs. ${item.price.toFixed(2)}`, 145, y, { align: "right" });

    doc.setTextColor(brandDark);
    doc.setFont("helvetica", "bold");
    doc.text(`Rs. ${(item.qty * item.price).toFixed(2)}`, 190, y, {
      align: "right",
    });

    doc.setFont("helvetica", "normal");
    y += 12;
  });

  y += 5;

  const subtotal = order.total;
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  doc.setDrawColor(borderGray);
  doc.line(120, y, 195, y);

  y += 10;
  doc.setTextColor(textGray);
  doc.text("Subtotal", 130, y);
  doc.text(`Rs. ${subtotal.toFixed(2)}`, 190, y, { align: "right" });

  y += 8;
  doc.text("GST (5%)", 130, y);
  doc.text(`Rs. ${gst.toFixed(2)}`, 190, y, { align: "right" });

  y += 12;

  doc.setFillColor(brandOrange);
  doc.roundedRect(125, y - 8, 70, 15, 2, 2, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Grand Total", 130, y + 1);
  doc.text(`Rs. ${grandTotal.toFixed(2)}`, 190, y + 1, {
    align: "right",
  });

  y += 25;

  doc.setTextColor(brandDark);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Note:", 16, y);

  doc.setFont("helvetica", "normal");
  doc.setTextColor(textGray);
  doc.text("Thank you for ordering from Gujarati Rasoi.", 16, y + 6);
  doc.text("We hope to serve you again soon!", 16, y + 12);

  doc.setFillColor(brandDark);
  doc.rect(0, 275, 210, 22, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Gujarati Rasoi", 105, 284, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(200, 200, 200);
  doc.text("This is a computer-generated bill.", 105, 291, {
    align: "center",
  });

  doc.save(`GujaratiRasoi_Bill_${shortId}.pdf`);
};
