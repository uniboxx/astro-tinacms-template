import React from 'react';

interface Props {
  date: string;
}

function FormattedDate({ date }: Props) {
  const _date = new Date(date);
  return (
    <time dateTime={_date.toISOString()}>
      {_date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  );
}

export default FormattedDate;
