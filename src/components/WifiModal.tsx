import React, { useState } from 'react';
import { Wifi, X, Copy, Check, Info, Smartphone, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface WifiModalProps {
  isOpen: boolean;
  onClose: () => void;
  ssid: string;
  currentLang: Language;
}

export const WifiModal: React.FC<WifiModalProps> = ({
  isOpen,
  onClose,
  ssid,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);
  const [connectTriggered, setConnectTriggered] = useState(false);

  if (!isOpen) return null;

  const isIOS =
    typeof navigator !== 'undefined' &&
    (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

  const isAndroid =
    typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

  const handleCopySsid = () => {
    navigator.clipboard.writeText(ssid);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Direct connection generator for iOS and Android
  const handleDirectConnect = () => {
    setConnectTriggered(true);
    navigator.clipboard.writeText(ssid);

    if (isIOS) {
      // For iOS: Generate Apple Configuration Profile (.mobileconfig) for instant Wi-Fi join without password
      const mobileConfig = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>PayloadContent</key>
  <array>
    <dict>
      <key>AutoJoin</key>
      <true/>
      <key>EncryptionType</key>
      <string>None</string>
      <key>HIDDEN_NETWORK</key>
      <false/>
      <key>PayloadDescription</key>
      <string>Configuração de Wi-Fi Blue Tree Premium Manaus</string>
      <key>PayloadDisplayName</key>
      <string>Wi-Fi ${ssid}</string>
      <key>PayloadIdentifier</key>
      <string>com.bluetree.manaus.wifi</string>
      <key>PayloadType</key>
      <string>com.apple.wifi.managed</string>
      <key>PayloadUUID</key>
      <string>4B6E09D3-3D9B-4D2A-94B6-61D74E1815A1</string>
      <key>PayloadVersion</key>
      <integer>1</integer>
      <key>SSID_STR</key>
      <string>${ssid}</string>
    </dict>
  </array>
  <key>PayloadDisplayName</key>
  <string>Blue Tree Wi-Fi (${ssid})</string>
  <key>PayloadIdentifier</key>
  <string>com.bluetree.manaus.profile</string>
  <key>PayloadRemovalDisallowed</key>
  <false/>
  <key>PayloadType</key>
  <string>Configuration</string>
  <key>PayloadUUID</key>
  <string>E73A5E5B-0728-406C-B433-2898B68102FF</string>
  <key>PayloadVersion</key>
  <integer>1</integer>
</dict>
</plist>`;

      const blob = new Blob([mobileConfig], {
        type: 'application/x-apple-aspen-config;charset=utf-8',
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `bluetree-wifi.mobileconfig`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else if (isAndroid) {
      // For Android: Attempt native Wi-Fi settings intent
      try {
        window.location.href = 'intent:#Intent;action=android.settings.WIFI_SETTINGS;end';
      } catch {
        window.location.href = `WIFI:S:${ssid};T:nopass;;`;
      }
    } else {
      // Standard Wi-Fi URI trigger
      window.location.href = `WIFI:S:${ssid};T:nopass;;`;
    }
  };

  const texts = {
    pt: {
      title: 'Wi-Fi Blue Tree Premium',
      subtitle: 'Conexão cortesia para hóspedes e visitantes',
      directConnectBtn: isIOS
        ? 'Conectar Wi-Fi no iPhone / iPad'
        : isAndroid
        ? 'Conectar Wi-Fi no Android'
        : 'Conectar à Rede bluetree',
      directSubtext: isIOS
        ? 'Baixa o perfil seguro para conectar com 1 clique'
        : isAndroid
        ? 'Abre os ajustes de Wi-Fi e seleciona a rede'
        : 'Clique para conectar ou aponte a câmera',
      networkLabel: 'Nome da Rede (SSID)',
      copyNetwork: 'Copiar Nome',
      copied: 'Nome Copiado!',
      qrLabel: 'Ou aponte a câmera do celular para conectar:',
      noPasswordNotice: 'Rede sem senha • Login automático',
      instructions:
        'A rede "bluetree" não requer senha. Ao conectar, seu aparelho abrirá diretamente a página de login do hotel para confirmar o acesso.',
      close: 'Fechar',
    },
    en: {
      title: 'Blue Tree Premium Wi-Fi',
      subtitle: 'Complimentary high-speed connection',
      directConnectBtn: isIOS
        ? 'Connect Wi-Fi on iPhone / iPad'
        : isAndroid
        ? 'Connect Wi-Fi on Android'
        : 'Connect to bluetree Network',
      directSubtext: isIOS
        ? 'Downloads verified profile to connect in 1 click'
        : isAndroid
        ? 'Opens Wi-Fi settings directly'
        : 'Tap to connect or scan QR code',
      networkLabel: 'Network Name (SSID)',
      copyNetwork: 'Copy Name',
      copied: 'Copied!',
      qrLabel: 'Or scan with your phone camera:',
      noPasswordNotice: 'Open network • Automatic login portal',
      instructions:
        'The "bluetree" network does not require a password. Upon connection, your device will automatically open the captive portal to validate access.',
      close: 'Close',
    },
    es: {
      title: 'Wi-Fi Blue Tree Premium',
      subtitle: 'Conexión de cortesía de alta velocidad',
      directConnectBtn: isIOS
        ? 'Conectar Wi-Fi en iPhone / iPad'
        : isAndroid
        ? 'Conectar Wi-Fi en Android'
        : 'Conectar a la Red bluetree',
      directSubtext: isIOS
        ? 'Descarga perfil seguro para conectar en 1 clic'
        : isAndroid
        ? 'Abre los ajustes de Wi-Fi'
        : 'Haga clic para conectar',
      networkLabel: 'Nombre de la Red (SSID)',
      copyNetwork: 'Copiar Nombre',
      copied: '¡Copiado!',
      qrLabel: 'O escanee con la cámara de su móvil:',
      noPasswordNotice: 'Red abierta • Portal de acceso automático',
      instructions:
        'La red "bluetree" no requiere contraseña. Al conectarse, su dispositivo abrirá la pantalla de bienvenida para validar su acceso.',
      close: 'Cerrar',
    },
  };

  const t = texts[currentLang];
  const wifiQrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    `WIFI:S:${ssid};T:nopass;;`
  )}&bgcolor=ffffff&color=0c2662&margin=2`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        id="modal-wifi-content"
        className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden p-5 sm:p-6"
      >
        {/* Close Button */}
        <button
          id="btn-close-wifi-modal"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0c2662] border border-blue-100 flex items-center justify-center shrink-0 shadow-xs">
            <Wifi className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight">
              {t.title}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">{t.subtitle}</p>
          </div>
        </div>

        {/* Direct Connect Action Button (iOS & Android Responsive) */}
        <div className="mb-4">
          <button
            id="btn-direct-connect-wifi"
            type="button"
            onClick={handleDirectConnect}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-900 via-[#0c2662] to-blue-800 hover:from-blue-950 hover:to-blue-900 text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Smartphone className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-left">
              <div className="leading-tight">{t.directConnectBtn}</div>
              <div className="text-[11px] font-normal text-blue-200">
                {t.directSubtext}
              </div>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-blue-200 shrink-0" />
          </button>

          {connectTriggered && (
            <p className="text-[11px] text-emerald-700 font-semibold mt-1.5 text-center flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              {isIOS
                ? 'Perfil pronto! Abra "Ajustes" no seu iPhone para confirmar a conexão.'
                : 'Conexão acionada! O nome da rede foi copiado.'}
            </p>
          )}
        </div>

        {/* Network Box with Copy */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {t.networkLabel}
              </span>
              <span className="text-xl font-extrabold text-[#0c2662] tracking-wide">
                {ssid}
              </span>
            </div>

            <button
              id="btn-copy-wifi-ssid"
              onClick={handleCopySsid}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0c2662] hover:border-blue-300 shadow-xs transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>{t.copyNetwork}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick QR Code for Immediate Camera Connect */}
        <div className="text-center p-3 bg-slate-50/70 border border-slate-200 rounded-2xl mb-4">
          <p className="text-[11px] font-semibold text-slate-600 mb-2">
            {t.qrLabel}
          </p>
          <div className="inline-block p-2 bg-white rounded-xl border border-slate-200 shadow-xs">
            <img
              src={wifiQrCodeUrl}
              alt="QR Code Wi-Fi bluetree"
              className="w-32 h-32 mx-auto"
            />
          </div>
        </div>

        {/* Notice */}
        <div className="bg-blue-50/60 border border-blue-100/80 rounded-xl p-3 text-xs text-slate-600 flex items-start gap-2 mb-4">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div className="leading-tight">
            <span className="font-bold text-[#0c2662] block mb-0.5">
              {t.noPasswordNotice}
            </span>
            <span>{t.instructions}</span>
          </div>
        </div>

        <button
          id="btn-close-wifi-action"
          type="button"
          onClick={onClose}
          className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all cursor-pointer"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
};
