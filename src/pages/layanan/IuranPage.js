"use client";

import { useState } from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { showToast } from "../../utils";
import {
  DollarSign,
  CheckCircle,
  CreditCard,
  Banknote,
  QrCode,
  Clock,
} from "lucide-react";
import { ThreeDots } from "react-loader-spinner";

const IuranPage = () => {
  const [activeTab, setActiveTab] = useState("tagihan"); // 'tagihan', 'riwayat'
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const activeBills = [
    {
      id: 1,
      type: "Iuran Kebersihan",
      period: "Juli 2024",
      amount: 25000,
      status: "Belum Lunas",
    },
    {
      id: 2,
      type: "Iuran Keamanan",
      period: "Juli 2024",
      amount: 20000,
      status: "Belum Lunas",
    },
    {
      id: 3,
      type: "Kas RT",
      period: "Juli 2024",
      amount: 10000,
      status: "Belum Lunas",
    },
  ];

  const paymentHistory = [
    {
      id: 101,
      type: "Iuran Kebersihan",
      period: "Juni 2024",
      amount: 25000,
      date: "20 Juni 2024",
      method: "QRIS",
    },
    {
      id: 102,
      type: "Iuran Keamanan",
      period: "Juni 2024",
      amount: 20000,
      date: "20 Juni 2024",
      method: "Transfer Bank",
    },
    {
      id: 103,
      type: "Kas RT",
      period: "Juni 2024",
      amount: 10000,
      date: "20 Juni 2024",
      method: "E-Wallet",
    },
  ];

  const handlePayClick = (bill) => {
    setSelectedBill(bill);
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async () => {
    if (!paymentMethod) {
      showToast("Pilih metode pembayaran terlebih dahulu.", "error");
      return;
    }

    setIsProcessingPayment(true);
    showToast(`Memproses pembayaran ${selectedBill.type}...`, "info");

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsProcessingPayment(false);
    setShowPaymentModal(false);
    showToast(`Pembayaran ${selectedBill.type} berhasil!`, "success");
    // In a real app, you would update the bill status in your state/backend
  };

  const totalActiveBills = activeBills.reduce(
    (sum, bill) => sum + bill.amount,
    0
  );
  const totalPaidThisMonth = paymentHistory
    .filter((item) => new Date(item.date).getMonth() === new Date().getMonth())
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
            Pembayaran Iuran Warga
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Kelola dan bayar iuran desa Anda dengan mudah dan aman.
          </p>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 flex flex-col items-center text-center bg-blue-50">
              <DollarSign className="h-12 w-12 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-blue-800 mb-1">
                Total Tagihan Aktif
              </h3>
              <p className="text-2xl font-bold text-blue-900">
                Rp {totalActiveBills.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center bg-green-50">
              <CheckCircle className="h-12 w-12 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold text-green-800 mb-1">
                Dibayar Bulan Ini
              </h3>
              <p className="text-2xl font-bold text-green-900">
                Rp {totalPaidThisMonth.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="card p-6 flex flex-col items-center text-center bg-yellow-50">
              <Clock className="h-12 w-12 text-yellow-600 mb-3" />
              <h3 className="text-xl font-semibold text-yellow-800 mb-1">
                Status Iuran
              </h3>
              <p className="text-2xl font-bold text-yellow-900">
                {activeBills.length > 0 ? "Ada Tagihan" : "Lunas"}
              </p>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="flex border-b border-gray-200">
              <button
                className={`py-3 px-6 text-lg font-medium ${
                  activeTab === "tagihan"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
                onClick={() => setActiveTab("tagihan")}
              >
                Tagihan Aktif
              </button>
              <button
                className={`py-3 px-6 text-lg font-medium ${
                  activeTab === "riwayat"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
                onClick={() => setActiveTab("riwayat")}
              >
                Riwayat Pembayaran
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="card p-6">
            {activeTab === "tagihan" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Daftar Tagihan Aktif
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis Iuran
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Periode
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jumlah (Rp)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {activeBills.map((bill) => (
                        <tr key={bill.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {bill.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {bill.period}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                            {bill.amount.toLocaleString("id-ID")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              {bill.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                            <button
                              onClick={() => handlePayClick(bill)}
                              className="btn-primary text-xs py-1 px-3"
                            >
                              Bayar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {activeBills.length === 0 && (
                  <p className="text-center text-gray-500 mt-4">
                    Tidak ada tagihan aktif.
                  </p>
                )}
              </div>
            )}

            {activeTab === "riwayat" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Riwayat Pembayaran
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jenis Iuran
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Periode
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Jumlah (Rp)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Tanggal Bayar
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Metode
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {paymentHistory.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {item.period}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-600">
                            {item.amount.toLocaleString("id-ID")}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {item.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {item.method}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {paymentHistory.length === 0 && (
                  <p className="text-center text-gray-500 mt-4">
                    Tidak ada riwayat pembayaran.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {/* Payment Modal */}
      {showPaymentModal && selectedBill && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Bayar {selectedBill.type}
            </h2>
            <p className="text-gray-700 mb-2">
              Periode:{" "}
              <span className="font-semibold">{selectedBill.period}</span>
            </p>
            <p className="text-gray-700 mb-6">
              Jumlah:{" "}
              <span className="text-green-600 font-bold text-xl">
                Rp {selectedBill.amount.toLocaleString("id-ID")}
              </span>
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih Metode Pembayaran
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg transition-all duration-200 ${
                    paymentMethod === "QRIS"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                  onClick={() => setPaymentMethod("QRIS")}
                >
                  <QrCode size={32} className="text-green-600 mb-2" />
                  <span className="text-sm font-medium text-gray-800">
                    QRIS
                  </span>
                </button>
                <button
                  type="button"
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg transition-all duration-200 ${
                    paymentMethod === "Transfer Bank"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                  onClick={() => setPaymentMethod("Transfer Bank")}
                >
                  <Banknote size={32} className="text-green-600 mb-2" />
                  <span className="text-sm font-medium text-gray-800">
                    Transfer Bank
                  </span>
                </button>
                <button
                  type="button"
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg transition-all duration-200 ${
                    paymentMethod === "E-Wallet"
                      ? "border-green-600 bg-green-50"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                  onClick={() => setPaymentMethod("E-Wallet")}
                >
                  <CreditCard size={32} className="text-green-600 mb-2" />
                  <span className="text-sm font-medium text-gray-800">
                    E-Wallet
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowPaymentModal(false)}
                className="btn-secondary"
                disabled={isProcessingPayment}
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handlePaymentSubmit}
                className="btn-primary flex items-center justify-center"
                disabled={isProcessingPayment || !paymentMethod}
              >
                {isProcessingPayment ? (
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
                  "Konfirmasi Pembayaran"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IuranPage;
