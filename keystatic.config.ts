import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "src/contect/projects/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" }}),
        content: fields.document({
          label: "Content",
          formatting: true,
          links: true,
          images: {
            directory: "src/assets/images",
            schema: {
              title: fields.text({
                label: "Caption"
              }),
              alt: "caption"
            }
          },
        })
      }
    })
  }
})