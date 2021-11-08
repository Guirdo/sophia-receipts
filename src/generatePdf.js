import { jsPDF } from "jspdf";
import { logo } from "./images";

export const generatePdf = (name,concept,cost,charge,date) => {
  var doc = new jsPDF();

  doc.setFont('Times New Roman')
  doc.addImage(logo, 'JPEG', 15, 5, 40, 28)
    doc.setFontSize(12)
  doc.text(70,15,'Facebook: Sophia Academy')
  doc.text(70,25,'Instagram: @academysophia')
  doc.text(130,15,'Telefono: 747 108 2254')
  doc.setFontSize(16)
  doc.setFont('Times New Roman','bold')
  doc.text(20,50,'RECIBO DE PAGO')
  doc.text(20,60,'___________________________________________________')


  doc.setFont('Times New Roman','normal')
  doc.text(20,80,date)
  doc.text(20,90,'Alumno: '+name)
  doc.text(20,100,'Concepto: '+concept)

  doc.text(20,120,'___________________________________________________')

  doc.text(20,140,'Monto: $'+cost)
  doc.text(20,150,'Recargo: $'+charge)
  doc.text(20,170,'___________________________________________________')

    doc.setFontSize(25)
  doc.text(20,190,'TOTAL: $'+(Number(cost)+Number(charge)))
  
  doc.save('recibo.pdf')
};