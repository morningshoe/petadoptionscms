// import moment from "moment"
import { FaDog } from "react-icons/fa"


export default {
  name: "dog",
  title: "Dog",
  type: "document",
  icon: FaDog,
  fieldsets: [
    {
      name: "information",
      title: "General Information",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: "stats",
      title: "Stats",
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: "images",
      title: "Images",
      options: {
        collapsible: true,
        collapsed: false
      }
    }
  ],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "serialNumber",
      title: "Serial Number",
      type: "string",
      validation: Rule => Rule.required().max(50)
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: Rule => Rule.required(),
      options: {
        source: doc => `${doc.name}-${doc.serialNumber}`,
        maxLength: 96,
      },
    },

    // -- General Information --
    {
      name: "breed",
      title: "Looks Like",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information"
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information"
    },
    {
      name: "age",
      title: "Estimated Age",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information"
    },
    {
      name: "weight",
      title: "Current Weight",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information"
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information"
    },
    {
      name: "adoptionFee",
      title: "Adoption Fee",
      type: "string",
      validation: Rule => Rule.required(),
      fieldset: "information"
    },

    // -- Housebroken Stats -- 
    {
      name: "dogFriendly",
      title: "Dog Friendly?",
      type: "boolean",
      fieldset: "stats"
    },
    {
      name: "catFriendly",
      title: "Cat Friendly?",
      type: "boolean",
      fieldset: "stats"
    },
    {
      name: "childFriendly",
      title: "Child Friendly?",
      type: "boolean",
      fieldset: "stats"
    },
    {
      name: "homeAlone",
      title: "Can Be Left Alone?",
      type: "boolean",
      fieldset: "stats"
    },

    // -- Main Post --
    {
      name: "mainImage",
      title: "Image",
      type: "image",
      validation: Rule => Rule.required(),
      options: {
        hotspot: true,
      },
      fieldset: "images"
    },
    {
      title: 'Image Alternate Text',
      name: 'alt',
      type: 'string',
      validation: Rule => Rule.required(),
      fieldset: "images"
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: Rule => Rule.required()
    },
    {
      name: "body",
      title: "Description",
      type: "blockContent",
      validation: Rule => Rule.required()
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "breed",
      media: "mainImage",
      // TO DO - is there a way to prepare publishedAt date format with moment in the preview?
    }
  }
};
