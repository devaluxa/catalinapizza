import { orderConfig } from "../lib/site";

export default function OrderButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`order-button ${className}`.trim()}
      data-glf-cuid={orderConfig.companyId}
      data-glf-ruid={orderConfig.restaurantId}
      type="button"
    >
      {children}
    </button>
  );
}
