import react from "react";
import { Player } from "video-react";
import { Layout } from "../../layout/Layout";
import { InnerImageZoom } from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { Img } from "../../components/Projects/ProjectsStyles";

export default function index(){
    return(
        <Layout>
            <Section>
                <SectionTitle>Kind Regards</SectionTitle>
                <SectionText>
                    For this project we as a group of game development students were paired with a group of pedagogy students and a company who would give us the assignment.
                    We had to make an application that could help people that are on the waiting list for youth care. The goal was to not fix their issues as that is what the actual youth care comes in but rather to keep things from getting worse while they are on the long wait list.
                    <br />
                    <br />
                    In the project I was mostly responsible for keeping the team together, Communicating with the pedagogy team and helping them with research as well as designing, creating and animating some models.
                    <br/>
                    <br/>
                    To be able to give the people playing a sense of progress, we made some stickers they could collect by sending them to eachother. I was responsible for designing some of these and my goal was to make some that would be especially expressive and some that would be mostly fun to collect.
                    <br/>
                    <Img src={"./images/Screenshot 2022-08-03 185319.png"}/>
                    <br/>
                    <br/>
                    An example of a model that I made was this booklet. I aso animated the page turning along the spring-like ridge.
                </SectionText>
                <Player>
                <source src="/vids/0001-0040.mp4" />
                </Player>
                <SectionText>
                    <br/>
                    
                    Here you can see our demo, you'll see the tutorial being used where evey functionality is explained.
                </SectionText>
                <Player>
                <source src="/vids/Kind_Regards_-_Demo (1).mp4" />
                </Player>
            </Section>
            
        </Layout>
    )
}