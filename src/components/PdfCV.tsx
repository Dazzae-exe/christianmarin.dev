import {Document, Page, Text} from '@react-pdf/renderer';
import {createTw} from "react-pdf-tailwind";

const tw = createTw({
    fontFamily: {
        sans: ['sans-serif']
    },
    colors: {
        custom: ['#000000']
    }
});

const PdfCVStyles = {
    title: 'text-2xl font-bold mb-2 text-center',
    heading: 'text-lg font-bold mb-2',
    subheading: 'text-[10px] font-bold',
    body2: 'text-[10px] text-center mb-4',
    body: 'text-[10px] mb-1 lis'
}

export const PdfCV = () => {
    return (
        <>
            <Document>
                <Page style={tw('p-4 flex flex-col')}>
                    <Text style={tw(PdfCVStyles.title)}>
                        Christian Marín
                    </Text>
                    <Text style={tw(PdfCVStyles.body2)}>
                        Software Engineer | Full Stack Developer
                    </Text>
                    <Text style={tw(PdfCVStyles.body2)}>
                        +58 (412) 268-1292 | chrismarin0607@gmail.com
                    </Text>
                    <hr className={'mb-4'}/>
                    <Text style={tw(PdfCVStyles.heading)}>
                        Education
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        I.U.P. Santiago Mariño, Maracay, Venezuela | 2016-2017
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        Software Engineering, 3 semesters completed.
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        PLATZI | Online Learning Platform
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        Software Engineering, 3 semesters completed.
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        Front-end Development Specialization | 2023
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                Focused on building modern, scalable web applications through component-based
                                architecture using React and UI/UX practices.
                            </li>
                            <li>
                                Developed expertise in responsive design and web performance optimization.
                            </li>
                        </ul>
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        Algorithms & Programming Logic | 2023
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                In-depth study of algorithmic thinking and process mapping (Flowcharts) to drive system
                                efficiency and logic-based problem solving.
                            </li>
                            <li>
                                Applied advanced programming logic to optimize code execution and system architecture.
                            </li>
                        </ul>
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        UDEMY | Online Learning Platform
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        Full-Stack JavaScript & Web Architecture Specialization | 2021-2022
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                Full-Stack Engineering: Developed end-to-end web applications utilizing the MERN Stack
                                (MongoDB, Express.js, React, and Node.js).
                            </li>
                            <li>
                                Advanced Frontend Architecture: Mastered TypeScript and Object-Oriented Programming
                                (OOP) to build complex Single Page Applications (SPAs) and dynamic user interfaces.
                            </li>
                            <li>
                                Technical Implementation: Completed 30+ hours of intensive training, including 200+
                                coding exercises and multiple projects focused on modern web standards.
                            </li>
                            <li>
                                Advanced CSS & Responsive Design: Mastered modern layout engines (Flexbox and CSS Grid)
                                and mobile-first methodologies to build high-performance, cross-browser compatible
                                interfaces.
                            </li>
                        </ul>
                    </Text>
                    <hr className={'mb-4'} />
                    <Text style={tw(PdfCVStyles.heading)}>
                        Profile
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        I am a Software Engineer based in Venezuela. As a dedicated SWE, I specialize in crafting
                        high-quality products where sleek design meets rock-solid engineering. I thrive at the
                        intersection of aesthetics and functionality, delivering visually captivating interfaces backed
                        by scalable, performant code.
                    </Text>
                    <hr className={'mb-4'} />
                    <Text style={tw(PdfCVStyles.heading)}>
                        Experience
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        CHICKS GOLD | Canada / Remote Software Engineer | Jan 2024 – Present
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                SEO-Driven Architecture: Engineered high-performance, dynamic web applications utilizing a modular codebase to support multiple platforms simultaneously, significantly improving search engine indexing and organic traffic.
                            </li>
                            <li>
                                API Performance Tuning: Optimized RESTful API response times and data structures by developing custom endpoints, reducing payload overhead and improving data retrieval efficiency.
                            </li>
                            <li>
                                AI Integration: Spearheaded the integration of Generative AI within internal APIs to automate image and text generation, streamlining content creation workflows across all platforms.
                            </li>
                            <li>
                                Cloud Infrastructure Optimization: Developed an automated image optimization pipeline using AWS S3 Buckets, reducing storage costs and decreasing global latency for end-users.
                            </li>
                        </ul>
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        FREELANCE | Remote - Full-Stack Developer | 2023 – 2024
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                Digital Transformation: Consulted for local businesses to architect and deploy custom e-commerce solutions, facilitating their transition to digital-first sales models.
                            </li>
                            <li>
                                Workflow Automation: Developed automated purchasing funnels by integrating WhatsApp Business APIs with custom dashboards, streamlining the lead-to-sale conversion process.
                            </li>
                            <li>
                                UI/UX Engineering: Collaborated on the VediaGames platform (via Upwork) to optimize frontend layouts and engineer reusable components, enhancing user engagement and interface performance.
                            </li>
                        </ul>
                    </Text>
                    <Text style={tw(PdfCVStyles.subheading)}>
                        KATAVI GAMING LIMITED (TBET) | Tanzania / Remote Frontend Developer | 2021 – 2022
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                Frontend Performance: Enhanced frontend-to-API communication logic, significantly reducing product load times and improving the overall end-user experience for high-traffic gaming products.
                            </li>
                            <li>
                                User Acquisition: Designed and developed interactive mini-games for promotional campaigns, resulting in a measurable increase in new user registration and platform retention.
                            </li>
                            <li>
                                UI/UX Redesign: Spearheaded a comprehensive UI overhaul, implementing responsive layouts and intuitive form components to optimize the user journey and application usability.
                            </li>
                        </ul>
                    </Text>
                    <hr className={'mb-4'} />
                    <Text style={tw(PdfCVStyles.heading)}>
                        Skills
                    </Text>
                    <Text style={tw(PdfCVStyles.body)}>
                        <ul className={'list-disc'}>
                            <li>
                                Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3/SCSS, SQL.
                            </li>
                            <li>
                                Frontend Development: React, Next.js, Svelte, Tailwind CSS, Storybook, Responsive Design.
                            </li>
                            <li>
                                Backend & Databases: Node.js, Express.js, MongoDB, PostgreSQL, Supabase, RESTful API Design.
                            </li>
                            <li>
                                Tools & Cloud Infrastructure: Git/GitHub, Generative AI Integration, SEO Optimization.
                            </li>
                            <li>
                                Methodologies: Agile/Scrum, Component-Based Architecture, Object-Oriented Programming (OOP).
                            </li>
                        </ul>
                    </Text>
                </Page>
            </Document>
        </>
    );
}