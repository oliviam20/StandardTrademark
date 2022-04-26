import React, { memo } from "react"
import { Link } from "react-router-dom";
import Btn from "../components/Btn/Btn";
import Card from "../components/Card/Card";
import HeroStripes from "../components/HeroStripes/HeroStripes";
import Layout from "../components/Layout/Layout";
import SubHeading from "../components/SubHeading/SubHeading";
import blogs from "./blogs.json";
import "./Blog.scss"

const Blog = () => {
  function renderBlogLinks() {
    return (
      blogs.entries.map((entry, index) => (
        <Link
          className="entry-links"
          key={index}
          to={`/blog/${entry.date}`}>{`${entry.date} ${entry.en.title} | ${entry.cn.title}`}
        </Link>
        )
      )
    )
  }

  return (
    <main>
      <div className="graphicWrapper">
        <HeroStripes />
      </div>

      <Layout />

      <section className="navSection" id="navSection">
        <Link className="link" to="/">
          <Btn
            v2
            text="Home"
            styles={{ fontSize: "0.8rem" }}
          />
        </Link>
      </section>

      <section className="sectionWrapper">
        <Card>
          <SubHeading text="Blog | 博客" />
          {renderBlogLinks()}
        </Card>
      </section>
    </main>
  );
}

export default memo(Blog);