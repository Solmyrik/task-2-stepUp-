import Button from '../Common/Button/Button';
import H1Title from '../Common/H1Title/H1Title';
import Paragraph from '../Common/Paragraph/Paragraph';
import TextBackdrop from '../Common/TextBackdrop/TextBackdrop';
import styles from './Intro.module.css';
import { FC } from 'react';

type Props = {};

const title: string = 'Any products from famous brands with worldwide delivery';
const subTitle: string =
  'We sell smartphones, laptops, clothes, shoes and many other products at low prices';

const Intro: FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__container}>
        <H1Title className={styles.intro__title} value={title} />
        <Paragraph className={styles.intro__subtitle} value={subTitle} color="#ffffff" />
        <Button onClick={() => {}} type="primary" width="201px" text="Go to shopping" />
        <TextBackdrop className={styles.intro__text} value="Goods4you" />
      </div>
    </section>
  );
};

export default Intro;
