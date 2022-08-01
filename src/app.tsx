import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import ReactMarkdown from 'react-markdown';
import * as S from 'styles';
import useGlobalCss from 'styles/global';
import resume from './resume.json';

export default function App() {
  useGlobalCss();

  return (
    <S.Main>
      <S.Profile>
        <S.Name>{resume.basics.name}</S.Name>
        <S.Links>
          <S.Link href={`mailto:${resume.basics.email}`}>
            <EnvelopeClosedIcon />
            {resume.basics.email}
          </S.Link>
          {resume.basics.profiles.map((profile) => (
            <S.Link href={profile.url} key={profile.url}>
              {profile.network === 'LinkedIn' && <LinkedInLogoIcon />}
              {profile.network === 'GitHub' && <GitHubLogoIcon />}
              {profile.username}
            </S.Link>
          ))}
        </S.Links>
      </S.Profile>
      <S.Section id="skills">
        <S.Subtitle>技能</S.Subtitle>
        {resume.skills.map((skill) => (
          <S.Skill key={skill.name}>
            <S.SkillTitle>{skill.name}</S.SkillTitle>
            {skill.keywords.join(' / ')}
          </S.Skill>
        ))}
      </S.Section>
      <S.Section id="experience">
        <S.Subtitle>經歷</S.Subtitle>
        <S.Works>
          {resume.work.map((work) => (
            <S.Work key={work.startDate}>
              <S.Row>
                <S.WorkTitle>{work.position}</S.WorkTitle>
                <S.DateInterval>
                  {work.startDate} - {work.endDate}
                </S.DateInterval>
              </S.Row>
              <S.Company href={work.url}>{work.name}</S.Company>
              <S.WorkItemList>
                {work.highlights.map((highlight) => (
                  <S.WorkItem key={highlight}>
                    <ReactMarkdown>{highlight}</ReactMarkdown>
                  </S.WorkItem>
                ))}
              </S.WorkItemList>
            </S.Work>
          ))}
        </S.Works>
      </S.Section>
      <S.Section id="education">
        <S.Subtitle>學歷</S.Subtitle>
        {resume.education.map((edu) => (
          <S.Education key={edu.startDate}>
            <S.University>{edu.institution}</S.University>
            <S.DateInterval>
              {edu.startDate} - {edu.endDate}
            </S.DateInterval>
            <S.Study>
              {edu.area} - {edu.studyType}
            </S.Study>
          </S.Education>
        ))}
      </S.Section>
      <S.Section id="portfolio">
        <S.Subtitle>作品連結</S.Subtitle>
        <S.Products>
          {resume.projects.map((project) => (
            <S.Product>
              <S.ProductName href={project.url}>{project.name}</S.ProductName>
              <S.Tech>{project.keywords.join(', ')}</S.Tech>
            </S.Product>
          ))}
        </S.Products>
      </S.Section>
    </S.Main>
  );
}
