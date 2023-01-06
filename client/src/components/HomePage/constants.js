import { COLORS } from '@/constants/vars';

export const LANDING_TRIANGLE_CSS_CONFIG = {
  size: 50,
  color: COLORS.themeThree,
  direction: 'right'
};

export const LANDING_TRIANGLE_CSS_CONTAINER_UID = 'landingTriangle';

export const ARRAY_OF_MY_SKILLS = [
  'Software Developer',
  'Full Stack Developer',
  'Web App Developer',
  'Mobile App Developer'
];

export const ABOUT_ME = (Paragraph) => (
  <>
    <Paragraph>
      I am a passionate software developer with a strong analytical mindset who really enjoys
      dealing with different challenges in the world of computer science and information technology.
      I am focused on the development of web/mobile applications based on artificial intelligence. I
      am able to take all the required steps of smart application development, including data
      analysis, machine learning implementation, API development, and front-end development, to
      build a highly scalable application.
    </Paragraph>
    <Paragraph>
      I am open to any new exciting job opportunities to expand my knowledge as well as my network
      in in the industry of technology.
    </Paragraph>
  </>
);

export const My_PERSONAL_INFO = [
  { iconType: 'envelope', value: 'mmmohajer70@gmail.com' },
  { iconType: 'phone-fill', value: '+1(226)977-0855' },
  { iconType: 'location-fill', value: 'Ottawa, ON, Canada' }
];
