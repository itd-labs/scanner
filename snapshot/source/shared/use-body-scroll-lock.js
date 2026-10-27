import { symbol_079 as imported } from "../entry.js";
export function fn_30722b36() {
  imported(() => {
    const local = document.documentElement;
    const local_2 = local.style.overflow;
    local.style.overflow = "hidden";
    return () => {
      local.style.overflow = local_2;
    };
  }, []);
}
