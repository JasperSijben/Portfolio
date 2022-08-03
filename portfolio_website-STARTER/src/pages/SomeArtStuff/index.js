import react from "react";
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";

export default function index(){
    return(
        <Layout>
            <Section>
                <SectionTitle>Some Art projects</SectionTitle>
                <SectionText>
                Text about earlier semesters and pictures of what I made
                </SectionText>
            </Section>
        </Layout>
    )
}