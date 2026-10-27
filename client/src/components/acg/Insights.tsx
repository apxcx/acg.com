import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const articles = [
  { title: "Top 5 strategies to improve business efficiency", excerpt: "Learn key strategies that streamline operations, boost productivity, and help your business achieve sustainable growth and success.", date: "June 17, 2026" },
  { title: "How financial planning drives long-term business success", excerpt: "", date: "June 17, 2026" },
  { title: "Improving operational efficiency for modern business success", excerpt: "", date: "June 17, 2026" },
  { title: "Building competitive advantage in today’s dynamic market", excerpt: "", date: "June 17, 2026" },
];

export default function Insights() {
  return (
    <section className="insights section-pad" id="insights" aria-labelledby="insights-title">
      <div className="content-width">
        <div className="insights__head">
          <Reveal><p className="eyebrow">Insights</p><h2 id="insights-title">Smart strategies<br />insights for modern</h2></Reveal>
          <Reveal><a className="text-link" href="#insights">View All Blog <ArrowUpRight size={16} aria-hidden="true" /></a></Reveal>
        </div>
        <div className="insights__grid">
          {articles.map((article, index) => (
            <Reveal className="article-card" key={article.title} delay={index * 65}>
              <p className="article-card__number">0{index + 1}</p>
              <h3><a href="#insights">{article.title}</a></h3>
              {article.excerpt && <p className="article-card__excerpt">{article.excerpt}</p>}
              <a className="text-link" href="#insights">More Details <ArrowUpRight size={15} aria-hidden="true" /></a>
              <div className="article-card__meta"><span>{article.date}</span><span>Management</span><span>5 min Read</span></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
