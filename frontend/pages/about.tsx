import React from "react";
import { api } from "@api";
import { InferGetStaticPropsType } from "next";
import { ContentComponent } from "@ui";

export const getStaticProps = async () => {
  const response = await api.aboutDetails();

  if (!response?.about?.data?.attributes) {
    return { notFound: true };
  }

  return {
    props: { aboutData: response.about.data.attributes },
  };
};

const About = ({
  aboutData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ContentComponent title={aboutData.title} blocks={aboutData.blocks} />;
};

export default About;
