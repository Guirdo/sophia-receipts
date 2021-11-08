import { jsPDF } from "jspdf";
import moment from "moment";
import { logo } from "./images";

export const generatePdf = (name,concept,cost,charge) => {
  var doc = new jsPDF();

  doc.setFont('Times New Roman')
  doc.addImage(logo, 'JPEG', 15, 5, 40, 28)
    doc.setFontSize(12)
  doc.text(70,15,'Facebook: Sophia Academy')
  doc.text(70,25,'Instagram: @academysophia')
  doc.text(130,15,'Telefono: 747 142 9548')
  doc.setFontSize(16)
  doc.setFont('Times New Roman','bold')
  doc.text(90,50,'RECIBO DE PAGO')
  doc.text(35,60,'___________________________________________________')

  doc.setFont('Times New Roman','normal')
  doc.text(60,80,moment().format('DD-MM-YYYY'))
  doc.text(60,90,'Alumno: '+name)
  doc.text(60,100,'Concepto: '+concept)

  doc.text(35,120,'___________________________________________________')

  doc.text(60,140,'Monto: $'+cost)
  doc.text(60,150,'Recargo: $'+charge)
  doc.text(35,170,'___________________________________________________')

    doc.setFontSize(25)
  doc.text(60,190,'TOTAL: $'+(Number(cost)+Number(charge)))
  
  doc.save('recibo.pdf')
};