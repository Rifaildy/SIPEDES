"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useAuth } from "../../contexts/AuthContext";
import { useNotification } from "../../contexts/NotificationContext";
import { FileText, Upload, User, Phone, MapPin, FileCheck } from "lucide-react";

const SuratPage = () => {
  const { user } = useAuth();
  const { showSuccess, showError } = useNotification();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedSurat, setSelectedSurat] = useState("");
  const [formData, setFormData] = useState({
    jenis_surat: "",
    keperluan: "",
    data_tambahan: {},
    berkas: [],
  });

  const jenisSurat = [
    {
      id: "domisili",
      nama: "Surat Keterangan Domisili",
      deskripsi: "Surat keterangan tempat tinggal untuk keperluan administrasi",
      persyaratan: ["KTP", "KK", "Surat Pengantar RT"],
      estimasi: "2-3 hari kerja",
    },
    {
      id: "nikah",
      nama: "Surat Pengantar Nikah",
      deskripsi: "Surat pengantar untuk keperluan pernikahan",
      persyaratan: [
        "KTP",
        "KK",
        "Surat Keterangan Belum Menikah",
        "Pas Foto 4x6",
      ],
      estimasi: "1-2 hari kerja",
    },
    {
      id: "usaha",
      nama: "Surat Keterangan Usaha",
      deskripsi: "Surat keterangan untuk keperluan usaha/SIUP",
      persyaratan: ["KTP", "KK", "Foto Tempat Usaha", "Surat Pengantar RT"],
      estimasi: "3-5 hari kerja",
    },
    {
      id: "sktm",
      nama: "Surat Keterangan Tidak Mampu",
      deskripsi: "Surat keterangan untuk keperluan bantuan sosial",
      persyaratan: [
        "KTP",
        "KK",
        "Surat Keterangan Penghasilan",
        "Surat Pengantar RT",
      ],
      estimasi: "2-4 hari kerja",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSuratSelect = (suratId) => {
    setSelectedSurat(suratId);
    setFormData((prev) => ({
      ...prev,
      jenis_surat: suratId,
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
      showError("Silakan login terlebih dahulu");
      navigate("/login");
      return;
    }

    if (!selectedSurat) {
      showError("Pilih jenis surat terlebih dahulu");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      showSuccess(
        "Permohonan surat berhasil diajukan! Anda akan mendapat notifikasi untuk update status."
      );
      navigate("/dashboard");
    } catch (error) {
      showError("Terjadi kesalahan saat mengajukan surat");
    } finally {
      setLoading(false);
    }
  };

  const selectedSuratData = jenisSurat.find((s) => s.id === selectedSurat);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Pengajuan Surat Keterangan
            </h1>
            <p className="text-green-600">
              Ajukan berbagai surat keterangan secara online dengan mudah
            </p>
          </div>

          {!selectedSurat ? (
            /* Pilih Jenis Surat */
            <div className="grid md:grid-cols-2 gap-6">
              {jenisSurat.map((surat) => (
                <div
                  key={surat.id}
                  onClick={() => handleSuratSelect(surat.id)}
                  className="card p-6 cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-green-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-green-800 mb-2">
                        {surat.nama}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {surat.deskripsi}
                      </p>

                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Persyaratan:
                        </p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {surat.persyaratan.map((syarat, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                              {syarat}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                          Estimasi: {surat.estimasi}
                        </span>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Pilih →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Form Pengajuan */
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-green-800">
                      Form Pengajuan
                    </h2>
                    <button
                      onClick={() => setSelectedSurat("")}
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      ← Ganti Jenis Surat
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Data Pemohon */}
                    <div>
                      <h3 className="font-semibold text-green-800 mb-4">
                        Data Pemohon
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              value={user?.name || ""}
                              disabled
                              className="form-input pl-10 bg-gray-50"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nomor Telepon
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              value={user?.phone || ""}
                              disabled
                              className="form-input pl-10 bg-gray-50"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Alamat
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <textarea
                            value={user?.alamat || ""}
                            disabled
                            className="form-input pl-10 bg-gray-50 min-h-[80px] resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Keperluan */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Keperluan Surat *
                      </label>
                      <textarea
                        name="keperluan"
                        required
                        value={formData.keperluan}
                        onChange={handleInputChange}
                        className="form-input min-h-[100px] resize-none"
                        placeholder="Jelaskan keperluan surat ini..."
                      />
                    </div>

                    {/* Upload Berkas */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Berkas Persyaratan
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
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
                          PNG, JPG, PDF hingga 10MB
                        </p>
                        <input
                          id="file-upload"
                          type="file"
                          multiple
                          accept=".png,.jpg,.jpeg,.pdf"
                          onChange={handleFileUpload}
                          className="hidden"
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
                                Hapus
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setSelectedSurat("")}
                        className="btn-secondary flex-1"
                      >
                        Kembali
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary flex-1 flex items-center justify-center"
                      >
                        {loading ? (
                          <>
                            <div className="spinner mr-2"></div>
                            Mengajukan...
                          </>
                        ) : (
                          "Ajukan Surat"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Info Surat */}
                <div className="card p-6">
                  <h3 className="font-semibold text-green-800 mb-4">
                    Informasi Surat
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Jenis Surat
                      </p>
                      <p className="text-green-800">
                        {selectedSuratData?.nama}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Estimasi Proses
                      </p>
                      <p className="text-green-800">
                        {selectedSuratData?.estimasi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Persyaratan */}
                <div className="card p-6">
                  <h3 className="font-semibold text-green-800 mb-4">
                    Persyaratan
                  </h3>
                  <ul className="space-y-2">
                    {selectedSuratData?.persyaratan.map((syarat, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {syarat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Alur Proses */}
                <div className="card p-6">
                  <h3 className="font-semibold text-green-800 mb-4">
                    Alur Proses
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">
                        1
                      </div>
                      <span className="text-sm text-gray-700">
                        Pengajuan oleh warga
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs">
                        2
                      </div>
                      <span className="text-sm text-gray-700">
                        Verifikasi oleh RT
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs">
                        3
                      </div>
                      <span className="text-sm text-gray-700">
                        Persetujuan Dukuh
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-xs">
                        4
                      </div>
                      <span className="text-sm text-gray-700">
                        Surat selesai
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SuratPage;
