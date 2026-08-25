import { Document, Page, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { cvByLocale } from "@/lib/data/cvData.ts";
import type { CVLocale } from "@/lib/types/cv.ts";

const tw = createTw({
    fontFamily: {
        sans: ["Helvetica"],
    },
    colors: {
        ink: "#111111",
        muted: "#4b5563",
        rule: "#d4d4d8",
    },
});

const styles = {
    page: "px-10 py-8 font-sans text-ink",
    name: "text-[20px] font-bold tracking-tight text-center",
    headline: "text-[11px] text-muted text-center mt-1",
    contact: "text-[9px] text-muted text-center mt-1",
    sectionTitle: "text-[10px] font-bold uppercase tracking-widest pb-1",
    rule: "border-b border-rule mb-2",
    paragraph: "text-[9px] leading-[1.5] text-ink text-justify",
    entryTitle: "text-[10px] font-bold",
    entryMeta: "text-[8.5px] text-muted",
    bulletText: "text-[9px] leading-[1.5] flex-1",
    bullet: "text-[9px] leading-[1.5] w-3",
    skillLabel: "text-[9px] font-bold",
    skillValue: "text-[9px] flex-1",
} as const;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <View style={tw("mt-3.5")}>
        <Text style={tw(styles.sectionTitle)}>{title}</Text>
        <View style={tw(styles.rule)} />
        {children}
    </View>
);

const Bullet = ({ children }: { children: string }) => (
    <View style={tw("flex flex-row mb-0.5")}>
        <Text style={tw(styles.bullet)}>•</Text>
        <Text style={tw(styles.bulletText)}>{children}</Text>
    </View>
);

export const PdfCV = ({ locale = "en" }: { locale?: CVLocale }) => {
    const cv = cvByLocale[locale];

    return (
        <Document
            title={`${cv.name} — ${cv.headline}`}
            author={cv.name}
            language={locale}
        >
            <Page size="A4" style={tw(styles.page)}>
                <View>
                    <Text style={tw(styles.name)}>{cv.name}</Text>
                    <Text style={tw(styles.headline)}>{cv.headline}</Text>
                    <Text style={tw(styles.contact)}>{cv.contact.join("  •  ")}</Text>
                </View>

                <Section title={cv.sections.summary}>
                    <Text style={tw(styles.paragraph)}>{cv.summary}</Text>
                </Section>

                <Section title={cv.sections.skills}>
                    {cv.skills.map((skill) => (
                        <View key={skill.label} style={tw("flex flex-row mb-1")}>
                            <Text style={tw(styles.skillLabel)}>{skill.label}: </Text>
                            <Text style={tw(styles.skillValue)}>{skill.value}</Text>
                        </View>
                    ))}
                </Section>

                <Section title={cv.sections.experience}>
                    {cv.experience.map((job) => (
                        <View key={`${job.company}-${job.period}`} style={tw("mb-2")} wrap={false}>
                            <Text style={tw(styles.entryTitle)}>
                                {job.role}  |  {job.company}
                            </Text>
                            <Text style={tw(`${styles.entryMeta} mb-1`)}>
                                {job.location} | {job.period}
                            </Text>
                            {job.bullets.map((bullet, index) => (
                                <Bullet key={index}>{bullet}</Bullet>
                            ))}
                        </View>
                    ))}
                </Section>

                <Section title={cv.sections.education}>
                    {cv.education.map((item) => (
                        <View key={item.title} style={tw("mb-1")} wrap={false}>
                            <Text style={tw(styles.entryTitle)}>{item.title}</Text>
                            <Text style={tw(styles.entryMeta)}>{item.institution}</Text>
                            {item.detail ? (
                                <Text style={tw(styles.paragraph)}>{item.detail}</Text>
                            ) : null}
                        </View>
                    ))}
                </Section>
            </Page>

            <Page size="A4" style={tw(styles.page)}>
                <Section title={cv.sections.certifications}>
                    {cv.certifications.map((group) => (
                        <View key={group.issuer} style={tw("mb-3")} wrap={false}>
                            <Text style={tw(`${styles.entryTitle} mb-1`)}>{group.issuer}</Text>
                            {group.items.map((item) => (
                                <Bullet key={item}>{item}</Bullet>
                            ))}
                        </View>
                    ))}
                </Section>
            </Page>
        </Document>
    );
};
