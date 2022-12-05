import React from "react";
import { api } from "@api";
import { InferGetStaticPropsType } from "next";
import { Text } from "@ui";

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
  console.log("aboutData", aboutData);
  return (
    <div>
      <Text h3>{aboutData.title}</Text>
    </div>
  );
};

export default About;
