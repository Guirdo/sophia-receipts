import { jsPDF } from "jspdf";
import moment from "moment";
import { logo } from "./images";

export const generatePdf = (name,date,concepts,total) => {
  var doc = new jsPDF();

  date = moment(date).format('D-MMM-YYYY')

  doc.setFont('times')
  doc.addImage(logo, 'JPEG', 15, 10, 40, 28)
  doc.setFontSize(12)
  doc.text(70,20,'Facebook: Sophia Academy')
  doc.text(70,30,'Instagram: @academysophia')
  doc.text(130,20,'Telefono: 747 108 2254')

  doc.setFontSize(20)
  doc.setFont('times','bold')
  doc.text(20,60,'RECIBO DE PAGO')
  doc.setFontSize(16)
  doc.text(20,80,'___________________________________________________')

  doc.setFontSize(16)
  doc.setFont('times','normal')
  doc.text(20,100,`Fecha: ${date}`)
  doc.text(20,110,`Alumno: ${name}`)
  doc.text(20,130,'___________________________________________________')

  doc.setFont('times','bold')
  doc.text(20,145,'Concepto de pago')
  doc.setFont('times','normal')

  var y = 160
  for(var i = 0; i< concepts.length;i++){
    const { concept,cost } = concepts[i]
    doc.text(20,y,concept)
    doc.text(140,y,`$${cost}`)

    y = y +10
  }

  doc.text(20,y+10,'___________________________________________________')

    doc.setFontSize(25)
  doc.text(20,y+30,`TOTAL:`)
  doc.text(140,y+30,`$${total}`)
  
  doc.save(`recibo_${name.replace(/\s/g,'_')}_${date}.pdf`)
};