import { jsPDF } from "jspdf";
import { logo } from "./images";

export const generatePdf = (name,date,concepts,total) => {
  var doc = new jsPDF();

  doc.setFont('Times New Roman')
  doc.addImage(logo, 'JPEG', 15, 10, 40, 28)
    doc.setFontSize(12)
  doc.text(70,20,'Facebook: Sophia Academy')
  doc.text(70,30,'Instagram: @academysophia')
  doc.text(130,20,'Telefono: 747 108 2254')

  doc.setFontSize(20)
  doc.setFont('Times New Roman','bold')
  doc.text(20,60,'RECIBO DE PAGO')
  doc.setFontSize(16)
  doc.text(20,80,'___________________________________________________')

  doc.setFontSize(16)
  doc.setFont('Times New Roman','normal')
  doc.text(20,100,`Fecha: ${date}`)
  doc.text(20,110,`Alumno: ${name}`)
  doc.text(20,130,'___________________________________________________')

  var y = 150
  for(var i = 0; i< concepts.length;i++){
    const { concept,cost } = concepts[i]
    doc.text(20,y,concept)
    doc.text(120,y,`$${cost}`)

    y = y +10
  }

  doc.text(20,y+10,'___________________________________________________')

    doc.setFontSize(25)
  doc.text(20,y+30,`TOTAL:`)
  doc.text(120,y+30,`$${total}`)
  
  doc.save(`recibo_${name.replace(' ','_')}_${date}.pdf`)
};