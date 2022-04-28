import React from 'react';

export type InfoType = {
  name: string,
  bio: string,
  contacts: string
}

export const Information: React.FC<InfoType> = (props) => {
  const { name, bio, contacts } = props;
  return (
    <>
      <h1>hello world!</h1>
      <h2> name: {name}</h2>
      <p>BIO : {bio}</p>
      <p>contacts: {contacts}</p>
    </>
  );
};
