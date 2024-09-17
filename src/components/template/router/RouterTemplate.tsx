import React from 'react';
import styles from './RouterTemplate.module.css';
export interface IRouterTemplate {
  sampleTextProp: string;
}

const RouterTemplate: React.FC<IRouterTemplate> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default RouterTemplate;
