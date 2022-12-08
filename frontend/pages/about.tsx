import React from "react";
import { api } from "@api";
import { InferGetStaticPropsType } from "next";
import { AboutComponent } from "@ui";

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
  return <AboutComponent title={aboutData.title} blocks={aboutData.blocks} />;
};

export default About;
