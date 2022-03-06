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

    const episodes = feed.items.map((item) => {
      return {
        title: item.title,
        publishDate: item.isoDate,
        description: item.contentSnippet,
        audio: {
          url: item.enclosure?.url,
          type: item.enclosure?.type,
          duration: item.enclosure?.length,
        },
      };
    });
    res.json(episodes);
    return;
  }

  res.status(405);
}
