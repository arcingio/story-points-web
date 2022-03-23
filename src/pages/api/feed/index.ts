import Parser from "rss-parser";

export default async function start(req: any, res: any) {
  if (req.method === "GET") {
    const { PODCAST_RSS_FEED } = process.env;

    const parser = new Parser();
    const feed = await parser.parseURL(PODCAST_RSS_FEED!);

    const episodes = feed.items.map((f) => {
      return {
        title: f.title,
        publishDate: f.isoDate,
        description: f.contentSnippet,
        audio: {
          url: f.enclosure?.url,
          type: f.enclosure?.type,
          duration: f.enclosure?.length,
        },
      };
    });

    res.json(episodes);
    return;
  }

  res.status(405);
}
