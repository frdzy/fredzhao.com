
import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  section: { marginBottom: 10 },
  sectionTitle: { fontSize: 12, marginBottom: 5, fontWeight: 'bold' },
  entry: { marginBottom: 5, fontSize: 10 },
  contact: { fontSize: 8, marginBottom: 10, textAlign: 'center', color: 'grey' },
  role: { fontSize: 11, marginBottom: 3 },
  company: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  bullet: { fontSize: 10, marginLeft: 10 },
});

export const ResumePDF = () => (
  <PDFViewer style={{ width: '100%', height: '100vh' }}>
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Fred Y. Zhao</Text>
        <Text style={styles.contact}>Contact information available by request over Facebook or LinkedIn</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.bullet}>• Experienced "one to a thousand" engineering leader and tryhard dogfooder</Text>
          <Text style={styles.bullet}>• Expertise in server-side abstractions, competence in fullstack development</Text>
          <Text style={styles.bullet}>• Passionate about improving existing systems, cross-team collaboration, and building knowledge repositories</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          
          <View style={styles.entry}>
            <Text style={styles.role}>Engineering Manager | Airtable | Jun 2022 - Present</Text>
            <Text style={styles.bullet}>• Led team of 7-12 engineers to scale user administration and data governance</Text>
            <Text style={styles.bullet}>• Drove prioritization for enterprise features including organization sandbox</Text>
            <Text style={styles.bullet}>• Built critical internal tools using Airtable</Text>
          </View>

          <View style={styles.entry}>
            <Text style={styles.role}>Software Engineer | Facebook | Jul 2012 - Sep 2020</Text>
            <Text style={styles.bullet}>• Built "Inbox Zero" features and notification management system</Text>
            <Text style={styles.bullet}>• Led Post Data Model Refactor unifying sitewide user content models</Text>
            <Text style={styles.bullet}>• Built Albums and Shared Albums features across platforms</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.bullet}>B.S. in Computer Science | Caltech | Pasadena, CA</Text>
          <Text style={styles.bullet}>Activities: Lloyd House (Social Co-Director), NCAA Tennis Team (Co-Captain)</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills & Interests</Text>
          <Text style={styles.bullet}>• Technical: Hacklang/PHP, TypeScript, GraphQL, Fullstack Development</Text>
          <Text style={styles.bullet}>• Languages: English, Chinese (conversational speaking, native reading)</Text>
          <Text style={styles.bullet}>• Hobbies: Tennis 🎾, Distance Running 🏃</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default ResumePDF;
