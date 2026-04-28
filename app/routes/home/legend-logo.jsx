import styles from './legend-logo.module.css';

/** Cartoon “legend” mascot — bold silhouette, cape, and rank star */
export function ProfileLegendLogo({ visible }) {
  return (
    <div className={styles.root} data-visible={visible} aria-hidden="true">
      <svg
        className={styles.svg}
        viewBox="0 0 240 280"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0 8)">
          <path
            className={styles.cape}
            d="M48 175c-8-48 12-95 72-118 60 23 80 70 72 118-18 52-48 78-72 88-24-10-54-36-72-88Z"
          />
          <path
            className={styles.capeInner}
            d="M68 168c-6-38 8-78 52-96 44 18 58 58 52 96-12 38-32 62-52 72-20-10-40-34-52-72Z"
          />
          <path
            className={styles.body}
            d="M88 168h64c6 0 10 4 12 10l14 52c2 8-4 16-12 16h-92c-8 0-14-8-12-16l14-52c2-6 6-10 12-10Z"
          />
          <circle className={styles.head} cx="120" cy="108" r="52" />
          <path
            className={styles.hair}
            d="M68 98c4-38 28-62 52-68 24 6 48 30 52 68-8-12-22-22-38-26-10 8-18 22-22 38-6-14-16-26-28-32-16 4-30 14-38 26Z"
          />
          <ellipse className={styles.eye} cx="98" cy="108" rx="14" ry="18" />
          <ellipse className={styles.eye} cx="142" cy="108" rx="14" ry="18" />
          <circle className={styles.pupil} cx="100" cy="110" r="7" />
          <circle className={styles.pupil} cx="144" cy="110" r="7" />
          <circle className={styles.cheek} cx="82" cy="122" r="8" />
          <circle className={styles.cheek} cx="158" cy="122" r="8" />
          <path className={styles.mouth} d="M104 134c8 10 24 10 32 0" />
          <path
            className={styles.starStroke}
            d="M188 36l6 16 16 4-16 6-6 18-6-18-16-6 16-4 6-16Z"
          />
          <path className={styles.star} d="M188 40l4 12 12 3-12 4-4 14-4-14-12-4 12-3 4-12Z" />
        </g>
      </svg>
    </div>
  );
}
