export interface Project {
  id: string;
  name: string;
  description: string;
  name_en: string;
  description_en: string;
  imagesUrl: string[];
  videoUrl: string;
  tags: string[];
  url: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
