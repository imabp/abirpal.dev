import Card from "./card";
import { StoryData } from "storyblok-js-client";
import React from "react";

// ComponentsType used for resolving Storyblok Components -> NextJS Components.
type ComponentsType = Record<string, React.FC<any>>;

// resolve Storyblok components to Next.js components
const Components: ComponentsType = {
  card: Card,
};

type BlokType = {
  blok: {
    component: string;
    _uid: string;
    page: any;
  };
};

const DynamicComponent = (blokData: BlokType) => {
  // check if component is defined above
  console.log("BLOKDATA", blokData);
  if (typeof Components[blokData.blok.component] !== undefined) {
    const Component = Components[blokData.blok.component];
    console.log("blokdata.component->", blokData.blok.component);
    return <Component blok={blokData} key={blokData.blok._uid} />;
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blokData.blok.component}</strong> has not been
      created yet.
    </p>
  );
};

export default DynamicComponent;
