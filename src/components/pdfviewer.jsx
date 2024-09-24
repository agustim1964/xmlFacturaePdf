import React, { useState } from 'react';

function PdfViewer() {
  const [pdfUrl, setPdfUrl] = useState(null);

  // Función para manejar la selección del archivo XML
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      // Leer el archivo XML como texto
      reader.onload = (e) => {
        const xmlContent = e.target.result;

        // Parsear el contenido del archivo XML
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, "text/xml");

        // Obtener el contenido base64 del PDF
        const base64Pdf = xmlDoc.getElementsByTagName('AttachmentData')[0]?.textContent;

        if (base64Pdf) {
          // Convertir base64 a un Blob
          const byteCharacters = atob(base64Pdf);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'application/pdf' });

          // Crear una URL para el Blob y actualizar el estado
          const pdfBlobUrl = URL.createObjectURL(blob);
          setPdfUrl(pdfBlobUrl);
        } else {
          alert("El archivo XML no contiene un PDF codificado en Base64.");
        }
      };

      // Leer el archivo seleccionado
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".xml" onChange={handleFileSelect} /><br/>
      {pdfUrl && (
        <iframe src={pdfUrl} title="PDF" width="600" height="800"></iframe>
      )}
    </div>
  );
}

export default PdfViewer;
