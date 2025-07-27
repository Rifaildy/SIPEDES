"use client";

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { showToast } from "../../utils";
import { FileText, Upload, XCircle, Info, Clock } from "lucide-react";
import { ThreeDots } from "react-loader-spinner";

const SuratPage = () => {
  const [formData, setFormData] = useState({
    jenisSurat: "",
    namaLengkap: "",
    nik: "",
    keperluan: "",
    alamat: "",
    nomorTelepon: "",
    files: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);

  const suratOptions = [
    { value: "", label: "Pilih Jenis Surat" },
    { value: "keterangan-usaha", label: "Surat Keterangan Usaha" },
    { value: "domisili", label: "Surat Keterangan Domisili" },
    { value: "tidak-mampu", label: "Surat Keterangan Tidak Mampu" },
    { value: "kematian", label: "Surat Keterangan Kematian" },
  ];

  const suratRequirements = {
    "keterangan-usaha": [
      "Fotokopi KTP Pemohon",
      "Fotokopi Kartu Keluarga",
      "Surat Pengantar RT/RW",
      "Foto Usaha (jika ada)",
    ],
    domisili: [
      "Fotokopi KTP Pemohon",
      "Fotokopi Kartu Keluarga",
      "Surat Pengantar RT/RW",
    ],
    "tidak-mampu": [
      "Fotokopi KTP Pemohon",
      "Fotokopi Kartu Keluarga",
      "Surat Pengantar RT/RW",
      "Surat Keterangan dari Dinas Sosial (jika ada)",
    ],
    kematian: [
      "Fotokopi KTP Pelapor",
      "Fotokopi KTP Almarhum/Almarhumah",
      "Fotokopi Kartu Keluarga Almarhum/Almarhumah",
      "Surat Keterangan Kematian dari Dokter/Puskesmas",
      "Surat Pengantar RT/RW",
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (formData.files.length + selectedFiles.length > 5) {
      showToast("Maksimal 5 file yang dapat diunggah.", "warn");
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

    const {
      jenisSurat,
      namaLengkap,
      nik,
      keperluan,
      alamat,
      nomorTelepon,
      files,
    } = formData;

    if (
      !jenisSurat ||
      !namaLengkap ||
      !nik ||
      !keperluan ||
      !alamat ||
      !nomorTelepon
    ) {
      showToast("Semua field wajib diisi.", "error");
      return;
    }

    if (files.length === 0 && suratRequirements[jenisSurat]?.length > 0) {
      showToast("Harap unggah dokumen persyaratan.", "error");
      return;
    }

    setIsSubmitting(true);
    showToast("Mengirim permohonan surat...", "info");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    showToast("Permohonan surat Anda berhasil dikirim!", "success");
    setFormData({
      jenisSurat: "",
      namaLengkap: "",
      nik: "",
      keperluan: "",
      alamat: "",
      nomorTelepon: "",
      files: [],
    });
    setFilePreviews([]);
  };

  const currentRequirements = suratRequirements[formData.jenisSurat] || [];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Form Pengajuan Surat
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Isi formulir di bawah ini untuk mengajukan surat keterangan yang
              Anda butuhkan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="jenisSurat"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Jenis Surat <span className="text-red-500">*</span>
                </label>
                <select
                  id="jenisSurat"
                  name="jenisSurat"
                  value={formData.jenisSurat}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  {suratOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="namaLengkap"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="namaLengkap"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nama sesuai KTP"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="nik"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nomor Induk Kependudukan (NIK){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nik"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="16 digit NIK"
                  maxLength="16"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="keperluan"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Keperluan <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="keperluan"
                  name="keperluan"
                  value={formData.keperluan}
                  onChange={handleChange}
                  rows="3"
                  className="form-input"
                  placeholder="Jelaskan keperluan Anda mengajukan surat ini"
                  required
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="alamat"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Alamat Lengkap <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="alamat"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  rows="3"
                  className="form-input"
                  placeholder="Alamat lengkap sesuai domisili"
                  required
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="nomorTelepon"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nomor Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="nomorTelepon"
                  name="nomorTelepon"
                  value={formData.nomorTelepon}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: 081234567890"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="files"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Unggah Dokumen Persyaratan (Maks. 5 file)
                </label>
                <div
                  className="flex items-center justify-center w-full h-32 border-2 border-dashed border-green-300 rounded-lg cursor-pointer bg-green-50 hover:bg-green-100 transition-colors duration-200"
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-green-600 mb-2" />
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">
                        Klik untuk mengunggah
                      </span>{" "}
                      atau seret & lepas
                    </p>
                    <p className="text-xs text-gray-500">
                      Gambar atau PDF hingga 5MB per file
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
                  "Kirim Permohonan"
                )}
              </button>
            </form>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-green-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText size={24} /> Alur Pengajuan Surat
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Isi formulir dengan lengkap dan benar.</li>
                <li>Unggah dokumen persyaratan yang diperlukan.</li>
                <li>Kirim permohonan.</li>
                <li>Perangkat desa akan memverifikasi data Anda.</li>
                <li>
                  Anda akan menerima notifikasi jika surat sudah siap diambil
                  atau ada revisi.
                </li>
                <li>Ambil surat di kantor desa pada jam kerja.</li>
              </ol>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md text-blue-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info size={24} /> Persyaratan Dokumen
              </h2>
              {formData.jenisSurat ? (
                currentRequirements.length > 0 ? (
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {currentRequirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm">
                    Tidak ada persyaratan khusus untuk jenis surat ini.
                  </p>
                )
              ) : (
                <p className="text-sm">
                  Pilih jenis surat untuk melihat persyaratannya.
                </p>
              )}
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg shadow-md text-yellow-800">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Clock size={24} /> Estimasi Waktu
              </h2>
              <p className="text-sm">
                Proses verifikasi dan penerbitan surat biasanya memakan waktu{" "}
                <span className="font-semibold">1-3 hari kerja</span> setelah
                semua dokumen lengkap.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuratPage;
