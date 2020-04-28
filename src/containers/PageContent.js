import React from 'react';

export const PageContent = (props) => {
  const { children } = props;

  return (
    <main>
      {children}
    </main>
  )
}

export default PageContent;