import { GoComment } from "react-icons/go"

export default {
  name: "announcement",
  title: "Announcement",
  type: "document",
  icon: GoComment,
  fieldsets: [{
    name: "announcement-text",
    title: "Announcement Text",
    options: {
      collapsible: true,
      collapsed: false
    }
  },
],
  fields: [
    {
      name: "headline",
      title: "Headline",
      type: "string",
      validation: Rule => Rule.required().max(50),
      fieldset: "announcement-text"
    },
    {
      name: "body",
      title: "Body",
      type: "string",
      validation: Rule => Rule.required().max(140),
      fieldset: "announcement-text"
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      validation: Rule => Rule.required().max(20),
      fieldset: "announcement-text"
    },
    {
      name: "announcementImage",
      title: "Image",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: "headline",
      subtitle: "body",
      media: "image"
    }
  }

}