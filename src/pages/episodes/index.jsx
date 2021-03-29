import { episodes } from "utils/data";

const Episodes = () => {
  return episodes.map(episode => {
    console.log(episode);
    return <div key={episode.link}>{episode.module.default.components}</div>
  });
};

export default Episodes;
