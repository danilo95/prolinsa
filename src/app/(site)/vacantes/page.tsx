'use client';

import { useState } from 'react';
import { ApplicationForm } from '../../componets/ApplicationForm';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';

const jobListings = [
  {
    title: "Vendedor de Campo",
    description: "Responsable de visitar clientes minoristas y mayoristas para ofrecer nuestros productos de cereales. Debe cumplir metas de ventas y mantener relaciones comerciales sólidas.",
    requirements: [
      "Experiencia en ventas presenciales",
      "Habilidad para negociar y cerrar acuerdos",
      "Disponibilidad para viajar localmente"
    ]
  },
  {
    title: "Promotor de Ventas",
    description: "Encargado de impulsar la venta en puntos de distribución y supermercados. Realiza degustaciones, entrega material promocional y reporta resultados de campañas.",
    requirements: [
      "Buena comunicación y presencia",
      "Experiencia en promoción de productos",
      "Disponibilidad para trabajar fines de semana"
    ]
  },
  {
    title: "Supervisor de Ventas Regional",
    description: "Coordina al equipo de vendedores en una zona específica, asegura el cumplimiento de objetivos y apoya en la capacitación de nuevos integrantes.",
    requirements: [
      "Experiencia liderando equipos de ventas",
      "Conocimiento de estrategias comerciales",
      "Capacidad de análisis y reporte de resultados"
    ]
  },
  {
    title: "Asistente de Recursos Humanos",
    description: "Apoya en procesos de reclutamiento, selección y capacitación de personal. Gestiona documentación laboral y colabora en actividades de clima organizacional.",
    requirements: [
      "Estudios en Psicología o Administración",
      "Manejo de herramientas de selección",
      "Organización y confidencialidad"
    ]
  },
  {
    title: "Auxiliar Administrativo",
    description: "Realiza tareas de archivo, control de facturas, manejo de correspondencia y apoyo en la gestión de inventarios. Requiere organización y atención al detalle.",
    requirements: [
      "Conocimiento básico de contabilidad",
      "Dominio de herramientas ofimáticas",
      "Capacidad para trabajar bajo presión"
    ]
  },
  {
    title: "Analista de Nómina",
    description: "Procesa pagos de salarios, controla incidencias de asistencia y asegura el cumplimiento de obligaciones legales relacionadas con el personal.",
    requirements: [
      "Experiencia en cálculo de nómina",
      "Conocimiento de leyes laborales",
      "Precisión y manejo de datos confidenciales"
    ]
  },
  {
    title: "Operador de Logística",
    description: "Encargado de coordinar la recepción, almacenamiento y despacho de productos de cereales. Mantiene registros actualizados y apoya en el control de inventarios.",
    requirements: [
      "Experiencia en logística o almacén",
      "Capacidad para operar sistemas de inventario",
      "Orden y puntualidad"
    ]
  }
];

export default function VacantesPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-blue-600 mb-4 text-4xl font-bold">Trabaja con nosotros</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Únete a nuestro equipo y sé parte de algo increíble. Siempre estamos buscando personas talentosas y apasionadas por hacer la diferencia.
          </p>
        </div>

        {/* Job Cards */}
        <div className="space-y-6 flex flex-col items-center">
          {jobListings.map((job, index) => (
            <Card
              key={index}
              className="w-full lg:w-[80%] p-8 bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
            >
              <div className="space-y-4">
                <h2 className="text-blue-600 text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600 leading-relaxed">{job.description}</p>

                <div className="pt-4">
                  <h3 className="text-gray-700 font-semibold mb-2">Requisitos:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button 
                    onClick={() => handleApplyClick(job.title)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    Aplica ahora
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            ¿No ves una vacante que se ajuste a ti? ¡Envíanos tu CV de todas formas! Siempre queremos conocer gente talentosa.
          </p>
        </div>
      </div>

      {/* Application Form Dialog */}
      <ApplicationForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        jobTitle={selectedJob || ''}
      />
    </div>
  );
}
