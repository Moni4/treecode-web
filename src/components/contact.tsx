"use client";

import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Clock, Loader2, Mail, Send } from "lucide-react";

export const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    bussinessmail: "",
    bussiness: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    return formData.name && formData.bussinessmail && formData.message;
  };
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateForm()) {
      toast.warning("Campos invalidos!", {
        duration: 5000,
        closeButton: true,
        description:
          "Porfavor llena los campos (Nombre, Correo electrónico, Detalles del proyecto).",
      });
      return;
    }

    setLoading(true);

    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId!,
        templateId!,
        {
          name: formData.name,
          bussinessmail: formData.bussinessmail,
          bussiness: formData.bussiness,
          message: formData.message,
        },
        publicKey
      );
      toast.success("Mensaje enviado!", {
        duration: 5000,
        closeButton: true,
      });
      setFormData({ name: "", bussinessmail: "", bussiness: "", message: "" });
    } catch (error) {
      toast.error("Mensaje no puedo ser enviado.", {
        duration: 5000,
        closeButton: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div id="contact" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="backdrop-blur-sm rounded-lg p-8 shadow-sm pt-0">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="bussinessmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="bussinessmail"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  placeholder="tu@email.com"
                  value={formData.bussinessmail}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="bussiness"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="bussiness"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  placeholder="Nombre de tu empresa"
                  value={formData.bussiness}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Detalles del Proyecto
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`treecode-button font-medium flex items-center justify-center space-x-2 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-emerald-700"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Enviar Mensaje</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Ponte en contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Escríbenos</h4>
                  <p className="text-gray-600">negocios@treecode.com.co</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Horario comercial
                  </h4>
                  <p className="text-gray-600">
                    Lunes - Viernes: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
