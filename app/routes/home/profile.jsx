import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { ProfileLegendLogo } from './legend-logo';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m Joshua, a senior full-stack engineer based in Jersey City. BSc Computer Science,
      Princeton University (2014–2018). I build high-performance distributed systems and
      modern web apps—Python, Java, and microservices on the backend; Next.js, React, and
      TypeScript on the frontend—with a focus on real-time, data-heavy systems and
      performance. If you’re curious about my tooling, see my{' '}
      <Link href="/uses">uses page</Link>.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m open to discussing new opportunities—reach out on{' '}
      <Link href="https://www.linkedin.com/in/joshuashin1">LinkedIn</Link> or via{' '}
      <Link href="/contact">contact</Link>.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.legendSlot}>
                <ProfileLegendLogo visible={visible} />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
