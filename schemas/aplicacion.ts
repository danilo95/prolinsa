import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aplicacion',
  title: 'Aplicaciones',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'requisitos',
      title: 'Requisitos',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'sexo',
      title: 'Sexo',
      type: 'string',
      options: {
        list: [
          { title: 'Indiferente', value: 'indiferente' },
          { title: 'Masculino', value: 'masculino' },
          { title: 'Femenino', value: 'femenino' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'indiferente',
    }),
    defineField({
      name: 'edad',
      title: 'Edad',
      type: 'string',
      description: 'Ej.: "18-25", "25-35", o deja "indiferente".',
      initialValue: 'indiferente',
    }),
    defineField({
      name: 'notas',
      title: 'Notas',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',
      options: { accept: 'application/pdf' },
      validation: (Rule) =>
        Rule.custom((file) => {
          if (!file) return true;

          return true;
        }),
    }),
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'sexo' },
  },
});
