import React from "react";
import { Layout } from "../../layout/Layout";
import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { Player } from "video-react";
import { FaItchIo } from "react-icons/fa";
import { SocialIcons } from '../../components/Header/HeaderStyles';



export default function index() {
    return (
        <Layout>
            <Section>
                <SectionTitle>Mario Maffia
                    <div style={{ marginLeft: '10px', color: "#FFFFFF" }}>
                        <SocialIcons href="https://fontys-gdt.itch.io/gp2mariomaffia"  >
                            <FaItchIo size='5rem' />
                        </SocialIcons>
                    </div>
                </SectionTitle>
                <SectionText>
                    This was the first project of my game design semester, we got the first few weeks to work on a concept and work out a prototype. 
                    We decided to go with a bit of a joke concept in Mario Mafia, where you play as luigi to take down the boss that betrayed you Mario.
                    <br/>
                    If you want to play the game, click on the Itch.io icon next to the title.
                    <br/>
                    <br/>
                    My contribution to this project was the 3rd level, where I made a puzzle in a style that would fit a pair of plumbers.
                    This puzzle was my first experience with a lot of unity's features such as raycasting and prefabs, but also how to code a algorithm for unity.
                </SectionText>
                <Player>
                    <source src="/vids/pipeLevel.mp4" />
                </Player>
            </Section>
        </Layout>
    )
}