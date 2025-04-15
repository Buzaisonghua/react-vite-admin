import { isExternal } from '@/utils';
import { useMemo } from 'react';

// css
const style = {
  svgIcon: {
    overflow: 'hidden',
    width: '1em',
    height: '1em',
    verticalAlign: '-0.15em',
    fill: 'currentcolor',
  },
  svgExternalIcon: {
    display: 'inline-block',
    backgroundColor: 'currentcolor',
    maskSize: 'cover !important',
  },
};

function SvgIcon(props: any) {
  const {
    iconClass,
    className,
  } = props;

  const isExternalBoolean = useMemo(() => isExternal(iconClass), [iconClass]);
  const styleExternalIcon = useMemo(() => ({
    'mask': `url(${iconClass}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${iconClass}) no-repeat 50% 50%`,
  }), [iconClass]);
  const svgClass = useMemo(() => `svg-icon ${className || ''}`, [className]);
  const iconName = useMemo(() => `#icon-${iconClass}`, [iconClass]);

  return (
    <>
      {
        isExternalBoolean
          ? (
              <div
                style={{
                  ...style.svgIcon,
                  ...styleExternalIcon,
                  ...style.svgExternalIcon,
                }}
                className="svg-external-icon svg-icon"
              />
            )
          : (
              <svg className={svgClass} style={style.svgIcon} aria-hidden="true">
                <use xlinkHref={iconName} />
              </svg>
            )
      }
    </>
  );
}

export default SvgIcon;
