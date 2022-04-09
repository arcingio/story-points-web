export const hosts = [
  {
    firstName: "roger",
    lastName: "king",
    bio: "Roger has 10+ years of software engineering experience. Currently, Roger is working at a tech-fitness company called Balanced as their founding engineer. We are hiring (balanced not story points - we dont have funding)",
  },
  {
    firstName: "joseph",
    lastName: "micceri",
    bio: "To the closet to the cloud! Joseph is a Senior Infrastructure EnginEER at SeatGeek. Shoutout SeatGeek.",
  },
  {
    firstName: "george",
    lastName: "markantonis",
    bio: "Former Apple Genius, Almost Google Engineer. George is a Frontend Engineer at Capsule. He enjoys long walks on the beach while drinking a tall flat white. LEETCODE.",
  },
  {
    firstName: "greg",
    lastName: "meade",
    bio: "The voice for the voiceless. The non-tech friend who asks the questions that all of you have. Follow 925Fitness.",
  },
];

export const spotifyURL =
  "https://open.spotify.com/show/7DL3wy7Ru8Gt8IXj6ElRrm";
export const applePodcastURL =
  "https://podcasts.apple.com/us/podcast/story-points/id1607688371";
export const instagramURL = "https://www.instagram.com/story_points/";
export const twitterURL = "https://twitter.com/story_points";
export const tiktokURL = "https://www.tiktok.com/@story_points";
export const fetcher = (...args: any) =>
  fetch(...([args] as const)).then((res) => res.json());
