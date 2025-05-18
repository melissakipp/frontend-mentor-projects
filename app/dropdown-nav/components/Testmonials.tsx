import Image from "next/image";

import styles from "./Testmonials.module.css";
import AudiophileLogo from "@/../public/images/dropdown-nav/client-audiophile.svg";
import DatabizLogo from "@/../public/images/dropdown-nav/client-databiz.svg";
import MakerLogo from "@/../public/images/dropdown-nav/client-maker.svg";
import MeetLogo from "@/../public/images/dropdown-nav/client-meet.svg";

export default function Testmonials() {
  return (
    <>
      <aside className={styles.testmonials}>
        <h2 className={styles.srOnly}>Clients that we have worked with</h2>
        <ol className={styles.testimonialsList}>
          <li className={styles.testimonialItem}>
            <Image 
              className={styles.testimonialImage}
              src={AudiophileLogo}
              alt="audiophile" 
              width={100}
              height={100}
            />
          </li>
          <li className={styles.testimonialItem}>
            <Image 
              className={styles.testimonialImage}
              src={DatabizLogo} 
              alt="databiz"
              width={100}
              height={100}
            />
          </li>
          <li className={styles.testimonialItem}>
            <Image 
              className={styles.testimonialImage}
              src={MakerLogo}
              alt="maker" 
            />
          </li>
          <li className={styles.testimonialItem}>
            <Image 
              className={styles.testimonialImage}
              src={MeetLogo} 
              alt="meet" 
            />
          </li>
        </ol>       
      </aside>
    </>
  );
}
