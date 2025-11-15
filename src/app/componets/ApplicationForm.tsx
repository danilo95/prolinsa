'use client';

import { useState } from 'react';
import { Upload, X, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { toast } from 'sonner';

interface ApplicationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
}

export function ApplicationForm({ open, onOpenChange, jobTitle }: ApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    phone: '',
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (
        file.type === 'application/pdf' ||
        file.name.endsWith('.doc') ||
        file.name.endsWith('.docx')
      ) {
        setCvFile(file);
        toast.success('CV uploaded successfully');
      } else {
        toast.error('Please upload a PDF or Word document');
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (
        file.type === 'application/pdf' ||
        file.name.endsWith('.doc') ||
        file.name.endsWith('.docx')
      ) {
        setCvFile(file);
        toast.success('CV uploaded successfully');
      } else {
        toast.error('Please upload a PDF or Word document');
      }
    }
  };

  const handleRemoveFile = () => {
    setCvFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.idNumber ||
      !formData.email ||
      !formData.phone
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!cvFile) {
      toast.error('Please upload your CV');
      return;
    }

    // Aquí enviarías los datos a tu backend
    console.log('Form submitted:', { ...formData, cvFile, jobTitle });
    toast.success('Application submitted successfully!');

    // Reset form y cerrar modal
    setFormData({
      firstName: '',
      lastName: '',
      idNumber: '',
      email: '',
      phone: '',
    });
    setCvFile(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-blue-600">Aplica para {jobTitle}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-gray-700">
                Nombre
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Ingresa tu nombre"
                className="border-gray-300 focus:border-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700">
                Apellidos
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Ingresa tus apellidos"
                className="border-gray-300 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* ID Number */}
          <div className="space-y-2">
            <Label htmlFor="idNumber" className="text-gray-700">
              DUI
            </Label>
            <Input
              id="idNumber"
              name="idNumber"
              type="text"
              value={formData.idNumber}
              onChange={handleInputChange}
              placeholder="Ingresa tu DUI"
              className="border-gray-300 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">
              Correo
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Ingresa tu email"
              className="border-gray-300 focus:border-blue-500"
              required
            />
          </div>

          {/* Telephone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-700">
              Numero de telefono
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Ingresa tu numero de telefono"
              className="border-gray-300 focus:border-blue-500"
              required
            />
          </div>

          {/* CV Upload Section */}
          <div className="space-y-2">
            <Label className="text-gray-700">Sube tu CV</Label>

            {!cvFile ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragging
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-2">
                  Arrastra y suelta tu CV, O dale click en el botón para seleccionar un archivo.
                </p>
                <p className="text-gray-400 mb-4">
                  Formatos deseados: PDF, DOC
                </p>
                <input
                  type="file"
                  id="cv-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Button
                  type="button"
                  onClick={() => document.getElementById('cv-upload')?.click()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sube tu CV
                </Button>
              </div>
            ) : (
              <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-between bg-blue-50">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-gray-700">{cvFile.name}</p>
                    <p className="text-gray-500">
                      {(cvFile.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleRemoveFile}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    );

}