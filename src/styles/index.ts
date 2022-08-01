import { styled } from '@stitches/react';

export const Main = styled('main', {
  maxWidth: 760,
});

export const Profile = styled('section', {});

export const Section = styled('section', {
  marginTop: 30,
});

export const Name = styled('div', {
  fontSize: 28,
  fontWeight: 600,
});

export const Links = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
  marginTop: 9,
});

export const Link = styled('a', {
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const Subtitle = styled('div', {
  fontSize: 23,
  color: '#369',
  marginBottom: 15,
});

export const Skill = styled('div', {
  paddingBottom: 6,
  marginBottom: 6,
  display: 'flex',
  fontSize: 15,
  borderBottom: '1px solid #e2e2e2',
  '&:last-child': {
    border: 'none',
  },
});

export const SkillTitle = styled('div', {
  fontWeight: 600,
  minWidth: 80,
  color: '#000',
});

export const Row = styled('div', {
  display: 'flex',
  gap: 24,
  alignItems: 'center',
});

export const Works = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
});

export const Work = styled('div', {
  paddingBottom: 15,
  borderBottom: '1px solid #e2e2e2',
  '&:last-child': {
    border: 'none',
  },
});

export const Company = styled('a', {
  fontSize: 15,
  color: '#222',
  display: 'block',
  marginTop: 6,
});

export const DateInterval = styled('div', {
  color: '#666',
});

export const WorkTitle = styled('div', {
  fontSize: 16,
  fontWeight: 600,
});

export const WorkItemList = styled('ul', {
  marginTop: 15,
  paddingLeft: 21,
});

export const WorkItem = styled('li', {
  fontSize: 15,
});

export const Education = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
});

export const University = styled('div', {
  fontSize: 18,
  fontWeight: 600,
});

export const Study = styled('div', {
  fontSize: 16,
});

export const Products = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const Product = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const ProductName = styled('a', {
  fontSize: 17,
  display: 'block',
});

export const Tech = styled('div', {
  fontSize: 14,
  color: '#666',
});
