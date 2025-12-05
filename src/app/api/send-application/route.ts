// app/api/send-application/route.ts

// app/api/send-application/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();

  const jobTitle = formData.get('jobTitle') as string | null;
  const nombre = formData.get('nombre') as string | null;
  const email = formData.get('email') as string | null;
  const telefono = formData.get('telefono') as string | null;
  const mensaje = formData.get('mensaje') as string | null;
  const cvFile = formData.get('cv') as File | null;

  // 🔎 Validaciones
  if (!jobTitle || !nombre || !email || !telefono || !cvFile) {
    return NextResponse.json(
      { error: 'Todos los campos son obligatorios y debes adjuntar tu CV en PDF.' },
      { status: 400 }
    );
  }

  // Validar formato de teléfono
  const telefonoRegex = /^\+503\s\d{4}-\d{4}$/;
  if (!telefonoRegex.test(telefono)) {
    return NextResponse.json(
      { error: 'El teléfono debe estar en el formato +503 0000-0000.' },
      { status: 400 }
    );
  }

  // Validar tipo de archivo
  if (cvFile.type !== 'application/pdf') {
    return NextResponse.json(
      { error: 'El archivo debe ser un PDF.' },
      { status: 400 }
    );
  }

  // Validar tamaño del archivo (máx 5 MB)
  const maxSizeMB = 5;
  if (cvFile.size > maxSizeMB * 1024 * 1024) {
    return NextResponse.json(
      { error: `El archivo no debe superar los ${maxSizeMB} MB.` },
      { status: 400 }
    );
  }

  // Preparar adjunto
  const arrayBuffer = await cvFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const attachments = [
    {
      filename: cvFile.name,
      content: buffer,
    },
  ];

  try {
    await resend.emails.send({
      from: 'pruebas@notifications.prodelinsa.com', // o tu dominio verificado
      to: ['pruebas@prodelinsa.com'],
      subject: `Nueva postulación: ${jobTitle}`,
      html: `
        <h2>Postulación a ${jobTitle}</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 });
  }
}




// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// export async function POST(req: Request) {
//   const formData = await req.formData();

//   const jobTitle = formData.get('jobTitle') as string;
//   const nombre = formData.get('nombre') as string;
//   const email = formData.get('email') as string;
//   const telefono = formData.get('telefono') as string;
//   const mensaje = formData.get('mensaje') as string;
//   const cvFile = formData.get('cv') as File | null;

//   let attachments = [];

//   if (cvFile) {
//     const arrayBuffer = await cvFile.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     attachments.push({
//       filename: cvFile.name,
//       content: buffer,
//     });
//   }

//   try {
//     await resend.emails.send({
//       from: 'pruebas@notifications.prodelinsa.com', // o tu dominio verificado
//       to: ['pruebas@prodelinsa.com'],
//       subject: `Nueva postulación: ${jobTitle}`,
//       html: `
//         <h2>Postulación a ${jobTitle}</h2>
//         <p><strong>Nombre:</strong> ${nombre}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Teléfono:</strong> ${telefono}</p>
//         <p><strong>Mensaje:</strong> ${mensaje}</p>
//       `,
//       attachments, // 👈 aquí van los PDFs
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error }, { status: 500 });
//   }

// }


// export async function POST(req: Request) {
//   const data = await req.json();

//   try {
//     await resend.emails.send({
//       from: 'onboarding@resend.dev',
//       to: 
//     'pruebas@prodelinsa.com',
//       subject: `Nueva postulación: ${data.jobTitle}`,
//       html: `
//         <h2>Postulación a ${data.jobTitle}</h2>
//         <p><strong>Nombre:</strong> ${data.nombre}</p>
//         <p><strong>Email:</strong> ${data.email}</p>
//         <p><strong>Teléfono:</strong> ${data.telefono}</p>
//         <p><strong>Mensaje:</strong> ${data.mensaje}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }