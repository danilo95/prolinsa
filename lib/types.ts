export type Product = {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  slug?: string;
};

export type Aplicacion = {
  id: string;
  titulo: string;
  descripcion?: string;
  requisitos?: string;
  sexo?: 'indiferente' | 'masculino' | 'femenino';
  edad?: 'indiferente' | string;
  notas?: string;
  pdfUrl?: string;
};
