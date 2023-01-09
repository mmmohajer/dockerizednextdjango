import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { Div, Card, CardHeader, CardBody, CardFooter, Heading } from 'basedesign-iswad';
import Image from 'next/image';

import Paragraph from '@/baseComponents/Paragraph';
import Icon from '@/baseComponents/Icon';
import Anchor from '@/baseComponents/Anchor';

import { smDesignSize, lgDesignSize } from '@/constants/vars';

import styles from '../Card.module.scss';

const ProjectCard = ({ photo, title, codeLink, themeLink, className, ...props }) => {
  const [isContentActive, setIsContentActive] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isContentActive) {
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    } else {
      setShowContent(false);
    }
  }, [isContentActive]);

  return (
    <>
      <Card {...props} className={cx('boxShadowType1 bgWhite of-y-hidden of-x-hidden', className)}>
        <CardHeader className="">
          <Div
            type="flex"
            className={cx('w-per-100 pos-rel', styles.projectImageContainer)}
            onMouseEnter={() => setIsContentActive(true)}
            onMouseLeave={() => {
              setIsContentActive(false);
              setTimeout(() => {
                setShowContent(false);
              }, 100);
            }}>
            <Image src={photo} objectFit="cover" />
            <Div
              showIn={lgDesignSize}
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx(
                'w-per-100 textWhite pos-abs pos-abs--lt z-10',
                styles.projectContentContainer,
                isContentActive && styles.projectContentContainerActive
              )}>
              {showContent && (
                <Div>
                  <Heading type={3}>{title}</Heading>

                  {codeLink && (
                    <Div type="flex" hAlign="center" className={cx('mouse-hand mt2 w-per-100')}>
                      <Anchor to={codeLink} internal={false}>
                        <Div
                          type="flex"
                          hAlign="center"
                          vAlign="center"
                          className={cx('w-px-100 height-px-60 br-rad-px-10', styles.projectBtn)}>
                          <Icon type="source-code" color="white" scale={2} />
                        </Div>
                      </Anchor>
                    </Div>
                  )}

                  {themeLink && (
                    <Div type="flex" hAlign="center" className={cx('mouse-hand mt2 w-per-100')}>
                      <Anchor to={themeLink} internal={false}>
                        <Div
                          type="flex"
                          hAlign="center"
                          vAlign="center"
                          className={cx('w-px-100 height-px-60 br-rad-px-10', styles.projectBtn)}>
                          <Icon type="link" color="white" scale={2} />
                        </Div>
                      </Anchor>
                    </Div>
                  )}
                </Div>
              )}
            </Div>

            <Div
              showIn={smDesignSize}
              type="flex"
              hAlign="center"
              vAlign="center"
              className={cx(
                'w-per-100 textWhite pos-abs pos-abs--lt z-10',
                styles.projectContentMobileContainer
              )}>
              <Div>
                <Heading type={3} className="text-center">
                  {title}
                </Heading>

                {codeLink && (
                  <Div type="flex" hAlign="center" className={cx('mouse-hand mt2 w-per-100')}>
                    <Anchor to={codeLink} internal={false}>
                      <Div
                        type="flex"
                        hAlign="center"
                        vAlign="center"
                        className={cx('w-px-100 height-px-60 br-rad-px-10', styles.projectBtn)}>
                        <Icon type="source-code" color="white" scale={2} />
                      </Div>
                    </Anchor>
                  </Div>
                )}

                {themeLink && (
                  <Div type="flex" hAlign="center" className={cx('mouse-hand mt2 w-per-100')}>
                    <Anchor to={themeLink} internal={false}>
                      <Div
                        type="flex"
                        hAlign="center"
                        vAlign="center"
                        className={cx('w-px-100 height-px-60 br-rad-px-10', styles.projectBtn)}>
                        <Icon type="link" color="white" scale={2} />
                      </Div>
                    </Anchor>
                  </Div>
                )}
              </Div>
            </Div>
          </Div>
        </CardHeader>
      </Card>
    </>
  );
};

export default ProjectCard;
