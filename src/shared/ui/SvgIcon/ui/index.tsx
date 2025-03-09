import React from 'react';
import { icons, SvgIconProps } from '../model';
import Image from 'next/image';

const SvgIcon: React.FC<SvgIconProps> = ({ name, width, height, className = '', size = 25 }) => {
  const Icon = icons[name];

  if (!Icon) return null;

  return <Image priority width={width || size} height={height || size} className={className} alt='Img' src={Icon} />;
};

export default SvgIcon;
