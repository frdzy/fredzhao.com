import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  header: { fontSize: 16, marginBottom: 10, textAlign: 'center' },
  section: { marginBottom: 10 },
  sectionTitle: { fontSize: 12, marginBottom: 5, fontWeight: 'bold' },
  entry: { marginBottom: 5, fontSize: 10 },
  contact: {
    fontSize: 8,
    marginBottom: 10,
    textAlign: 'center',
    color: 'grey',
  },
  roleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    width: '100%',
  },
  roleText: { fontSize: 11 },
  bullet: { fontSize: 10, marginLeft: 10 },
});

const RoleHeader = ({ text }) => {
  const [role, company, period] = text.split('|').map((s) => s.trim());

  return (
    <View style={styles.roleContainer}>
      <Text style={styles.roleText}>{role}</Text>
      <Text style={styles.roleText}>{company}</Text>
      <Text style={styles.roleText}>{period}</Text>
    </View>
  );
};

export default function ResumePDF({ pageContext }) {
  const { mdxContent } = pageContext;

  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>Fred Y. Zhao</Text>
          <Text style={styles.contact}>
            Contact information available by request over Facebook or LinkedIn
          </Text>

          {/* We'll need to process data.mdx.body to extract sections */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.bullet}>
              • Experienced "one to a thousand" engineering leader and tryhard
              dogfooder
            </Text>
            <Text style={styles.bullet}>
              • Expertise in server-side abstractions, competence in fullstack
              development
            </Text>
            <Text style={styles.bullet}>
              • Passionate about improving existing systems, cross-team
              collaboration, and building knowledge repositories
            </Text>
          </View>

          {/* Add more sections using data.mdx.body */}
        </Page>
      </Document>
    </PDFViewer>
  );
}
