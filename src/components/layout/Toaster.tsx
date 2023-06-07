import { CheckCircle, XCircle } from "lucide-react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "~/components/ui/toast";
import { useToast } from "~/hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        color,
        ...props
      }) {
        return (
          <Toast key={id} {...props} className="mt-1">
            <div className="flex items-center gap-2">
              {color === "error" ? (
                <XCircle className="text-destructive" size={30} />
              ) : (
                <CheckCircle className="text-green-400" size={30} />
              )}
              <div>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
