import { episodes } from "utils/data";

const Episodes = () => {
  console.log(episodes);
  return episodes.map(episode => {
    console.log(episode.module.default);
    return<div key={episode.link}>{episode.module.default}</div>
  });
};

export default Episodes;
