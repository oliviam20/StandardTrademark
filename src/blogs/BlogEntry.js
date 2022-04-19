import React, { memo } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import Card from "../components/Card/Card";
import Divider from "../components/Divider/Divider";
import HeroStripes from "../components/HeroStripes/HeroStripes";
import Paragraph from "../components/Paragraph/Paragraph";
import PropTypes from 'prop-types';
import SubHeading from "../components/SubHeading/SubHeading";
import "./BlogEntry.scss"

const BlogEntry = ({
  cn,
  date,
  en
}) => {
  function renderContent(content) {
    return (
      content.map((data, index) => {
        return (
          <Paragraph key={index} text={data.text} {...data.styles} />
        )
      })
    )
  }

  return (
    <main>
      <div className="graphicWrapper">
        <HeroStripes />
      </div>

      <section className="navSection" id="navSection">
        <Link className="link" to="/blog">
          <Btn
            v2
            text="Back"
            styles={{ fontSize: "0.8rem" }}
          />
        </Link>
      </section>

      <section className="blogWrapper">
        <Card>
          <Paragraph text={date} />
          <SubHeading text={en.title} />
          {renderContent(en.contents)}
          <Divider />
          <div className="space" />
          <SubHeading text={cn.title} />
          {renderContent(cn.contents)}
        </Card>
      </section>
    </main>
  )
}

BlogEntry.propTypes = {
  cn: PropTypes.shape({
    contents: PropTypes.array,
    title: PropTypes.string
  }),
  date: PropTypes.string,
  en: PropTypes.shape({
    contents: PropTypes.array,
    title: PropTypes.string
  })
};

export default memo(BlogEntry);
