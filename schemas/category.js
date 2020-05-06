import { FaList } from "react-icons/fa"

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: FaList,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}