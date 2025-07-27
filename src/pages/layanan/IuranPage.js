"use client";

import { useState, useEffect } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { useAuth } from "../../contexts/AuthContext";
import { useNotification } from "../../contexts/NotificationContext";
import {
  CreditCard,
  CheckCircle,
  AlertCircle,
  Clock,
  QrCode,
  Smartphone,
  Building,
  Receipt,
} from "lucide-react";

const IuranPage = () => {
  const { user } = useAuth();
  const { showSuccess, showError } = useNotification();
  const [loading, setLoading] = useState(false);
  const [tagihan, setTagihan] = useState([]);
  const [riwayat, setRiwayat] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setTagihan([
        {
          id: 1,
          jenis: "Iuran Ronda",
          periode: "Februari 2024",
          nominal: 10000,
          jatuhTempo: "2024-02-28",
          status: "belum_bayar",
          tipe: "rt",
        },
        {
          id: 2,
          jenis: "Iuran Sampah",
          periode: "Februari 2024",
          nominal: 15000,
          jatuhTempo: "2024-02-25",
          status: "terlambat",
          tipe: "padukuhan",
        },
        {
          id: 3,
          jenis: "Iuran 17-an",
          periode: "2024",
          nominal: 25000,
          jatuhTempo: "2024-08-01",
          status: "belum_bayar",
          tipe: "rt",
        },
      ]);

      setRiwayat([
        {
          id: 1,
          jenis: "Iuran Ronda",
          periode: "Januari 2024",
          nominal: 10000,
          tanggalBayar: "2024-01-15",
          metode: "QRIS",
          status: "lunas",
        },
        {
          id: 2,
          jenis: "Iuran Sampah",
          periode: "Januari 2024",
          nominal: 15000,
          tanggalBayar: "2024-01-10",
          metode: "Transfer Bank",
          status: "lunas",
        },
      ]);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "belum_bayar":
        return "text-yellow-600 bg-yellow-100";
      case "terlambat":
        return "text-red-600 bg-red-100";
      case "lunas":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "belum_bayar":
        return <Clock className="w-4 h-4" />;
      case "terlambat":
        return <AlertCircle className="w-4 h-4" />;
      case "lunas":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      showError("Pilih metode pembayaran terlebih dahulu");
      return;
    }

    setLoading(true);
    try {
      // Simulate payment process
      await new Promise((resolve) => setTimeout(resolve, 2000));

      showSuccess("Pembayaran berhasil! Terima kasih atas partisipasi Anda.");
      setSelectedPayment(null);
      setPaymentMethod("");

      // Update tagihan status
      setTagihan((prev) =>
        prev.map((item) =>
          item.id === selectedPayment.id ? { ...item, status: "lunas" } : item
        )
      );
    } catch (error) {
      showError("Terjadi kesalahan saat memproses pembayaran");
    } finally {
      setLoading(false);
    }
  };

  const totalTagihan = tagihan
    .filter((item) => item.status !== "lunas")
    .reduce((sum, item) => sum + item.nominal, 0);

  const paymentMethods = [
    {
      id: "qris",
      name: "QRIS",
      icon: QrCode,
      description: "Scan QR Code dengan aplikasi mobile banking",
    },
    {
      id: "transfer",
      name: "Transfer Bank",
      icon: Building,
      description: "Transfer ke rekening RT/Padukuhan",
    },
    {
      id: "ewallet",
      name: "E-Wallet",
      icon: Smartphone,
      description: "Bayar dengan GoPay, OVO, DANA",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              Pembayaran Iuran
            </h1>
            <p className="text-green-600">
              Kelola pembayaran iuran RT dan padukuhan dengan mudah
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Tagihan</p>
                  <p className="text-2xl font-bold text-red-600">
                    Rp {totalTagihan.toLocaleString()}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {tagihan.filter((item) => item.status !== "lunas").length}{" "}
                tagihan belum dibayar
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Dibayar Bulan Ini</p>
                  <p className="text-2xl font-bold text-green-600">
                    Rp{" "}
                    {riwayat
                      .reduce((sum, item) => sum + item.nominal, 0)
                      .toLocaleString()}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {riwayat.length} pembayaran berhasil
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Status Pembayaran</p>
                  <p className="text-lg font-bold text-green-800">
                    {totalTagihan === 0 ? "Lunas" : "Ada Tunggakan"}
                  </p>
                </div>
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Update terakhir: Hari ini
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Tagihan Aktif */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-green-800">
                    Tagihan Aktif
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {tagihan.map((item) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                item.tipe === "rt"
                                  ? "bg-blue-100"
                                  : "bg-purple-100"
                              }`}
                            >
                              <CreditCard
                                className={`w-6 h-6 ${
                                  item.tipe === "rt"
                                    ? "text-blue-600"
                                    : "text-purple-600"
                                }`}
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-green-800">
                                {item.jenis}
                              </h3>
                              <p className="text-sm text-gray-600">
                                Periode: {item.periode}
                              </p>
                              <p className="text-sm text-gray-500">
                                Jatuh tempo: {item.jatuhTempo}
                              </p>
                              <p className="text-lg font-bold text-green-800 mt-1">
                                Rp {item.nominal.toLocaleString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <span
                              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                item.status
                              )}`}
                            >
                              {getStatusIcon(item.status)}
                              <span>
                                {item.status === "belum_bayar"
                                  ? "Belum Bayar"
                                  : item.status === "terlambat"
                                  ? "Terlambat"
                                  : "Lunas"}
                              </span>
                            </span>
                            {item.status !== "lunas" && (
                              <button
                                onClick={() => setSelectedPayment(item)}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                              >
                                Bayar Sekarang
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Riwayat Pembayaran */}
              <div className="card mt-8">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-bold text-green-800">
                    Riwayat Pembayaran
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {riwayat.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-green-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-green-800">
                              {item.jenis}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Periode: {item.periode}
                            </p>
                            <p className="text-xs text-gray-500">
                              Dibayar: {item.tanggalBayar} via {item.metode}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-800">
                            Rp {item.nominal.toLocaleString()}
                          </p>
                          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
                            Lunas
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info Pembayaran */}
              <div className="card p-6">
                <h3 className="font-semibold text-green-800 mb-4">
                  Informasi Pembayaran
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Iuran RT dikelola langsung oleh RT
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Iuran Padukuhan disetorkan ke Dukuh
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Pembayaran otomatis tercatat sistem
                    </span>
                  </div>
                </div>
              </div>

              {/* Kontak */}
              <div className="card p-6">
                <h3 className="font-semibold text-green-800 mb-4">
                  Butuh Bantuan?
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Ketua RT
                    </p>
                    <p className="text-green-800">Pak Slamet</p>
                    <p className="text-sm text-gray-600">081234567890</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Bendahara RT
                    </p>
                    <p className="text-green-800">Bu Sari</p>
                    <p className="text-sm text-gray-600">081234567891</p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="card p-6">
                <h3 className="font-semibold text-green-800 mb-4">
                  Tips Pembayaran
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Bayar sebelum tanggal jatuh tempo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Simpan bukti pembayaran digital</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1 h-1 bg-green-500 rounded-full mt-2"></div>
                    <span>Hubungi RT jika ada kendala</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        {selectedPayment && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-green-800">
                    Pembayaran
                  </h3>
                  <button
                    onClick={() => setSelectedPayment(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Payment Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-green-800 mb-2">
                    {selectedPayment.jenis}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">
                    Periode: {selectedPayment.periode}
                  </p>
                  <p className="text-2xl font-bold text-green-800">
                    Rp {selectedPayment.nominal.toLocaleString()}
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <h4 className="font-medium text-green-800 mb-4">
                    Pilih Metode Pembayaran
                  </h4>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      return (
                        <label
                          key={method.id}
                          className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                            paymentMethod === method.id
                              ? "border-green-500 bg-green-50"
                              : "border-gray-200 hover:border-green-300"
                          }`}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <Icon className="w-6 h-6 text-green-600 mr-3" />
                          <div className="flex-1">
                            <p className="font-medium text-green-800">
                              {method.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {method.description}
                            </p>
                          </div>
                          {paymentMethod === method.id && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedPayment(null)}
                    className="btn-secondary flex-1"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={loading || !paymentMethod}
                    className="btn-primary flex-1 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="spinner mr-2"></div>
                        Memproses...
                      </>
                    ) : (
                      <>
                        <Receipt className="w-4 h-4 mr-2" />
                        Bayar Sekarang
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default IuranPage;
