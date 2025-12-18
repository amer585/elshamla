import React from 'react';
import { X, Smartphone, Monitor, Share, MoreVertical } from 'lucide-react';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-800">

        <button onClick={onClose} className="absolute top-4 left-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 transition-colors">
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 mb-2">
            تثبيت التطبيق
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            اختر جهازك لمعرفة كيفية التثبيت
          </p>

          <div className="space-y-4 text-right">

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-start gap-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Android (Chrome)</h4>
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  اضغط على القائمة <MoreVertical className="w-3 h-3 inline" /> ثم اختر
                  <span className="font-bold text-emerald-600 mx-1">الإضافة إلى الشاشة الرئيسية</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-start gap-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">iPhone (Safari)</h4>
                <p className="text-sm text-slate-500 flex items-center gap-1">
                  اضغط على مشاركة <Share className="w-3 h-3 inline" /> ثم اختر
                  <span className="font-bold text-blue-600 mx-1">Add to Home Screen</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl flex items-start gap-4">
              <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-lg text-slate-600">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Computer</h4>
                <p className="text-sm text-slate-500">
                  اضغط على أيقونة التثبيت <span className="border p-0.5 rounded text-xs border-current">⬇</span> الموجودة في شريط العنوان بالأعلى
                </p>
              </div>
            </div>

          </div>

          <button onClick={onClose} className="mt-6 w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors">
            حسناً، فهمت
          </button>
        </div>
      </div>
    </div>
  );
};