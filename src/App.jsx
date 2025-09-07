import React, { useState } from "react";
import Certificate from "./Certificate.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  const [authName, setAuthName] = useState("");
  const [bookName, setBookName] = useState("");
  const [isbn, setISBN] = useState("");
  const [certificateNumber, setCertificateNumber] = useState("");
  const [dateOfIssuance, setDateOfIssuance] = useState("");
  const [CD, setCD] = useState(false);

  const handleDownloadClick = () => {
    if (authName && bookName && isbn && certificateNumber && dateOfIssuance) {
      setCD(true);
    } else {
      alert("Please fill in all fields before downloading.");
    }
  };

  const resetForm = () => {
    setTimeout(() => {
      setAuthName("");
      setBookName("");
      setISBN("");
      setCertificateNumber("");
      setDateOfIssuance("");
      setCD(false);
    }, 2000);
  }

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "#242627",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      padding: 10,
    }}>
      <div className="container">
        <input
          type="text"
          placeholder="Author Name"
          value={authName}
          onChange={(e) => setAuthName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setISBN(e.target.value)}
        />
        <input
          type="text"
          placeholder="Certificate Number"
          value={certificateNumber}
          onChange={(e) => setCertificateNumber(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Issuance"
          value={dateOfIssuance}
          onChange={(e) => setDateOfIssuance(e.target.value)}
        />
        <button onClick={handleDownloadClick}>Generate</button>
        {CD && (
          <PDFDownloadLink
            document={<Certificate 
              name={authName} 
              bookName={bookName} 
              isbn={isbn} 
              certificateNumber={certificateNumber}
              dateOfIssuance={dateOfIssuance}
            />}
            fileName={`${authName}-certificate-of-publication.pdf`}
            onClick={resetForm}
            style={{
              textDecoration: 'none',
              color: 'white',
              backgroundColor: '#4CAF50',
              padding: '12px 24px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              display: 'inline-block',
              marginTop: '10px',
              transition: 'background-color 0.3s',
              userSelect: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#45a049';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#4CAF50';
            }}
          >
            {({ blob, url, loading, error }) => {
              if (error) {
                console.error('PDF generation error:', error);
                return "Error generating PDF";
              }
              return loading ? "Preparing document..." : "Download Certificate";
            }}
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
};

export default App;
