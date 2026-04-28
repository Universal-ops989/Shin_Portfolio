import { Fragment } from 'react';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import {
  capabilityTags,
  capabilitiesCopy,
  experience,
  experienceCardBulletCap,
  experienceCopy,
} from './profile-data';
import styles from './resume-showcase.module.css';

function formatDateRange(dates) {
  return dates
    .split(/\s*[–-]\s*/)
    .map(part =>
      part
        .trim()
        .split(/\s+/)
        .map(w => (w.length <= 3 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()))
        .join(' ')
    )
    .join(' – ');
}

export function CapabilitiesSection({ id = 'capabilities', visible }) {
  return (
    <Section
      as="section"
      id={id}
      className={styles.capWrap}
      aria-labelledby={`${id}-title`}
      tabIndex={-1}
    >
      <div className={styles.inner}>
        <Transition in={visible} timeout={0}>
          {({ visible: v, nodeRef }) => (
            <div ref={nodeRef} data-visible={v}>
              <Text className={styles.eyebrow} size="s" weight="medium" as="p">
                {capabilitiesCopy.eyebrow}
              </Text>
              <Heading className={styles.title} level={3} as="h2" id={`${id}-title`}>
                {capabilitiesCopy.title}
              </Heading>
              <Text className={styles.lead} size="l" secondary as="p">
                {capabilitiesCopy.description}
              </Text>
              <ul className={styles.tagGrid} aria-label="Skills and technologies">
                {capabilityTags.map(tag => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Transition>
      </div>
    </Section>
  );
}

export function ExperienceSection({ id = 'experience', visible }) {
  return (
    <Section as="section" id={id} className={styles.expWrap} aria-labelledby={`${id}-title`} tabIndex={-1}>
      <div className={styles.inner}>
        <Transition in={visible} timeout={0}>
          {({ visible: v, nodeRef }) => (
            <div ref={nodeRef} data-visible={v}>
              <Text className={styles.eyebrow} size="s" weight="medium" as="p">
                {experienceCopy.eyebrow}
              </Text>
              <Heading className={styles.title} level={3} as="h2" id={`${id}-title`}>
                {experienceCopy.title}
              </Heading>
              <Text className={styles.lead} size="l" secondary as="p">
                {experienceCopy.description}
              </Text>
              <div className={styles.cardTrack}>
                {experience.map((job, index) => (
                  <Fragment key={job.company}>
                    <article className={styles.card}>
                      <div className={styles.cardTop}>
                        <span className={styles.company}>{job.company}</span>
                        <span className={styles.datePill}>{formatDateRange(job.dates)}</span>
                      </div>
                      <p className={styles.role}>{job.title}</p>
                      <ul className={styles.cardList}>
                        {job.highlights.slice(0, experienceCardBulletCap).map((line, i) => (
                          <li key={i} className={styles.cardListItem}>
                            {line}
                          </li>
                        ))}
                      </ul>
                    </article>
                    {index < experience.length - 1 && (
                      <div className={styles.cardBridge} aria-hidden="true">
                        <span className={styles.bridgeNode} />
                        <span className={styles.bridgeNode} />
                        <span className={styles.bridgeNode} />
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </div>
    </Section>
  );
}
