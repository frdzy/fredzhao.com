
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

const styles = StyleSheet.create({
  ...styles,
  bold: { fontWeight: 'bold' },
  link: { color: 'blue', textDecoration: 'underline' },
});

const RoleHeader = ({ text }) => {
  const [role, company, location, period] = text.split('|').map((s) => s.trim());
  return (
    <View style={styles.roleContainer}>
      <Text style={styles.roleText}>{`${role} | ${company}`}</Text>
      <Text style={styles.roleText}>{period}</Text>
    </View>
  );
};

const renderMarkdownText = (text) => {
  // Process bold text marked with **
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  return boldParts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <Text key={i} style={styles.bold}>{part.slice(2, -2)}</Text>;
    }
    // Process links marked with [text](url)
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return <Link key={i} style={styles.link} src={linkMatch[2]}>{linkMatch[1]}</Link>;
    }
    return <Text key={i}>{part}</Text>;
  });
};

const parseMDXContent = (content) => {
  const sections = {};
  let currentSection = '';
  
  content.split('\n').forEach(line => {
    if (line.startsWith('## ')) {
      currentSection = line.replace('## ', '').trim();
      sections[currentSection] = [];
    } else if (line.startsWith('- ')) {
      if (currentSection) {
        sections[currentSection].push(line.replace('- ', '').trim());
      }
    }
  });
  
  return sections;
};

export default function ResumePDF({ pageContext }) {
  const { mdxContent } = pageContext;
  const sections = parseMDXContent(mdxContent.body);

  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>Fred Y. Zhao</Text>
          <Text style={styles.contact}>
            Contact information available by request over Facebook or LinkedIn
          </Text>

          {Object.entries(sections).map(([title, items]) => (
            <View key={title} style={styles.section}>
              <Text style={styles.sectionTitle}>{title}</Text>
              {items.map((item, index) => (
                <Text key={index} style={styles.bullet}>• {renderMarkdownText(item)}</Text>
              ))}
            </View>
          ))}
        </Page>
      </Document>
    </PDFViewer>
  );
}
