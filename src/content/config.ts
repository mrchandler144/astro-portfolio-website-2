import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      worksImages: z.array(
        z.object({
          url: z.string(),
          alt: z.string(),
        })
      ),
      //platform: z.string(),
      //stack: z.string(),
      //website: z.string(),
      //github: z.string(),
    })
});

export const collections = {
  projects: projectsCollection,
};

