export interface AboutSection {
  title: string;
  subtitle: string;
  description: string;
  statistics: Array<{
    value: string;
    label: string;
    color: 'green' | 'blue' | 'orange' | 'gray';
  }>;
}

export interface StorySection {
  title: string;
  description: string;
  videoThumbnail?: string;
  videoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image?: string;
  bio?: string;
}

export interface VisionMission {
  vision: {
    title: string;
    description: string;
    icon?: string;
  };
  mission: {
    title: string;
    description: string;
    icon?: string;
  };
}

export interface AboutData {
  about: AboutSection;
  story: StorySection;
  team: {
    title: string;
    members: TeamMember[];
  };
  visionMission: VisionMission;
}

