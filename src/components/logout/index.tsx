import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation'; // Importamos useRouter

const LogoutButton: React.FC = () => {
  const { setDataUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('userSession');

    // Eliminar cookies
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    setDataUser(null);
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="my-2 bg-pink-0 rounded-full border border-gray-600 text-black font-semibold px-3 py-1 hover:bg-red-600"
    >
      Logo ut
    </button>
  );
};

export default LogoutButton;
