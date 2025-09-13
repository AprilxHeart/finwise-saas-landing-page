export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
        <p className="text-gray-600 text-lg">กำลังโหลด...</p>
        <p className="text-gray-400 text-sm mt-2">Eifel Thailand</p>
      </div>
    </div>
  );
}
