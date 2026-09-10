import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Share2 } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://bluetreemanausinfo.netlify.app/';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Blue Tree Premium Manaus - Informações & Links',
        text: 'Acesse o agregador oficial de informações e serviços do Blue Tree Premium Manaus.',
        url: currentUrl,
      }).catch(() => {});
    } else {
      handleCopy();
    }
  };

  const texts = {
    pt: {
      title: 'Compartilhar Hub de Links',
      subtitle: 'Acesse facilmente no celular ou compartilhe com outros hóspedes',
      copy: 'Copiar Link',
      copied: 'Link Copiado!',
      nativeShare: 'Compartilhar',
      qrHelp: 'Aponte a câmera do celular para abrir diretamente',
      close: 'Fechar',
    },
    en: {
      title: 'Share Link Hub',
      subtitle: 'Easy access on mobile or share with companions',
      copy: 'Copy Link',
      copied: 'Link Copied!',
      nativeShare: 'Share',
      qrHelp: 'Point your camera to open directly on your mobile',
      close: 'Close',
    },
    es: {
      title: 'Compartir Hub de Enlaces',
      subtitle: 'Acceso directo en el móvil o comparta con acompañantes',
      copy: 'Copiar Enlace',
      copied: '¡Enlace Copiado!',
      nativeShare: 'Compartir',
      qrHelp: 'Escanee con la cámara para abrir en su celular',
      close: 'Cerrar',
    },
  };

  const t = texts[currentLang];
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=ffffff&color=0c2662&margin=2`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="modal-share-content"
        className="relative w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-5 sm:p-6 text-center"
      >
        <button
          id="btn-close-share-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0c2662] border border-blue-100 flex items-center justify-center mx-auto mb-3">
          <QrCode className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-tight">
          {t.title}
        </h3>
        <p className="text-xs text-slate-500 mt-1 mb-4">{t.subtitle}</p>

        {/* QR Code Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 inline-block mb-4 shadow-xs">
          <img
            src={qrCodeUrl}
            alt="QR Code Blue Tree Manaus"
            className="w-40 h-40 mx-auto rounded-lg"
          />
          <p className="text-[11px] text-slate-500 mt-2 font-medium">{t.qrHelp}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            id="btn-copy-share-link"
            onClick={handleCopy}
            className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-bold">{t.copied}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{t.copy}</span>
              </>
            )}
          </button>

          <button
            id="btn-native-share"
            onClick={handleNativeShare}
            className="flex-1 py-2.5 px-3 bg-[#0c2662] hover:bg-blue-900 text-white font-semibold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>{t.nativeShare}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
