'use client';
import { useState, type FormEvent, ChangeEvent } from 'react';
import Swal from 'sweetalert2';

interface ApplicationFormProps {
  jobTitle: string;
}

export function ApplicationForm({ jobTitle }: ApplicationFormProps) {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [telefonoValue, setTelefonoValue] = useState('');
   const [cvError, setCvError] = useState('');

  // 👉 Formatear teléfono en tiempo real (prefijo fijo +503)
  // 👉 Formatear teléfono correctamente sin duplicar +503
const handleTelefonoChange = (e: ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;

  // Remover el prefijo +503 y espacios para quedarnos SOLO con los dígitos del usuario
  value = value.replace('+503', '').trim();

  // Solo dígitos
  let digits = value.replace(/\D/g, '');

  // Limitar a 8 dígitos
  if (digits.length > 8) digits = digits.slice(0, 8);

  // Insertar guion
  let formatted = digits;
  if (digits.length > 4) {
    formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }
  setTelefonoValue(formatted);
}; 
const handleCancel = () => {
  setOpen(false);          // cerrar modal
  setTelefonoValue('');    // limpiar teléfono
  setErrors({});           // limpiar errores
  setCvError('');          // limpiar error de CV

  // limpiar el archivo CV del input real
  const cvInput = document.getElementById('cv') as HTMLInputElement | null;
  if (cvInput) cvInput.value = '';
};
  // 👉 Validar archivo al seleccionarlo
  const handleCvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setCvError('Solo se aceptan documentos PDF.');
        e.target.value = ''; // limpiar input
      } else if (file.size > 5 * 1024 * 1024) {
        setCvError('El archivo no debe superar los 5 MB.');
        e.target.value = '';
      } else {
        setCvError('');
      }
    }
  };


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const nombre = formData.get('nombre')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const telefono = `+503 ${telefonoValue}`.trim();

    const cvFile = formData.get('cv') as File | null;

    const newErrors: { [key: string]: string } = {};

    // 1. Campos obligatorios
    if (!nombre) newErrors['nombre'] = 'El nombre es obligatorio.';
    if (!email) newErrors['email'] = 'El correo es obligatorio.';
    if (!telefono) newErrors['telefono'] = 'El teléfono es obligatorio.';
    if (!cvFile) newErrors['cv'] = 'Debes adjuntar tu CV en PDF.';

    // 2. Validar formato del teléfono (exactamente 8 dígitos después de +503)
    const telefonoRegex = /^\+503\s\d{4}-\d{4}$/;
    if (telefono && !telefonoRegex.test(telefono)) {
      newErrors['telefono'] = 'El teléfono debe estar en el formato +503 0000-0000.';
    } else {
      formData.set('telefono', telefono);
    }

    // 3. Validar tipo de archivo (solo PDF)
    if (cvFile && cvFile.type !== 'application/pdf') {
      newErrors['cv'] = 'El archivo debe ser un PDF.';
    }

    // 4. Validar tamaño del archivo (máx 5 MB)
    const maxSizeMB = 5;
    if (cvFile && cvFile.size > maxSizeMB * 1024 * 1024) {
      newErrors['cv'] = `El archivo no debe superar los ${maxSizeMB} MB.`;
    }

    


    // Mostrar errores inline
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Si pasa todas las validaciones, enviar
    const res = await fetch('/api/send-application', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: '¡Postulación enviada!',
        text: 'Tu postulación fue enviada con éxito ✅',
      });
      setOpen(false);
      setTelefonoValue('');
setErrors({});
setCvError('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al enviar la postulación ❌',
      });
    }
  };


  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        Aplica ya
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl mx-4 rounded-2xl bg-white shadow-2xl overflow-hidden">
            <div className="flex items-start justify-between border-b px-6 py-4 bg-gradient-to-r from-blue-50 to-white">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-blue-600 font-semibold">
                  Aplicación
                </p>
                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  Postular a: <span className="text-blue-700">{jobTitle}</span>
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Completa tus datos y adjunta tu CV en formato PDF.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-5 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <input type="hidden" name="jobTitle" value={jobTitle} />

              {/* Nombre */}
              <div className="space-y-1">
                <label htmlFor="nombre" className="block text-xs font-medium text-gray-700">
                  Nombre completo
                </label>
                <input id="nombre" name="nombre" required className="w-full rounded-md border px-3 py-2 text-sm" />
                {errors['nombre'] && <p className="text-red-500 text-xs">{errors['nombre']}</p>}              
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input id="email" name="email" type="email" required className="w-full rounded-md border px-3 py-2 text-sm" />
                {errors['email'] && <p className="text-red-500 text-xs">{errors['email']}</p>}

              </div>

              {/* Teléfono */}
              <div className="space-y-1">
                <label htmlFor="telefono" className="block text-xs font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  value={`+503 ${telefonoValue}`}
                  onChange={handleTelefonoChange}
                  placeholder="+503 0000-0000"
                  className="w-full border px-3 py-2 rounded-md"
                />
                {errors['telefono'] && <p className="text-red-500 text-xs">{errors['telefono']}</p>}
              </div>

              {/* CV */}
              <div className="space-y-1">
                <label htmlFor="cv" className="block text-xs font-medium text-gray-700">
                  CV en PDF
                </label>
                <input
                  id="cv"
                  name="cv"
                  type="file"
                  accept="application/pdf"
                  required
                  className="block w-full text-xs text-gray-600 file:mr-3 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-blue-700 hover:file:bg-blue-100"
                />
                {errors['cv'] && <p className="text-red-500 text-xs">{errors['cv']}</p>}
                {cvError && <p className="text-red-500 text-xs">{cvError}</p>}
                <p className="mt-1 text-[11px] text-gray-500">Formato permitido: PDF. Máx 5 MB.</p>
              </div>

              {/* Mensaje */}
              <div className="space-y-1 md:col-span-2">
                <label htmlFor="mensaje" className="block text-xs font-medium text-gray-700">
                  Mensaje / Presentación
                </label>
                <textarea id="mensaje" name="mensaje" rows={3} className="w-full rounded-md border px-3 py-2 text-sm" />
              </div>

              <div className="md:col-span-2 flex justify-end gap-2 border-t pt-4">
                <button
  type="button"
  onClick={handleCancel}
  className="border px-4 py-2 text-xs rounded-md"
>
  Cancelar
</button>
                <button type="submit" className="bg-blue-600 px-5 py-2 text-xs font-semibold text-white rounded-md">
                  Enviar postulación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
