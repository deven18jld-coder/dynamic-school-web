import { FileText, Download, Bell, ExternalLink } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';

interface NoticeItemProps {
  title: string;
  category: string;
  date: string;
  isUrgent?: boolean;
  attachmentUrl?: string;
  description?: string;
  className?: string;
}

export default function NoticeItem({
  title,
  category,
  date,
  isUrgent = false,
  attachmentUrl,
  description,
  className,
}: NoticeItemProps) {
  return (
    <div
      className={cn(
        'group relative bg-white p-4 md:p-6 rounded-xl border-l-4 transition-all hover:bg-neutral-50',
        isUrgent ? 'border-l-danger bg-danger/5' : 'border-l-primary',
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span
              className={cn(
                'text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full',
                isUrgent ? 'bg-danger text-white' : 'bg-primary-light text-primary'
              )}
            >
              {category}
            </span>
            <time className="text-xs text-neutral-500 font-medium" dateTime={date}>
              {formatDate(date)}
            </time>
            {isUrgent && (
              <span className="flex items-center gap-1 text-[10px] text-danger font-bold uppercase animate-pulse">
                <Bell className="h-3 w-3" />
                Urgent
              </span>
            )}
          </div>

          <h3 className="text-base md:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          {description && (
            <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {attachmentUrl ? (
            <a
              href={attachmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg text-sm font-bold text-neutral-700 hover:border-primary hover:text-primary transition-all shadow-sm"
            >
              <Download className="h-4 w-4" />
              <span>PDF</span>
            </a>
          ) : (
            <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-lg text-sm font-bold text-neutral-400 cursor-not-allowed">
              <FileText className="h-4 w-4" />
              <span>View</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
