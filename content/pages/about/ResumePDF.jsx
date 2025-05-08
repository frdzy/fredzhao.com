import React, { useEffect, useState } from 'react';
import {
  Page,
  Text,
  Link,
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
  bold: { fontWeight: 'bold' },
  link: { color: 'blue', textDecoration: 'underline' },
});

const RoleHeader = ({ text }) => {
  const [role, company, location, period] = text
    .split('|')
    .map((s) => s.trim());
  return (
    <View style={styles.roleContainer}>
      <Text
        style={styles.roleText}
      >{`${role} - ${company} @ ${location}`}</Text>
      <Text style={styles.roleText}>{period}</Text>
    </View>
  );
};

const renderMarkdownText = (text) => {
  const builder = [];
  if (text.startsWith('  ')) {
    builder.push(<Text style={styles.entry}> </Text>);
    text = text.slice(2);
  }
  if (text.startsWith('- ') || text.startsWith('* ')) {
    builder.push(<Text style={styles.entry}>• </Text>);
    text = text.slice(2);
  }
  // Process bold text marked with **
  const boldParts = text.split(/(\*\*.*?\*\*)/g);
  boldParts.forEach((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      builder.push(
        <Text key={i} style={[styles.bold, styles.entry]}>
          {part.slice(2, -2)}
        </Text>
      );
      return;
    }
    // Process links marked with [text](url)
    const linkMatch = part.match(/(.*)\[(.*?)\]\((.*?)\)(.*)/);
    if (linkMatch) {
      builder.push(
        <Text style={styles.entry} key={i}>
          {linkMatch[1]}
          <Link style={styles.link} src={linkMatch[3]}>
            {linkMatch[2]}
          </Link>
          {linkMatch[4]}
        </Text>
      );
    } else {
      builder.push(
        <Text style={styles.entry} key={i}>
          {part}
        </Text>
      );
    }
  });

  return builder;
};

const SUMMARY = `
- Experienced "one to a thousand" engineering leader and tryhard dogfooder
- Expertise in server-side abstractions, [competence](https://fredzhao.com/how-i-wish-i-got-introduced-to-js-development-in-2025/) in fullstack development
- Passionate about improving existing systems, cross-team collaboration, and building knowledge repositories
`;

const HIGHLIGHTED_AIRTABLE = `
**General**
  * Built / evolved internal tools using Airtable itself: Linear/Jira replacement, go/links, eng onboarding scheduler
  * **Internal expert & dogfooder** of every part of the product
  * 2 years fullstack development, 3 years engineering management

**Large Deployments & Data Governance (Sep 2023 - Present)**
  * Led team of 7-12 engineers to close product and system gaps for administering users at 10x scale (10k to 100k)
  * Enabled multimillion-dollar ARR enterprise customers to adopt wall-to-wall deployments
  * Planned and shipped product features enabling **$xxxK+ ACV worth of competitor takeout**
  * Joined customer calls to inform project prioritization around enterprise-grade security and governance
  * Significantly reduced engineering support time while maintaining quality, via docs and support team collab
  * Facilitated eng/product/design discussions to **empower engineers and manage teamwide decision fatigue**

**Attachments (Jan - Nov 2023)**
  * Achieved high internal survey results for **manager dimensions in career growth**
  * Led 5-engineer team replacing external vendor with in-house services
  * Unlocked EKM compatibility for enterprise customers

**Developer Platform & Ecosystems (Sep 2020 - Dec 2022)**
  * Contributed to launching several API improvements for authentication, access, and documentation
`;

const HIGHLIGHTED_FACEBOOK = `
**Recruiting Products - Discovery (Jul 2019 - Sep 2020)**
  * Product engineering on internal recruiting source tool
  * Surfaced semantic search over candidate resume data to match with positions relevant to recruiting partners
  * Adapted data source to improve matching based on current events (industry news, layoff data)

**Productivity Tools (Aug 2017 - Jul 2019)**
  * **Built "Inbox Zero" features** and notification management system that reduced company-wide notification noise
  * Developed project management features for internal task management tool, "Tasks"

**Photos/Sharing Infrastructure (Jul 2012 - Jul 2017)**
  * **Led Post Data Model Refactor** that unified sitewide content models and reduced complexity of new feature dev
  * Coordinated efforts across engineering teams in multiple organizations
  * The Ads org **still liked working with me in spite of my causing a SEV1 in revenue**
  * Enabled full attachment editing across all platforms and simplified development of new content features
  * Built Albums and Shared Albums features across web (directly) and native (server support)
`;

const EDUCATION = `
* Lloyd House - Social Co-Director
* NCAA Tennis Team - Co-Captain
* Cross Country Team
`;

const VOLUNTEERING = `
* Teaching Assistant, Street Code Academy (2018-2019): Intro to App Development (JavaScript and Expo)
* Tutor, EPA Dream Center (2015-2020)
* Webmaster, Golden Gate Relay (2019-2020)
`;

function renderLines(text) {
  return text.split('\n').map((line, index) => (
    <Text key={index} style={styles.bullet}>
      {renderMarkdownText(line)}
    </Text>
  ));
}

export default function ResumePDF() {
  const summaryContent = renderLines(SUMMARY);
  const experienceContentAirtable = renderLines(HIGHLIGHTED_AIRTABLE);
  const experienceContentFacebook = renderLines(HIGHLIGHTED_FACEBOOK);
  const education = renderLines(EDUCATION);
  const volunteering = renderLines(VOLUNTEERING);

  // Work around gatsby build's static HTML error
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>Fred Y. Zhao</Text>
          <Text style={styles.contact}>
            This page best viewed on{' '}
            <Link src="https://fredzhao.com/about/resume">my website</Link>
          </Text>
          <View key="summary" style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            {summaryContent}
          </View>
          <View key="experience-airtable" style={styles.section}>
            <Text style={styles.sectionTitle}>Highlighted Experience</Text>
            <RoleHeader text="Software Engineer / Engineering Manager | Airtable | San Francisco, CA | Sep 2020 - Present" />
            {experienceContentAirtable}
          </View>
          <View key="experience-facebook" style={styles.section}>
            <RoleHeader text="Software Engineer | Facebook | Menlo Park, CA | Jul 2012 - Sep 2020" />
            {experienceContentFacebook}
          </View>
          <View key="education" style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <RoleHeader text="B.S. in Computer Science | Caltech | Pasadena, CA | 2008 - 2012" />
            {education}
          </View>
          <View key="volunteering" style={styles.section}>
            <Text style={styles.sectionTitle}>Volunteering</Text>
            {volunteering}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
