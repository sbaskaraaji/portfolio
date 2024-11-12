import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-whites/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-whites/60 outline-none autofill:bg-primary autofill:hover:bg-primary text-whites",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
