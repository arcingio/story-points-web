import Parser from "rss-parser";

interface EpisodeInformation {
  title: string;
  publishDate: Date;
  audio: {
    url: string;
    type: string;
    duration: number;
  };
  description: string;
}

export default async function start(req: any, res: any) {
  if (req.method === "GET") {
    const { PODCAST_RSS_FEED } = process.env;

    const parser = new Parser();
    const feed = await parser.parseURL(PODCAST_RSS_FEED!);
    const episodes = [];

    for (const f of feed.items) {
      if (
        episodes.length > 0 &&
        f.title &&
        f.title.toLowerCase().includes("retro")
      ) {
        break;
      }

      episodes.push({
        title: f.title,
        publishDate: f.isoDate,
        description: f.contentSnippet,
        audio: {
          url: f.enclosure?.url,
          type: f.enclosure?.type,
          duration: f.enclosure?.length,
        },
      });
    }

    res.json(episodes);
    return;
  }

  res.status(405);
}
