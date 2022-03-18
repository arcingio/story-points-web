export interface HostInfo {
  firstName: string;
  lastName: string;
}

export interface EpisodeAudioDetails {
  url: string;
  type: string;
  duration: number;
}
export interface Episode {
  title: string;
  publishDate: string;
  description: string;
  audio: EpisodeAudioDetails;
}

export enum HostAvatarImageTypes {
  "default.png",
  "hover.png",
}
