"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { showToast } from "../utils";
import { Upload, XCircle, MapPin } from "lucide-react";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

const LaporPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    files: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);

  const categories = [
    "Infrastruktur",
    "Keamanan",
    "Kebersihan",
    "Administrasi",
    "Lain-lain",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (formData.files.length + selectedFiles.length > 3) {
      showToast("Maksimal 3 file yang dapat diunggah.", "warn");
      return;
    }

    const newFiles = [...formData.files, ...selectedFiles];
    setFormData((prev) => ({ ...prev, files: newFiles }));

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setFilePreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = formData.files.filter((_, i) => i !== index);
    const updatedPreviews = filePreviews.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, files: updatedFiles }));
    setFilePreviews(updatedPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      showToast("Anda harus login untuk membuat laporan.", "error");
      return;
    }

    if (!formData.title || !formData.description || !formData.category) {
      showToast("Judul, deskripsi, dan kategori harus diisi.", "error");
      return;
    }

    setIsSubmitting(true);
    showToast("Mengirim laporan...", "info");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    showToast("Laporan Anda berhasil dikirim!", "success");
    setFormData({
      title: "",
      description: "",
      category: "",
      location: "",
      files: [],
    });
    setFilePreviews([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Laporkan Masalah Warga
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Sampaikan laporan Anda mengenai masalah atau kejadian di lingkungan
            desa. Laporan Anda akan ditindaklanjuti oleh pihak terkait.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Judul Laporan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                placeholder="Contoh: Jalan Rusak di RT 03"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Deskripsi Lengkap <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="5"
                className="form-input"
                placeholder="Jelaskan detail masalahnya, kapan terjadi, dan dampaknya."
                required
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Kategori Laporan <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Pilih Kategori</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Lokasi Spesifik (Opsional)
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input pl-10"
                  placeholder="Contoh: Depan Balai Desa"
                />
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div>
              <label
                htmlFor="files"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Unggah Foto (Maks. 3 file)
              </label>
              <div
                className="flex items-center justify-center w-full h-32 border-2 border-dashed border-green-300 rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 transition-colors duration-200"
                onClick={() => document.getElementById("file-upload").click()}
              >
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-green-600 mb-2" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Klik untuk mengunggah</span>{" "}
                    atau seret & lepas
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF hingga 5MB per file
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {filePreviews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview || "/placeholder.svg"}
                      alt={`Preview ${index}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-label="Remove file"
                    >
                      <XCircle size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <ThreeDots
                  visible={true}
                  height="20"
                  width="40"
                  color="#ffffff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Kirim Laporan"
              )}
            </button>
          </form>

          <div className="mt-8 p-6 bg-green-50 rounded-lg text-green-800">
            <h3 className="font-semibold text-lg mb-2">Informasi Penting:</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Pastikan informasi yang Anda berikan akurat dan jelas.</li>
              <li>Laporan akan diverifikasi oleh perangkat desa.</li>
              <li>
                Anda akan menerima notifikasi mengenai status laporan Anda.
              </li>
              <li>
                Untuk laporan darurat, harap hubungi pihak berwenang setempat
                secara langsung.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LaporPage;
