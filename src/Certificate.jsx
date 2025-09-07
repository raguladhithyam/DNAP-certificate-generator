import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import certificate from './CertificateV2.jpg'
import GreatVibes from './fonts/Great_Vibes/GreatVibes-Regular.ttf' 
import AlegreyaRegular from './fonts/Alegreya/static/Alegreya-Regular.ttf'
import AlegreyaBold from './fonts/Alegreya/static/Alegreya-Bold.ttf'
import AlegreyaItalic from './fonts/Alegreya/static/Alegreya-Italic.ttf'
import AlegreyaBoldItalic from './fonts/Alegreya/static/Alegreya-BoldItalic.ttf'

Font.register({
  family: 'Great Vibes',
  src: GreatVibes
});

Font.register({
  family: "Alegreya",
  fonts: [
    {
      src: AlegreyaRegular,
      fontWeight: 'normal'
    },
    {
      src: AlegreyaBold,
      fontWeight: 'bold'
    },
    {
      src: AlegreyaItalic,
      fontStyle: 'italic'
    },
    {
      src: AlegreyaBoldItalic,
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  ]
})

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 0,
    margin: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'none'
  }
});


const Certificate = ({name, bookName, isbn, certificateNumber, dateOfIssuance}) => (
  <Document>
    <Page size={{ width: 612, height: 792 }} style={styles.page}>
      <Image style={styles.background} src={certificate}/>
      
      {/* Author Name - positioned at the first placeholder */}
      <View style={{
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <Text style={{
          fontFamily: "Great Vibes",
          fontSize: 42,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold'
        }}>{name}</Text>
      </View>

      {/* Book Title - positioned at the second placeholder */}
      <View style={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
      }}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 22,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold',
          fontStyle: 'italic'
        }}>"{bookName}"</Text>
      </View>

      {/* ISBN - positioned at the third placeholder */}
      <View style={{
        position: 'absolute',
        top: '55%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 18,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold'
        }}>{isbn}</Text>
      </View>

      {/* Certificate Number - positioned at the fourth placeholder */}
      <View style={{
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 14,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold'
        }}>{certificateNumber}</Text>
      </View>

      {/* Date of Issuance - positioned at the fifth placeholder */}
      <View style={{
        position: 'absolute',
        top: '85%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 14,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold'
        }}>{dateOfIssuance}</Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;

