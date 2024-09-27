import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: { kind: "local" },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { contentField: "content" },
      schema: {
        draft: fields.checkbox({ label: "Draft", defaultValue: true }),
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({ 
          label: "Date Published", 
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        image: fields.object({
          source: fields.url({
            label: "Featured Image",
            description: "Image from CDN",
            validation: { isRequired: true },
          }),
          alt: fields.text({ 
            label: "Alt text", 
            description: "Required",
            validation: { length: { min: 1 } },
          }),
          caption: fields.text({
            label: "Caption",
            multiline: true,
          }),
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
        projectUrl: fields.url({
          label: "Project URL",
          description: "A link to the project's page or repo",
          validation: { isRequired: true },
        }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          {
            label: "Tag",
            itemLabel: props => props.value
          }
        ),
      },
    }),
  },
});