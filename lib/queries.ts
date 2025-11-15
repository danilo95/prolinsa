import type { QueryParams } from '@sanity/client';

export const LIST_APLICACIONES = /* groq */ `
*[_type == "aplicacion"] | order(_createdAt desc){
  "id": _id,
  titulo,
  descripcion,
  "slug": slug.current
}
`;

export const GET_APLICACION_BY_SLUG_OR_ID = /* groq */ `
*[
  _type == "aplicacion" &&
  (slug.current == $slugOrId || _id == $slugOrId)
][0]{
  "id": _id,
  titulo,
  descripcion,
  requisitos,
  sexo,
  edad,
  notas,
  "pdfUrl": pdf.asset->url,
  "slug": slug.current
}
`;

export const LIST_SLUGS_AND_IDS = /* groq */ `
*[_type == "aplicacion"]{
  "slug": slug.current,
  "_id": _id
}
`;

export type Params = QueryParams;
