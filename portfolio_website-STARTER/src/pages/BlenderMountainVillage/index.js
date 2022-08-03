import react from "react";
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { Img } from "../../components/Projects/ProjectsStyles";

export default function index(){
    return(
        <Layout>
            <Section>
                <SectionTitle>Mountain village (WIP)</SectionTitle>
                <SectionText>
                This is a scene that I was trying to make after following a few tutorials in blender. It's not done yet, but I'll be updating the progress soon.
                <Img src={"/images/MountainVillage.png"}/>
                </SectionText>
            </Section>
        </Layout>
    )
}