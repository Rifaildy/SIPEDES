"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useAuth } from "../contexts/AuthContext";
import { useNotification } from "../contexts/NotificationContext";
import {
  MessageSquare,
  ImageIcon,
  MapPin,
  Send,
  FileCheck,
  X,
} from "lucide-react";

const LaporPage = () => {
  const { user } = useAuth();
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    kategori: "",
    lokasi: "", // This could be a text input or later integrated with a map API
    berkas: [], // For image uploads
  });

  const kategoriOptions = [
    { value: "", label: "Pilih Kategori Laporan" },
    { value: "infrastruktur", label: "Infrastruktur (Jalan, Drainase, Lampu)" },
    { value: "kebersihan", label: "Kebersihan Lingkungan (Sampah, Selokan)" },
    { value: "keamanan", label: "Keamanan (Pencurian, Gangguan)" },
    { value: "sosial", label: "Sosial (Bantuan, Konflik)" },
    { value: "lain-lain", label: "Lain-lain" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      berkas: [...prev.berkas, ...files],
    }));
  };

  const removeFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      berkas: prev.berkas.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      showError("Silakan login terlebih dahulu untuk membuat laporan.");
      navigate("/login");
      return;
    }

    if (!formData.judul || !formData.deskripsi || !formData.kategori) {
      showError("Judul, deskripsi, dan kategori laporan harus diisi.");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call for submitting report
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Laporan submitted:", formData);
      showSuccess(
        "Laporan Anda berhasil diajukan! Terima kasih atas partisipasi Anda."
      );
      navigate("/dashboard"); // Redirect to dashboard after submission
    } catch (error) {
      showError(
        "Terjadi kesalahan saat mengajukan laporan. Silakan coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Lapor Warga
            </h1>
            <p className="text-green-600">
              Sampaikan laporan, keluhan, atau aspirasi Anda kepada perangkat
              padukuhan
            </p>
          </div>

          <div className="card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Judul Laporan */}
              <div>
                <label
                  htmlFor="judul"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Judul Laporan *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="judul"
                    name="judul"
                    type="text"
                    required
                    value={formData.judul}
                    onChange={handleInputChange}
                    className="form-input pl-10"
                    placeholder="Contoh: Jalan Rusak di RT 001"
                  />
                </div>
              </div>

              {/* Deskripsi Laporan */}
              <div>
                <label
                  htmlFor="deskripsi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Deskripsi Laporan *
                </label>
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  required
                  value={formData.deskripsi}
                  onChange={handleInputChange}
                  className="form-input min-h-[120px] resize-y"
                  placeholder="Jelaskan detail laporan Anda, termasuk lokasi spesifik jika ada..."
                />
              </div>

              {/* Kategori Laporan */}
              <div>
                <label
                  htmlFor="kategori"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Kategori Laporan *
                </label>
                <select
                  id="kategori"
                  name="kategori"
                  required
                  value={formData.kategori}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  {kategoriOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Lokasi (opsional) */}
              <div>
                <label
                  htmlFor="lokasi"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Lokasi (Opsional)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    id="lokasi"
                    name="lokasi"
                    type="text"
                    value={formData.lokasi}
                    onChange={handleInputChange}
                    className="form-input pl-10"
                    placeholder="Contoh: Depan Balai RT 001"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Sertakan lokasi spesifik untuk memudahkan penanganan.
                </p>
              </div>

              {/* Upload Berkas (Foto) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Foto (Opsional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-green-600 hover:text-green-500"
                    >
                      Klik untuk upload
                    </label>
                    <span> atau drag and drop</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    JPG, PNG hingga 5MB per file (maks. 3 file)
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={formData.berkas.length >= 3} // Limit to 3 files
                  />
                </div>

                {/* File List */}
                {formData.berkas.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {formData.berkas.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <FileCheck className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-gray-700">
                            {file.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-600 hover:text-red-800 text-sm"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="spinner mr-2"></div>
                    Mengirim Laporan...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Laporan
                  </>
                )}
              </button>
            </form>

            {/* Info Card */}
            <div className="mt-8 bg-green-100 rounded-lg p-4">
              <h3 className="text-sm font-medium text-green-800 mb-2">
                Informasi Penting:
              </h3>
              <ul className="text-xs text-green-700 space-y-1">
                <li>
                  • Laporan Anda akan diteruskan ke perangkat RT/Dukuh terkait.
                </li>
                <li>
                  • Anda akan menerima notifikasi mengenai status tindak lanjut
                  laporan Anda.
                </li>
                <li>
                  • Pastikan informasi yang Anda berikan akurat dan jelas.
                </li>
                <li>
                  • Untuk laporan darurat, harap hubungi pihak berwenang secara
                  langsung.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LaporPage;
