import React from 'react';
import * as Icons from 'react-icons/tb';

type Props = {
  iconName: string;
};

export default function ReactIcon({ iconName }: Props) {
  const Icon = Icons[iconName as keyof typeof Icons];

  if (!Icon) {
    return <div>Icon "{iconName}" not found</div>;
  }

  return <Icon size={32} />;
}
