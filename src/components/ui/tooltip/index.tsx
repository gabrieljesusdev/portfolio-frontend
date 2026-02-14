import { cn } from "@/lib/utils";
import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip";
import { ArrowUpIcon } from "lucide-react";
import { ClassNameValue } from "tailwind-merge";

type BaseProps = {
  children: React.ReactNode;
  className?: ClassNameValue;
};

const Component = ({ children }: Pick<BaseProps, "children">) => (
  <BaseTooltip.Provider>
    <div className="flex border border-gray-200 bg-gray-50 p-0.5">
      <BaseTooltip.Root>{children}</BaseTooltip.Root>
    </div>
  </BaseTooltip.Provider>
);

const triggerBaseClasses =
  "flex size-8 items-center justify-center text-gray-900 select-none hover:bg-gray-100 focus-visible:bg-none focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-200 data-[popup-open]:bg-gray-100 focus-visible:[&:not(:hover)]:bg-transparent";
const contentBaseClasses =
  "flex origin-[var(--transform-origin)] flex-col bg-[canvas] px-2 py-1 text-sm shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300";

const Trigger = ({ className, children }: BaseProps) => (
  <BaseTooltip.Trigger className={cn(triggerBaseClasses, className)}>
    {children}
  </BaseTooltip.Trigger>
);

const Content = ({ className, children }: BaseProps) => (
  <BaseTooltip.Portal>
    <BaseTooltip.Positioner>
      <BaseTooltip.Popup className={cn(contentBaseClasses, className)}>
        <BaseTooltip.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
          <ArrowUpIcon />
        </BaseTooltip.Arrow>
        {children}
      </BaseTooltip.Popup>
    </BaseTooltip.Positioner>
  </BaseTooltip.Portal>
);

const Tooltip = {
  Root: Component,
  Trigger: Trigger,
  Content: Content,
};

export default Tooltip;
