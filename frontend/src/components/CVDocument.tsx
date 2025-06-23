// components/CVDocument.tsx
"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { CV } from "@/lib/api";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
  },
  text: {
    marginBottom: 3,
  },
});

export default function CVDocument({ cv }: { cv: CV }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{cv.fullName}</Text>
          <Text style={styles.text}>{cv.position}</Text>
          <Text style={styles.text}>
            {cv.email} • {cv.phone}
          </Text>
          <Text style={styles.text}>{cv.address}</Text>
          <Text style={styles.text}>{cv.github}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>About Me</Text>
          <Text>{cv.aboutMe}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          <Text>Frontend: {cv.frontend.join(", ")}</Text>
          <Text>Backend: {cv.backend.join(", ")}</Text>
          <Text>Database: {cv.database.join(", ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Soft Skills</Text>
          <Text>{cv.softSkills.join(", ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Education</Text>
          <Text>{cv.education}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Experience</Text>
          <Text>{cv.experience}</Text>
        </View>
      </Page>
    </Document>
  );
}
