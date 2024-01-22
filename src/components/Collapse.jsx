import { useState } from 'react';
import styles from './collapse.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const customIcon = <FontAwesomeIcon icon={faChevronUp} className={styles.icon} />;

function Collapse ({ title, description }) {
  const [icon, setIcon] = useState(styles.icon);
  const [desc, setDesc] = useState(styles.dropdown__desc);
  const [isExpanded, setIsExpanded] = useState(false);

  const changeColor = () => {
    if (isExpanded) {
      setIcon(styles.icon);
      setDesc(styles.dropdown__desc);
    } else {
      setIcon(styles.icon2);
      setDesc(styles.dropdown__desc2);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={styles.dropdown}>
        <div className={styles.dropdown__title}>
          <div>{title}</div>
          <div className={icon} onClick={changeColor}>
            {customIcon}
          </div>
        </div>
        <div className={desc}>{description}</div>
      </div>
    </>
  );
}

export default Collapse;
