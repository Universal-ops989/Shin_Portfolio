import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: config.linkedinUrl,
    icon: 'link',
  },
  {
    label: 'Email',
    url: `mailto:${config.email}`,
    icon: 'send',
  },
  {
    label: 'Phone',
    url: `tel:${config.phone}`,
    icon: 'link',
  },
];
