import { FaPenFancy } from "react-icons/fa"


export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: FaPenFancy,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
      //TO DO - is there another way to generate a slug besides auto feature?
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: Rule => Rule.required(),
      to: {type: 'author'}
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: Rule => Rule.required(),
      options: {
        hotspot: true
      }
      //TO DO - is this the best image type for the job?
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{type: 'reference', 
      to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required()
      //block content allows for rich text
    }
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
