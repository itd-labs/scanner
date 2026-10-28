import {
  symbol_029 as imported,
  symbol_081 as imported_2,
  symbol_017 as imported_3,
} from "../entry.js";
export function fn_59f80974(arg) {
  const local = imported((arg) => arg.profile?.isPhoneVerified);
  imported_2(() => {
    if (local) {
      window.location.href = "../site/index.html";
      return;
    }
    window.dispatchEvent(new Event(imported_3));
  }, [local]);
  return null;
}
