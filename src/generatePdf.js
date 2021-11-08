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
  doc.text(20,70,'___________________________________________________')


  doc.setFont('Times New Roman','normal')
  doc.text(20,90,date)
  doc.text(20,110,'Alumno: '+name)
  doc.text(20,130,'Concepto: '+concept)

  doc.text(20,150,'___________________________________________________')

  doc.text(20,170,'Monto: $'+cost)
  doc.text(20,190,'Recargo: $'+charge)
  doc.text(20,210,'___________________________________________________')

    doc.setFontSize(25)
  doc.text(20,245,'TOTAL: $'+(Number(cost)+Number(charge)))
  
  doc.save('recibo.pdf')
};