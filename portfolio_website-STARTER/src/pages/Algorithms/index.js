import React from "react";
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { Img } from "../../components/Projects/ProjectsStyles";
import { Li } from "../../components/PageStyles/AlgorithmStyles";
import { SocialIcons } from "../../components/Header/HeaderStyles";
import { AiFillGithub } from "react-icons/ai";
import { InnerImageZoom } from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

export default function index(){
    return(
        <Layout>
            <Section>
                <SectionTitle>Algorithm Assignments

                </SectionTitle>
                <SectionText>
                    So these assignments were really my first experience with Algorithms in general. We didn't reall recieve much help at all, but at least the first one (circus train) was pretty doable.
                </SectionText>
                <SectionTitle SectionText style={{fontSize: '40px'}}>
                    Circus Train
                    <SocialIcons href="https://github.com/JasperSijben/CircusTrain">
                        <AiFillGithub size= "4rem"/>
                    </SocialIcons>
                </SectionTitle>
                <SectionText>
                    In this project we had to order different types of animals into wagons. The idea was to make it as efficiently as possible, so animals would be added and you had to give them a space in the train using as few as possible wagons and following these rules:
                    <br/> 
                    <br/>
                    <Li style={{listStyleType: 'disc'}}>Animals are either carnivores or herbivores and 1 of 3 sizes: small, medium and large</Li>
                    <Li style={{listStyleType: 'circle'}}>If a carnivore is in the same wagon as another animal that is as large or smaller than the carnivore then it will be eaten by the carnivore.</Li>
                    <Li style={{listStyleType: 'disc'}}>Every animal has a value depending on size small is 1, medium is 3 and large is 5. In each wagon there is a maximum value of 10 allowed</Li>
                    Below you can see the flowchart I made for this assignment. You can see the whole project on github by clicking the icon next to the title of this project.
                </SectionText>
                <InnerImageZoom src={"/images/Circus trein.png"} zoomSrc={"/images/Circus trein.png"}/>
                <br/>
                <SectionTitle SectionText style={{fontSize: '40px'}}>
                    Containership
                    <SocialIcons href="https://github.com/JasperSijben/ContainerShip">
                        <AiFillGithub size= "4rem"/>
                    </SocialIcons>
                </SectionTitle>
                <SectionText>
                    For the containership assignment we had to assign the dimensions of a ship and how many containers of what types had to be distributed. Each ship had a maximum wheigth it could carry and a minimum weight it had to carry in order to not tip over, this minimum and maximum would be defined by the measurements of the ship. Every container would have a weigth between 4 and 30 tonnes and could have special properties. These properties were: Normal, Valuable, Cooled and Cooled/Valuable. We would have to then place the containers on the ship so that the following rules would apply:
                    <br/> 
                    <br/>
                    <Li style={{listStyleType: 'disc'}}>Each type of container had a specific spot to be placed: Cooled containers needed to be either all the way in the back or all the way in the front so that they could be reached with electricity for the cooling. Valuable containers needed to be on top, they were never allowed underneath another container. Valuable/cooled had both rules, so on top all the way in the back or front. And lastly the Normal containers could go anywhere.</Li>
                    <Li style={{listStyleType: 'circle'}}>A container had a maximum weight of 120 tonnes that would be allowed on top of it</Li>
                    <Li style={{listStyleType: 'disc'}}>The total weight on the ship had to be less then the maximum and more then the minimum and had to be devided between the right and left side of the ship. If there was a difference of more than 20% of the weight of ether half the ship would tip over.</Li>
                    Below you can see the flowchart I made for this assignment, you can also check out the entire project in github by clicking the icon next to the title of this project.
                </SectionText>
                <InnerImageZoom src={"/images/Conceptual Flowchart Containership (1).png"} zoomSrc={"/images/Conceptual Flowchart Containership (1).png"}/>
            </Section>
        </Layout>
    )
}