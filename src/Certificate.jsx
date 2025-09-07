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
    margin: 0,
    width: '100%',
    height: '100%'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  }
});

const Certificate = ({name, bookName, isbn, certificateNumber, dateOfIssuance}) => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.page}>
      <Image style={styles.background} src={certificate}/>
      
      {/* Author Name */}
      <View style={[styles.textContainer, { top: 280 }]}>
        <Text style={{
          fontFamily: "Great Vibes",
          fontSize: 36,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold',
          width: '100%'
        }}>{name}</Text>
      </View>

      {/* Book Title */}
      <View style={[styles.textContainer, { top: 360 }]}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 20,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold',
          fontStyle: 'italic',
          width: '100%',
          paddingHorizontal: 20
        }}>"{bookName}"</Text>
      </View>

      {/* ISBN */}
      <View style={[styles.textContainer, { top: 440 }]}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 16,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold',
          width: '100%'
        }}>{isbn}</Text>
      </View>

      {/* Certificate Number */}
      <View style={[styles.textContainer, { top: 640 }]}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 12,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold',
          width: '100%'
        }}>{certificateNumber}</Text>
      </View>

      {/* Date of Issuance */}
      <View style={[styles.textContainer, { top: 680 }]}>
        <Text style={{
          fontFamily: 'Alegreya',
          fontSize: 12,
          color: "#2c3e50",
          textAlign: 'center',
          fontWeight: 'bold',
          width: '100%'
        }}>{dateOfIssuance}</Text>
      </View>
    </Page>
  </Document>
);

export default Certificate;