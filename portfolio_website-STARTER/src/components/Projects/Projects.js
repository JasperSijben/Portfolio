import React from 'react';

import { BlogCard, CardInfo, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Button from '../../styles/GlobalComponents/Button';
import Link from 'next/dist/client/link';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, visit }) => (
        <BlogCard key ={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <br />
          <br />

          <div>
            <TitleContent>Skills</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>

          <br />

          <div style={{ display: "inline-flex", alignment: "center"}}>
            <Link href={visit}>
              <Button>View Project</Button>    
            </Link>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;